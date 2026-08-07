import Link from "next/link";
import { Cookie, Settings, ShieldCheck, Globe, Sliders } from "lucide-react";

const sections = [
  { id: "cookie-categories", title: "1. Categories of Cookies We Use" },
  { id: "managing-cookies", title: "2. Managing Your Cookie Preferences" },
  { id: "third-party-cookies", title: "3. Third-Party Services & Cookies" },
  { id: "do-not-track", title: "4. Do Not Track & GPC Signals" },
];

export default function CookiePolicyContent() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 text-slate-700 text-base leading-relaxed px-4 sm:px-6 lg:px-8">
      {/* Introduction Notice */}
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-sm">
        <Cookie className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-sky-950 leading-relaxed">
          Ryer Loans uses cookies and similar web tracking technologies to
          ensure site functionality, enhance user experience, evaluate
          advertising performance, and prevent fraudulent activity.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* Table of contents navigation */}
        <aside className="hidden lg:block">
          <nav
            aria-label="On this page"
            className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-slate-100/60 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
              On this page
            </p>
            <ol className="mt-4 space-y-2.5 text-sm">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex gap-2 text-slate-700 transition hover:text-sky-600"
                  >
                    <span className="text-slate-400 font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Main Content Sections */}
        <div className="space-y-10 min-w-0">
          {/* Categories of Cookies */}
          <section id="cookie-categories" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              1. Categories of Cookies We Use
            </h2>
            <p className="text-sm text-slate-600">
              The table below outlines the types of cookies placed on our
              platform, their purpose, and whether they can be disabled:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Purpose
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Can You Disable?
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Strictly Necessary
                    </td>
                    <td className="px-4 py-3">
                      Session management, form state, security authentication,
                      fraud prevention, and load balancing.
                    </td>
                    <td className="px-4 py-3 text-rose-600 font-medium">
                      No — site and loan application will not function without
                      them.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Functional
                    </td>
                    <td className="px-4 py-3">
                      Remembering user preferences such as font size, region,
                      and saved loan form progress.
                    </td>
                    <td className="px-4 py-3 text-emerald-600 font-medium">
                      Yes
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Analytics
                    </td>
                    <td className="px-4 py-3">
                      Google Analytics 4 — understanding aggregate visitor
                      behavior, page views, and performance metrics.
                    </td>
                    <td className="px-4 py-3 text-emerald-600 font-medium">
                      Yes
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Advertising
                    </td>
                    <td className="px-4 py-3">
                      Measuring marketing campaign effectiveness and, where
                      enabled, serving relevant advertisements.
                    </td>
                    <td className="px-4 py-3 text-emerald-600 font-medium">
                      Yes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Managing Cookies */}
          <section id="managing-cookies" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              2. Managing Your Cookie Preferences
            </h2>
            <p>
              You can adjust your cookie settings at any time using our{" "}
              <strong>Cookie Preference Center</strong>, accessible via the
              footer on every page of our website.
            </p>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <Sliders className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">
                    Browser Level Settings:
                  </strong>
                  You can also manage or reject cookies directly through your
                  browser settings. Please note that disabling strictly
                  necessary cookies in your browser settings will prevent the
                  Ryer Loans application process from functioning properly.
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section id="third-party-cookies" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              3. Third-Party Services &amp; Cookies
            </h2>
            <p>
              We integrate third-party services to analyze usage, manage media
              tags, and verify financial information. These external entities
              may set cookies governed by their respective privacy policies:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm pt-1">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <span className="font-bold text-slate-900 block">
                  Google Analytics &amp; Tag Manager
                </span>
                <span className="text-slate-500">
                  Aggregate web traffic analytics and tag execution.
                </span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <span className="font-bold text-slate-900 block">Plaid</span>
                <span className="text-slate-500">
                  Active strictly during bank account verification steps.
                </span>
              </div>
            </div>
          </section>

          {/* Do Not Track & GPC */}
          <section
            id="do-not-track"
            className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md space-y-3 scroll-mt-24"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-sky-600 flex-shrink-0" />
              <h2 className="font-bold text-slate-900 text-lg">
                4. Do Not Track &amp; Global Privacy Control (GPC)
              </h2>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Because there is no uniform industry standard for responding to
              browser <strong>Do Not Track (DNT)</strong> signals, our platform
              does not respond to DNT signals.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-xs sm:text-sm text-sky-950">
              <strong>Global Privacy Control Support:</strong> We fully
              recognize and honor <strong>Global Privacy Control (GPC)</strong>{" "}
              signals emitted by browsers. When a GPC signal is detected,
              non-essential tracking cookies and advertising pixels are
              automatically disabled.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
