"use client";

import { useState } from "react";
import { ApplicationData } from "@/src/lib/types/loanStatus";
import StatusLookupForm from "@/src/components/loan-status/StatusLookupForm";
import StatusBanner from "@/src/components/loan-status/StatusBanner";
import ActionAlerts from "@/src/components/loan-status/ActionAlerts";
import ProgressTimeline from "@/src/components/loan-status/ProgressTimeline";
import SecurityNotice from "@/src/components/loan-status/SecurityNotice";

export default function LoanStatusClient() {
  const [loading, setLoading] = useState(false);
  const [appData, setAppData] = useState<ApplicationData | null>(null);

  const handleLookup = (appId: string, email: string) => {
    setLoading(true);

    setTimeout(() => {
      setAppData({
        id: appId.toUpperCase(),
        submittedDate: "August 4, 2026",
        amountRequested: 10000,
        email: email,
        hasCalledIn: false,
        bankStatus: "pending",
        bankCompletedDate: "August 5, 2026",
        depositStatus: "not_started",
        fundingStatus: "pending",
        accountEnding: "4821",
        fundedDate: "August 6, 2026",
        firstPaymentDue: "September 5, 2026",
        declinedDate: "August 5, 2026",
        reapplyDate: "November 3, 2026",
      });
      setLoading(false);
    }, 600);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-slate-700">
      {/* Title */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Check Your Application Status
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
          Enter your six-digit Application ID and the email address you applied
          with.
        </p>
      </div>

      {/* Form */}
      <StatusLookupForm onLookup={handleLookup} loading={loading} />

      {/* Results View */}
      {appData && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <StatusBanner data={appData} />
          <ActionAlerts data={appData} />
          <ProgressTimeline data={appData} />
        </div>
      )}

      {/* Footer Security */}
      <SecurityNotice />
    </div>
  );
}
