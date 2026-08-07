"use client";

import React from "react";
import { ChevronDown, Menu } from "lucide-react";

interface HeaderProps {
  onOpenSidebar: () => void;
}

export function Header({ onOpenSidebar }: HeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 z-10">
      {/* Title and Secondary Navigation */}
      <div className="flex items-center justify-between md:justify-start gap-4 sm:gap-8">
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSidebar}
            className="lg:hidden p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
          <a
            href="#"
            className="text-rose-500 border-b-2 border-rose-500 pb-1 font-semibold"
          >
            Holdings
          </a>
          <a href="#" className="text-slate-500 hover:text-slate-800 pb-1">
            Type
          </a>
        </div> */}
      </div>

      {/* Controls & Filters */}
      <div className="flex items-center justify-between md:justify-end gap-3 overflow-x-auto pb-1 md:pb-0">
        {/* Time Filter Pills */}
        <div className="flex items-center bg-slate-100 rounded-lg p-1 text-xs font-semibold text-slate-600 flex-shrink-0">
          {["1W", "1M", "3M", "6M", "YTD", "1Y", "5Y"].map((range) => (
            <button
              key={range}
              className={`px-2.5 sm:px-3 py-1.5 rounded-md transition-all ${
                range === "3M"
                  ? "bg-white text-slate-900 shadow-sm font-bold"
                  : "hover:text-slate-900"
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Account Selector */}
        {/* <button className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 flex-shrink-0">
          <span>All accounts</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button> */}
      </div>
    </header>
  );
}
