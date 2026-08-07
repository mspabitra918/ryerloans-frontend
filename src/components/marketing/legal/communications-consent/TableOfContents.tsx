import React from "react";

export interface LegalSectionItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: LegalSectionItem[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <aside className="hidden lg:block">
      <nav
        aria-label="Table of contents"
        className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-slate-100/60 p-5 shadow-sm"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
          On This Page
        </p>
        <ol className="mt-4 space-y-2.5 text-xs font-medium">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="flex gap-2 text-slate-600 transition hover:text-sky-600 leading-snug"
              >
                <span className="text-slate-400 font-mono flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{section.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
