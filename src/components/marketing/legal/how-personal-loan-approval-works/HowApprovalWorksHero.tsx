import React from "react";
import { ShieldCheck } from "lucide-react";

export default function HowApprovalWorksHero(): React.JSX.Element {
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
            Transparent Lending Guide
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">Last Updated: {currentDate}</span>
        </div>

        {/* Page Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
          How Loan Approval Works: End-to-End Mechanics & Underwriting Truths
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          An unvarnished guide to how lenders evaluate applications, why
          "guaranteed approval" is a legal impossibility, what automated
          pre-screens actually mean, and how to navigate underwriting decisions.
        </p>
      </div>
    </section>
  );
}
