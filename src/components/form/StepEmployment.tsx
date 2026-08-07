"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import { ApplyFormData } from "./ApplyFormStepsContainer";

interface StepEmploymentProps {
  formData: ApplyFormData;
  updateField: <K extends keyof ApplyFormData>(
    field: K,
    value: ApplyFormData[K],
  ) => void;
}

export default function StepEmployment({
  formData,
  updateField,
}: StepEmploymentProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-sky-400" />
          Income &amp; Employment
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Help us evaluate your ability to repay with your current income
          stream.
        </p>
      </div>

      <div>
        <label
          htmlFor="employmentStatus"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
        >
          Employment Status
        </label>
        <select
          id="employmentStatus"
          value={formData.employmentStatus}
          onChange={(e) => updateField("employmentStatus", e.target.value)}
          className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-white text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition"
        >
          <option value="employed">Employed Full-Time</option>
          <option value="part_time">Employed Part-Time</option>
          <option value="self_employed">Self-Employed</option>
          <option value="retired">Retired / Pension</option>
          <option value="other">Other Income Source</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="netMonthlyIncome"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
        >
          Net Monthly Income ($)
        </label>
        <input
          id="netMonthlyIncome"
          type="number"
          required
          value={formData.netMonthlyIncome}
          onChange={(e) => updateField("netMonthlyIncome", e.target.value)}
          placeholder="e.g. 4500"
          className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-white text-sm font-mono focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition"
        />
        <p className="text-xs text-slate-500 mt-1">
          Your take-home pay after taxes and deductions — the amount that
          actually lands in your account, not your gross salary.
        </p>
      </div>

      <div>
        <label
          htmlFor="hasVehicle"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
        >
          Do you own a vehicle?
        </label>
        <select
          id="hasVehicle"
          value={formData.hasVehicle}
          onChange={(e) => updateField("hasVehicle", e.target.value)}
          className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-white text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition"
        >
          <option value="yes">Yes (Paid off or Financed)</option>
          <option value="no">No</option>
        </select>
        <p className="text-xs text-slate-500 mt-1">
          We ask as one part of your overall financial picture. Your vehicle is
          not collateral and is not at risk.
        </p>
      </div>
    </div>
  );
}
