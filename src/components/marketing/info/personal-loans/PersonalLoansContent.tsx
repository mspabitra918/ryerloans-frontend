import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Info,
  DollarSign,
  Briefcase,
  Building2,
  FileText,
  AlertTriangle,
  Clock,
  HelpCircle,
  Percent,
  Calculator,
  ChevronRight,
  Sparkles,
  BookOpen,
  XCircle,
} from "lucide-react";

const sections = [
  {
    id: "what-is-a-personal-loan",
    title: "1. What a Personal Loan Actually Is",
  },
  {
    id: "comparing-credit-alternatives",
    title: "2. Personal Loans vs. Alternatives",
  },
  {
    id: "what-determines-your-rate",
    title: "3. Rates & Ryer's Flat Rate Model",
  },
  { id: "real-cost-of-borrowing", title: "4. Worked Cost Examples" },
  { id: "what-lenders-look-at", title: "5. What Underwriters Look At" },
  {
    id: "how-to-compare-offers",
    title: "6. How to Compare Offers Effectively",
  },
  { id: "common-mistakes-to-avoid", title: "7. Common Borrowing Mistakes" },
  { id: "frequently-asked-questions", title: "8. Frequently Asked Questions" },
];

const faqItems = [
  {
    q: "How does a fixed 10.00% APR personal loan differ from a credit card?",
    a: "A fixed 10.00% APR personal loan provides a lump sum with a set payoff date and unchanging monthly payments. Credit cards use compound interest with variable APRs—often exceeding 21% according to Federal Reserve data—which fluctuate based on the Prime Rate and recalculate daily on remaining balances.",
  },
  {
    q: "Are there any hidden origination fees or prepayment penalties at Ryer Loans?",
    a: "No. Ryer Loans charges zero origination fees, zero administrative fees, zero check-processing fees, and zero prepayment penalties. If you pay off your loan early, you save on interest with no penalty.",
  },
  {
    q: "What credit score do I need to qualify for a personal loan?",
    a: "Traditional personal loan lenders typically evaluate credit scores alongside debt-to-income (DTI) ratios. At Ryer Loans, all approved applicants receive the exact same 10.00% APR regardless of credit tier, provided they meet core income, identity, and banking criteria.",
  },
  {
    q: "How quickly can I receive personal loan funds once approved?",
    a: "Once your application, banking details, and identity documents are verified and signed, funds are disbursed directly to your verified bank account via ACH. Disbursement typically completes within 1 to 2 business days.",
  },
  {
    q: "Will checking my rate or applying hurt my credit score?",
    a: "Initial rate checks and soft credit inquiries do not affect your credit score. If you choose to accept a loan offer and complete final verification, a standard credit inquiry may be performed.",
  },
  {
    q: "How is the monthly payment calculated on a $10,000 loan?",
    a: "Monthly payments are calculated using standard simple-interest amortization formulas based on principal, term length, and APR. At a fixed 10.00% APR over a 36-month term, a $10,000 loan results in a fixed monthly payment of $322.67.",
  },
];

export default function PersonalLoansContent() {
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

      {/* Top Advisory Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent p-6 border border-sky-200/80 shadow-sm">
        <div className="flex items-start gap-4 relative z-10">
          <div className="p-2.5 rounded-xl bg-sky-600 text-white shadow-md shadow-sky-600/20 flex-shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-sky-950 uppercase tracking-wider">
              Transparent Borrowing Guarantee
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Ryer Loans offers simple, fixed online personal loans from{" "}
              <span className="font-semibold text-slate-900">
                $2,000 to $25,000
              </span>{" "}
              at a single published fixed rate of{" "}
              <span className="font-semibold text-sky-700">10.00% APR</span>{" "}
              with zero origination fees. Always review loan terms and evaluate
              total finance costs prior to committing to credit.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-10  items-start">
        {/* Sticky Table of Contents Navigation */}

        {/* Main Content Column */}
        <div className="space-y-16 min-w-0">
          {/* SECTION 1 */}
          <section
            id="what-is-a-personal-loan"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                1. What a Personal Loan Actually Is
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              A personal loan is a binding credit agreement between a borrower
              and a licensed financial institution. Unlike credit cards or home
              equity lines of credit (HELOCs), personal loans feature four
              distinct pillars:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-sky-300 transition-all space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Unsecured Debt
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Requires zero collateral (such as your house or car). Loan
                  approval is based entirely on creditworthiness and income
                  stability.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-sky-300 transition-all space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Lump-Sum Disbursement
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The full loan amount is deposited straight into your bank
                  account in one single payment upon approval and verification.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-sky-300 transition-all space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Percent className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Fixed Interest Rate
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your interest rate stays locked for the entire loan life,
                  ensuring your monthly payments never unexpectedly increase.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-sky-300 transition-all space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Fixed Repayment Schedule
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Amortized over a set period (such as 36 months) so you know
                  the exact date your balance will reach zero.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500 flex flex-wrap gap-4">
              <span>Related Guides:</span>
              <Link
                href="/personal-loans/debt-consolidation"
                className="text-sky-600 font-semibold hover:underline inline-flex items-center gap-1"
              >
                Debt Consolidation Strategies{" "}
                <ChevronRight className="w-3 h-3" />
              </Link>
              <Link
                href="/how-it-works"
                className="text-sky-600 font-semibold hover:underline inline-flex items-center gap-1"
              >
                Application Workflow <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </section>

          {/* SECTION 2 */}
          <section
            id="comparing-credit-alternatives"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                2. Personal Loan vs. Credit Card vs. HELOC vs. Payday Loan
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Before taking on debt, it's essential to evaluate how loan options
              compare in terms of collateral requirements, interest rate
              structures, and overall financial risk.
            </p>

            <div className="overflow-hidden border border-slate-200/80 rounded-2xl shadow-sm bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white font-semibold">
                      <th className="p-4">Borrowing Method</th>
                      <th className="p-4">Collateral</th>
                      <th className="p-4">Rate Type</th>
                      <th className="p-4">Average Market APR</th>
                      <th className="p-4">Primary Risk Factor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="bg-sky-50/50 hover:bg-sky-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-sky-500" />
                        Ryer Personal Loan
                      </td>
                      <td className="p-4">None</td>
                      <td className="p-4 font-medium text-slate-900">Fixed</td>
                      <td className="p-4 font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded w-fit">
                        10.00% Fixed APR
                      </td>
                      <td className="p-4 text-slate-600">
                        Standard credit reporting if missed
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 font-semibold text-slate-900">
                        Credit Card
                      </td>
                      <td className="p-4">None (Unsecured)</td>
                      <td className="p-4">Variable</td>
                      <td className="p-4 font-mono text-slate-700">
                        21.59% Avg. (Fed G.19)
                      </td>
                      <td className="p-4 text-slate-600">
                        Daily compound interest spiral
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 font-semibold text-slate-900">
                        HELOC
                      </td>
                      <td className="p-4">Home Equity</td>
                      <td className="p-4">Variable</td>
                      <td className="p-4 font-mono text-slate-700">
                        8.50% – 12.50%
                      </td>
                      <td className="p-4 text-slate-600">
                        Foreclosure risk upon default
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 font-semibold text-slate-900">
                        Payday Loan
                      </td>
                      <td className="p-4">Next Paycheck</td>
                      <td className="p-4">Fixed Fee</td>
                      <td className="p-4 font-mono text-rose-600 font-bold">
                        390% – 780% APR
                      </td>
                      <td className="p-4 text-slate-600">
                        Predatory fee rollover traps
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section
            id="what-determines-your-rate"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                3. What Determines Your Rate at Most Lenders — And Why Ryer
                Publishes One
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Most lenders use risk-based pricing algorithms. They advertise
              rates "as low as 6.99%," but typical borrowers often receive much
              higher offers—frequently between 18% and 35.99% APR—after
              submitting an application and undergoing a hard credit inquiry.
            </p>

            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>The Ryer Transparent Single-Rate Guarantee</span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At Ryer Loans, we eliminate pricing surprises. We don't tier
                interest rates based on credit scores. Every single qualified
                borrower receives the exact same, publicly posted rate:
              </p>
              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-3xl font-extrabold text-white font-mono">
                    10.00% APR
                  </div>
                  <div className="text-xs text-slate-400">
                    Fixed Rate • $2,000 to $25,000 Loans
                  </div>
                </div>
                <Link
                  href="/rates-and-terms"
                  className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-lg transition"
                >
                  <span>Review Rates &amp; Terms</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section
            id="real-cost-of-borrowing"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                4. The Real Cost of Borrowing — Worked Examples
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Here is a clear breakdown of monthly payments and total finance
              costs for our common loan amounts at a fixed 10.00% APR over a
              standard 36-month repayment schedule:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3 relative hover:border-sky-300 transition-all">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                  Starter
                </span>
                <div className="text-2xl font-black text-slate-900">$2,000</div>
                <div className="border-t border-slate-100 pt-3 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Monthly Payment:</span>
                    <span className="font-bold text-slate-900">$64.53</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Total Interest:</span>
                    <span className="font-bold text-slate-900">$323.24</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Total Repaid:</span>
                    <span className="font-bold text-slate-900">$2,323.24</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3 relative hover:border-sky-300 transition-all">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                  Standard
                </span>
                <div className="text-2xl font-black text-slate-900">$5,000</div>
                <div className="border-t border-slate-100 pt-3 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Monthly Payment:</span>
                    <span className="font-bold text-slate-900">$161.34</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Total Interest:</span>
                    <span className="font-bold text-slate-900">$808.12</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Total Repaid:</span>
                    <span className="font-bold text-slate-900">$5,808.12</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-sky-900 text-white shadow-md space-y-3 relative border border-sky-800">
                <div className="absolute -top-2.5 right-3 bg-sky-400 text-slate-950 font-extrabold text-[9px] uppercase px-2 py-0.5 rounded-full">
                  Most Popular
                </div>
                <span className="text-[10px] font-bold text-sky-300 uppercase tracking-widest font-mono">
                  Growth
                </span>
                <div className="text-2xl font-black text-white">$10,000</div>
                <div className="border-t border-sky-800 pt-3 space-y-2 text-xs">
                  <div className="flex justify-between text-sky-200">
                    <span>Monthly Payment:</span>
                    <span className="font-bold text-white">$322.67</span>
                  </div>
                  <div className="flex justify-between text-sky-200">
                    <span>Total Interest:</span>
                    <span className="font-bold text-white">$1,616.20</span>
                  </div>
                  <div className="flex justify-between text-sky-200">
                    <span>Total Repaid:</span>
                    <span className="font-bold text-white">$11,616.20</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3 relative hover:border-sky-300 transition-all">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                  Maximum
                </span>
                <div className="text-2xl font-black text-slate-900">
                  $25,000
                </div>
                <div className="border-t border-slate-100 pt-3 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Monthly Payment:</span>
                    <span className="font-bold text-slate-900">$806.68</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Total Interest:</span>
                    <span className="font-bold text-slate-900">$4,040.50</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Total Repaid:</span>
                    <span className="font-bold text-slate-900">$29,040.50</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="what-lenders-look-at" className="space-y-6 scroll-mt-24">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                5. What Lenders Look At: Income, DTI, Banking History, Credit
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              When reviewing your personal loan application, underwriters focus
              on key metrics to ensure you can comfortably handle the monthly
              payments:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-sky-600 shadow-sm flex-shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">
                    Debt-to-Income (DTI) Ratio
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Measures your monthly debt obligations against your gross
                    monthly income. Lower DTIs signal lower financial risk.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-sky-600 shadow-sm flex-shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">
                    Verifiable Income
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consistent income verified via pay stubs, W-2 forms, 1099
                    tax returns, or direct deposit banking records.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-sky-600 shadow-sm flex-shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">
                    Banking Stability
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An active deposit account free of recent non-sufficient fund
                    (NSF) flags or habitual overdraft activity.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-sky-600 shadow-sm flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">
                    Credit Bureau History
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your historical track record regarding timely payments and
                    responsible credit utilization across credit bureaus.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6 */}
          <section
            id="how-to-compare-offers"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                6. How to Compare Offers — APR, Not Interest Rate; Total Cost,
                Not Monthly Payment
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <div className="text-sky-600 font-bold text-xs uppercase tracking-wider font-mono">
                  Lesson 1
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Interest Rate vs. APR
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The nominal interest rate only reflects the interest cost. The{" "}
                  <strong>APR (Annual Percentage Rate)</strong> factors in both
                  interest and upfront fees (like origination or administrative
                  charges). Always compare APRs to see the true cost of credit.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <div className="text-sky-600 font-bold text-xs uppercase tracking-wider font-mono">
                  Lesson 2
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Monthly Payment vs. Total Cost
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A lower monthly payment can be misleading if achieved by
                  stretching the loan term (e.g., from 36 to 60 months). A
                  longer term means paying interest for more years,
                  significantly increasing your total financing cost.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 7 */}
          <section
            id="common-mistakes-to-avoid"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                7. Common Borrowing Mistakes to Avoid
              </h2>
            </div>

            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>3 Costly Mistakes Borrowers Make</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Borrowing More Than Necessary:</strong> Stick
                    strictly to the capital required for your goal to avoid
                    unnecessary interest expenses.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Ignoring Upfront Origination Fees:</strong> Lenders
                    deducting a 6% origination fee on a $10,000 loan leave you
                    with only $9,400 in cash while requiring you to repay the
                    full $10,000 balance.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Selecting Unnecessarily Long Terms:</strong> Opt for
                    the shortest loan duration you can comfortably afford to
                    minimize total interest fees paid over time.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 8: FAQ */}
          <section
            id="frequently-asked-questions"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                8. Frequently Asked Questions
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
              Ready for Clear, Simple Personal Credit?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Apply in minutes with Ryer Loans. Enjoy zero hidden fees, zero
              origination costs, and a simple fixed rate of 10.00% APR.
            </p>
            <div>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition hover:scale-[1.02]"
              >
                <span>Check Your Rate Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
