"use client";

import React from "react";

export function StatCards() {
  const statCards = [
    {
      title: "Your Portfolio",
      past30: "5.72%",
      today: "--",
      accent: "bg-[#f87171]",
      muted: false,
    },
    {
      title: "S&P 500",
      past30: "4.54%",
      today: "--",
      accent: "bg-[#38bdf8]",
      muted: false,
    },
    {
      title: "US Stocks",
      past30: "5.54%",
      today: "--",
      muted: true,
    },
    {
      title: "US Bonds",
      past30: "3.61%",
      today: "--",
      muted: true,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {statCards.map((card, idx) => (
        <div
          key={idx}
          className={`bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-slate-100 relative overflow-hidden ${
            card.muted ? "opacity-60" : ""
          }`}
        >
          {card.accent && (
            <div
              className={`absolute top-0 left-0 right-0 h-1 ${card.accent}`}
            />
          )}

          <h3 className="text-xs sm:text-sm font-bold text-slate-800 mb-3 sm:mb-4 truncate">
            {card.title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Past 30 Days
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 block">
                {card.past30}
              </span>
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Today
              </span>
              <span className="text-base sm:text-lg font-medium text-slate-400 mt-0.5 block">
                {card.today}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
