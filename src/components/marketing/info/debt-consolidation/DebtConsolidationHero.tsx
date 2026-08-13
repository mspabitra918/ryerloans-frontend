import React from "react";
import { ShieldCheck } from "lucide-react";

export default function DebtConsolidationHero() {
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
            Debt Strategy Guide
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">Last Updated: {currentDate}</span>
        </div>

        {/* Page Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-7xl">
          Debt Consolidation Loans: Mechanics, Math & Strategy
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          Consolidate high-interest credit card debt into one predictable fixed
          monthly payment. See the exact mathematical breakdown, compare relief
          options, and evaluate when consolidation saves money.
        </p>
      </div>
    </section>
  );
}
