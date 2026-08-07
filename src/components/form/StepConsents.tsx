import React from "react";
import Link from "next/link";
import { RATE_CONFIG } from "@/src/lib/config";

interface StepConsentsProps {
  formData: any;
  updateField: (field: string, value: any) => void;
}

export function StepConsents({ formData, updateField }: StepConsentsProps) {
  return (
    <div className="space-y-4 pt-2">
      <h3 className="font-bold text-slate-900 text-sm">
        Required Consents & Authorizations
      </h3>

      {/* 1. E-Sign */}
      <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <input
          id="eSignConsent"
          type="checkbox"
          required
          checked={formData.eSignConsent}
          onChange={(e) => updateField("eSignConsent", e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600"
        />
        <label
          htmlFor="eSignConsent"
          className="text-xs leading-relaxed text-slate-700"
        >
          <strong>1. Electronic Records Consent (required)</strong> I consent to
          receive all disclosures, notices, agreements, and communications from
          Ryer Loans electronically, including my loan agreement and any
          required legal notices. I confirm I can access and retain PDF
          documents and HTML web pages. I understand I may withdraw this consent
          by contacting Ryer Loans, and that withdrawing it may prevent me from
          completing an online application. Full terms:{" "}
          <Link href="/e-sign-consent" className="text-sky-600 underline">
            E-Sign Consent
          </Link>
          .
        </label>
      </div>

      {/* 2. Terms */}
      <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <input
          id="termsConsent"
          type="checkbox"
          required
          checked={formData.termsConsent}
          onChange={(e) => updateField("termsConsent", e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600"
        />
        <label
          htmlFor="termsConsent"
          className="text-xs leading-relaxed text-slate-700"
        >
          <strong>2. Privacy Policy and Terms of Use (required)</strong> I have
          read and agree to the{" "}
          <Link href="/privacy-policy" className="text-sky-600 underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms-of-use" className="text-sky-600 underline">
            Terms of Use
          </Link>
          . I confirm that all information I have provided is true, complete,
          and accurate to the best of my knowledge, and I understand that
          providing false information in connection with a credit application
          may be a violation of federal and state law.
        </label>
      </div>

      {/* 3. Credit Auth */}
      <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <input
          id="creditAuth"
          type="checkbox"
          required
          checked={formData.creditAuth}
          onChange={(e) => updateField("creditAuth", e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600"
        />
        <label
          htmlFor="creditAuth"
          className="text-xs leading-relaxed text-slate-700"
        >
          <strong>3. Credit and Verification Authorization (required)</strong> I
          authorize Ryer Loans and its service providers to verify the
          information in this application and to obtain consumer reports, credit
          reports, and other information about me from consumer reporting
          agencies and other sources, including alternative credit bureaus, for
          the purposes of evaluating this application, verifying my identity,
          preventing fraud, and — if a loan is originated — servicing and
          collecting that loan. I authorize Ryer Loans to verify my employment
          and income, and to connect to my bank account on a read-only basis to
          confirm ownership and account details.
        </label>
      </div>

      {/* 4. Contact Consent (OPTIONAL) */}
      <div className="space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <div className="flex items-start gap-3">
          <input
            id="contactConsent"
            type="checkbox"
            checked={formData.contactConsent}
            onChange={(e) => updateField("contactConsent", e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600"
          />
          <label
            htmlFor="contactConsent"
            className="text-xs leading-relaxed text-slate-700"
          >
            <strong>4. Consent to Contact (OPTIONAL)</strong> I authorize Ryer
            Loans, its affiliates, and its service providers to contact me at
            the telephone number(s) and email address I have provided, including
            my wireless number, using automatic telephone dialing systems,
            artificial or prerecorded voice messages, ringless voicemail,
            text/SMS messages, and email — for purposes including servicing my
            application, marketing, and offers of products and services. I
            understand message and data rates may apply, that message frequency
            varies, that I may reply STOP to any text message to opt out or HELP
            for help, and that I may revoke this consent at any time by calling{" "}
            {RATE_CONFIG.phone} or emailing support@ryerloans.com.
          </label>
        </div>

        <p className="text-[11px] text-slate-500 leading-relaxed pl-7 pt-1">
          I understand that my consent to receive these calls and messages is
          not a condition of obtaining any loan, credit, goods, or services from
          Ryer Loans.
        </p>
      </div>
    </div>
  );
}
