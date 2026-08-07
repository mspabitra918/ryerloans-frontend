import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  FileText,
  Globe,
  AlertCircle,
} from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

const sections = [
  { id: "licensing-overview", title: "1. Licensing Overview" },
  { id: "state-licensing-table", title: "2. State Licenses & Limits" },
  { id: "unserviced-states", title: "3. Non-Serviced States" },
  { id: "california-notice", title: "4. California Residents Notice" },
  { id: "state-notices", title: "5. Additional State Notices" },
  { id: "nmls-registry", title: "6. NMLS Consumer Access" },
];

interface StateLicense {
  state: string;
  status: string;
  licenseType: string;
  licenseNumber: string;
  amountRange: string;
  maxApr: string;
  notes: string;
}

const stateLicenses: StateLicense[] = [
  {
    state: "California (CA)",
    status: "Active",
    licenseType: "California Financing Law License",
    licenseNumber: "[Pending License #]",
    amountRange: "$2,000 – $25,000",
    maxApr: `${RATE_CONFIG.apr}%`,
    notes: "CFL License required; see California notice below",
  },
  // Add additional active state licenses here as they are granted
];

const nonServicedStates = [
  "Alabama",
  "Alaska",
  "Arkansas",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export default function StateDisclosuresContent() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 text-slate-700 text-base leading-relaxed px-4 sm:px-6 lg:px-8">
      {/* Introduction Notice */}
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-sm">
        <Building2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-sky-950 leading-relaxed">
          Ryer Loans operates in strict compliance with federal and state
          lending regulations. We only accept applications and issue consumer
          loans to residents located in states where we hold an active lending
          license or statutory authorization.
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
          {/* Licensing Overview */}
          <section id="licensing-overview" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              1. Licensing Overview
            </h2>
            <p>
              Ryer Loans is licensed or authorized to extend personal loans in
              the states detailed below. Loan availability, minimum and maximum
              borrowing limits, interest rates, and loan terms are determined by
              individual state statutes and regulations.
            </p>
          </section>

          {/* State Licensing Table */}
          <section
            id="state-licensing-table"
            className="space-y-3 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              2. Active State Licenses &amp; Terms
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      State
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-3">
                      License Type
                    </th>
                    <th scope="col" className="px-4 py-3">
                      License #
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Loan Amount
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Max APR
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                  {stateLicenses.map((lic) => (
                    <tr key={lic.state} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {lic.state}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
                          {lic.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">{lic.licenseType}</td>
                      <td className="px-4 py-3 font-mono">
                        {lic.licenseNumber}
                      </td>
                      <td className="px-4 py-3 font-mono">{lic.amountRange}</td>
                      <td className="px-4 py-3 font-mono">{lic.maxApr}</td>
                      <td className="px-4 py-3 text-xs text-slate-500">
                        {lic.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Unserviced States */}
          <section id="unserviced-states" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              3. States Where We Do Not Currently Lend
            </h2>
            <p className="text-sm text-slate-600">
              Ryer Loans does not currently originate consumer loans in U.S.
              territories or the following states:
            </p>
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-mono">
                {nonServicedStates.join(" • ")}
              </p>
            </div>
          </section>

          {/* California Notice */}
          <section id="california-notice" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              4. California Residents Notice
            </h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
              <p className="text-sm leading-relaxed">
                Loans made or arranged pursuant to a California Financing Law
                license, License <strong>[Pending License #]</strong>, issued by
                the California Department of Financial Protection and Innovation
                (DFPI).
              </p>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs space-y-2">
                <span className="font-semibold text-slate-900 block">
                  Department of Financial Protection and Innovation Contact:
                </span>
                <p className="text-slate-600">
                  California residents may file complaints or verify license
                  standing with the DFPI online at{" "}
                  <a
                    href="https://dfpi.ca.gov"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 underline"
                  >
                    dfpi.ca.gov
                  </a>{" "}
                  or by calling toll-free at 1-866-275-2677.
                </p>
              </div>
            </div>
          </section>

          {/* Additional State Notices */}
          {/* <section id="state-notices" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              5. Additional Statutory State Notices
            </h2>
            <p className="text-sm text-slate-600">
              State law requires specific disclosures to be displayed to
              applicants residing in certain jurisdictions. These notices will
              be added here as licensing expands to those states.
            </p>
          </section> */}

          {/* NMLS Registry */}
          {/* <section
            id="nmls-registry"
            className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md space-y-3 scroll-mt-24"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-sky-600 flex-shrink-0" />
              <h2 className="font-bold text-slate-900 text-lg">
                6. NMLS Consumer Access Verification
              </h2>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>NMLS ID: [Pending NMLS #]</strong>
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              You can independently verify our financial services licensing
              credentials, statutory permissions, and corporate regulatory
              standing nationwide via the Nationwide Multistate Licensing System
              (NMLS) Consumer Access portal at{" "}
              <a
                href="https://www.nmlsconsumeraccess.org"
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 font-medium underline"
              >
                nmlsconsumeraccess.org
              </a>
              .
            </p>
          </section> */}
        </div>
      </div>
    </div>
  );
}
