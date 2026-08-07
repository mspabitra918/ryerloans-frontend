"use client";

import { Header } from "@/src/components/dashboard/Header";
import { HoldingsTable } from "@/src/components/dashboard/HoldingsTable";
import { PerformanceChart } from "@/src/components/dashboard/PerformanceChart";
import { Sidebar } from "@/src/components/dashboard/Sidebar";
import { StatCards } from "@/src/components/dashboard/StatCards";
import React, { useState } from "react";

export default function InvestmentsDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f3f5f9] text-slate-800 font-sans overflow-hidden">
      {/* 1. Sidebar Chunk */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Panel */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* 2. Header Chunk */}
        <Header onOpenSidebar={() => setIsSidebarOpen(true)} />

        {/* Dashboard Body Content */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
          {/* 3. Stat Cards Chunk */}
          <StatCards />

          {/* 4. Chart Chunk */}
          <PerformanceChart />

          {/* 5. Holdings Chunk */}
          <HoldingsTable />
        </div>
      </main>
    </div>
  );
}
