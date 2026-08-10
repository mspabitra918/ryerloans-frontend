"use client";

import React, { useState, useMemo } from "react";
import {
  Calculator,
  ArrowRight,
  DollarSign,
  Calendar,
  TrendingDown,
} from "lucide-react";

export default function DebtConsolidationCalculator() {
  const [totalDebt, setTotalDebt] = useState<number>(15000);
  const [avgApr, setAvgApr] = useState<number>(24);
  const [loanTermYears, setLoanTermYears] = useState<number>(3);
  const newLoanApr = 10.0;

  const calculation = useMemo(() => {
    // Current Credit Card Math (Assuming 3% min payment rate)
    const monthlyApr = avgApr / 100 / 12;
    let currentBalance = totalDebt;
    let totalCurrentInterest = 0;
    let currentMonths = 0;
    const initialMinPayment = Math.max(totalDebt * 0.03, 25);

    // Iterative payoff estimation for credit card min payments
    while (currentBalance > 0 && currentMonths < 360) {
      const interest = currentBalance * monthlyApr;
      let payment = Math.max(currentBalance * 0.03, 25);
      if (payment < interest) payment = interest + 10; // Prevent infinite loop
      if (currentBalance + interest <= payment) {
        totalCurrentInterest += interest;
        currentBalance = 0;
      } else {
        totalCurrentInterest += interest;
        currentBalance = currentBalance + interest - payment;
      }
      currentMonths++;
    }

    // Consolidated Ryer Loan Math (Fixed 10% APR Amortization)
    const newMonthlyApr = newLoanApr / 100 / 12;
    const totalNewMonths = loanTermYears * 12;
    const newMonthlyPayment =
      (totalDebt *
        (newMonthlyApr * Math.pow(1 + newMonthlyApr, totalNewMonths))) /
      (Math.pow(1 + newMonthlyApr, totalNewMonths) - 1);
    const totalNewCost = newMonthlyPayment * totalNewMonths;
    const totalNewInterest = totalNewCost - totalDebt;

    const interestSaved = Math.max(0, totalCurrentInterest - totalNewInterest);
    const yearsSaved = Math.max(0, (currentMonths - totalNewMonths) / 12);

    return {
      initialMinPayment: Math.round(initialMinPayment),
      currentMonths,
      totalCurrentInterest: Math.round(totalCurrentInterest),
      newMonthlyPayment: Math.round(newMonthlyPayment),
      totalNewInterest: Math.round(totalNewInterest),
      interestSaved: Math.round(interestSaved),
      yearsSaved: yearsSaved.toFixed(1),
    };
  }, [totalDebt, avgApr, loanTermYears]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-8">
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
        <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">
            Interactive Debt Consolidation Calculator
          </h3>
          <p className="text-xs text-slate-400">
            See how much you save by moving from revolving cards to a 10.00%
            fixed loan.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">Total Credit Card Debt</span>
              <span className="text-sky-400 font-mono">
                ${totalDebt.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="2000"
              max="50000"
              step="500"
              value={totalDebt}
              onChange={(e) => setTotalDebt(Number(e.target.value))}
              className="w-full accent-sky-500 bg-slate-800 rounded-lg h-2 cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">Current Average APR</span>
              <span className="text-rose-400 font-mono">{avgApr}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="36"
              step="1"
              value={avgApr}
              onChange={(e) => setAvgApr(Number(e.target.value))}
              className="w-full accent-rose-500 bg-slate-800 rounded-lg h-2 cursor-pointer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">New Loan Term</span>
              <span className="text-emerald-400 font-mono">
                {loanTermYears} Years
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(Number(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-800 rounded-lg h-2 cursor-pointer"
            />
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 text-xs space-y-1">
            <span className="text-slate-400 block font-semibold">
              Consolidation Rate:
            </span>
            <p className="text-slate-200 font-medium">
              Ryer Loans Fixed APR:{" "}
              <span className="text-sky-400 font-bold">10.00%</span> (Zero
              origination fees)
            </p>
          </div>
        </div>

        {/* Results Metrics */}
        <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
            <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4 text-emerald-400" />
              Estimated Interest Savings
            </span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
              ${calculation.interestSaved.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400">
              Total interest avoided over the life of the loan.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
            <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-sky-400" />
              Time Saved to Pay Off
            </span>
            <div className="text-2xl sm:text-3xl font-black text-sky-400 font-mono">
              {calculation.yearsSaved} Years
            </div>
            <p className="text-[11px] text-slate-400">
              Compared to making minimum payments on cards.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-1.5">
            <span className="text-xs text-slate-400">
              Current Minimum Payment
            </span>
            <div className="text-lg font-bold text-slate-200 font-mono">
              ${calculation.initialMinPayment}/mo
            </div>
            <p className="text-[10px] text-slate-500">
              Takes ~{Math.round(calculation.currentMonths / 12)} years to pay
              off
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-sky-950/40 border border-sky-800/50 space-y-1.5">
            <span className="text-xs text-sky-300 font-semibold">
              New Fixed Monthly Payment
            </span>
            <div className="text-lg font-bold text-sky-400 font-mono">
              ${calculation.newMonthlyPayment}/mo
            </div>
            <p className="text-[10px] text-sky-300/70">
              10.00% APR fixed over {loanTermYears} years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
