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
  Calculator,
  Calendar,
  DollarSign,
  TrendingUp,
  Percent,
  Clock,
  Check,
  X,
  CreditCard,
  AlertTriangle,
  Zap,
} from "lucide-react";

const sections = [
  { id: "structure-and-amortization", title: "1. Structure & Amortization" },
  {
    id: "installment-vs-revolving",
    title: "2. Installment vs. Revolving Credit",
  },
  {
    id: "installment-vs-payday",
    title: "3. Installment Loans vs. Payday Loans",
  },
  {
    id: "amortization-schedule-example",
    title: "4. Real Amortization Schedule Example",
  },
  { id: "choosing-a-term", title: "5. Choosing a Term: Shorter vs. Longer" },
  { id: "early-payoff", title: "6. Early Payoff & Zero Prepayment Penalties" },
  { id: "frequently-asked-questions", title: "7. Frequently Asked Questions" },
];

const faqItems = [
  {
    q: "What is an online installment loan?",
    a: "An online installment loan is a closed-end credit product where a borrower receives a single lump sum upfront and repays the principal plus interest through a series of equal, regularly scheduled monthly payments over a predetermined timeframe.",
  },
  {
    q: "How does an installment loan differ from a credit card?",
    a: "Credit cards offer revolving credit with variable balances, open-ended drawdown access, and fluctuating minimum payments. An installment loan provides a lump sum with a fixed monthly payment schedule and a clear payoff end date.",
  },
  {
    q: "Are installment loans cheaper than payday loans?",
    a: "Yes, significantly. Payday loans typically carry annualized interest rates exceeding 300% to 400% APR with full balloon repayment required within 14 to 30 days. In contrast, Ryer Loans offers fixed 10.00% APR installment loans with structured monthly repayment over 12 to 60 months.",
  },
  {
    q: "Can I pay off an installment loan early to save on interest?",
    a: "Yes. Ryer Loans charges zero prepayment penalties. Because interest accrues daily on the remaining principal balance, making extra principal payments or paying off the loan early directly reduces total interest expense.",
  },
  {
    q: "How does loan term length affect overall loan cost?",
    a: "A shorter loan term results in higher monthly payments but substantially lower overall interest costs. A longer term lowers your required monthly obligation but increases total interest paid over the life of the loan.",
  },
  {
    q: "What loan amounts and interest rates does Ryer Loans offer?",
    a: "Ryer Loans provides unsecured personal installment loans ranging from $2,000 to $25,000 at a fixed 10.00% APR with terms from 12 to 60 months and zero origination or prepayment fees.",
  },
];

export default function InstallmentLoansContent() {
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
              Fixed-Rate Installment Terms Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Ryer Loans provides unsecured online installment loans from{" "}
              <span className="font-semibold text-slate-900">
                $2,000 to $25,000
              </span>{" "}
              at a single fixed rate of{" "}
              <span className="font-semibold text-sky-700">10.00% APR</span>{" "}
              with flexible terms from 12 to 60 months. Zero origination fees,
              zero monthly maintenance fees, and zero prepayment penalties.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-10  items-start">
        {/* Main Editorial Column */}
        <div className="space-y-16 min-w-0">
          {/* SECTION 1 */}
          <section
            id="structure-and-amortization"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Section 01
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                1. Structure &amp; Amortization: How Installment Loans Work
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              An <strong>installment loan</strong> is a closed-end form of
              credit where a lender disburses a predetermined lump sum directly
              to a borrower's account. In exchange, the borrower commits to
              repaying that principal amount—plus simple interest—through a
              fixed sequence of equal monthly payments over a set duration.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Lump-Sum Capital
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The full principal amount is funded directly to your bank
                  account upon approval and agreement signing.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Predictable Schedule
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Monthly installment amounts remain identical across the entire
                  life of the loan under a fixed APR model.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Defined Payoff Date
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every loan possesses a concrete maturity date on which the
                  remaining principal balance reaches exactly $0.00.
                </p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Unlike open-ended revolving accounts, installment financing
              eliminates uncertainty. Because interest rates are fixed and term
              lengths are established upfront, borrowers can integrate monthly
              payments into their household budgets without risk of payment
              shocks caused by rate resets or shifting fee calculations.
            </p>
          </section>

          {/* SECTION 2 */}
          <section
            id="installment-vs-revolving"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Section 02
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                2. Installment vs. Revolving Credit: Key Differences
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Understanding how consumer credit architectures differ is critical
              for making cost-effective borrowing decisions. Consumer borrowing
              falls primarily into two distinct structures:{" "}
              <strong>installment credit</strong> and{" "}
              <strong>revolving credit</strong> (such as credit cards or
              personal lines of credit).
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-sky-600 font-bold text-sm uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Installment Credit (e.g., Personal Loans)</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Lump-Sum Funding:</strong> Capital is disbursed
                      once upfront in full.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Fixed Monthly Payment:</strong> Set dollar amount
                      due on the same calendar day each month.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Guaranteed End Date:</strong> Clear repayment
                      horizon with zero lingering debt traps.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Interest Protection:</strong> Fixed APR ensures
                      monthly payments never increase.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wider">
                  <CreditCard className="w-4 h-4" />
                  <span>Revolving Credit (e.g., Credit Cards)</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Continuous Drawdown:</strong> Re-borrow funds up
                      to an assigned credit limit.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Fluctuating Payments:</strong> Minimum payments
                      shift each month based on outstanding balance.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Open-Ended Timeline:</strong> Making minimum
                      payments can stretch payoff timelines across decades.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Variable Rates:</strong> Interest rates index to
                      benchmark changes and often exceed 22%–29% APR.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section
            id="installment-vs-payday"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Section 03
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                3. Installment Loans vs. Payday Loans
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Short-term liquidity shortages lead many borrowers to evaluate
              payday loans. However, payday loans and traditional fixed
              installment loans represent fundamentally opposite credit models.
              Below is a head-to-head structural comparison:
            </p>

            {/* Prominent Comparison Table */}
            <div className="overflow-hidden border border-slate-200/80 rounded-2xl shadow-sm bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white font-semibold">
                      <th className="p-4">Feature</th>
                      <th className="p-4 text-sky-400">
                        Ryer Installment Loan
                      </th>
                      <th className="p-4 text-amber-300">
                        Traditional Credit Card
                      </th>
                      <th className="p-4 text-rose-400">
                        Payday / Cash Advance Loan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="bg-sky-50/40">
                      <td className="p-4 font-bold text-slate-900">
                        Annual Percentage Rate (APR)
                      </td>
                      <td className="p-4 font-mono font-bold text-emerald-600">
                        10.00% Fixed
                      </td>
                      <td className="p-4 font-mono">
                        21.99% – 29.99% Variable
                      </td>
                      <td className="p-4 font-mono font-bold text-rose-600">
                        390.00% – 600.00%+
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-900">
                        Borrowing Range
                      </td>
                      <td className="p-4 font-semibold text-slate-900">
                        $2,000 to $25,000
                      </td>
                      <td className="p-4 text-slate-600">
                        Varies by credit limit
                      </td>
                      <td className="p-4 text-slate-600">$100 to $1,000</td>
                    </tr>
                    <tr className="bg-sky-50/40">
                      <td className="p-4 font-bold text-slate-900">
                        Repayment Horizon
                      </td>
                      <td className="p-4 font-semibold text-slate-900">
                        12 to 60 Months
                      </td>
                      <td className="p-4 text-slate-600">
                        Open-ended revolving
                      </td>
                      <td className="p-4 text-rose-700 font-semibold">
                        14 to 30 Days (Single Lump Sum)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-900">
                        Payment Structure
                      </td>
                      <td className="p-4 text-slate-900">
                        Equal fixed monthly installments
                      </td>
                      <td className="p-4 text-slate-600">
                        Fluctuating monthly minimums
                      </td>
                      <td className="p-4 text-rose-700 font-semibold">
                        Single balloon check / ACH debit
                      </td>
                    </tr>
                    <tr className="bg-sky-50/40">
                      <td className="p-4 font-bold text-slate-900">
                        Origination &amp; Upfront Fees
                      </td>
                      <td className="p-4 font-mono text-emerald-600 font-semibold">
                        $0.00 (Zero)
                      </td>
                      <td className="p-4 font-mono">$0 – $95 annual fees</td>
                      <td className="p-4 font-mono text-rose-600 font-semibold">
                        $15 – $30 per $100 borrowed
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-900">
                        Prepayment Penalties
                      </td>
                      <td className="p-4 font-mono text-emerald-600 font-semibold">
                        $0.00 (Zero)
                      </td>
                      <td className="p-4 font-mono">$0.00</td>
                      <td className="p-4 text-slate-600">
                        N/A (Short-term duration)
                      </td>
                    </tr>
                    <tr className="bg-sky-50/40">
                      <td className="p-4 font-bold text-slate-900">
                        Credit Bureau Reporting
                      </td>
                      <td className="p-4 text-slate-900">
                        Reports on-time payments to build credit
                      </td>
                      <td className="p-4 text-slate-600">
                        Reports monthly activity
                      </td>
                      <td className="p-4 text-rose-700">
                        Rarely reports positive payments; reports defaults
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>The Payday Debt Cycle Warning</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Because payday loans require complete principal repayment on the
                borrower's next payday, over 80% of payday loans are rolled over
                or renewed within 14 days according to Consumer Financial
                Protection Bureau (CFPB) data. This creates a recurring fee loop
                where borrowers pay hundreds in finance charges without reducing
                their original debt balance.
              </p>
            </div>
          </section>

          {/* SECTION 4 */}
          <section
            id="amortization-schedule-example"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Section 04
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                4. How Amortization Schedules Work: Real 12-Month Sample Table
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Every fixed installment loan relies on an{" "}
              <strong>amortization schedule</strong>. In the early months of
              repayment, a higher percentage of your fixed payment goes toward
              accrued interest. As the outstanding principal drops, interest
              charges decrease, allowing a larger portion of each payment to
              reduce the principal balance directly.
            </p>

            <p className="text-slate-600 leading-relaxed">
              The sample table below illustrates the exact month-by-month
              breakdown of a <strong>$10,000 personal installment loan</strong>{" "}
              at Ryer Loans' fixed{" "}
              <strong>10.00% APR over a 12-month term</strong> (Fixed Monthly
              Payment: <strong>$879.16</strong>):
            </p>

            <div className="overflow-hidden border border-slate-200/80 rounded-2xl shadow-sm bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white font-semibold font-mono">
                      <th className="p-3.5">Month</th>
                      <th className="p-3.5">Payment</th>
                      <th className="p-3.5 text-sky-400">Principal Paid</th>
                      <th className="p-3.5 text-amber-300">Interest Paid</th>
                      <th className="p-3.5 text-slate-300">
                        Remaining Balance
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono text-slate-700">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        Month 1
                      </td>
                      <td className="p-3.5">$879.16</td>
                      <td className="p-3.5 text-sky-700 font-semibold">
                        $795.83
                      </td>
                      <td className="p-3.5 text-amber-700">$83.33</td>
                      <td className="p-3.5">$9,204.17</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        Month 2
                      </td>
                      <td className="p-3.5">$879.16</td>
                      <td className="p-3.5 text-sky-700 font-semibold">
                        $802.46
                      </td>
                      <td className="p-3.5 text-amber-700">$76.70</td>
                      <td className="p-3.5">$8,401.71</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        Month 3
                      </td>
                      <td className="p-3.5">$879.16</td>
                      <td className="p-3.5 text-sky-700 font-semibold">
                        $809.15
                      </td>
                      <td className="p-3.5 text-amber-700">$70.01</td>
                      <td className="p-3.5">$7,592.56</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        Month 4
                      </td>
                      <td className="p-3.5">$879.16</td>
                      <td className="p-3.5 text-sky-700 font-semibold">
                        $815.89
                      </td>
                      <td className="p-3.5 text-amber-700">$63.27</td>
                      <td className="p-3.5">$6,776.67</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        Month 5
                      </td>
                      <td className="p-3.5">$879.16</td>
                      <td className="p-3.5 text-sky-700 font-semibold">
                        $822.69
                      </td>
                      <td className="p-3.5 text-amber-700">$56.47</td>
                      <td className="p-3.5">$5,953.98</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        Month 6
                      </td>
                      <td className="p-3.5">$879.16</td>
                      <td className="p-3.5 text-sky-700 font-semibold">
                        $829.55
                      </td>
                      <td className="p-3.5 text-amber-700">$49.62</td>
                      <td className="p-3.5">$5,124.43</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        Month 7
                      </td>
                      <td className="p-3.5">$879.16</td>
                      <td className="p-3.5 text-sky-700 font-semibold">
                        $836.46
                      </td>
                      <td className="p-3.5 text-amber-700">$42.70</td>
                      <td className="p-3.5">$4,287.97</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        Month 8
                      </td>
                      <td className="p-3.5">$879.16</td>
                      <td className="p-3.5 text-sky-700 font-semibold">
                        $843.43
                      </td>
                      <td className="p-3.5 text-amber-700">$35.73</td>
                      <td className="p-3.5">$3,444.54</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        Month 9
                      </td>
                      <td className="p-3.5">$879.16</td>
                      <td className="p-3.5 text-sky-700 font-semibold">
                        $850.46
                      </td>
                      <td className="p-3.5 text-amber-700">$28.70</td>
                      <td className="p-3.5">$2,594.08</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        Month 10
                      </td>
                      <td className="p-3.5">$879.16</td>
                      <td className="p-3.5 text-sky-700 font-semibold">
                        $857.55
                      </td>
                      <td className="p-3.5 text-amber-700">$21.62</td>
                      <td className="p-3.5">$1,736.53</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        Month 11
                      </td>
                      <td className="p-3.5">$879.16</td>
                      <td className="p-3.5 text-sky-700 font-semibold">
                        $864.70
                      </td>
                      <td className="p-3.5 text-amber-700">$14.47</td>
                      <td className="p-3.5">$871.83</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-emerald-50/50">
                      <td className="p-3.5 font-bold text-emerald-900">
                        Month 12
                      </td>
                      <td className="p-3.5 font-bold">$879.09</td>
                      <td className="p-3.5 text-emerald-700 font-bold">
                        $871.83
                      </td>
                      <td className="p-3.5 text-amber-700 font-bold">$7.27</td>
                      <td className="p-3.5 font-bold text-emerald-700">
                        $0.00
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-slate-900 text-white font-mono font-bold">
                      <td className="p-3.5">TOTALS</td>
                      <td className="p-3.5 text-sky-400">$10,549.85</td>
                      <td className="p-3.5">$10,000.00</td>
                      <td className="p-3.5 text-amber-300">$549.85</td>
                      <td className="p-3.5">—</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="choosing-a-term" className="space-y-6 scroll-mt-24">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Section 05
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                5. Choosing a Term: Shorter vs. Longer Repayment Options
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Selecting the right loan term involves balancing your monthly cash
              flow against total interest expense. Compare how term lengths
              impact a <strong>$10,000 principal balance</strong> at Ryer Loans'
              fixed 10.00% APR:
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <span className="text-xs font-bold text-sky-600 font-mono uppercase tracking-wider">
                  12-Month Term
                </span>
                <div className="space-y-1">
                  <div className="text-2xl font-extrabold text-slate-900 font-mono">
                    $879 / mo
                  </div>
                  <div className="text-xs text-slate-500">
                    Total Interest: $550
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Best for:</strong> Minimizing total borrowing cost
                  when higher monthly cash flow capacity is available.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3 border-sky-300 ring-1 ring-sky-300">
                <span className="text-xs font-bold text-sky-700 font-mono uppercase tracking-wider">
                  36-Month Term
                </span>
                <div className="space-y-1">
                  <div className="text-2xl font-extrabold text-slate-900 font-mono">
                    $323 / mo
                  </div>
                  <div className="text-xs text-slate-500">
                    Total Interest: $1,616
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Best for:</strong> Optimal balance between manageable
                  monthly payments and total interest costs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <span className="text-xs font-bold text-sky-600 font-mono uppercase tracking-wider">
                  60-Month Term
                </span>
                <div className="space-y-1">
                  <div className="text-2xl font-extrabold text-slate-900 font-mono">
                    $212 / mo
                  </div>
                  <div className="text-xs text-slate-500">
                    Total Interest: $2,748
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Best for:</strong> Maximizing monthly budget
                  flexibility with the lowest required payment obligation.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="early-payoff" className="space-y-6 scroll-mt-24">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                Section 06
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                6. Early Payoff &amp; Why Zero Prepayment Penalties Matter
              </h2>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>Prepayment Penalty Exemption Guarantee</span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Some lenders charge prepayment penalties or
                interest-recalculation fees to protect their projected yield
                when borrowers pay ahead of schedule. At Ryer Loans,{" "}
                <strong>
                  you are free to pay off your loan at any time with zero
                  penalties or fees
                </strong>
                .
              </p>
              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700/80 space-y-2 text-xs text-slate-300">
                <strong className="text-white block font-semibold text-sm">
                  How Daily Simple Interest Protects Your Savings:
                </strong>
                Interest accrues on a daily simple basis on your remaining
                principal balance. Making partial extra payments—or settling
                your balance entirely—immediately stops daily interest accrual
                on that principal portion.
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
              Calculate Your Fixed Monthly Installment Today
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Explore your borrowing options with Ryer Loans—featuring fixed
              10.00% APR terms, no origination fees, and zero prepayment
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
    </div>
  );
}
