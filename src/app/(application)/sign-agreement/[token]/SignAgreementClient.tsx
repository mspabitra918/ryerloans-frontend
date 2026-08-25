"use client";

import { useState } from "react";

import { api, ApiError } from "@/src/lib/api";
import ActionShell, { ActionDone } from "@/src/components/borrower-action/ActionShell";
import { RATE_CONFIG } from "@/src/lib/config";

/**
 * §6.1 `[borrower e-signs]`.
 *
 * E-SIGN requires an act the signer intends as their signature, plus their
 * consent to sign electronically — a submit button alone is neither. So this
 * captures a typed name and an explicit, unticked consent box, and the typed
 * name is what the server records against the audit row.
 */
export default function SignAgreementClient({ token }: { token: string }) {
  const [fullName, setFullName] = useState("");
  const [consented, setConsented] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | undefined>();
  const [done, setDone] = useState(false);

  const canSubmit = fullName.trim().length >= 2 && consented && !busy;

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!canSubmit) return;

    setBusy(true);
    setError(null);

    try {
      const result = await api.signAgreement(token, fullName.trim());
      setReference(result.reference);
      setDone(true);
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : "We could not record your signature. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <ActionDone
        title="Agreement signed"
        message="Thank you — your signed loan agreement is on file. We will email you when the next step is ready."
        reference={reference}
      />
    );
  }

  return (
    <ActionShell
      title="Sign your loan agreement"
      intro="Read your agreement in full before signing. It sets out your APR, term, payment schedule, fees and your right to cancel."
    >
      <form onSubmit={submit} className="space-y-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
          <p className="font-medium text-slate-900">Before you sign</p>
          <ul className="mt-2 space-y-1.5">
            <li>• Your APR is fixed at {RATE_CONFIG.apr.toFixed(2)}%.</li>
            <li>
              • You are not charged anything to sign, and nothing is due before
              your loan is funded.
            </li>
            <li>
              • You may withdraw your application at any time before funding.
            </li>
          </ul>
        </div>

        <div>
          <label
            htmlFor="full_name"
            className="block text-sm font-medium text-slate-800"
          >
            Type your full legal name to sign
          </label>

          <input
            id="full_name"
            name="full_name"
            type="text"
            autoComplete="name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="As it appears on your application"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />

          <p className="mt-2 text-xs text-slate-500">
            Typing your name here is your electronic signature and has the same
            legal effect as signing on paper.
          </p>
        </div>

        {/*
          Never pre-checked — the §4 consent rules apply here as much as at
          intake, and a pre-ticked E-SIGN box is not consent.
        */}
        <label className="flex items-start gap-3 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={consented}
            onChange={(event) => setConsented(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-300"
          />
          <span>
            I have read the loan agreement, I agree to sign it electronically,
            and I understand I can request a paper copy at no charge.
          </span>
        </label>

        {error ? (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full rounded-lg bg-blue-700 px-5 py-3.5 font-medium text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {busy ? "Recording your signature…" : "Sign my agreement"}
        </button>
      </form>
    </ActionShell>
  );
}
