"use client";

import { useCallback, useEffect, useState } from "react";
import { usePlaidLink } from "react-plaid-link";

import { api, ApiError } from "@/src/lib/api";
import ActionShell, {
  ActionDone,
  ActionError,
} from "@/src/components/borrower-action/ActionShell";

type Phase = "loading" | "ready" | "exchanging" | "done" | "error";

/**
 * §6.1 `[Plaid success — auto]`, browser half.
 *
 * Two calls to our API bracket the Plaid Link session: mint a link_token to
 * open Link, then hand the public_token back so the server can exchange it and
 * advance the file. The borrower's one-time link authenticates both; only the
 * second one spends it.
 */
export default function BankVerificationClient({ token }: { token: string }) {
  const [phase, setPhase] = useState<Phase>("loading");
  const [linkToken, setLinkToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | undefined>();

  useEffect(() => {
    let cancelled = false;

    api
      .createPlaidLinkToken(token)
      .then((result) => {
        if (cancelled) return;
        setLinkToken(result.link_token);
        setPhase("ready");
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(messageOf(err));
        setPhase("error");
      });

    // The link_token is short-lived, so this runs once per mount and the
    // borrower reloads if they leave the page open past its expiry.
    return () => {
      cancelled = true;
    };
  }, [token]);

  const onSuccess = useCallback(
    (publicToken: string | null) => {
      /*
       * Link types this nullable for the flows that do not produce one (Plaid
       * Transfer UI, for instance). Ours always should — if it does not, the
       * exchange would fail server-side anyway, so say so here.
       */
      if (!publicToken) {
        setError("Your bank did not return a confirmation. Please try again.");
        setPhase("error");
        return;
      }

      setPhase("exchanging");

      api
        .exchangePlaidPublicToken(token, publicToken)
        .then((result) => {
          setReference(result.reference);
          setPhase("done");
        })
        .catch((err: unknown) => {
          setError(messageOf(err));
          setPhase("error");
        });
    },
    [token],
  );

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess,
    /*
     * Link closing without a public_token is the borrower backing out, not a
     * failure — they keep their link and can start again. Only a real Plaid
     * error is worth showing as one.
     */
    onExit: (err) => {
      if (err) setError(err.display_message ?? err.error_message ?? null);
    },
  });

  if (phase === "done") {
    return (
      <ActionDone
        title="Bank account verified"
        message="Thanks — your bank account is verified and your application has moved to the next step. We will email you when there is an update."
        reference={reference}
      />
    );
  }

  if (phase === "error" && !linkToken) {
    return <ActionError message={error ?? "We could not open bank verification."} />;
  }

  return (
    <ActionShell
      title="Verify your bank account"
      intro="Connect the account you want your funds sent to. Your bank credentials go straight to Plaid — we never see them, and we never store them."
    >
      {error ? (
        <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      ) : null}

      <button
        type="button"
        onClick={() => open()}
        disabled={!ready || phase === "exchanging" || phase === "loading"}
        className="w-full rounded-lg bg-blue-700 px-5 py-3.5 text-white font-medium hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {phase === "loading"
          ? "Preparing secure connection…"
          : phase === "exchanging"
            ? "Confirming your account…"
            : "Connect my bank account"}
      </button>

      <ul className="mt-6 space-y-2 text-sm text-slate-600">
        <li>• Takes about a minute.</li>
        <li>• Read-only access — we cannot move money out of your account.</li>
        <li>• You can disconnect at any time after your loan is closed.</li>
      </ul>
    </ActionShell>
  );
}

function messageOf(err: unknown): string {
  if (err instanceof ApiError) return err.message;
  return "Something went wrong. Please try again, or call us if it keeps happening.";
}
