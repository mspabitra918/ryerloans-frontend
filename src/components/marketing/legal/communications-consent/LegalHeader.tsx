import React from "react";

interface LegalHeaderProps {
  title: string;
  lastUpdated: string;
  subtitle?: string;
  badgeText?: string;
}

export function LegalHeader({
  title,
  lastUpdated,
  subtitle,
  badgeText = "Legal Disclosure",
}: LegalHeaderProps) {
  return (
    <div className="border-b border-slate-200 pb-6 space-y-2 bg-[#030712]">
      <div className="flex items-center gap-3">
        <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
          {badgeText}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Last Updated: {lastUpdated}
        </span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed pt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
