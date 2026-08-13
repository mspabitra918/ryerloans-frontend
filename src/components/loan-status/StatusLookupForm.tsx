"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

interface StatusLookupFormProps {
  onLookup: (appId: string, email: string) => void;
  loading: boolean;
}

export default function StatusLookupForm({
  onLookup,
  loading,
}: StatusLookupFormProps) {
  const [appId, setAppId] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (appId.trim() && email.trim()) {
      onLookup(appId.trim(), email.trim());
    }
  };

  const rawPhone = RATE_CONFIG.phone.replace(/[^0-9+]/g, "");

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <form
        onSubmit={handleSubmit}
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
  );
}
