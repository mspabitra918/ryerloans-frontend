"use client";
import Link from "next/link";
import {
  CheckCircle2,
  PhoneCall,
  Clock,
  Mail,
  Copy,
  Check,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";
import { RATE_CONFIG } from "@/src/lib/config";

interface ApplicationSuccessProps {
  applicationId?: string;
  email?: string;
}

export default function ApplicationSuccess({
  applicationId = "RX-849201",
  email = "applicant@example.com",
}: ApplicationSuccessProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(applicationId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rawPhone = RATE_CONFIG.phone.replace(/[^0-9+]/g, "");

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Success Header Badge */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full text-emerald-600 mb-2">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Application Received
        </h1>
        <p className="text-slate-600 max-w-lg mx-auto text-base sm:text-lg">
          Thank you for applying with Ryer Loans. We have received your
          submission.
        </p>
      </div>

      {/* Application ID Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Your Application ID
        </p>

        <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl">
          <span className="text-2xl sm:text-3xl font-mono font-bold text-slate-900 tracking-wider">
            #{applicationId}
          </span>
          <button
            onClick={handleCopy}
            type="button"
            className="p-2 text-slate-500 hover:text-slate-900 transition rounded-lg hover:bg-slate-200"
            title="Copy Application ID"
          >
            {copied ? (
              <Check className="w-5 h-5 text-emerald-600" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
          <strong>Write this down or screenshot it.</strong> You will need it to
          check your status and every time you contact us.
        </p>

        {/* Confirmation Email Alert */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500">
          <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <span>
            A confirmation email is on its way to{" "}
            <strong className="text-slate-700">{email}</strong> — check spam if
            it has not arrived in ten minutes.
          </span>
        </div>
      </div>

      {/* Required Call Verification Action Card */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-amber-100 text-amber-800 rounded-xl flex-shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wide text-amber-800">
              Action Required
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Next step: call {RATE_CONFIG.phone}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-1">
              Your application is <strong>on hold</strong> until we speak with
              you. This is a required verification step, not an optional one.
              Call now and have your Application ID ready.
            </p>
          </div>
        </div>

        {/* Phone Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-amber-200/60">
          <a
            href={`tel:${rawPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Call {RATE_CONFIG.phone}</span>
          </a>

          {/* Hours of Operation */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium text-center sm:text-left">
            <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span>
              Monday–Friday 8 AM–6 PM PT <br className="hidden sm:inline" />·
              Saturday 9 AM–2 PM PT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
