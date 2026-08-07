import Link from "next/link";
import {
  Calculator,
  ShieldCheck,
  DollarSign,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

const sections = [
  { id: "loan-terms", title: "1. Core Loan Terms" },
  { id: "representative-examples", title: "2. Representative Examples" },
  { id: "other-fees", title: "3. Other Fees That May Apply" },
  { id: "how-interest-works", title: "4. How Interest Works" },
  { id: "military-lending-act", title: "5. Military Lending Act" },
  { id: "state-variations", title: "6. State Variations" },
];

export default function RatesAndFeesContent() {
  const rawPhone = RATE_CONFIG.phone.replace(/[^0-9+]/g, "");

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 text-slate-700 text-base leading-relaxed px-4 sm:px-6 lg:px-8">
      {/* Introduction Notice */}
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-sm">
        <Calculator className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-sky-950 leading-relaxed">
          At Ryer Loans, we believe in complete fee transparency. We charge no
          origination fees, no application fees, and no prepayment penalties.
          Your exact rate and monthly payment are clearly disclosed before you
          sign your loan agreement.
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
          {/* Core Loan Terms */}
          <section id="loan-terms" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              1. Core Loan Terms
            </h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2 text-sm">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-slate-400 tracking-wide">
                    Loan Amounts
                  </span>
                  <p className="font-medium text-slate-900">
                    $2,000 – $25,000{" "}
                    <span className="text-slate-500 font-normal">
                      (in $500 increments)
                    </span>
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-slate-400 tracking-wide">
                    Annual Percentage Rate (APR)
                  </span>
                  <p className="font-medium text-slate-900">
                    {RATE_CONFIG.apr}% Fixed
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-slate-400 tracking-wide">
                    Rate Type
                  </span>
                  <p className="font-medium text-slate-900">
                    Fixed for the life of the loan
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-slate-400 tracking-wide">
                    Repayment Terms
                  </span>
                  <p className="font-medium text-slate-900">12 – 60 Months</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-slate-400 tracking-wide">
                    Payment Frequency
                  </span>
                  <p className="font-medium text-slate-900">Monthly</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-slate-400 tracking-wide">
                    Origination Fee
                  </span>
                  <p className="font-medium text-emerald-600 font-semibold">
                    $0
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-slate-400 tracking-wide">
                    Application Fee
                  </span>
                  <p className="font-medium text-emerald-600 font-semibold">
                    $0
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase text-slate-400 tracking-wide">
                    Prepayment Penalty
                  </span>
                  <p className="font-medium text-emerald-600 font-semibold">
                    $0
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Representative Examples */}
          <section
            id="representative-examples"
            className="space-y-3 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              2. Representative Repayment Examples
            </h2>
            <p className="text-sm text-slate-600">
              The table below illustrates sample monthly payments and interest
              costs across representative loan amounts based on our fixed APR of{" "}
              {RATE_CONFIG.apr}%.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Term
                    </th>
                    <th scope="col" className="px-4 py-3">
                      APR
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Monthly Payment
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Total Interest
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Total Repaid
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-mono text-xs sm:text-sm">
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      $2,000
                    </td>
                    <td className="px-4 py-3">24 mo</td>
                    <td className="px-4 py-3">{RATE_CONFIG.apr}%</td>
                    <td className="px-4 py-3 text-slate-900 font-medium">
                      $92.29
                    </td>
                    <td className="px-4 py-3">$215.06</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      $2,215.06
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      $5,000
                    </td>
                    <td className="px-4 py-3">36 mo</td>
                    <td className="px-4 py-3">{RATE_CONFIG.apr}%</td>
                    <td className="px-4 py-3 text-slate-900 font-medium">
                      $161.34
                    </td>
                    <td className="px-4 py-3">$808.11</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      $5,808.11
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      $10,000
                    </td>
                    <td className="px-4 py-3">36 mo</td>
                    <td className="px-4 py-3">{RATE_CONFIG.apr}%</td>
                    <td className="px-4 py-3 text-slate-900 font-medium">
                      $322.67
                    </td>
                    <td className="px-4 py-3">$1,616.19</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      $11,616.19
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      $15,000
                    </td>
                    <td className="px-4 py-3">48 mo</td>
                    <td className="px-4 py-3">{RATE_CONFIG.apr}%</td>
                    <td className="px-4 py-3 text-slate-900 font-medium">
                      $380.44
                    </td>
                    <td className="px-4 py-3">$3,261.34</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      $18,261.34
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      $25,000
                    </td>
                    <td className="px-4 py-3">60 mo</td>
                    <td className="px-4 py-3">{RATE_CONFIG.apr}%</td>
                    <td className="px-4 py-3 text-slate-900 font-medium">
                      $531.18
                    </td>
                    <td className="px-4 py-3">$6,870.79</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      $31,870.79
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 pt-1">
              *Examples assume all scheduled payments are made on time and no
              late or returned payment fees are incurred. Your individual terms
              are disclosed in your final loan agreement prior to signing.
            </p>
          </section>

          {/* Other Fees */}
          <section id="other-fees" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              3. Other Fees That May Apply
            </h2>
            <p>
              Ryer Loans does not charge hidden or administrative fees. The only
              additional charges that may apply are related to late or returned
              payments:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Fee Type
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Trigger Condition
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Late Payment Fee
                    </td>
                    <td className="px-4 py-3">Varies by state law</td>
                    <td className="px-4 py-3">
                      Assessed if a scheduled payment is not received within the
                      state grace period.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      Returned Payment / NSF Fee
                    </td>
                    <td className="px-4 py-3">Varies by state law</td>
                    <td className="px-4 py-3">
                      Assessed if an automated payment or check is returned
                      unpaid by your bank.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500">
              Fee amounts vary by state regulation and are strictly capped by
              state law. Your final loan agreement explicitly details all fee
              caps applicable to your residence. There are no other fees.
            </p>
          </section>

          {/* How Interest Works */}
          <section id="how-interest-works" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              4. How Interest Works
            </h2>
            <p>
              Interest accrues on a <strong>simple-interest basis</strong> on
              the outstanding principal balance each day. Every payment you make
              is applied first to any unpaid accrued interest, and then to the
              principal balance.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-emerald-950 leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Pay Off Faster &amp; Save:</strong> Paying more than the
                minimum scheduled amount or making payments early directly
                reduces your principal balance faster, lowering total interest
                paid over the life of the loan. There are zero prepayment fees
                or penalty charges for early pay-off.
              </div>
            </div>
          </section>

          {/* Military Lending Act */}
          <section id="military-lending-act" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              5. Military Lending Act (MLA) Disclosure
            </h2>
            <p className="text-sm leading-relaxed">
              Federal law provides important protections to members of the Armed
              Forces and their dependents relating to extensions of consumer
              credit.
            </p>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  In general, the cost of consumer credit to a covered member of
                  the Armed Forces and their dependent may not exceed an{" "}
                  <strong>Annual Percentage Rate (MAPR) of 36%</strong>. This
                  rate includes, as applicable to the credit transaction: costs
                  associated with credit insurance premiums; fees for ancillary
                  products sold in connection with the credit transaction; any
                  application fee charged (other than certain application fees
                  for specified credit transactions or accounts); and any
                  participation fee charged.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500">
              Covered borrowers may also request oral disclosures by calling our
              dedicated toll-free helpline at{" "}
              <a
                href={`tel:${rawPhone}`}
                className="text-sky-600 font-medium hover:underline"
              >
                {RATE_CONFIG.phone}
              </a>
              .
            </p>
          </section>

          {/* State Variations */}
          <section id="state-variations" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              6. State Variations
            </h2>
            <p>
              Maximum loan amounts, interest rates, term availability, and late
              fee caps may vary depending on state lending regulations. Please
              refer to our{" "}
              <Link
                href="/state-disclosures"
                className="text-sky-600 font-medium hover:underline"
              >
                State Disclosures
              </Link>{" "}
              page for specific details relative to your state of residence.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
