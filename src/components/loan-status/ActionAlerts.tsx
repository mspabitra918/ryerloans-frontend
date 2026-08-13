import {
  AlertTriangle,
  Building2,
  CheckCircle2,
  DollarSign,
  ExternalLink,
  PhoneCall,
  XCircle,
} from "lucide-react";
import { ApplicationData } from "@/src/lib/types/loanStatus";
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
                shared with Ryer Loans.
              </p>
            </div>
          </div>
          <div className="pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition"
            >
              <span>Complete Bank Verification</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
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
          <div className="pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition"
            >
              <span>Confirm Deposit Amounts</span>
            </button>
          </div>
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
            ending in ••{data.accountEnding} on {data.fundedDate}. Your first
            payment is due <strong>{data.firstPaymentDue}</strong>.
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
