"use client";

import React from "react";
import { User, Lock } from "lucide-react";
import { ApplyFormData } from "./ApplyFormStepsContainer";

interface StepAboutYouProps {
  formData: ApplyFormData;
  updateField: <K extends keyof ApplyFormData>(
    field: K,
    value: ApplyFormData[K],
  ) => void;
}

export default function StepAboutYou({
  formData,
  updateField,
}: StepAboutYouProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <User className="w-5 h-5 text-sky-400" />
          About You
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Please provide your legal name and contact details to begin
          verification.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            placeholder="Jane"
            className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-white text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            placeholder="Doe"
            className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-white text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder="name@example.com"
          className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-white text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition"
        />
        <p className="text-xs text-slate-500 mt-1">
          Double-check this — your Application ID and every update go here.
        </p>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
        >
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          placeholder="(555) 000-0000"
          className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-white text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <label
              htmlFor="ssn"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
            >
              Social Security Number (SSN)
            </label>
            <Lock className="w-3 h-3 text-slate-500" />
          </div>
          <input
            id="ssn"
            type="password"
            maxLength={9}
            required
            value={formData.ssn}
            onChange={(e) => updateField("ssn", e.target.value)}
            placeholder="XXX-XX-XXXX"
            className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-white text-sm font-mono focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition"
          />
          <p className="text-[11px] text-slate-500 mt-1 leading-tight">
            Required by federal law to verify your identity. Encrypted and never
            displayed in full.
          </p>
        </div>

        <div>
          <label
            htmlFor="dob"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
          >
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            required
            value={formData.dob}
            onChange={(e) => updateField("dob", e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-white text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition"
          />
          <p className="text-[11px] text-slate-500 mt-1 leading-tight">
            You must be at least 18 (19 in Alabama and Nebraska).
          </p>
        </div>
      </div>
    </div>
  );
}
