import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Info,
  AlertTriangle,
  HelpCircle,
  BookOpen,
  ChevronRight,
  XCircle,
  TrendingUp,
  Activity,
  FileSearch,
  Scale,
  ShieldAlert,
  Check,
  X,
  CreditCard,
  Building,
  UserCheck,
} from "lucide-react";

const sections = [
  { id: "what-bad-credit-means", title: "1. What 'Bad Credit' Actually Means" },
  {
    id: "lagging-indicator",
    title: "2. Why Your Score is a Lagging Indicator",
  },
  { id: "what-we-look-at-instead", title: "3. What We Look at Instead" },
  {
    id: "no-minimum-cutoff",
    title: "4. Why We Don't Use a Minimum Score Cutoff",
  },
  { id: "what-we-cannot-promise", title: "5. What We Cannot Promise" },
  {
    id: "improve-your-odds",
    title: "6. How to Improve Your Odds Before Applying",
  },
  {
    id: "predatory-warning-signs",
    title: "7. Warning Signs of a Predatory Lender",
  },
  {
    id: "bad-credit-options-compared",
    title: "8. Bad Credit Loan Options Compared",
  },
  { id: "frequently-asked-questions", title: "9. Frequently Asked Questions" },
];

const faqItems = [
  {
    q: "Can I get approved for a personal loan with a 500 or 550 credit score?",
    a: "Yes. Ryer Loans does not enforce a rigid minimum credit score cutoff. We evaluate your active cash flow, income stability, debt-to-income ratio, and banking consistency rather than automatically rejecting applications based on historical credit bureau scores.",
  },
  {
    q: "Does Ryer Loans charge a higher APR if I have bad credit?",
    a: "No. Ryer Loans operates on a single-rate model. All approved borrowers receive our published fixed 10.00% APR regardless of credit score tier. We do not use risk-based pricing to inflate interest rates on low-credit applicants.",
  },
  {
    q: "Will checking my rate affect my bad credit score?",
    a: "Initial eligibility checks and soft inquiries do not impact your credit score. A formal credit inquiry only occurs if you proceed to review and sign your final loan agreement.",
  },
  {
    q: "Is approval guaranteed if I meet the basic income requirements?",
    a: "No company can guarantee loan approval. Guaranteed approval claims are a primary warning sign of fraudulent or predatory lending. Approval depends on verifying active income, deposit history, identity, and maintaining a sustainable debt-to-income ratio.",
  },
  {
    q: "How fast are funds disbursed for bad credit personal loans?",
    a: "Once approved and digitally signed, loan proceeds ($2,000 to $25,000) are disbursed directly into your verified bank account via direct deposit ACH, typically completing within 1 to 2 business days.",
  },
  {
    q: "How can I increase my chances of approval before I submit an application?",
    a: "To maximize your approval odds, keep your bank account free of overdrafts and returned items for at least 60 days, verify that your credit reports contain no duplicate error records, pay down minor existing revolving balances to lower your DTI, and apply only for the specific loan amount required.",
  },
];

export default function PersonalLoansBadCreditContent() {
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

      {/* Advisory Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent p-6 border border-sky-200/80 shadow-sm">
        <div className="flex items-start gap-4 relative z-10">
          <div className="p-2.5 rounded-xl bg-sky-600 text-white shadow-md shadow-sky-600/20 flex-shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-sky-950 uppercase tracking-wider">
              Transparent Credit Evaluation Policy
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Ryer Loans evaluates all credit profiles without automated score
              cutoffs. Approved personal loans range from{" "}
              <span className="font-semibold text-slate-900">
                $2,000 to $25,000
              </span>{" "}
              at our standard{" "}
              <span className="font-semibold text-sky-700">
                10.00% Fixed APR
              </span>{" "}
              with zero origination fees or prepayment penalties.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-10  items-start">
        {/* Main Editorial Column */}
        <div className="space-y-16 min-w-0">
          {/* SECTION 1 */}
          <section
            id="what-bad-credit-means"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                1. What &ldquo;Bad Credit&ldquo; Actually Means — FICO Bands
                &amp; Distribution
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              In modern consumer finance, &ldquo;bad credit&ldquo; is an
              informal term broadly applied to credit scores falling below
              standard prime underwriting thresholds. The most widely referenced
              model, FICO® Score 8, categorizes consumer credit files across
              five distinct tiers:
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1.5">
                <span className="text-xs font-bold text-rose-600 uppercase font-mono tracking-wider">
                  Deep Poor
                </span>
                <div className="text-xl font-bold text-slate-900">
                  300 – 579
                </div>
                <p className="text-xs text-slate-500">~11% of U.S. Consumers</p>
                <p className="text-xs text-slate-600 pt-1 border-t border-slate-100">
                  Severe delinquencies, charge-offs, or recent public records.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1.5">
                <span className="text-xs font-bold text-amber-600 uppercase font-mono tracking-wider">
                  Fair / Subprime
                </span>
                <div className="text-xl font-bold text-slate-900">
                  580 – 669
                </div>
                <p className="text-xs text-slate-500">~17% of U.S. Consumers</p>
                <p className="text-xs text-slate-600 pt-1 border-t border-slate-100">
                  Multiple late payments, elevated utilization, or thin file
                  depth.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1.5">
                <span className="text-xs font-bold text-sky-600 uppercase font-mono tracking-wider">
                  Good
                </span>
                <div className="text-xl font-bold text-slate-900">
                  670 – 739
                </div>
                <p className="text-xs text-slate-500">~21% of U.S. Consumers</p>
                <p className="text-xs text-slate-600 pt-1 border-t border-slate-100">
                  Consistent payment performance with moderate balances.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1.5">
                <span className="text-xs font-bold text-emerald-600 uppercase font-mono tracking-wider">
                  Very Good
                </span>
                <div className="text-xl font-bold text-slate-900">
                  740 – 799
                </div>
                <p className="text-xs text-slate-500">~25% of U.S. Consumers</p>
                <p className="text-xs text-slate-600 pt-1 border-t border-slate-100">
                  Low revolving debt ratios and strong account tenure.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1.5 sm:col-span-2 lg:col-span-2">
                <span className="text-xs font-bold text-emerald-700 uppercase font-mono tracking-wider">
                  Exceptional
                </span>
                <div className="text-xl font-bold text-slate-900">
                  800 – 850
                </div>
                <p className="text-xs text-slate-500">~26% of U.S. Consumers</p>
                <p className="text-xs text-slate-600 pt-1 border-t border-slate-100">
                  Flawless payment history spanning extended timeframes.
                </p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Over <strong>28% of American adults</strong> (more than 70 million
              individuals) sit within the Poor and Fair credit tiers.
              Traditional tier-based algorithms automatically filter these
              applicants out or penalize them with inflated interest rates
              exceeding 30% APR.
            </p>
          </section>

          {/* SECTION 2 */}
          <section id="lagging-indicator" className="space-y-6 scroll-mt-24">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                2. Why Your Credit Score is a Lagging Indicator of Your Finances
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Credit scores operate like a rear-view mirror. They measure
              historical credit events over a 7-to-10 year window rather than
              real-time capacity to handle monthly expenses.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  The Time-Lag Penalty
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A medical emergency, job transition, or divorce two years ago
                  can drop a credit score by 100+ points. Even if your earnings
                  recover completely, your credit score can remain depressed for
                  years.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <FileSearch className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Lack of Cash Flow Data
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Traditional credit bureau reports record debt usage, but
                  completely ignore your liquid cash savings, wage growth, rent
                  payments, and steady bank account balances.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section
            id="what-we-look-at-instead"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                3. What We Look at Instead: Cash Flow &amp; Financial Stability
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              To evaluate borrowing capacity accurately, Ryer Loans uses
              cash-flow underwriting focused on five real-time financial health
              indicators:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold text-sky-600 font-mono uppercase tracking-wider">
                  Metric 01
                </span>
                <h3 className="font-bold text-slate-900 text-base">
                  Net Income Stability
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consistent direct deposits from employment, self-employment,
                  or verified recurring revenue sources.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold text-sky-600 font-mono uppercase tracking-wider">
                  Metric 02
                </span>
                <h3 className="font-bold text-slate-900 text-base">
                  Deposit Consistency
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Regular inflows into primary checking accounts over a rolling
                  60-to-90 day evaluation period.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold text-sky-600 font-mono uppercase tracking-wider">
                  Metric 03
                </span>
                <h3 className="font-bold text-slate-900 text-base">
                  Debt-to-Income (DTI) Ratio
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your current monthly debt obligations weighed against income
                  to confirm headroom for new payments.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold text-sky-600 font-mono uppercase tracking-wider">
                  Metric 04
                </span>
                <h3 className="font-bold text-slate-900 text-base">
                  Low Overdraft Frequency
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A clean banking record free from chronic NSF (non-sufficient
                  funds) flags or account negative balances.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="no-minimum-cutoff" className="space-y-6 scroll-mt-24">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                4. Why We Don&apos;t Use a Minimum Score Cutoff
              </h2>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                <span>Inclusive Underwriting Framework</span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Automated credit cutoffs disqualify millions of creditworthy
                individuals who possess strong current earnings. By evaluating
                real income and active bank statement histories, we look beyond
                static three-digit scores.
              </p>
              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">
                    10.00% Fixed APR
                  </div>
                  <div className="text-xs text-slate-400">
                    Equal rates for all approved borrowers • $2,000–$25,000
                  </div>
                </div>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-lg transition"
                >
                  <span>View Eligibility Standards</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* SECTION 5 */}
          <section
            id="what-we-cannot-promise"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                5. What We Cannot Promise: Plain Statement on Approval
              </h2>
            </div>

            <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-3">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                <ShieldAlert className="w-5 h-5 text-rose-600 flex-shrink-0" />
                <span>Approval Is Never Guaranteed</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Ryer Loans does not offer &ldquo;guaranteed approval.&ldquo; Any
                platform or website making guaranteed approval promises is
                operating either illegally or through predatory fee-harvesting
                mechanisms. Responsible lending requires verifying that every
                loan extended aligns with a borrower&apos;s actual ability to
                repay without causing financial distress.
              </p>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="improve-your-odds" className="space-y-6 scroll-mt-24">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                6. How to Improve Your Odds Before Applying
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>1. Avoid Overdrafts for 60 Days</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Keep your primary checking account free of negative balances
                  and NSF charges. Consistent positive balances are a key
                  underwriting metric.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>2. Lower Your Active DTI</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pay down small revolving credit balances to reduce monthly
                  debt obligations relative to your overall gross income.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>3. Correct Bureau Errors</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Request free credit reports at AnnualCreditReport.com and
                  dispute duplicate collection entries or outdated delinquency
                  flags.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>4. Request Only Needed Funds</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Apply for the exact dollar amount required. Lower requested
                  principal amounts carry lower monthly obligations and improve
                  approval odds.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 7 */}
          <section
            id="predatory-warning-signs"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                7. Warning Signs of a Predatory Bad-Credit Lender
              </h2>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-xl">
              <p className="text-slate-300 text-sm leading-relaxed">
                Borrowers with low credit scores are often targeted by predatory
                operators. Protect yourself by recognizing these core red flags:
              </p>

              <div className="grid gap-3 sm:grid-cols-2 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">
                      Demanding Upfront Insurance Fees:
                    </strong>
                    Legitimate lenders never ask for prepaid fee cards or
                    upfront wire transfers prior to loan disbursement.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">
                      No Physical Office or Licensing:
                    </strong>
                    Verify state regulatory licenses and ensure a valid
                    corporate address is clearly displayed.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">
                      Triple-Digit Interest Rates:
                    </strong>
                    Avoid payday lenders or auto-title lenders charging
                    effective annual rates of 300% to 700% APR.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">
                      High-Pressure Signing Tactics:
                    </strong>
                    Reputable institutions give you ample time to review terms
                    and state disclosures without pressure.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8 */}
          <section
            id="bad-credit-options-compared"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                8. Bad Credit Loan Options Compared
              </h2>
            </div>

            <div className="overflow-hidden border border-slate-200/80 rounded-2xl shadow-sm bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white font-semibold">
                      <th className="p-4">Option</th>
                      <th className="p-4">Average APR</th>
                      <th className="p-4">Collateral</th>
                      <th className="p-4">Key Advantage</th>
                      <th className="p-4">Main Drawback</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="bg-sky-50/50 hover:bg-sky-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-sky-500" />
                        Ryer Personal Loan
                      </td>
                      <td className="p-4 font-mono font-bold text-emerald-600">
                        10.00% Fixed
                      </td>
                      <td className="p-4">None</td>
                      <td className="p-4">Fixed rate, predictable payments</td>
                      <td className="p-4">Requires verifiable income</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 font-semibold text-slate-900">
                        Secured Personal Loan
                      </td>
                      <td className="p-4 font-mono">12.00% – 24.00%</td>
                      <td className="p-4">Savings Account / CD</td>
                      <td className="p-4">Easier approval for low credit</td>
                      <td className="p-4">Assets locked during term</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 font-semibold text-slate-900">
                        Credit Union PAL
                      </td>
                      <td className="p-4 font-mono">18.00% Max</td>
                      <td className="p-4">None</td>
                      <td className="p-4">Capped interest rates</td>
                      <td className="p-4">Requires credit union membership</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 font-semibold text-slate-900">
                        Co-signed Personal Loan
                      </td>
                      <td className="p-4 font-mono">10.00% – 18.00%</td>
                      <td className="p-4">None</td>
                      <td className="p-4">
                        Leverages co-signer&apos;s credit profile
                      </td>
                      <td className="p-4">
                        Co-signer shares full financial liability
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 font-semibold text-slate-900">
                        Payday / Title Loan
                      </td>
                      <td className="p-4 font-mono text-rose-600 font-bold">
                        300% – 700%+
                      </td>
                      <td className="p-4">Vehicle / Next Check</td>
                      <td className="p-4">Fast funding access</td>
                      <td className="p-4">Predatory costs and debt traps</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 9: FAQ */}
          <section
            id="frequently-asked-questions"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                9. Frequently Asked Questions
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
              Ready to Apply with All Credit Considered?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Check your eligibility in under two minutes with Ryer
              Loans—featuring zero origination fees and a simple fixed 10.00%
              APR.
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
