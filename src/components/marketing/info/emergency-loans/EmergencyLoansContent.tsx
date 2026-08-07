import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Info,
  HelpCircle,
  BookOpen,
  XCircle,
  Clock,
  AlertTriangle,
  Zap,
  Check,
  X,
  ShieldAlert,
  Wrench,
  Stethoscope,
  Home,
  Lightbulb,
  Heart,
  DollarSign,
  Building2,
  CreditCard,
  Users,
} from "lucide-react";

const sections = [
  {
    id: "what-counts-as-an-emergency",
    title: "1. What Counts as an Emergency Expense?",
  },
  {
    id: "realistic-funding-timelines",
    title: "2. Realistic Funding Timelines: The Reality of ACH",
  },
  {
    id: "common-emergency-uses",
    title: "3. Common Legitimate Emergency Use Cases",
  },
  {
    id: "alternatives-to-check-first",
    title: "4. Alternatives to Check Before Borrowing",
  },
  {
    id: "when-to-borrow-or-not",
    title: "5. When Borrowing is Right vs. When It Is Not",
  },
  {
    id: "avoiding-emergency-scams",
    title: "6. How to Avoid Emergency-Loan Scams",
  },
  { id: "frequently-asked-questions", title: "7. Frequently Asked Questions" },
];

const faqItems = [
  {
    q: "Can I get an emergency loan funded on the exact same day?",
    a: "While initial application reviews and approvals can occur within hours, actual bank funding speed depends on national ACH clearing cycles and cutoffs. Most legitimate lenders disburse funds that clear into your account within 1 to 2 business days. Be wary of providers claiming instant funding without verifying income.",
  },
  {
    q: "Does requesting an emergency loan impact my credit score?",
    a: "Checking your initial rate or eligibility uses a soft credit inquiry, which does not affect your credit score. A formal hard credit check only takes place if you select a rate offer and finalize your loan agreement.",
  },
  {
    q: "What interest rate will I pay for an emergency loan at Ryer Loans?",
    a: "All approved emergency personal loans at Ryer Loans carry our single fixed rate of 10.00% APR with zero origination fees, zero monthly maintenance charges, and zero prepayment penalties.",
  },
  {
    q: "What alternatives should I evaluate before applying for an emergency loan?",
    a: "Prior to taking on new debt, check for employer pay advances, local utility hardship relief programs, zero-interest medical payment plans, community relief grants, or applying for a 0% introductory APR credit card.",
  },
  {
    q: "How much can I borrow for an urgent expense?",
    a: "Ryer Loans offers fixed-rate unsecured personal loans from $2,000 to $25,000, with flexible repayment terms spanning 12 to 60 months based on your active cash flow and debt-to-income profile.",
  },
  {
    q: "What red flags indicate an emergency loan scam?",
    a: "Watch out for lenders requiring upfront security fees or prepaid gift cards before funding, operators making '100% guaranteed approval' promises, lenders lacking physical address disclosures, or pressure tactics forcing immediate signing.",
  },
];

export default function EmergencyLoansContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 text-slate-700 text-base leading-relaxed">
      {/* FAQ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Product Summary Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent p-6 border border-sky-200/80 shadow-sm">
        <div className="flex items-start gap-4 relative z-10">
          <div className="p-2.5 rounded-xl bg-sky-600 text-white shadow-md shadow-sky-600/20 flex-shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-sky-950 uppercase tracking-wider">
              Emergency Credit Terms Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Ryer Loans provides unsecured emergency personal loans from{" "}
              <span className="font-semibold text-slate-900">
                $2,000 to $25,000
              </span>{" "}
              at a single fixed rate of{" "}
              <span className="font-semibold text-sky-700">10.00% APR</span>{" "}
              with direct ACH deposit in 1–2 business days. Zero origination
              fees and zero prepayment penalties.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-10  items-start">
        {/* Sticky Sidebar Navigation */}

        {/* Main Editorial Column */}
        <div className="space-y-16 min-w-0">
          {/* SECTION 1 */}
          <section
            id="what-counts-as-an-emergency"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Section 01
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                1. What Counts as a True Emergency Expense?
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              An <strong>emergency expense</strong> is an urgent,
              non-discretionary outlay that directly threatens your health,
              shelter, essential transportation, or income stability.
              Recognizing the boundary between an actual emergency and a planned
              or optional expense is vital to protecting your long-term
              financial health.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-950 text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>True Emergency Expenses</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li>
                    • Essential vehicle repairs required to maintain work
                    commute.
                  </li>
                  <li>• Urgent medical treatment or prescription copays.</li>
                  <li>
                    • Critical home repairs (e.g., broken heating, burst pipes).
                  </li>
                  <li>
                    • Impending utility disconnection or eviction prevention.
                  </li>
                  <li>
                    • Unanticipated travel for immediate family bereavement.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-rose-950 text-base">
                  <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  <span>Discretionary / Non-Emergencies</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li>• Optional home upgrades or cosmetic renovations.</li>
                  <li>• Vacation travel, entertainment, or holiday gifts.</li>
                  <li>• Purchasing electronics, clothing, or luxury goods.</li>
                  <li>• Financing non-essential lifestyle purchases.</li>
                  <li>
                    • Covering recurring expenses without a recovery plan.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section
            id="realistic-funding-timelines"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Section 02
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                2. Realistic Funding Timelines: The Truth About "Same-Day"
                Funding
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Online financial markets are filled with claims of "instant
              same-day cash." However, responsible financial institutions must
              comply with federal identity verification, anti-money laundering
              (AML) laws, and bank transfer clearing procedures.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Clock className="w-5 h-5 text-sky-600" />
                <span>
                  How the Automated Clearing House (ACH) Network Operates
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Electronic bank transfers move through the national ACH network,
                which operates in scheduled batch windows on business days.
                While a lender can approve your application within hours,
                account funding is governed by distinct processing cutoff
                windows:
              </p>

              <div className="grid gap-3 sm:grid-cols-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    Same-Day Approval:
                  </strong>
                  <p className="text-slate-600">
                    Applications submitted and fully verified before 10:30 AM
                    EST on a business day may be batch-submitted for
                    late-afternoon clearing.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    Standard Direct Deposit:
                  </strong>
                  <p className="text-slate-600">
                    Most standard ACH transfers complete within 1 business day
                    following agreement verification and signature.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    Weekend &amp; Holiday Shifts:
                  </strong>
                  <p className="text-slate-600">
                    The ACH network does not clear transactions on federal
                    holidays or weekends. Approvals processed late Friday settle
                    on Monday morning.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section
            id="common-emergency-uses"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Section 03
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                3. Common Legitimate Emergency Use Cases
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Vehicle Repairs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engine failures, transmission breakdowns, or brake
                  replacements required to keep your commuting vehicle
                  operational.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Medical Expenses
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unforeseen emergency room bills, urgent dental procedures, or
                  specialist treatments not fully covered by insurance.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Home className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Rent &amp; Housing Protection
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Covering housing obligations during temporary pay disruption
                  to avoid eviction flags or lease default penalties.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Utility Disconnection
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Paying outstanding electric, gas, or municipal water balances
                  to prevent utility shut-offs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2 sm:col-span-2 lg:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Bereavement &amp; Funeral Costs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Managing immediate, unexpected travel and memorial costs
                  during a family loss without relying on high-cost credit
                  cards.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section
            id="alternatives-to-check-first"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Section 04
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                4. Alternatives to Check Before Applying for a Loan
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Taking on new interest obligations should rarely be your first
              response to a financial emergency. Before applying for a personal
              loan, evaluate these non-borrowing or lower-cost alternatives:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <DollarSign className="w-4 h-4 text-sky-600" />
                  <span>1. Employer Payroll Advances</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Many employers and payroll platforms offer earned wage access
                  (EWA) programs allowing you to access wages already earned
                  before your scheduled pay date with minimal or zero fees.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Building2 className="w-4 h-4 text-sky-600" />
                  <span>2. Utility Hardship Programs</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Electric and gas utility providers are regulated to offer
                  hardship payment arrangements, deferred payment agreements, or
                  seasonal shut-off protections.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Stethoscope className="w-4 h-4 text-sky-600" />
                  <span>3. Hospital Payment Plans</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Non-profit healthcare providers are required to offer
                  financial assistance policies (charity care) or zero-interest
                  monthly repayment plans directly through their billing
                  departments.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Users className="w-4 h-4 text-sky-600" />
                  <span>4. Community Assistance Organizations</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Local religious charities, community action agencies, and
                  municipal social services frequently maintain emergency relief
                  funds for rent and utility crises.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5 */}
          <section
            id="when-to-borrow-or-not"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Section 05
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                5. When Borrowing is the Right Call vs. When It Is Not
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-wider">
                  <Check className="w-5 h-5" />
                  <span>When Borrowing Makes Sense</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      You have steady income to handle fixed monthly payments.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      The expense protects your health or primary income source.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      The cost of delayed action exceeds the cost of borrowing
                      interest.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-rose-600 font-bold text-sm uppercase tracking-wider">
                  <X className="w-5 h-5" />
                  <span>When to Avoid Borrowing</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>
                      You have no clear income source to make future payments.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>
                      The loan is intended to pay off existing high-interest
                      debt repeatedly.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>
                      The expense is optional or can be deferred safely.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 6 */}
          <section
            id="avoiding-emergency-scams"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Section 06
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                6. How to Avoid Emergency-Loan Scams
              </h2>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
                <ShieldAlert className="w-5 h-5 text-rose-400" />
                <span>Urgent Financial Scam Protection</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Fraudulent actors frequently target consumers in urgent
                financial situations. Stay protected by recognizing these
                primary scam indicators:
              </p>

              <div className="grid gap-3 sm:grid-cols-2 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <strong className="text-rose-300 block font-bold">
                    1. Upfront "Insurance" Fees:
                  </strong>
                  <p className="text-slate-300">
                    Scammers demand gift cards, wire transfers, or digital
                    payment app transfers prior to releasing loan funds. Real
                    lenders deduct origination fees from proceeds or charge no
                    upfront fees.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <strong className="text-rose-300 block font-bold">
                    2. Guaranteed Approval Claims:
                  </strong>
                  <p className="text-slate-300">
                    Legitimate financial institutions are legally mandated to
                    evaluate borrower repayment capability. No legitimate lender
                    can guarantee approval prior to application review.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <strong className="text-rose-300 block font-bold">
                    3. Pressure to Act Immediately:
                  </strong>
                  <p className="text-slate-300">
                    Scammers force immediate action by claiming rate offers
                    expire within minutes. Legitimate lenders provide time to
                    review loan terms and disclosures.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <strong className="text-rose-300 block font-bold">
                    4. Missing Physical Address:
                  </strong>
                  <p className="text-slate-300">
                    Verify that the operator discloses a valid physical
                    headquarters address and state lending license
                    registrations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: FAQ */}
          <section
            id="frequently-asked-questions"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Section 07
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                7. Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2 hover:border-sky-300 transition-all"
                >
                  <h3 className="font-bold text-slate-900 text-base flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>{item.q}</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-7">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA BLOCK */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-8 sm:p-12 text-white text-center space-y-6 shadow-2xl border border-slate-800">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-xl mx-auto">
              Need Emergency Capital with Transparent Terms?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Check your eligibility in under two minutes with Ryer
              Loans—featuring fixed 10.00% APR terms, no origination fees, and
              1–2 day direct bank ACH deposit.
            </p>
            <div>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition hover:scale-[1.02]"
              >
                <span>Start Application</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
