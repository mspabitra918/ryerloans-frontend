import React from "react";
import Link from "next/link";
import {
  Info,
  HelpCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Calculator,
  ShieldAlert,
  AlertTriangle,
  Check,
  X,
  CreditCard,
  TrendingDown,
  Scale,
  Zap,
  Lock,
  Landmark,
  Percent,
  FileText,
  DollarSign,
  PieChart,
} from "lucide-react";
import DebtConsolidationCalculator from "./DebtConsolidationCalculator";

const sections = [
  { id: "how-consolidation-works", title: "1. How Debt Consolidation Works" },
  {
    id: "the-arithmetic-worked-example",
    title: "2. The Arithmetic: Worked Example",
  },
  {
    id: "when-it-saves-money",
    title: "3. When It Saves Money (and When It Doesn't)",
  },
  {
    id: "relief-strategy-comparison",
    title: "4. Relief Strategy Comparison Table",
  },
  {
    id: "the-behavioural-trap",
    title: "5. The Behavioural Trap: Running Cards Back Up",
  },
  {
    id: "what-to-do-day-loan-funds",
    title: "6. What to Do the Day the Loan Funds",
  },
  { id: "effect-on-credit-score", title: "7. Effect on Your Credit Score" },
  { id: "frequently-asked-questions", title: "8. Frequently Asked Questions" },
];

const faqItems = [
  {
    q: "Will debt consolidation ruin my credit score?",
    a: "No. While you may experience a temporary dip of 5 to 15 points due to the initial hard inquiry and account opening, your score typically rises within 1 to 3 months. This occurs because your revolving credit utilization—which carries a heavy 30% weight in FICO calculations—drops significantly when credit cards are paid to zero.",
  },
  {
    q: "Can I consolidate debt if I have bad credit?",
    a: "Yes, though interest rate offers depend directly on credit risk. If your credit score is lower, you may not qualify for a rate low enough to generate substantial savings. Pre-qualifying with soft credit pulls allows you to check rates without damaging your score.",
  },
  {
    q: "Is a balance transfer card better than a consolidation loan?",
    a: "Balance transfer cards offering 0% introductory APRs can be superior for smaller balances ($2,000–$5,000) that you can pay off completely within 12 to 18 months. However, they usually carry a 3% to 5% upfront transfer fee, and any remaining balance after the promo period jumps to standard high interest rates (20%+). Personal loans provide fixed rates and structured monthly payments over longer terms.",
  },
  {
    q: "What interest rate will I pay for debt consolidation at Ryer Loans?",
    a: "All approved debt consolidation personal loans at Ryer Loans carry our single fixed rate of 10.00% APR with zero origination fees, zero monthly maintenance fees, and zero prepayment penalties.",
  },
  {
    q: "Should I close my credit cards after paying them off with a consolidation loan?",
    a: "In most cases, keep the credit card accounts open with zero balances. Closing revolving lines reduces your total available credit limit, which instantly increases your utilization ratio and shortens your average account age. Put the physical cards away to avoid spending temptation.",
  },
  {
    q: "What happens if I make extra payments on my consolidation loan?",
    a: "At Ryer Loans, there are zero prepayment penalties. Any extra money you pay goes directly toward reducing your principal balance, shortening your payoff timeline and reducing total interest costs even further.",
  },
];

export default function DebtConsolidationContent() {
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
              Debt Consolidation Credit Terms
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Ryer Loans provides unsecured debt consolidation personal loans
              from{" "}
              <span className="font-semibold text-slate-900">
                $2,000 to $25,000
              </span>{" "}
              at a single fixed rate of{" "}
              <span className="font-semibold text-sky-700">10.00% APR</span>{" "}
              with repayment terms spanning 12 to 60 months. Zero origination
              fees and zero prepayment penalties.
            </p>
          </div>
        </div>
      </div>

      {/* INTERACTIVE CALCULATOR (Primary Asset) */}
      <section id="interactive-calculator" className="scroll-mt-24">
        <DebtConsolidationCalculator />
      </section>

      <div className="space-y-16 min-w-0">
        {/* SECTION 1 */}
        <section
          id="how-consolidation-works"
          className="space-y-6 scroll-mt-24"
        >
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              1. How Debt Consolidation Works
            </h2>
          </div>

          <p className="text-slate-600 leading-relaxed">
            Debt consolidation is the financial process of taking out a single,
            lower-interest fixed personal loan to pay off multiple existing
            high-interest revolving balances—such as credit cards, store cards,
            or payday loans. Rather than juggling multiple creditors,
            fluctuating variable rates, and staggered monthly due dates, you
            streamline your liabilities into one predictable monthly payment
            with a defined payoff end date.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-sm">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Application &amp; Approval
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You apply for an unsecured personal loan based on your cash flow
                and creditworthiness to lock in a single fixed APR.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-sm">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Direct Creditor Payoff
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The loan proceeds clear your high-interest credit card balances
                completely, reducing revolving balances to $0.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-sm">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Single Fixed Payment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You make one predictable monthly payment toward the personal
                loan over a fixed term (e.g., 36 months) until fully debt-free.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section
          id="the-arithmetic-worked-example"
          className="space-y-6 scroll-mt-24"
        >
          <div className="space-y-2">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              Section 02
            </div> */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              2. The Arithmetic: Worked Example Comparing Cards vs. Loan
            </h2>
          </div>

          <p className="text-slate-600 leading-relaxed">
            Credit cards compound interest daily using revolving minimum payment
            formulas designed to keep borrowers in debt for decades. To see the
            stark difference in math, consider a borrower carrying{" "}
            <strong>$15,000 across three credit cards</strong> with an average{" "}
            <strong>24.00% APR</strong> making standard 3% minimum payments,
            versus consolidating into a{" "}
            <strong>10.00% fixed APR Ryer Loan over 36 months</strong>.
          </p>

          {/* Mathematical Worked Example Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-sm bg-white">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-bold">Financial Metric</th>
                  <th className="p-4 font-bold text-rose-300">
                    Three Credit Cards (Minimums)
                  </th>
                  <th className="p-4 font-bold text-sky-300">
                    Ryer Loans Consolidation
                  </th>
                  <th className="p-4 font-bold text-emerald-300">Net Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">
                    Total Starting Principal
                  </td>
                  <td className="p-4 text-slate-600 font-mono">$15,000</td>
                  <td className="p-4 text-slate-600 font-mono">$15,000</td>
                  <td className="p-4 font-mono font-semibold text-slate-700">
                    Same starting balance
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">
                    Interest Rate (APR)
                  </td>
                  <td className="p-4 text-rose-600 font-bold font-mono">
                    24.00% Average Variable
                  </td>
                  <td className="p-4 text-sky-600 font-bold font-mono">
                    10.00% Fixed
                  </td>
                  <td className="p-4 font-bold text-emerald-600 font-mono">
                    -14.00% APR lower
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">
                    Initial Monthly Payment
                  </td>
                  <td className="p-4 text-slate-600 font-mono">
                    $450 / mo (Declining)
                  </td>
                  <td className="p-4 text-slate-900 font-bold font-mono">
                    $484 / mo (Fixed)
                  </td>
                  <td className="p-4 text-slate-600 font-mono">
                    +$34 / mo upfront shift
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">
                    Time to Pay Off Completely
                  </td>
                  <td className="p-4 text-rose-600 font-bold font-mono">
                    178 Months (14.8 Years)
                  </td>
                  <td className="p-4 text-sky-600 font-bold font-mono">
                    36 Months (3.0 Years)
                  </td>
                  <td className="p-4 font-bold text-emerald-600 font-mono">
                    11.8 Years faster
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 bg-emerald-50/30">
                  <td className="p-4 font-bold text-slate-900">
                    Total Out-of-Pocket Interest
                  </td>
                  <td className="p-4 text-rose-600 font-bold font-mono">
                    $14,831
                  </td>
                  <td className="p-4 text-sky-600 font-bold font-mono">
                    $2,425
                  </td>
                  <td className="p-4 font-extrabold text-emerald-600 font-mono">
                    $12,406 Interest Saved
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="when-it-saves-money" className="space-y-6 scroll-mt-24">
          <div className="space-y-2">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              Section 03
            </div> */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              3. When Consolidation Saves Money (and When It Does Not)
            </h2>
          </div>

          <p className="text-slate-600 leading-relaxed">
            Consolidation is a structural tool, not magic. It generates
            mathematically guaranteed savings under specific circumstances, but
            fails if borrowers don't meet fundamental criteria.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-2 font-bold text-emerald-950 text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>When Consolidation Saves Money</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>
                    <strong>Wide APR Spread:</strong> You drop your interest
                    rate by at least 5% to 10% below your current card averages.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>
                    <strong>Zero Fee Lenders:</strong> You choose a lender like
                    Ryer Loans that charges 0% origination fees, keeping full
                    savings.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>
                    <strong>Fixed Cash Flow:</strong> You have reliable monthly
                    income to commit to a structured fixed payment.
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-2 font-bold text-rose-950 text-base">
                <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                <span>When It Does NOT Save Money</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>
                    <strong>High Origination Fees:</strong> Taking a loan with a
                    6% to 8% upfront origination fee offsets interest savings.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>
                    <strong>Extended Term Traps:</strong> Stretching a $10,000
                    debt across 7 years reduces monthly payments but increases
                    total interest.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>
                    <strong>Continued Card Usage:</strong> Accumulating new card
                    debt while paying off the loan leads to double insolvency.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section
          id="relief-strategy-comparison"
          className="space-y-6 scroll-mt-24"
        >
          <div className="space-y-2">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              Section 04
            </div> */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              4. Consolidation vs. Balance Transfer vs. Debt Management Plan vs.
              Settlement
            </h2>
          </div>

          <p className="text-slate-600 leading-relaxed">
            Evaluating how personal consolidation loans compare against other
            common debt restructuring paths ensures you pick the right vehicle
            for your current credit and income standing.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-sm bg-white">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-bold">Strategy</th>
                  <th className="p-4 font-bold">Best For</th>
                  <th className="p-4 font-bold">Impact on Credit Score</th>
                  <th className="p-4 font-bold">Typical Costs &amp; Fees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-sky-700">
                    Consolidation Loan
                  </td>
                  <td className="p-4 text-slate-600">
                    Borrowers with fair-to-good credit looking for fixed monthly
                    payments over 2–5 years.
                  </td>
                  <td className="p-4 text-emerald-700 font-semibold">
                    Positive long-term (drops utilization to 0%).
                  </td>
                  <td className="p-4 text-slate-600">
                    Fixed APR interest; zero upfront fees with Ryer Loans.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">
                    0% Balance Transfer Card
                  </td>
                  <td className="p-4 text-slate-600">
                    Smaller debts (&lt;$5,000) that can be paid off within a
                    12–18 month promotional window.
                  </td>
                  <td className="p-4 text-slate-600">
                    Neutral to minor dip (high utilization on new card).
                  </td>
                  <td className="p-4 text-slate-600">
                    3% to 5% balance transfer fee upfront; 20%+ APR if not paid
                    in full.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-amber-700">
                    Debt Management Plan (DMP)
                  </td>
                  <td className="p-4 text-slate-600">
                    High debt loads with poor credit requiring non-profit credit
                    counseling assistance.
                  </td>
                  <td className="p-4 text-amber-700 font-semibold">
                    Moderate impact (accounts closed; noted on report).
                  </td>
                  <td className="p-4 text-slate-600">
                    One-time setup fee ($30–$50) plus $20–$50/mo admin fee.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-rose-700">
                    Debt Settlement
                  </td>
                  <td className="p-4 text-slate-600">
                    Severe distress near bankruptcy where defaulted debt is
                    negotiated downward.
                  </td>
                  <td className="p-4 text-rose-700 font-bold">
                    Severe Damage (remains on credit report for 7 years).
                  </td>
                  <td className="p-4 text-slate-600">
                    15% to 25% of settled debt amount + income tax on forgiven
                    debt.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="the-behavioural-trap" className="space-y-6 scroll-mt-24">
          <div className="space-y-2">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              Section 05
            </div> */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              5. The Behavioural Trap: Running the Cards Back Up
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
              <ShieldAlert className="w-5 h-5 text-rose-400" />
              <span>Critical Risk Warning</span>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Debt consolidation restructures your liabilities—it does not
              extinguish them. The most common pitfall occurs when borrowers pay
              off $15,000 in credit card balances with a loan, see their
              available credit limits restored to 100%, and slowly resume
              spending on those zero-balance cards.
            </p>
            <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-xs sm:text-sm text-slate-300 space-y-2">
              <strong className="text-white block font-bold">
                The Double-Debt Spiral:
              </strong>
              <p>
                If you consolidate $15,000 into a fixed loan payment of
                $484/month and subsequently run up $10,000 in new credit card
                charges, you now owe $25,000 in total debt. This leads to
                insolvency. Successful consolidation requires stopping spending
                on revolving cards immediately upon payoff.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 */}
        <section
          id="what-to-do-day-loan-funds"
          className="space-y-6 scroll-mt-24"
        >
          <div className="space-y-2">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              Section 06
            </div> */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              6. What to Do the Day the Loan Funds
            </h2>
          </div>

          <p className="text-slate-600 leading-relaxed">
            To ensure your consolidation loan achieves its intended goal, follow
            this step-by-step operational checklist the moment funds arrive in
            your bank account:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>1. Execute Zero-Balance Payoffs Immediately</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Log directly into each credit card portal and pay off the full
                statement or payoff balance. Do not leave residual balances that
                accrue trailing interest.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>2. Unlink Cards from Digital Wallets</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Remove stored credit card details from e-commerce sites, food
                delivery apps, and digital wallets to eliminate impulse spending
                triggers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>3. Set Up Auto-Pay for Your New Loan</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automate your fixed monthly payment for your consolidation loan
                to ensure you never miss a payment date or incur late fees.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>4. Store Physical Cards Safely</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Keep card accounts open to preserve account age and total credit
                limit, but store physical cards in a secure place away from your
                wallet.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7 */}
        <section id="effect-on-credit-score" className="space-y-6 scroll-mt-24">
          <div className="space-y-2">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              Section 07
            </div> */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              7. Effect on Your Credit Score: Short and Long Term
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-amber-500" />
                <span>Short-Term Effect (Months 1–2)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Expect a temporary credit score dip of{" "}
                <strong>5 to 15 points</strong>. This occurs due to two factors:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li>
                  • <strong>Hard Inquiry:</strong> Submitting a formal loan
                  application places a single hard pull on your credit report.
                </li>
                <li>
                  • <strong>New Account Opening:</strong> Adding a new account
                  briefly reduces your average age of accounts.
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-emerald-500 rotate-180" />
                <span>Long-Term Effect (Months 3–36)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over time, consolidation typically provides a substantial score
                increase due to key FICO scoring factors:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li>
                  • <strong>Utilization Drop:</strong> Paying card balances to
                  zero drops revolving credit utilization (30% of your score).
                </li>
                <li>
                  • <strong>Improved Credit Mix:</strong> Adding an installment
                  loan diversifies your credit profile (10% of your score).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section
          id="frequently-asked-questions"
          className="space-y-6 scroll-mt-24"
        >
          <div className="space-y-2">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              Section 08
            </div> */}
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
            Ready to Lower Your Interest Rate &amp; Simplify Debt?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Check your rate in under two minutes with Ryer Loans—featuring fixed
            10.00% APR terms, zero origination fees, and zero prepayment
            penalties.
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
  );
}
