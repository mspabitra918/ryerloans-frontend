"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  api,
  ApiError,
  type BorrowerDocument,
  type DocumentRequestView,
} from "@/src/lib/api";
import ActionShell, {
  ActionError,
} from "@/src/components/borrower-action/ActionShell";

/**
 * §8.4 "Request Documents", from the borrower's end of the link.
 *
 * The page is organised around the checklist an admin actually sent rather
 * than around a generic file picker. Someone reading "we need your most recent
 * paystub" in an email should land on a row that says the same words, because
 * the common failure here is not a technical one — it is uploading four photos
 * of a driving licence and none of the bank statement.
 *
 * A file is sent the moment it is picked, and it is on the underwriter's
 * screen from that moment. There is no submit step to forget and nothing held
 * in the browser for a tab refresh to lose.
 */
export default function DocumentUploadClient({ token }: { token: string }) {
  const [view, setView] = useState<DocumentRequestView | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busyType, setBusyType] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setView(await api.documentRequest(token));
    } catch (err) {
      setLoadError(
        err instanceof ApiError
          ? err.message
          : "We could not open that link. Please try again.",
      );
    }
  }, [token]);

  useEffect(() => {
    void load();
  }, [load]);

  /**
   * Uploads run one at a time on purpose. A borrower on a phone picking five
   * photos would otherwise open five parallel requests over the same mobile
   * connection, and the per-minute rate limit exists precisely so that a
   * retry storm cannot be mistaken for an attack.
   */
  async function addFiles(docType: string, picked: FileList | null) {
    if (!picked?.length || !view) return;

    setError(null);
    setBusyType(docType);

    const added: BorrowerDocument[] = [];

    try {
      for (const file of Array.from(picked)) {
        const rejection = checkLocally(file, view);

        if (rejection) {
          setError(rejection);
          break;
        }

        added.push(await api.uploadDocument(token, docType, file));
      }
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : "That upload did not go through. Please try again.",
      );
    } finally {
      // Whatever did land is kept, even if a later file in the batch failed.
      if (added.length) {
        setView((current) =>
          current
            ? { ...current, documents: [...current.documents, ...added] }
            : current,
        );
      }

      setBusyType(null);
    }
  }

  /* ------------------------------------------------------------- rendering */

  if (loadError) return <ActionError message={loadError} />;

  if (!view) {
    return (
      <ActionShell title="Upload your documents" showFeeNotice={false}>
        <p className="text-slate-500">Opening your secure link…</p>
      </ActionShell>
    );
  }

  const outstanding = view.doc_types.filter(
    (type) => !view.documents.some((d) => d.doc_type === type.value),
  );

  return (
    <ActionShell
      title={`Upload your documents, ${view.first_name}`}
      intro={`We need a few files to finish reviewing application #${view.reference}. Add each one below — you can take a photo with your phone or attach a PDF. Every file goes straight to our team as soon as you pick it.`}
    >
      {view.note ? (
        <p className="mb-6 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
          {view.note}
        </p>
      ) : null}

      <ul className="space-y-4">
        {view.doc_types.map((type) => (
          <ChecklistRow
            key={type.value}
            label={type.label}
            accept={view.accepted_mime_types.join(",")}
            busy={busyType === type.value}
            disabled={Boolean(busyType)}
            files={view.documents.filter((d) => d.doc_type === type.value)}
            onPick={(files) => void addFiles(type.value, files)}
          />
        ))}
      </ul>

      <p className="mt-6 text-sm text-slate-500">{describeLimits(view)}</p>

      {error ? (
        <p
          role="alert"
          className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {error}
        </p>
      ) : null}

      {outstanding.length > 0 ? (
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Still needed: {outstanding.map((t) => t.label).join(", ")}. The review
          will not move forward until we have everything on this list.
        </p>
      ) : (
        <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          That is everything we asked for — thank you. We will email you as soon
          as the review moves forward. You can close this page.
        </p>
      )}

      <p className="mt-4 text-center text-xs text-slate-500">
        Uploaded the wrong file? Add the right one and call us — we will make
        sure the reviewer looks at the correct document.
      </p>
    </ActionShell>
  );
}

/* ---------------------------------------------------------------- pieces */

function ChecklistRow({
  label,
  accept,
  busy,
  disabled,
  files,
  onPick,
}: {
  label: string;
  accept: string;
  busy: boolean;
  disabled: boolean;
  files: BorrowerDocument[];
  onPick: (files: FileList | null) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <li className="rounded-xl border border-slate-200 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${
              files.length ? "bg-emerald-500" : "bg-slate-300"
            }`}
          />
          <span className="font-medium text-slate-900">{label}</span>
        </div>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={disabled}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy ? "Uploading…" : files.length ? "Add another" : "Add file"}
        </button>

        <input
          ref={inputRef}
          type="file"
          multiple
          accept={accept}
          className="sr-only"
          onChange={(event) => {
            onPick(event.target.files);
            // Reset so picking the same file twice still fires a change.
            event.target.value = "";
          }}
        />
      </div>

      {files.length > 0 ? (
        <ul className="mt-3 space-y-1.5 border-t border-slate-100 pt-3">
          {files.map((file) => (
            <li
              key={file.id}
              className="flex items-center gap-2 text-sm text-slate-700"
            >
              <span aria-hidden className="text-emerald-600">
                ✓
              </span>
              <span className="min-w-0 truncate">
                {file.original_filename}
              </span>
              <span className="ml-auto shrink-0 text-xs text-slate-500">
                {formatBytes(file.size_bytes)} · sent
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

/* --------------------------------------------------------------- helpers */

/**
 * The checks the browser can make before spending a borrower's mobile data on
 * an upload the server is going to refuse.
 *
 * Deliberately lenient about a missing `type`: some phones report an empty
 * string for HEIC photos, and refusing those here would block the single most
 * common way an ID gets sent. The server sniffs the actual bytes and is the
 * decision that counts.
 */
function checkLocally(file: File, view: DocumentRequestView): string | null {
  if (file.size === 0) {
    return `"${file.name}" is empty. Please pick the file again.`;
  }

  if (file.size > view.max_bytes) {
    return `"${file.name}" is ${formatBytes(file.size)} — the limit is ${formatBytes(
      view.max_bytes,
    )}. Try a photo at a lower resolution, or split a long PDF.`;
  }

  if (file.type && !view.accepted_mime_types.includes(file.type)) {
    return `"${file.name}" is not a file type we can accept. Please upload a PDF or a photo.`;
  }

  return null;
}

function describeLimits(view: DocumentRequestView): string {
  const kinds = view.accepted_mime_types
    .map((mime) => mime.split("/")[1]?.toUpperCase())
    .filter((kind, index, all) => kind && all.indexOf(kind) === index)
    .join(", ");

  return `Accepted: ${kinds}. Up to ${formatBytes(view.max_bytes)} per file.`;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
