import Link from "next/link";
import { ShieldAlert, Lock, ShieldCheck, DollarSign } from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

export default function WhatWeNeverDo() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-[#F8F6F0] border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3 text-center sm:text-left max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100/80 px-3 py-1 rounded-full inline-block">
            Our Anti-Scam Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 tracking-tight">
            What We Never Do
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We are direct about this because loan scams are common and they hurt
            people who are already stretched thin.
          </p>
        </div>

        {/* Protection Cards */}
        <div className="grid grid-cols-1 gap-4">
          {/* Card 1: Upfront Money Alert (High Priority) */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-rose-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 bg-rose-50 rounded-xl text-rose-600 shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-rose-900">
                  We never ask for money before funding.
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  No application fee, no insurance payment, no “good faith
                  deposit,” no processing charge. Not by wire, not by gift card,
                  not by cash app, not by any method. If anyone contacts you
                  claiming to be Ryer Loans and asks you to send funds first, it
                  is a scam — hang up and call us at{" "}
                  <a
                    href={`tel:${RATE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
                    className="font-bold text-slate-900 underline hover:text-sky-700"
                  >
                    {RATE_CONFIG.phone}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Passwords */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 bg-sky-50 rounded-xl text-sky-600 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">
                  We never ask for your online banking password.
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Verification runs securely through Plaid, completely inside
                  Plaid’s own encrypted portal.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Privacy */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 bg-sky-50 rounded-xl text-sky-600 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">
                  We never sell your personal information to third parties.
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Your data stays strictly with us for underwriting and
                  servicing. Read full details in our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-sky-700 font-semibold underline hover:text-sky-800"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Prepayment Penalty */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 bg-sky-50 rounded-xl text-sky-600 shrink-0">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">
                  We never charge a prepayment penalty.
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Pay early, pay ahead, or pay off the entire balance in month
                  three — the interest simply stops accruing immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
