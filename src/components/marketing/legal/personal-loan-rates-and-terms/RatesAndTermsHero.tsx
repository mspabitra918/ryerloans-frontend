import React from "react";
import { Percent } from "lucide-react";

export default function RatesAndTermsHero(): React.JSX.Element {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="pt-24 pb-16 px-4 bg-[#030712] border-b border-[#1f293d]">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Category Badge & Date */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-sky-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
            <Percent className="w-3.5 h-3.5" />
            Financial Education & Analysis
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">Last Updated: {currentDate}</span>
        </div>

        {/* Page Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-7xl">
          Personal Loan Rates and Terms Explained: Deciphering APR, Fees, and
          Lifetime Costs
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          Discover how advertised rates, hidden origination fees, and repayment
          terms alter the true cost of credit. Learn how to compare offers
          accurately using Federal Reserve benchmark data and mathematical
          transparency.
        </p>
      </div>
    </section>
  );
}
