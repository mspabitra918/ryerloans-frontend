import { RATE_CONFIG } from "@/src/lib/config";
import Link from "next/link";

export default function ContactBeforeYouCall() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Before You Call
        </h2>

        <div className="space-y-4 text-sm">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <h3 className="text-slate-900 font-bold text-base">
              Checking your status?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              The{" "}
              <Link
                href="/loan-status"
                className="text-sky-600 font-medium underline hover:text-sky-700"
              >
                [Loan Status]
              </Link>{" "}
              page shows your current stage instantly with your Application ID
              and email address. No hold time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <h3 className="text-slate-900 font-bold text-base">
              Just applied?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Call{" "}
              <span className="text-slate-900 font-bold">
                {RATE_CONFIG.phone}
              </span>{" "}
              to move your application forward. This step is required —
              applications stay on hold until we speak with you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <h3 className="text-slate-900 font-bold text-base">
              Need to correct something you entered?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Call us. We can fix a mistyped digit, a wrong email, or an
              incorrect employer directly in your file. Errors happen,
              particularly on a phone screen, and correcting one takes about a
              minute.
            </p>
          </div>

          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-200 space-y-1">
            <h3 className="text-rose-900 font-bold text-base">
              Think someone is impersonating Ryer Loans?
            </h3>
            <p className="text-rose-800 leading-relaxed">
              Call <span className="font-bold">{RATE_CONFIG.phone}</span>{" "}
              immediately. We never request payment before funding and never ask
              for your online banking password.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
