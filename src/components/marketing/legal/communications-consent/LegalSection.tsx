import React from "react";

interface LegalSectionProps {
  id: string;
  number?: string | number;
  title: string;
  children: React.ReactNode;
}

export function LegalSection({
  id,
  number,
  title,
  children,
}: LegalSectionProps) {
  return (
    <section id={id} className="space-y-3.5 scroll-mt-24">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
        {number ? `${number}. ${title}` : title}
      </h2>
      <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}
