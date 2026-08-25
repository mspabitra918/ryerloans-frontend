"use client";

import { useState } from "react";

import { api, ApiError } from "@/src/lib/api";
import ActionShell, { ActionDone } from "@/src/components/borrower-action/ActionShell";

/**
 * §6.1 `[borrower confirms amounts]`.
 *
 * The borrower reads two small deposits off their own statement and types them
 * back. That only works if they can see the account, which is the whole proof.
 *
 * Amounts are handled in whole cents end to end — the server compares them for
 * exact equality, and a dollars-as-float round trip is how a borrower who typed
 * the right thing gets told they are wrong.
 */
export default function ConfirmDepositClient({ token }: { token: string }) {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | undefined>();
  const [done, setDone] = useState(false);

  const cents1 = parseCents(first);
  const cents2 = parseCents(second);
  const canSubmit = cents1 !== null && cents2 !== null && !busy;

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!canSubmit || cents1 === null || cents2 === null) return;

    setBusy(true);
    setError(null);

    try {
      const result = await api.confirmDeposit(token, cents1, cents2);
      setReference(result.reference);
      setDone(true);
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : "We could not check those amounts. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <ActionDone
        title="Deposits confirmed"
        message="Thank you — that matches. Your application has moved to underwriting and we will email you as soon as there is a decision."
        reference={reference}
      />
    );
  }

  return (
    <ActionShell
      title="Confirm your verification deposits"
      intro="We sent two small deposits to your verified account. Find them on your statement and enter both amounts below. They usually arrive within 1–3 business days."
    >
      <form onSubmit={submit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <CentsInput
            id="amount_1"
            label="First deposit"
            value={first}
            onChange={setFirst}
          />
          <CentsInput
            id="amount_2"
            label="Second deposit"
            value={second}
            onChange={setSecond}
          />
        </div>

        <p className="text-sm text-slate-500">
          Enter them in either order — we check both against what we sent.
        </p>

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
          {busy ? "Checking…" : "Confirm my amounts"}
        </button>
      </form>
    </ActionShell>
  );
}

function CentsInput({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (next: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-800">
        {label}
      </label>

      <div className="relative mt-2">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
          $0.
        </span>

        <input
          id={id}
          name={id}
          // Numeric keypad on phones without the spinner and scroll-wheel
          // hazards of type="number".
          type="text"
          inputMode="numeric"
          autoComplete="off"
          maxLength={2}
          value={value}
          onChange={(event) =>
            onChange(event.target.value.replace(/\D/g, "").slice(0, 2))
          }
          placeholder="00"
          className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>
    </div>
  );
}

/**
 * "7" and "07" are both seven cents; anything outside 1–99 is not a
 * micro-deposit and the server would reject it anyway.
 */
function parseCents(raw: string): number | null {
  if (!/^\d{1,2}$/.test(raw)) return null;

  const cents = Number(raw);

  return cents >= 1 && cents <= 99 ? cents : null;
}
