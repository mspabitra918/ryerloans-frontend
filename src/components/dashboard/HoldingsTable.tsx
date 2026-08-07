"use client";

import React from "react";
import { ChevronDown, Info, Plus } from "lucide-react";

export function HoldingsTable() {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-100 space-y-4 sm:space-y-6 overflow-hidden">
      {/* Table Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            Holdings
          </h2>
          <Info className="w-4 h-4 text-slate-400 cursor-pointer" />
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50">
            <span>Type</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          <button className="flex items-center gap-1.5 bg-[#f3f5f9] hover:bg-slate-200 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
            <Plus className="w-3.5 h-3.5" />
            <span>Add holding</span>
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Wrapper for Mobile Screens */}
      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          <div className="grid grid-cols-12 text-xs font-bold text-slate-400 border-b border-slate-100 pb-3">
            <div className="col-span-5">Security</div>
            <div className="col-span-2 text-right">Price</div>
            <div className="col-span-2 text-right">Quantity</div>
            <div className="col-span-1 text-right">Past 30 days</div>
            <div className="col-span-2 text-right">Value</div>
          </div>

          <div className="text-xs text-slate-400 pt-3">ETF</div>
        </div>
      </div>
    </div>
  );
}
