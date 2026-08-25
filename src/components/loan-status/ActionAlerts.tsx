"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CheckCircle2,
  DollarSign,
  Loader2,
  PhoneCall,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ApplicationData } from "@/src/lib/types/loanStatus";
import { api, ApiError, SelfServicePurpose } from "@/src/lib/api";
import { RATE_CONFIG } from "@/src/lib/config";

export default function ActionAlerts({ data }: { data: ApplicationData }) {
  const rawPhone = RATE_CONFIG.phone.replace(/[^0-9+]/g, "");

  return (
    <div className="space-y-4">
      {/* Phone Call Needed */}
      {!data.hasCalledIn && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-bold text-amber-950 text-lg">
                Action needed: call us to continue
              </h3>
              <p className="text-sm text-amber-900 leading-relaxed">
                Your application is <strong>on hold</strong> until we verify
                your details by phone. Call{" "}
                <span className="font-semibold">{RATE_CONFIG.phone}</span> and
                have Application ID{" "}
                <span className="font-mono font-semibold">#{data.id}</span>{" "}
                ready.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-amber-200">
            <a
              href={`tel:${rawPhone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call {RATE_CONFIG.phone}</span>
            </a>
            <span className="text-xs text-amber-800 font-medium">
              Monday–Friday 8 AM–6 PM PT · Saturday 9 AM–2 PM PT
            </span>
          </div>
        </div>
      )}

      {/* Bank Verification */}
      {data.bankStatus === "pending" ? (
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 shadow-sm space-y-3">
          <div className="flex items-start gap-3">
            <Building2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-bold text-sky-950 text-lg">
                Action needed: verify your bank account
              </h3>
              <p className="text-sm text-sky-900 leading-relaxed">
                This secure, read-only connection confirms your account details.
                It takes about two minutes and your banking password is never
                shared with {RATE_CONFIG.name}.
              </p>
            </div>
          </div>

          <ActionLinkButton
            data={data}
            purpose="bank_verification"
            label="Complete Bank Verification"
            pendingLabel="Opening secure connection…"
            fallbackHref={data.bankVerificationUrl ?? "/bank-verification"}
            tone="sky"
          />
        </div>
      ) : (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex items-center gap-3 text-emerald-950 text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <span>
            <strong>Bank account verified</strong> on {data.bankCompletedDate}.
            Nothing further needed on this step.
          </span>
        </div>
      )}

      {/* Micro Deposit Confirmation */}
      {data.depositStatus === "sent" && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 shadow-sm space-y-3">
          <div className="flex items-start gap-3">
            <DollarSign className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-bold text-indigo-950 text-lg">
                Confirm your deposit amounts
              </h3>
              <p className="text-sm text-indigo-900 leading-relaxed">
                We have sent one or two small deposits to your account — usually
                under a dollar, arriving within 1–2 business days. Check your
                account and enter the exact amounts to confirm.
              </p>
            </div>
          </div>

          <ActionLinkButton
            data={data}
            purpose="deposit_confirmation"
            label="Confirm Deposit Amounts"
            pendingLabel="Opening the form…"
            fallbackHref="/confirm-deposit"
            tone="indigo"
          />
        </div>
      )}

      {/* Funded State */}
      {data.fundingStatus === "funded" && (
        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-6 shadow-sm space-y-2 text-emerald-950">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
            <h3 className="font-bold text-xl">Your loan has been funded</h3>
          </div>
          <p className="text-sm leading-relaxed pl-9">
            ${data.amountRequested.toLocaleString()} was sent to your account
            ending in ••{data.accountEnding} on {data.fundedDate}.
            {/*
              The public status endpoint does not return a first-payment date,
              so this is conditional: the mock data always had one, and printing
              "due undefined" to a funded borrower is worse than saying nothing.
            */}
            {data.firstPaymentDue ? (
              <>
                {" "}
                Your first payment is due{" "}
                <strong>{data.firstPaymentDue}</strong>.
              </>
            ) : (
              " Your payment schedule is in your signed agreement."
            )}
          </p>
        </div>
      )}

      {/* Declined State */}
      {data.fundingStatus === "declined" && (
        <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 shadow-sm space-y-2 text-rose-950">
          <div className="flex items-center gap-3">
            <XCircle className="w-6 h-6 text-rose-600 flex-shrink-0" />
            <h3 className="font-bold text-xl">Application Not Approved</h3>
          </div>
          <p className="text-sm leading-relaxed pl-9">
            A notice explaining the specific reasons was sent to your email on{" "}
            {data.declinedDate}. You may submit a new application on or after{" "}
            <strong>{data.reapplyDate}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}

const TONES = {
  sky: {
    button: "bg-sky-600 hover:bg-sky-700",
    note: "text-sky-800",
  },
  indigo: {
    button: "bg-indigo-600 hover:bg-indigo-700",
    note: "text-indigo-800",
  },
} as const;

/**
 * The button that actually opens a borrower step.
 *
 * It used to be a link to an explainer page that told the borrower to go and
 * find an email, because the tracker knows *that* they still have to verify but
 * holds no one-time link of its own. Now it asks the API for one: the
 * Application ID and email the borrower already typed are what authorise it,
 * and the server re-checks that the file is really on this step before minting
 * anything.
 *
 * The fallback matters as much as the happy path. If the request fails — the
 * step moved on, the throttle tripped, the network dropped — the borrower gets
 * the reason plus the old explainer route, rather than a button that silently
 * does nothing.
 */
function ActionLinkButton({
  data,
  purpose,
  label,
  pendingLabel,
  fallbackHref,
  tone,
}: {
  data: ApplicationData;
  purpose: SelfServicePurpose;
  label: string;
  pendingLabel: string;
  fallbackHref: string;
  tone: keyof typeof TONES;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const styles = TONES[tone];

  async function open() {
    if (busy) return;

    setBusy(true);
    setError(null);

    try {
      const link = await api.requestActionLink(data.id, data.email, purpose);

      /*
       * Left busy on purpose. The navigation is what ends this component's
       * life, and re-enabling the button first gives a borrower on a slow
       * connection a second click that mints a second link — which supersedes
       * the first and breaks the page they are about to land on.
       */
      router.push(link.path);
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : "We could not open that just now. Please try again shortly.",
      );
      setBusy(false);
    }
  }

  return (
    <div className="pt-2 space-y-3">
      <button
        type="button"
        onClick={open}
        disabled={busy}
        className={`inline-flex items-center gap-2 ${styles.button} text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition disabled:cursor-not-allowed disabled:opacity-70`}
      >
        <span>{busy ? pendingLabel : label}</span>
        {busy ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <ArrowRight className="w-4 h-4" />
        )}
      </button>

      {error ? (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {error}{" "}
          <Link href={fallbackHref} className="font-semibold underline">
            Other ways to finish this step
          </Link>
          .
        </p>
      ) : (
        <p className={`text-xs ${styles.note}`}>
          Opens securely for Application ID #{data.id}. This replaces any older
          link we emailed you.
        </p>
      )}
    </div>
  );
}
