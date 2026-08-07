"use client";

import React from "react";
import { DollarSign } from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";
import { ApplyFormData } from "./ApplyFormStepsContainer";

interface StepLoanAmountProps {
  formData: ApplyFormData;
  updateField: <K extends keyof ApplyFormData>(
    field: K,
    value: ApplyFormData[K],
  ) => void;
  formattedMin: string;
  formattedMax: string;
}

export default function StepLoanAmount({
  formData,
  updateField,
  formattedMin,
  formattedMax,
}: StepLoanAmountProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-sky-400" />
          How much do you need?
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Choose an amount between {formattedMin} and {formattedMax}. You can
          discuss adjusting it when you speak with our team.
        </p>
      </div>

      {/* Amount Slider / Display */}
      <div className="space-y-4">
        <div className="flex justify-between items-baseline">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Requested Amount
          </label>
          <span className="text-3xl font-bold text-white font-mono">
            ${Number(formData.amount).toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min={RATE_CONFIG.minAmount}
          max={RATE_CONFIG.maxAmount}
          step={500}
          value={formData.amount}
          onChange={(e) => updateField("amount", Number(e.target.value))}
          className="w-full h-2.5 bg-slate-100 border border-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-400"
        />
        <div className="flex justify-between text-xs text-slate-500 font-mono">
          <span>{formattedMin}</span>
          <span>{formattedMax}</span>
        </div>
      </div>

      {/* Purpose Selection */}
      <div className="space-y-2">
        <label
          htmlFor="purpose"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
        >
          Loan Purpose
        </label>
        <p className="text-xs text-slate-400">
          Choose the closest match. This helps us structure the right term for
          you.
        </p>
        <select
          id="purpose"
          value={formData.purpose}
          onChange={(e) => updateField("purpose", e.target.value)}
          className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-white text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition"
        >
          <option value="debt_consolidation">Debt Consolidation</option>
          <option value="home_improvement">Home Improvement</option>
          <option value="emergency_expense">Emergency Expense</option>
          <option value="major_purchase">Major Purchase</option>
          <option value="business">Business / Working Capital</option>
          <option value="other">Other</option>
        </select>
      </div>

      {formData.purpose === "other" && (
        <div className="space-y-1">
          <label
            htmlFor="otherPurpose"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
          >
            Specify Purpose
          </label>
          <p className="text-xs text-slate-400">
            Tell us briefly what the funds are for.
          </p>
          <input
            id="otherPurpose"
            type="text"
            required
            value={formData.otherPurpose}
            onChange={(e) => updateField("otherPurpose", e.target.value)}
            placeholder="e.g. Moving expenses"
            className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-white text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition"
          />
        </div>
      )}
    </div>
  );
}
