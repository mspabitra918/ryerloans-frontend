"use client";

import React from "react";
import { Building2, Info } from "lucide-react";
import { ApplyFormData } from "./ApplyFormStepsContainer";

interface StepBankDetailsProps {
  formData: ApplyFormData;
  updateField: <K extends keyof ApplyFormData>(
    field: K,
    value: ApplyFormData[K],
  ) => void;
}

export default function StepBankDetails({
  formData,
  updateField,
}: StepBankDetailsProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Building2 className="w-5 h-5 text-sky-400" />
          Your Bank Account
        </h2>
        <div className="mt-3 bg-sky-500/10 border border-sky-500/20 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-sky-200">
          <Info className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
          <span>
            This is where your funds would be deposited. We do not ask for your
            online banking password here. Account verification happens
            separately through a secure connection with your bank.
          </span>
        </div>
      </div>

      <div>
        <label
          htmlFor="bankName"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
        >
          Bank Name
        </label>
        <input
          id="bankName"
          type="text"
          required
          value={formData.bankName}
          onChange={(e) => updateField("bankName", e.target.value)}
          placeholder="e.g. Chase, Bank of America"
          className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-white text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="routingNumber"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
          >
            Routing Number
          </label>
          <input
            id="routingNumber"
            type="text"
            maxLength={9}
            required
            value={formData.routingNumber}
            onChange={(e) => updateField("routingNumber", e.target.value)}
            placeholder="9 digits"
            className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-white text-sm font-mono focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition"
          />
          <p className="text-xs text-slate-500 mt-1">
            Nine digits, bottom-left of your check or in your banking app.
          </p>
        </div>

        <div>
          <label
            htmlFor="accountNumber"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
          >
            Account Number
          </label>
          <input
            id="accountNumber"
            type="text"
            required
            value={formData.accountNumber}
            onChange={(e) => updateField("accountNumber", e.target.value)}
            placeholder="Account number"
            className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-white text-sm font-mono focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="accountAge"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
        >
          Account Age
        </label>
        <select
          id="accountAge"
          value={formData.accountAge}
          onChange={(e) => updateField("accountAge", e.target.value)}
          className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-white text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition"
        >
          <option value="less_than_1_year">Less than 1 year</option>
          <option value="1_to_3_years">1 to 3 years</option>
          <option value="3_plus_years">3+ years</option>
        </select>
        <p className="text-xs text-slate-500 mt-1">
          Roughly how long this account has been open.
        </p>
      </div>
    </div>
  );
}
