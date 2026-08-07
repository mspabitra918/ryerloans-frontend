"use client";

import React from "react";
import Link from "next/link";
import { FileText, Edit2 } from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";
import { ApplyFormData } from "./ApplyFormStepsContainer";

interface StepReviewConsentsProps {
  formData: ApplyFormData;
  updateField: <K extends keyof ApplyFormData>(
    field: K,
    value: ApplyFormData[K],
  ) => void;
  setStep: (step: number) => void;
}

export default function StepReviewConsents({
  formData,
  updateField,
  setStep,
}: StepReviewConsentsProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-sky-400" />
          Review and Submit
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Check everything below. If something is wrong, use the edit links —
          correcting it now is faster than fixing it later.
        </p>
      </div>

      {/* Summary Review Card */}
      <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 text-sm space-y-3">
        <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
          <div>
            <span className="text-xs text-slate-500 block">
              Requested Amount
            </span>
            <span className="font-bold text-white font-mono">
              ${formData.amount.toLocaleString()}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 font-semibold transition"
          >
            <Edit2 className="w-3 h-3" /> Edit
          </button>
        </div>

        <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
          <div>
            <span className="text-xs text-slate-500 block">Applicant</span>
            <span className="font-medium text-slate-200">
              {formData.firstName} {formData.lastName} ({formData.email})
            </span>
          </div>
          <button
            type="button"
            onClick={() => setStep(2)}
            className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 font-semibold transition"
          >
            <Edit2 className="w-3 h-3" /> Edit
          </button>
        </div>

        <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
          <div>
            <span className="text-xs text-slate-500 block">
              Net Monthly Income
            </span>
            <span className="font-medium text-slate-200 font-mono">
              ${formData.netMonthlyIncome}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setStep(3)}
            className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 font-semibold transition"
          >
            <Edit2 className="w-3 h-3" /> Edit
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs text-slate-500 block">Bank Account</span>
            <span className="font-medium text-slate-200">
              {formData.bankName} (Ending in{" "}
              {formData.accountNumber.slice(-4) || "••••"})
            </span>
          </div>
          <button
            type="button"
            onClick={() => setStep(4)}
            className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 font-semibold transition"
          >
            <Edit2 className="w-3 h-3" /> Edit
          </button>
        </div>
      </div>

      {/* REQUIRED CONSENTS & AUTHORIZATIONS */}
      <div className="space-y-4 pt-2">
        <h3 className="font-bold text-white text-sm tracking-wide">
          Required Consents &amp; Authorizations
        </h3>

        {/* Checkbox 1 */}
        <div className="flex items-start gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
          <input
            id="eSignConsent"
            type="checkbox"
            required
            checked={formData.eSignConsent}
            onChange={(e) => updateField("eSignConsent", e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-sky-500/20"
          />
          <label
            htmlFor="eSignConsent"
            className="text-xs leading-relaxed text-slate-300"
          >
            <strong className="text-white">
              1. Electronic Records Consent (required)
            </strong>{" "}
            I consent to receive all disclosures, notices, agreements, and
            communications from Ryer Loans electronically, including my loan
            agreement and any required legal notices. I confirm I can access and
            retain PDF documents and HTML web pages. I understand I may withdraw
            this consent by contacting Ryer Loans, and that withdrawing it may
            prevent me from completing an online application. Full terms:{" "}
            <Link
              href="/e-sign-consent"
              className="text-sky-400 underline hover:text-sky-300"
            >
              E-Sign Consent
            </Link>
            .
          </label>
        </div>

        {/* Checkbox 2 */}
        <div className="flex items-start gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
          <input
            id="termsConsent"
            type="checkbox"
            required
            checked={formData.termsConsent}
            onChange={(e) => updateField("termsConsent", e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-sky-500/20"
          />
          <label
            htmlFor="termsConsent"
            className="text-xs leading-relaxed text-slate-300"
          >
            <strong className="text-white">
              2. Privacy Policy and Terms of Use (required)
            </strong>{" "}
            I have read and agree to the{" "}
            <Link
              href="/privacy-policy"
              className="text-sky-400 underline hover:text-sky-300"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms-of-use"
              className="text-sky-400 underline hover:text-sky-300"
            >
              Terms of Use
            </Link>
            . I confirm that all information I have provided is true, complete,
            and accurate to the best of my knowledge, and I understand that
            providing false information in connection with a credit application
            may be a violation of federal and state law.
          </label>
        </div>

        {/* Checkbox 3 */}
        <div className="flex items-start gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
          <input
            id="creditAuth"
            type="checkbox"
            required
            checked={formData.creditAuth}
            onChange={(e) => updateField("creditAuth", e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-sky-500/20"
          />
          <label
            htmlFor="creditAuth"
            className="text-xs leading-relaxed text-slate-300"
          >
            <strong className="text-white">
              3. Credit and Verification Authorization (required)
            </strong>{" "}
            I authorize Ryer Loans and its service providers to verify the
            information in this application and to obtain consumer reports,
            credit reports, and other information about me from consumer
            reporting agencies and other sources, including alternative credit
            bureaus, for the purposes of evaluating this application, verifying
            my identity, preventing fraud, and — if a loan is originated —
            servicing and collecting that loan. I authorize Ryer Loans to verify
            my employment and income, and to connect to my bank account on a
            read-only basis to confirm ownership and account details.
          </label>
        </div>

        {/* Checkbox 4 (OPTIONAL) */}
        <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
          <div className="flex items-start gap-3">
            <input
              id="contactConsent"
              type="checkbox"
              checked={formData.contactConsent}
              onChange={(e) => updateField("contactConsent", e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-sky-500/20"
            />
            <label
              htmlFor="contactConsent"
              className="text-xs leading-relaxed text-slate-300"
            >
              <strong className="text-white">
                4. Consent to Contact (OPTIONAL)
              </strong>{" "}
              I authorize Ryer Loans, its affiliates, and its service providers
              to contact me at the telephone number(s) and email address I have
              provided, including my wireless number, using automatic telephone
              dialing systems, artificial or prerecorded voice messages,
              ringless voicemail, text/SMS messages, and email — for purposes
              including servicing my application, marketing, and offers of
              products and services. I understand message and data rates may
              apply, that message frequency varies, that I may reply STOP to any
              text message to opt out or HELP for help, and that I may revoke
              this consent at any time by calling {RATE_CONFIG.phone} or
              emailing support@ryerloans.com.
            </label>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed pl-7 pt-1">
            I understand that my consent to receive these calls and messages is
            not a condition of obtaining any loan, credit, goods, or services
            from Ryer Loans.
          </p>
        </div>
      </div>
    </div>
  );
}
