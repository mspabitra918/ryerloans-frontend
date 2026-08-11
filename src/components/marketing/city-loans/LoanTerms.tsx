import React from "react";
import {
  DollarSign,
  Percent,
  CheckCircle2,
  ShieldCheck,
  Scale,
  Sparkles,
} from "lucide-react";

interface Props {
  city: string;
}

export default function LoanTerms({ city }: Props) {
  const terms = [
    {
      label: "Loan Amount",
      value: "$2,000 – $25,000",
      subtext: "Flexible funding options",
      icon: DollarSign,
    },
    {
      label: "Fixed APR",
      value: "10.00%",
      subtext: "Predictable monthly terms",
      icon: Percent,
      highlight: true,
    },
    {
      label: "Origination Fee",
      value: "$0",
      subtext: "No upfront processing costs",
      icon: CheckCircle2,
    },
    {
      label: "Prepayment Penalty",
      value: "$0",
      subtext: "Pay off early without fees",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-slate-50 py-20 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-white p-8 sm:p-12 border border-slate-200/80 shadow-xl shadow-slate-200/60">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-100">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-600 font-semibold">
                <Scale className="w-3.5 h-3.5" />
                <span>Transparent Financials</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Standard Loan Terms for {city} Residents
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Clear, straightforward personal loans designed with no hidden
                surprises, zero origination fees, and a single fixed rate
                statewide.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium self-start md:self-end">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>DFPI Compliant Terms</span>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {terms.map((term) => {
              const Icon = term.icon;
              return (
                <div
                  key={term.label}
                  className={`group relative flex flex-col justify-between rounded-2xl p-6 border transition-all duration-200 hover:-translate-y-1 ${
                    term.highlight
                      ? "bg-sky-50/50 border-sky-200/80 hover:border-sky-300 hover:shadow-md hover:shadow-sky-500/5"
                      : "bg-slate-50/70 border-slate-200/80 hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/50"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-medium">
                        {term.label}
                      </span>
                      <div
                        className={`p-2.5 rounded-xl ${
                          term.highlight
                            ? "bg-sky-500/10 text-sky-600"
                            : "bg-white text-slate-600 border border-slate-200/60 shadow-xs"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <p
                        className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                          term.highlight ? "text-sky-600" : "text-slate-900"
                        }`}
                      >
                        {term.value}
                      </p>
                      <p className="mt-1.5 text-xs text-slate-500 font-medium">
                        {term.subtext}
                      </p>
                    </div>
                  </div>

                  {term.highlight && (
                    <div className="mt-4 pt-3 border-t border-sky-200/60 flex items-center gap-1 text-[11px] font-semibold text-sky-700">
                      <Sparkles className="w-3 h-3 text-sky-500" />
                      <span>Single Rate Guarantee</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
