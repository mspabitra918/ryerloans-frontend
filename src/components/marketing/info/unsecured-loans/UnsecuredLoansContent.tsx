import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Info,
  HelpCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Zap,
  Check,
  X,
  ShieldAlert,
  Building2,
  CreditCard,
  Users,
  Lock,
  Unlock,
  FileSignature,
  Car,
  AlertOctagon,
  Scale,
  DollarSign,
  TrendingUp,
} from "lucide-react";

const sections = [
  {
    id: "secured-vs-unsecured",
    title: "1. Secured vs. Unsecured Loans Explained",
  },
  {
    id: "signature-loan-meaning",
    title: "2. Why 'Signature Loan' Means the Same Thing",
  },
  {
    id: "what-backs-the-loan",
    title: "3. What Backs the Loan Instead of Collateral",
  },
  {
    id: "vehicle-ownership-question",
    title: "4. Why We Ask About Vehicles Without Taking Collateral",
  },
  {
    id: "what-happens-on-default",
    title: "5. What Happens on Default: Credit, Collections & Legal Reality",
  },
  { id: "frequently-asked-questions", title: "6. Frequently Asked Questions" },
];

const faqItems = [
  {
    q: "Will Ryer Loans take my car or home if I miss a loan payment?",
    a: "No. Our loans are 100% unsecured personal loans. We do not place liens on your vehicle, house, or any other physical property. However, missed payments will impact your credit score and incur collections activity.",
  },
  {
    q: "Is a 'signature loan' different from an unsecured personal loan?",
    a: "No, they are functionally identical terms. 'Signature loan' is traditional banking terminology for an unsecured loan that relies entirely on your written promise (signature) and creditworthiness rather than physical collateral.",
  },
  {
    q: "Why do you ask if I own a vehicle on the application if it isn't collateral?",
    a: "Vehicle ownership serves as a financial stability indicator in underwriting. Owning a vehicle outright eliminates monthly auto loan expenses from your debt-to-income (DTI) calculation and demonstrates asset accumulation.",
  },
  {
    q: "What interest rate will I pay for an unsecured loan at Ryer Loans?",
    a: "Every approved unsecured personal loan at Ryer Loans carries a single fixed rate of 10.00% APR with zero origination fees, zero monthly maintenance fees, and zero prepayment penalties.",
  },
  {
    q: "How much can I borrow on an unsecured basis?",
    a: "We offer fixed-rate unsecured personal loans from $2,000 to $25,000 with flexible repayment terms spanning 12 to 60 months based on your verified monthly cash flow.",
  },
  {
    q: "What happens legally if I am completely unable to repay my unsecured loan?",
    a: "If an account enters severe default (typically 120+ days delinquent), it may be charged off and transferred to internal collections or a third-party agency. Lenders retain the legal right to seek a civil court judgment for unpaid principal, but no physical property is ever repossessed directly.",
  },
];

export default function UnsecuredLoansContent() {
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
              Unsecured Credit Terms Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Ryer Loans provides unsecured personal loans from{" "}
              <span className="font-semibold text-slate-900">
                $2,000 to $25,000
              </span>{" "}
              at a single fixed rate of{" "}
              <span className="font-semibold text-sky-700">10.00% APR</span>. No
              collateral required, zero origination fees, zero monthly
              maintenance charges, and zero prepayment penalties.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-10 items-start">
        <div className="space-y-16 min-w-0">
          {/* SECTION 1 */}
          <section id="secured-vs-unsecured" className="space-y-6 scroll-mt-24">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                1. Secured vs. Unsecured Loans Explained
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              The fundamental distinction between secured and unsecured credit
              lies in <strong>collateral</strong>—a physical or financial asset
              pledged to the lender to guarantee repayment. Understanding this
              trade-off is critical when selecting the right financing
              structure.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                  <Lock className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span>Secured Loans</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Backed by tangible property such as a home (mortgage/HELOC),
                  vehicle (auto loan), or savings account (secured CD loan).
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 border-t border-slate-200/60 pt-3">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Easier approval for lower credit scores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span>Lender can repossess asset upon default</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span>Requires appraisal or titling paperwork</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-sky-50/50 border border-sky-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-2 font-bold text-sky-950 text-base">
                  <Unlock className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  <span>Unsecured Personal Loans</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Issued without liens or property pledges. Granted entirely on
                  your verified income, cash flow, and creditworthiness.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 border-t border-sky-200/60 pt-3">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Zero risk of property or vehicle seizure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Faster application and funding timelines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>No appraisal, titling, or legal fee add-ons</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section
            id="signature-loan-meaning"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                2. Why "Signature Loan" Means the Exact Same Thing
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              When searching for financing options, you will frequently
              encounter the term <strong>"signature loan."</strong> In modern
              consumer finance, a signature loan and an unsecured personal loan
              are functionally identical.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <FileSignature className="w-5 h-5 text-sky-600" />
                <span>The Origin of the Term</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Historically, traditional community banks issued
                non-collateralized loans based solely on a customer's good
                standing and their physical signature on a promissory note. The
                phrase "backed only by your signature" became shorthand for
                loans that required no physical property pledges.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 text-xs pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    Traditional Banking Term:
                  </strong>
                  <p className="text-slate-600">
                    "Signature Loan" / "Good Faith Loan"
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    Modern Fintech Term:
                  </strong>
                  <p className="text-slate-600">
                    "Unsecured Personal Installment Loan"
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="what-backs-the-loan" className="space-y-6 scroll-mt-24">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                3. What Backs the Loan Instead of Collateral?
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              If an unsecured loan carries no physical asset backing, how do
              lenders evaluate risk? Instead of relying on property,
              underwriters evaluate four core financial pillars to determine
              creditworthiness:
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Verified Income
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consistent earnings from employment, self-employment, or
                  pensions confirming your ongoing capacity to service monthly
                  installments.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Debt-to-Income (DTI)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The proportion of your monthly gross income dedicated to
                  existing obligations. A lower DTI indicates healthy cash flow
                  buffer.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Credit History
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your track record of managing prior credit accounts, payment
                  punctuality, and revolving credit utilization rates over time.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Banking Stability
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Active checking account history demonstrating positive
                  balances, regular deposits, and absence of excessive overdraft
                  events.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section
            id="vehicle-ownership-question"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                4. Why We Ask About Vehicle Ownership Without Taking Collateral
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              During the application process at Ryer Loans, you may notice a
              question asking whether you own a vehicle outright, lease, or have
              an active auto loan. Borrowers sometimes worry this means we are
              placing a lien on their vehicle.
            </p>

            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm uppercase tracking-wider">
                <Car className="w-5 h-5 text-sky-400" />
                <span>The Role of Vehicle Questions in Underwriting</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                We <strong>never</strong> take vehicle titles or place liens on
                your property. Vehicle questions are used strictly as
                underwriting risk indicators:
              </p>

              <div className="grid gap-3 sm:grid-cols-2 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <strong className="text-sky-300 block font-bold">
                    1. Cash Flow Adjustment:
                  </strong>
                  <p className="text-slate-300">
                    Owning a car outright means you have no monthly auto
                    payment, leaving significantly more unencumbered cash flow
                    to cover your personal loan installment.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <strong className="text-sky-300 block font-bold">
                    2. Transportation Reliability:
                  </strong>
                  <p className="text-slate-300">
                    Access to reliable transportation correlates strongly with
                    job retention and uninterrupted employment income.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <strong className="text-sky-300 block font-bold">
                    3. Net Asset Profile:
                  </strong>
                  <p className="text-slate-300">
                    Vehicle equity serves as a general indicator of personal
                    financial resilience without encumbering the vehicle itself.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <strong className="text-sky-300 block font-bold">
                    4. Zero Lien Registration:
                  </strong>
                  <p className="text-slate-300">
                    Unlike auto title lenders, Ryer Loans never registers a lien
                    with the DMV or requests physical title certificates.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5 */}
          <section
            id="what-happens-on-default"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                5. What Happens on Default: Credit, Collections & Legal Reality
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              "Unsecured" does not mean "without consequence." While a lender
              cannot sent a tow truck to take a vehicle or initiate foreclosure
              on a home, failing to pay an unsecured loan triggers serious
              credit and legal outcomes.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-6">
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <AlertOctagon className="w-5 h-5 text-rose-600" />
                  <span>The Progression of Unsecured Default</span>
                </h3>

                <div className="grid gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-200/80 space-y-1">
                    <strong className="text-rose-950 block font-bold">
                      30–60 Days Delinquent: Credit Bureau Reporting
                    </strong>
                    <p className="text-slate-600">
                      Missed payments are reported to major credit bureaus
                      (Equifax, Experian, TransUnion), causing immediate credit
                      score reductions (often 60–100+ points). Late fees apply.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-200/80 space-y-1">
                    <strong className="text-rose-950 block font-bold">
                      90–120 Days Delinquent: Charge-Off & Collections
                    </strong>
                    <p className="text-slate-600">
                      The lender writes off the debt as a loss and transfers or
                      sells the account to a debt collection agency. Collections
                      accounts remain on your credit history for 7 years.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-200/80 space-y-1">
                    <strong className="text-rose-950 block font-bold">
                      180+ Days: Potential Civil Litigation
                    </strong>
                    <p className="text-slate-600">
                      Collection agencies or lenders may file a civil suit for
                      debt recovery. If awarded a court judgment, they may
                      pursue legally sanctioned wage garnishments or bank
                      account levies according to state law.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Financial Hardship Protection:</strong> If you face
                  unexpected income loss, contact your lender immediately. Most
                  legitimate lenders prefer offering hardship modifications,
                  temporary forbearance, or revised payment schedules rather
                  than initiating collection actions.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6: FAQ */}
          <section
            id="frequently-asked-questions"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                6. Frequently Asked Questions
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
              Ready for Simple, Unsecured Financing?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Check your rate in under two minutes with Ryer Loans—featuring
              fixed 10.00% APR terms, zero collateral requirement, and no
              origination fees.
            </p>
            <div>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition hover:scale-[1.02]"
              >
                <span>Check Your Rate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
