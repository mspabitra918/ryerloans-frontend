"use client";

import { useState } from "react";
import { ApplicationData } from "@/src/lib/types/loanStatus";
import { api, ApiError } from "@/src/lib/api";
import { toApplicationData } from "@/src/lib/utils/loanStatusMapper";
import StatusLookupForm from "@/src/components/loan-status/StatusLookupForm";
import StatusBanner from "@/src/components/loan-status/StatusBanner";
import ActionAlerts from "@/src/components/loan-status/ActionAlerts";
import ProgressTimeline from "@/src/components/loan-status/ProgressTimeline";
import SecurityNotice from "@/src/components/loan-status/SecurityNotice";
import LoanStatusHero from "@/src/components/loan-status/LoanStatusHero";

export default function LoanStatusClient() {
  const [loading, setLoading] = useState(false);
  const [appData, setAppData] = useState<ApplicationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLookup = async (appId: string, email: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.publicStatus(appId, email);
      setAppData(toApplicationData(response, email.trim()));
    } catch (err) {
      /*
       * §6.2: never reveal whether an Application ID exists. The API returns one
       * generic message for a wrong ID and a wrong email alike, so this shows
       * whatever it said rather than adding a guess of its own.
       */
      setAppData(null);
      setError(
        err instanceof ApiError
          ? err.message
          : "We could not check that just now. Please try again shortly.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <LoanStatusHero />
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-slate-700">
        {/* Form */}
        <StatusLookupForm onLookup={handleLookup} loading={loading} />

        {error ? (
          <p
            role="alert"
            className="mx-auto max-w-lg rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-800"
          >
            {error}
          </p>
        ) : null}

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
    </div>
  );
}
