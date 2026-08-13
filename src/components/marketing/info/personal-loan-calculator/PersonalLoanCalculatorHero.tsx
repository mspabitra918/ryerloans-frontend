import React from "react";
import { ShieldCheck } from "lucide-react";

export default function PersonalLoanCalculatorHero() {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            Interactive Financial Tool
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">Last Updated: {currentDate}</span>
        </div>

        {/* Page Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-7xl">
          Personal Loan Payment & Total Cost Calculator
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          Calculate your exact monthly payments and total interest costs on
          personal loans from $2,000 to $25,000 at our locked 10.00% fixed APR.
          Download a complete amortization schedule in seconds.
        </p>
      </div>
    </section>
  );
}
