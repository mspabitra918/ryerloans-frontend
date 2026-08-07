"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Search,
  CheckCircle2,
  Clock,
  Circle,
  PhoneCall,
  ExternalLink,
  ShieldAlert,
  AlertTriangle,
  Building2,
  DollarSign,
  XCircle,
} from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

// Types for Mock Data
type ApplicationStage = "received" | "bank" | "deposit" | "funded_declined";

interface ApplicationData {
  id: string;
  submittedDate: string;
  amountRequested: number;
  email: string;
  hasCalledIn: boolean;
  bankStatus: "pending" | "completed";
  bankCompletedDate?: string;
  depositStatus: "not_started" | "sent" | "confirmed";
  fundingStatus: "pending" | "funded" | "declined";
  accountEnding?: string;
  fundedDate?: string;
  firstPaymentDue?: string;
  declinedDate?: string;
  reapplyDate?: string;
}

export default function LoanStatusPage() {
  const [appId, setAppId] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [appData, setAppData] = useState<ApplicationData | null>(null);

  // Form submit handler (Simulated lookup)
  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appId || !email) return;

    setLoading(true);

    // Simulated API response delay & mock data return
    setTimeout(() => {
      setAppData({
        id: appId.trim().toUpperCase(),
        submittedDate: "August 4, 2026",
        amountRequested: 10000,
        email: email.trim(),
        hasCalledIn: false, // Change to true/false to test call-in alert
        bankStatus: "pending", // "pending" | "completed"
        bankCompletedDate: "August 5, 2026",
        depositStatus: "not_started", // "not_started" | "sent" | "confirmed"
        fundingStatus: "pending", // "pending" | "funded" | "declined"
        accountEnding: "4821",
        fundedDate: "August 6, 2026",
        firstPaymentDue: "September 5, 2026",
        declinedDate: "August 5, 2026",
        reapplyDate: "November 3, 2026",
      });
      setLoading(false);
    }, 600);
  };

  const rawPhone = RATE_CONFIG.phone.replace(/[^0-9+]/g, "");

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-slate-700">
      {/* Title & Lookup Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Check Your Application Status
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
          Enter your six-digit Application ID and the email address you applied
          with.
        </p>
      </div>

      {/* Lookup Form */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <form
          onSubmit={handleLookup}
          className="grid gap-4 sm:grid-cols-[1fr_1fr_auto]"
        >
          <div>
            <label
              htmlFor="appId"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1"
            >
              Application ID
            </label>
            <input
              id="appId"
              type="text"
              required
              placeholder="e.g. RX8492"
              value={appId}
              onChange={(e) => setAppId(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20 font-mono text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20 text-sm"
            />
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl transition shadow-sm disabled:opacity-50 text-sm h-[46px]"
            >
              <Search className="w-4 h-4" />
              <span>{loading ? "Checking..." : "Check Status"}</span>
            </button>
          </div>
        </form>

        <p className="text-xs text-slate-500 mt-4 text-center sm:text-left">
          Lost your Application ID? It is in your confirmation email. If you
          cannot find it, call{" "}
          <a
            href={`tel:${rawPhone}`}
            className="text-sky-600 font-semibold underline hover:text-sky-700"
          >
            {RATE_CONFIG.phone}
          </a>
          .
        </p>
      </div>

      {/* Dynamic Results View */}
      {appData && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Application Metadata Banner */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Application
              </span>
              <h2 className="text-2xl font-bold font-mono tracking-wide">
                #{appData.id}
              </h2>
              <p className="text-xs text-slate-400 pt-1">
                Submitted on {appData.submittedDate}
              </p>
            </div>
            <div className="sm:text-right border-t sm:border-t-0 border-slate-800 pt-3 sm:pt-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Amount Requested
              </span>
              <p className="text-2xl font-bold text-emerald-400">
                ${appData.amountRequested.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Conditional Action Blocks */}

          {/* 1. If not yet called in */}
          {!appData.hasCalledIn && (
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-bold text-amber-950 text-lg">
                    Action needed: call us to continue
                  </h3>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    Your application is <strong>on hold</strong> until we verify
                    your details by phone. Call{" "}
                    <span className="font-semibold">{RATE_CONFIG.phone}</span>{" "}
                    and have Application ID{" "}
                    <span className="font-mono font-semibold">
                      #{appData.id}
                    </span>{" "}
                    ready.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-amber-200">
                <a
                  href={`tel:${rawPhone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call {RATE_CONFIG.phone}</span>
                </a>
                <span className="text-xs text-amber-800 font-medium">
                  Monday–Friday 8 AM–6 PM PT · Saturday 9 AM–2 PM PT
                </span>
              </div>
            </div>
          )}

          {/* 2. Bank Verification Pending / Complete */}
          {appData.bankStatus === "pending" ? (
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                <Building2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-bold text-sky-950 text-lg">
                    Action needed: verify your bank account
                  </h3>
                  <p className="text-sm text-sky-900 leading-relaxed">
                    This secure, read-only connection confirms your account
                    details. It takes about two minutes and your banking
                    password is never shared with Ryer Loans.
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition"
                >
                  <span>Complete Bank Verification</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex items-center gap-3 text-emerald-950 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>
                <strong>Bank account verified</strong> on{" "}
                {appData.bankCompletedDate}. Nothing further needed on this
                step.
              </span>
            </div>
          )}

          {/* 3. Verification Deposit Sent */}
          {appData.depositStatus === "sent" && (
            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-bold text-indigo-950 text-lg">
                    Confirm your deposit amounts
                  </h3>
                  <p className="text-sm text-indigo-900 leading-relaxed">
                    We have sent one or two small deposits to your account —
                    usually under a dollar, arriving within 1–2 business days.
                    Check your account and enter the exact amounts to confirm.
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition"
                >
                  <span>Confirm Deposit Amounts</span>
                </button>
              </div>
              <p className="text-xs text-indigo-800 font-medium pt-1">
                <strong>Reminder:</strong> This money goes into your account. We
                will never ask you to send us funds.
              </p>
            </div>
          )}

          {/* 4. Funded State */}
          {appData.fundingStatus === "funded" && (
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-6 shadow-sm space-y-2 text-emerald-950">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <h3 className="font-bold text-xl">Your loan has been funded</h3>
              </div>
              <p className="text-sm leading-relaxed pl-9">
                ${appData.amountRequested.toLocaleString()} was sent to your
                account ending in ••
                {appData.accountEnding} on {appData.fundedDate}. Expect it
                within 1–2 business days. Your first payment is due{" "}
                <strong>{appData.firstPaymentDue}</strong>. Questions:{" "}
                {RATE_CONFIG.phone}.
              </p>
            </div>
          )}

          {/* 5. Declined State */}
          {appData.fundingStatus === "declined" && (
            <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 shadow-sm space-y-2 text-rose-950">
              <div className="flex items-center gap-3">
                <XCircle className="w-6 h-6 text-rose-600 flex-shrink-0" />
                <h3 className="font-bold text-xl">Application Not Approved</h3>
              </div>
              <p className="text-sm leading-relaxed pl-9">
                A notice explaining the specific reasons was sent to your email
                on {appData.declinedDate} — please read it, as it tells you what
                affected the decision. You may submit a new application on or
                after <strong>{appData.reapplyDate}</strong>. Questions:{" "}
                {RATE_CONFIG.phone}.
              </p>
            </div>
          )}

          {/* Timeline / Progress Track */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
              Application Progress
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-slate-200 before:z-0">
              {/* Step 1: Received */}
              <div className="relative z-10 flex items-start gap-4">
                <div className="bg-emerald-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Loan Application Received
                  </h4>
                  <p className="text-xs text-slate-500">
                    Completed on {appData.submittedDate}
                  </p>
                </div>
              </div>

              {/* Step 2: Online Banking */}
              <div className="relative z-10 flex items-start gap-4">
                {appData.bankStatus === "completed" ? (
                  <div className="bg-emerald-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="bg-sky-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
                    <Clock className="w-5 h-5 animate-pulse" />
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Online Banking Verification
                  </h4>
                  <p className="text-xs text-slate-500 capitalize">
                    {appData.bankStatus}
                  </p>
                </div>
              </div>

              {/* Step 3: Verification Deposit */}
              <div className="relative z-10 flex items-start gap-4">
                {appData.depositStatus === "confirmed" ? (
                  <div className="bg-emerald-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                ) : appData.depositStatus === "sent" ? (
                  <div className="bg-indigo-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
                    <Clock className="w-5 h-5 animate-pulse" />
                  </div>
                ) : (
                  <div className="bg-slate-200 text-slate-400 rounded-full p-1 mt-0.5">
                    <Circle className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Verification Deposit
                  </h4>
                  <p className="text-xs text-slate-500 capitalize">
                    {appData.depositStatus.replace("_", " ")}
                  </p>
                </div>
              </div>

              {/* Step 4: Funded / Declined */}
              <div className="relative z-10 flex items-start gap-4">
                {appData.fundingStatus === "funded" ? (
                  <div className="bg-emerald-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                ) : appData.fundingStatus === "declined" ? (
                  <div className="bg-rose-500 text-white rounded-full p-1 mt-0.5 shadow-sm">
                    <XCircle className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="bg-slate-200 text-slate-400 rounded-full p-1 mt-0.5">
                    <Circle className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Funded / Final Decision
                  </h4>
                  <p className="text-xs text-slate-500 capitalize">
                    {appData.fundingStatus}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Permanent Security Reminder Footer */}
      <div className="bg-slate-100 border border-slate-200 rounded-2xl p-5 sm:p-6 flex items-start gap-4 text-xs text-slate-600 leading-relaxed shadow-sm">
        <ShieldAlert className="w-6 h-6 text-slate-500 flex-shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-900 uppercase tracking-wider block mb-1">
            Security Reminder
          </strong>
          Ryer Loans will never ask you to send money, purchase a gift card, or
          pay a fee before your loan is funded. We will never ask for your
          online banking password. If anyone contacts you claiming to be Ryer
          Loans and requests payment, hang up immediately and call{" "}
          <a
            href={`tel:${rawPhone}`}
            className="text-sky-600 font-bold underline"
          >
            {RATE_CONFIG.phone}
          </a>
          .
        </div>
      </div>
    </div>
  );
}
