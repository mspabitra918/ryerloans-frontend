import React from "react";
import {
  TrendingUp,
  Users,
  Wallet,
  Home,
  Building2,
  Database,
  CheckCircle2,
} from "lucide-react";

interface EconomyProps {
  paragraphs: string[];
  population: string;
  medianIncome: string;
  medianRent: string;
  majorEmployers: string[];
  source: string;
}

export default function LocalEconomy({ data }: { data: EconomyProps }) {
  const metrics = [
    {
      label: "Population",
      value: data.population,
      icon: Users,
    },
    {
      label: "Median Household Income",
      value: data.medianIncome,
      icon: Wallet,
    },
    {
      label: "Median Rent",
      value: data.medianRent,
      icon: Home,
    },
  ];

  return (
    <section className="bg-white py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-50/60 p-8 sm:p-12 border border-slate-200/80 shadow-xl shadow-slate-100/80">
          {/* Main Layout Grid */}
          <div className="grid gap-10 xl:grid-cols-12 xl:items-start">
            {/* Left Content Column */}
            <div className="xl:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-600 font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>Regional Financial Context</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                The Local Economy
              </h2>

              <div className="space-y-4 pt-2">
                {data.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-slate-600 text-sm sm:text-base leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Right Metrics Sidebar Column */}
            <div className="xl:col-span-5 space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold border-b border-slate-100 pb-3">
                  Key Municipal Indicators
                </p>

                <div className="grid gap-3">
                  {metrics.map((metric) => {
                    const Icon = metric.icon;
                    return (
                      <div
                        key={metric.label}
                        className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200/60 transition hover:border-slate-300"
                      >
                        <div className="space-y-0.5">
                          <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                            {metric.label}
                          </p>
                          <p className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                            {metric.value}
                          </p>
                        </div>
                        <div className="p-3 rounded-xl bg-sky-500/10 text-sky-600 shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Secondary Grid */}
          <div className="mt-10 pt-8 border-t border-slate-200/80 grid gap-6 md:grid-cols-2">
            {/* Major Employers Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Major Employers & Industries
                </h3>
              </div>

              <ul className="grid gap-2.5 pt-2">
                {data.majorEmployers.map((employer) => (
                  <li
                    key={employer}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-semibold text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{employer}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Economic Data Sources Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Economic Data Sources
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed pt-2">
                  {data.source}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>
                  Updated using current municipal census & BLS datasets
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
