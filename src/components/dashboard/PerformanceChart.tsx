"use client";

import React from "react";
import { Download } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const performanceData = [
  { date: "Nov 17", portfolio: 0, sp500: 0 },
  { date: "Nov 20", portfolio: 0.8, sp500: 1.5 },
  { date: "Nov 21", portfolio: 1.0, sp500: 1.2 },
  { date: "Nov 22", portfolio: 1.8, sp500: 1.7 },
  { date: "Nov 24", portfolio: 1.8, sp500: 1.6 },
  { date: "Nov 27", portfolio: 1.7, sp500: 1.5 },
  { date: "Nov 28", portfolio: 1.9, sp500: 1.6 },
  { date: "Nov 29", portfolio: 2.0, sp500: 1.5 },
  { date: "Nov 30", portfolio: 1.8, sp500: 1.9 },
  { date: "Dec 1", portfolio: 2.5, sp500: 2.4 },
  { date: "Dec 4", portfolio: 2.5, sp500: 1.8 },
  { date: "Dec 5", portfolio: 2.5, sp500: 1.8 },
  { date: "Dec 6", portfolio: 2.5, sp500: 1.4 },
  { date: "Dec 7", portfolio: 2.8, sp500: 2.3 },
  { date: "Dec 8", portfolio: 3.2, sp500: 2.7 },
  { date: "Dec 11", portfolio: 3.6, sp500: 3.2 },
  { date: "Dec 12", portfolio: 4.0, sp500: 3.6 },
  { date: "Dec 13", portfolio: 5.8, sp500: 4.8 },
  { date: "Dec 14", portfolio: 6.3, sp500: 5.1 },
  { date: "Dec 15", portfolio: 6.3, sp500: 5.1 },
];

export function PerformanceChart() {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-100 space-y-4 sm:space-y-6">
      {/* Legend & Export */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-medium gap-3">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f87171]" />
            <span className="font-bold text-slate-800">Your Portfolio</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]" />
            <span className="font-bold text-slate-800">S&P 500</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full border border-slate-300" />
            <span>Holding not included</span>
          </div>
        </div>

        <button className="text-slate-400 hover:text-slate-600 transition-colors self-end sm:self-auto">
          <Download className="w-4 h-4" />
        </button>
      </div>

      {/* Chart Canvas */}
      <div className="h-60 sm:h-72 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={performanceData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="portfolio"
              stroke="#f87171"
              strokeWidth={2.5}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="sp500"
              stroke="#38bdf8"
              strokeWidth={2.5}
              dot={false}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
