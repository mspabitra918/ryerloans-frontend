"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

interface FaqContentProps {
  categories: FaqCategory[];
}

export default function FaqContent({ categories }: FaqContentProps) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  // Helper to parse internal Markdown-style links like [Loan Status](/loan-status)
  const renderFormattedText = (text: string) => {
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <Link
          key={match.index}
          href={match[2]}
          className="text-sky-600 font-medium underline hover:text-sky-700"
        >
          {match[1]}
        </Link>,
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  };

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto space-y-12">
      {categories.map((category, catIdx) => (
        <section key={catIdx} className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
            {category.title}
          </h2>

          <div className="space-y-3">
            {category.items.map((item, itemIdx) => {
              const itemKey = `${catIdx}-${itemIdx}`;
              const isOpen = openIndex === itemKey;

              return (
                <div
                  key={itemIdx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(itemKey)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-slate-900 text-base hover:bg-slate-50 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-sky-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                      {renderFormattedText(item.a)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
