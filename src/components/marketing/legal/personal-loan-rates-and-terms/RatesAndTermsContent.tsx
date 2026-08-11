import React from "react";
import Link from "next/link";
import {
  Percent,
  Calculator,
  ArrowRight,
  Info,
  HelpCircle,
  Clock,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Scale,
  ShieldCheck,
  FileText,
  Building2,
  HelpCircle as QuestionIcon,
} from "lucide-react";
import Image from "next/image";

interface FaqItem {
  q: string;
  a: string;
}

const faqItems: FaqItem[] = [
  {
    q: "What is the key difference between interest rate and APR?",
    a: "The interest rate is the percentage cost of borrowing the principal balance annually. The Annual Percentage Rate (APR) incorporates both the interest rate and any prepaid finance charges—such as origination or administration fees—providing a single percentage reflecting the true annual cost of the loan.",
  },
  {
    q: "How does an origination fee work if it is deducted upfront?",
    a: "When an origination fee is charged upfront, it is netted out of your total requested principal before funds clear into your bank account. For example, on a $10,000 loan with an 8% origination fee ($800), you receive $9,200 in cash, but you repay principal and interest on the full $10,000.",
  },
  {
    q: "Why do lenders quote rate ranges like 6.99% to 35.99%?",
    a: "Lenders publish broad APR ranges to cover their entire risk spectrum. The lowest advertised rates are typically reserved for applicants with exceptional credit scores (780+), low debt-to-income ratios, high disposable income, and ideal credit histories.",
  },
  {
    q: "Is a longer loan term always better because of lower payments?",
    a: "No. While a longer term reduces your required monthly payment by spreading principal repayment over more cycles, it drastically increases total interest charges over the life of the loan.",
  },
  {
    q: "What are current average personal loan interest rates?",
    a: "According to Federal Reserve G.19 Consumer Credit release data, commercial bank 24-month personal loan average rates sit between 11.50% and 12.30%, while fixed unsecured consumer loans across digital platforms average between 11% and 21% depending on borrower credit tiers.",
  },
  {
    q: "Does Ryer Loans charge origination or prepayment fees?",
    a: "No. Ryer Loans operates on a zero-fee model—0% origination fees, 0 administrative costs, and $0 prepayment penalties. Every dollar approved goes directly to your bank account, operating at a single fixed rate of 10.00% APR.",
  },
];

export default function RatesAndTermsContent(): React.JSX.Element {
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
    <div className="w-full max-w-7xl mx-auto space-y-12 text-slate-700 text-base leading-relaxed py-8">
      {/* FAQ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Visual Context */}
      {/* <Image
        src="image_agent_tag_16806309867327235831"
        alt="Financial analysis sheet displaying loan comparisons, interest rate charts, and calculator."
        caption="Evaluating loan offers requires comparing interest rates, fees, and long-term costs side-by-side."
      /> */}

      {/* Product Summary Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent p-6 border border-sky-200/80 shadow-sm">
        <div className="flex items-start gap-4 relative z-10">
          <div className="p-2.5 rounded-xl bg-sky-600 text-white shadow-md shadow-sky-600/20 flex-shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-sky-950 uppercase tracking-wider">
              Ryer Loans Baseline Rate Guarantee
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Unsecured personal loans from{" "}
              <span className="font-semibold text-slate-900">
                $2,000 to $25,000
              </span>{" "}
              at a single transparent rate of{" "}
              <span className="font-semibold text-sky-700">10.00% APR</span>.
              Zero origination fees, zero administrative surcharges, zero
              prepayment penalties.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-10 items-start">
        {/* Main Editorial Body */}
        <div className="space-y-16 min-w-0">
          {/* SECTION 1: APR VS INTEREST RATE */}
          <section id="apr-vs-interest-rate" className="space-y-6 scroll-mt-24">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                1. APR vs. Interest Rate: The Core Difference That Costs
                Borrowers Thousands
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              When evaluating loan options, confusing the{" "}
              <strong>interest rate</strong> with the{" "}
              <strong>Annual Percentage Rate (APR)</strong> is one of the most
              expensive mistakes a borrower can make. While both metrics are
              expressed as percentages, they measure fundamentally different
              financial obligations under federal Truth in Lending disclosures.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-lg">
                  <Percent className="w-5 h-5 text-sky-600" />
                  <span>Stated Interest Rate</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The nominal percentage charged by a lender on the principal
                  balance over time. It calculates monthly interest accrual, but
                  completely excludes mandatory fees, processing costs, or
                  upfront finance charges.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-sky-950 text-white shadow-xl space-y-3">
                <div className="flex items-center gap-2 font-bold text-sky-400 text-lg">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                  <span>Annual Percentage Rate (APR)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The comprehensive annual cost of credit mandated by federal
                  regulations. APR factors in the base interest rate plus all
                  prepaid finance charges (origination fees, admin costs,
                  document fees), reflecting your true effective borrowing
                  expense.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: ORIGINATION FEES WORKED EXAMPLE */}
          <section id="origination-fee-math" className="space-y-6 scroll-mt-24">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                2. How Origination Fees Inflate Effective APR: A Mathematical
                Proof
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Lenders often advertise headline interest rates like{" "}
              <strong>6.99%</strong> to top comparison engines. However, when
              paired with an upfront origination fee (typically 1% to 8%), the
              actual cash received drops dramatically, driving the true cost
              higher than a loan with a{" "}
              <strong>10.00% flat rate and zero fees</strong>.
            </p>

            {/* Comparison Case Study Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                    <th className="p-4">Loan Parameter</th>
                    <th className="p-4 text-rose-700 bg-rose-50/50">
                      Lender A ("Headline Rate")
                    </th>
                    <th className="p-4 text-emerald-700 bg-emerald-50/50">
                      Ryer Loans (Flat Model)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-mono">
                  <tr>
                    <td className="p-4 font-sans font-medium text-slate-900">
                      Requested Loan Principal
                    </td>
                    <td className="p-4 bg-rose-50/20">$10,000</td>
                    <td className="p-4 bg-emerald-50/20">$10,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-sans font-medium text-slate-900">
                      Stated Interest Rate
                    </td>
                    <td className="p-4 bg-rose-50/20 text-rose-600 font-bold">
                      6.99%
                    </td>
                    <td className="p-4 bg-emerald-50/20">10.00%</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-sans font-medium text-slate-900">
                      Upfront Origination Fee
                    </td>
                    <td className="p-4 bg-rose-50/20 text-rose-600 font-bold">
                      8.00% ($800)
                    </td>
                    <td className="p-4 bg-emerald-50/20 text-emerald-600 font-bold">
                      $0 (0.00%)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-sans font-medium text-slate-900">
                      Actual Cash Deposited to Bank
                    </td>
                    <td className="p-4 bg-rose-50/20 text-slate-900 font-bold">
                      $9,200
                    </td>
                    <td className="p-4 bg-emerald-50/20 text-emerald-700 font-bold">
                      $10,000
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-sans font-medium text-slate-900">
                      Repayment Term
                    </td>
                    <td className="p-4 bg-rose-50/20">36 Months</td>
                    <td className="p-4 bg-emerald-50/20">36 Months</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-sans font-medium text-slate-900">
                      Monthly Payment
                    </td>
                    <td className="p-4 bg-rose-50/20">$308.73</td>
                    <td className="p-4 bg-emerald-50/20">$322.67</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-sans font-medium text-slate-900">
                      Total Capital Repaid
                    </td>
                    <td className="p-4 bg-rose-50/20">$11,114.28</td>
                    <td className="p-4 bg-emerald-50/20">$11,616.12</td>
                  </tr>
                  <tr className="bg-slate-900 text-white font-sans font-bold">
                    <td className="p-4">Effective Cost Per $1,000 Received</td>
                    <td className="p-4 text-rose-300">$208.07 per $1k cash</td>
                    <td className="p-4 text-emerald-300">
                      $161.61 per $1k cash
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-900 leading-relaxed">
                <strong>The Net Cash Trap:</strong> Because Lender A deducted
                $800 upfront, you only receive $9,200. To actually get $10,000
                in hand, you would need to borrow $10,870 from Lender A, driving
                your real monthly payment to $335.59 and total debt to
                $12,081—making the "cheaper" 6.99% rate significantly more
                expensive.
              </p>
            </div>
          </section>

          {/* SECTION 3: FIXED VS VARIABLE */}
          <section
            id="fixed-vs-variable-rates"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                3. Fixed vs. Variable Rates: Risk and Budget Predictability
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Choosing between fixed and variable personal loan structures
              dictates how market rate adjustments affect your personal monthly
              budget over the lifecycle of your debt.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Fixed-Rate Personal Loans</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your interest rate and monthly payment remain locked for the
                  entire term. Macroeconomic shifts, Federal Reserve interest
                  rate hikes, or market volatility will never alter your
                  repayment contract.
                </p>
                <div className="p-3 rounded-lg bg-slate-50 text-xs font-semibold text-slate-700">
                  Best For: Predictable budgeting, debt consolidation, and
                  long-term financial security.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                  <TrendingUp className="w-5 h-5 text-sky-600" />
                  <span>Variable-Rate Personal Loans</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tied to benchmark indices such as the Secured Overnight
                  Financing Rate (SOFR) or Prime Rate. While starting rates may
                  appear lower, payments fluctuate periodically as rate
                  benchmarks shift.
                </p>
                <div className="p-3 rounded-lg bg-slate-50 text-xs font-semibold text-slate-700">
                  Best For: Short repayment windows (under 12 months) when
                  benchmark rates are declining.
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: TERM LENGTH VS TOTAL INTEREST */}
          <section
            id="term-length-tradeoffs"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                4. How Term Length Trades Monthly Payment Against Total Interest
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Selecting a loan duration is a direct trade-off between monthly
              cash flow and cumulative lifetime interest cost. Longer terms
              reduce monthly payment pressure, but compounding interest
              significantly increases total finance charges.
            </p>

            {/* Interactive Loan Simulation Widget */}
            {/* <GenerateWidget height="600px"> */}
            {/* Reason: Interactive loan term simulator lets users evaluate how term length directly changes monthly payment vs total lifetime interest at 10% APR. */}

            {/* ```json
            {
              "widgetSpec": {
                 "height": "600px",
                 "prompt": "**Objective:** Provide an interactive loan term calculator comparing monthly payments and total interest for a $10,000 loan at 10.00% APR across 24, 36, 48, and 60-month terms. \n **Data State:** Principal=$10,000, APR=10.00%. \n **Strategy:** Standard Interactive Calculator Layout. \n **Inputs:** Loan Amount ($2,000 to $25,000, default $10,000), Term Selection (24, 36, 48, 60 months). \n **Visuals/Behavior:** Dynamic chart showing monthly payment vs total interest paid across term options. Show exact numerical outputs."
              }
            }
            ``` */}
            {/* </GenerateWidget> */}

            {/* Term Breakdown Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-sm mt-6">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="p-4">Term Duration</th>
                    <th className="p-4">Monthly Payment (at 10% APR)</th>
                    <th className="p-4">Total Principal</th>
                    <th className="p-4">Total Interest Charged</th>
                    <th className="p-4">Total Loan Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-slate-700">
                  <tr>
                    <td className="p-4 font-sans font-bold text-slate-900">
                      24 Months (2 Yrs)
                    </td>
                    <td className="p-4 text-slate-900 font-bold">$461.45</td>
                    <td className="p-4">$10,000</td>
                    <td className="p-4 text-emerald-600 font-bold">
                      $1,074.78
                    </td>
                    <td className="p-4">$11,074.78</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-sans font-bold text-slate-900">
                      36 Months (3 Yrs)
                    </td>
                    <td className="p-4 text-slate-900 font-bold">$322.67</td>
                    <td className="p-4">$10,000</td>
                    <td className="p-4 text-sky-600 font-bold">$1,616.12</td>
                    <td className="p-4">$11,616.12</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-sans font-bold text-slate-900">
                      48 Months (4 Yrs)
                    </td>
                    <td className="p-4 text-slate-900 font-bold">$253.63</td>
                    <td className="p-4">$10,000</td>
                    <td className="p-4 text-amber-600 font-bold">$2,174.05</td>
                    <td className="p-4">$12,174.05</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-sans font-bold text-slate-900">
                      60 Months (5 Yrs)
                    </td>
                    <td className="p-4 text-slate-900 font-bold">$212.47</td>
                    <td className="p-4">$10,000</td>
                    <td className="p-4 text-rose-600 font-bold">$2,748.23</td>
                    <td className="p-4">$12,748.23</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 5: WHY LENDERS QUOTE RANGES */}
          <section
            id="rate-ranges-and-qualification"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                5. Why Lenders Quote Broad Ranges and Who Actually Gets the
                Lowest Rate
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Mainstream lending channels frequently post promotional rate
              ranges—such as <strong>5.99% to 35.99% APR</strong>. Under
              risk-based pricing algorithms, the rate offered correlates
              directly with underwriting risk metrics.
            </p>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <h3 className="font-bold text-slate-900 text-base">
                Anatomy of Top-Tier Credit Profiles (Lowest APR Winners)
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    FICO Score 780+:
                  </strong>
                  <p className="text-slate-600">
                    Demonstrated history of flawless recurring debt payments
                    without late records.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    Debt-to-Income Under 25%:
                  </strong>
                  <p className="text-slate-600">
                    Low existing monthly debt obligations relative to gross
                    monthly earnings.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    Multi-Year Income Stability:
                  </strong>
                  <p className="text-slate-600">
                    Consistent employment with verifiable W-2 records or
                    multi-year business tax filings.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    High Disposable Liquidity:
                  </strong>
                  <p className="text-slate-600">
                    Substantial cash reserves remaining in primary bank accounts
                    after monthly debt service.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: CURRENT MARKET CONTEXT & FED DATA */}
          <section
            id="current-market-context"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                6. Macroeconomic Market Context: Federal Reserve G.19 Benchmark
                Data
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Evaluating your loan offer requires benchmarking against
              macroeconomic industry data. According to the{" "}
              <strong>Federal Reserve G.19 Consumer Credit release</strong>,
              personal loan interest rates track federal funds benchmarks and
              commercial bank prime lending rates.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <Building2 className="w-5 h-5 text-sky-600" />
                <span>Industry Averages vs. Ryer Standard</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-slate-500 uppercase tracking-wider font-mono">
                    Commercial Banks
                  </span>
                  <p className="text-xl font-bold text-slate-900">
                    11.50% – 12.30%
                  </p>
                  <p className="text-slate-600">
                    Fed G.19 average for 24-month consumer loans.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-slate-500 uppercase tracking-wider font-mono">
                    Online Lending Platforms
                  </span>
                  <p className="text-xl font-bold text-slate-900">
                    11.00% – 21.50%
                  </p>
                  <p className="text-slate-600">
                    Weighted average across peer & fintech platforms.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-sky-950 text-white space-y-1">
                  <span className="text-sky-400 uppercase tracking-wider font-mono">
                    Ryer Baseline
                  </span>
                  <p className="text-xl font-bold text-sky-300">10.00% APR</p>
                  <p className="text-slate-300">
                    Fixed rate with zero origination fees.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: QUESTIONS TO ASK ANY LENDER */}
          <section
            id="questions-to-ask-lenders"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                7. Essential Questions to Ask Any Lender Before Signing
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Protect your financial interests by asking potential lenders these
              key questions before executing a credit agreement:
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <QuestionIcon className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <strong className="text-slate-900 font-bold">
                    1. Is there an origination or upfront administration fee?
                  </strong>
                  <p className="text-slate-600">
                    Determine whether fees will be deducted from your payout or
                    added to your loan balance.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <QuestionIcon className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <strong className="text-slate-900 font-bold">
                    2. Are there prepayment penalties for early payoff?
                  </strong>
                  <p className="text-slate-600">
                    Ensure you can pay off your principal balance early without
                    fee penalties.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <QuestionIcon className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <strong className="text-slate-900 font-bold">
                    3. Is this rate fixed for the entire duration?
                  </strong>
                  <p className="text-slate-600">
                    Confirm that payments will remain stable throughout the
                    repayment window.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <QuestionIcon className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <strong className="text-slate-900 font-bold">
                    4. What exact dollar amount will hit my bank account?
                  </strong>
                  <p className="text-slate-600">
                    Verify net disbursed cash to avoid coming up short on debt
                    consolidation goals.
                  </p>
                </div>
              </div>
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
              {faqItems.map((item: FaqItem, idx: number) => (
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
              Experience Transparent Loan Pricing
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Lock in a fixed 10.00% APR with zero origination fees and zero
              hidden costs. Pre-qualify online in 2 minutes with no credit score
              impact.
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
