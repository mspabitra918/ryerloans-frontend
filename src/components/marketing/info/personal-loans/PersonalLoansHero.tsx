import React from "react";
import { User, Award } from "lucide-react";

export default function PersonalLoansHero() {
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
          <span className="text-sky-400 uppercase tracking-widest font-semibold">
            Consumer Financial Guide
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">Last Updated: {currentDate}</span>
        </div>

        {/* Page Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
          Online Personal Loans: How They Work and What They Cost
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          An in-depth, transparent breakdown of unsecured installment credit,
          true cost calculations, underwriting criteria, and rate structures.
        </p>

        {/* E-E-A-T Author & Reviewer Metadata Box */}
        {/* <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl text-xs text-slate-300">
          <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 flex items-start gap-3">
            <User className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 block">Written by:</span>
              <span className="font-semibold text-white text-sm block">
                Marcus Vance, CFA, CFP®
              </span>
              <span className="text-slate-400 text-[11px] leading-tight block mt-0.5">
                15+ years in consumer lending risk analysis &amp; retail banking
                oversight.
              </span>
            </div>
          </div>

          <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 flex items-start gap-3">
            <Award className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 block">Reviewed by:</span>
              <span className="font-semibold text-white text-sm block">
                Dr. Elena Rostova, PhD in Economics
              </span>
              <span className="text-slate-400 text-[11px] leading-tight block mt-0.5">
                Senior Researcher in Consumer Credit Markets &amp; Financial
                Regulation Compliance.
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
