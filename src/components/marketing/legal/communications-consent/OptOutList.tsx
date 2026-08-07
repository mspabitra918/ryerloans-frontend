import React from "react";
import { RATE_CONFIG } from "@/src/lib/config";

interface OptOutItem {
  channel: string;
  instruction: React.ReactNode;
}

interface OptOutListProps {
  items: OptOutItem[];
  footerNote?: string;
}

export function OptOutList({ items, footerNote }: OptOutListProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
      <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 border-b border-slate-100 pb-2.5 last:border-b-0 last:pb-0"
          >
            <span className="font-bold min-w-[140px] text-slate-900 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
              {item.channel}
            </span>
            <span className="text-slate-600">{item.instruction}</span>
          </li>
        ))}
      </ul>
      {footerNote && (
        <p className="text-xs text-slate-500 italic pt-2 border-t border-slate-100">
          {footerNote}
        </p>
      )}
    </div>
  );
}
