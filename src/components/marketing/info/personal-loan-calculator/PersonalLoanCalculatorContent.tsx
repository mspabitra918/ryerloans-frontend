"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calculator,
  Info,
  HelpCircle,
  ArrowRight,
  Download,
  CheckCircle2,
  Table,
  DollarSign,
  Calendar,
  Percent,
  TrendingDown,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

const faqItems = [
  {
    q: "How does Ryer Loans calculate monthly personal loan payments?",
    a: "We use standard loan amortization arithmetic. Your monthly payment is determined by your total principal, fixed interest rate (10.00% APR), and repayment term (12 to 60 months). Every payment is split between interest charges and principal reduction.",
  },
  {
    q: "Are there any hidden fees or origination costs with a Ryer Loan?",
    a: "None. Ryer Loans charges zero origination fees, zero monthly service fees, and zero prepayment penalties. What you see on the calculator is exactly what you pay.",
  },
  {
    q: "Can I pay off my personal loan early to save on interest?",
    a: "Yes. Because there are no prepayment penalties, paying off your loan principal early directly reduces total interest costs and shortens your effective payoff timeline.",
  },
  {
    q: "Why is the interest rate editable in this calculator?",
    a: "While Ryer Loans provides a fixed 10.00% APR to all qualified borrowers, we make the APR field editable so you can compare our total borrowing costs directly against higher-rate credit cards or competitors.",
  },
  {
    q: "What is the difference between nominal interest rate and APR?",
    a: "The nominal interest rate is the baseline cost to borrow the principal balance. Annual Percentage Rate (APR) incorporates all additional mandatory lender fees into a single percentage to reveal the true annual cost of credit.",
  },
];

export default function PersonalLoanCalculatorContent() {
  // Default server-rendered / client state ($10,000 at 10% APR for 36 months)
  const [amount, setAmount] = useState<number>(10000);
  const [termMonths, setTermMonths] = useState<number>(36);
  const [apr, setApr] = useState<number>(10.0);

  // Math Calculations
  const calculationResults = useMemo(() => {
    const monthlyRate = apr / 100 / 12;
    let monthlyPayment = 0;

    if (monthlyRate > 0) {
      monthlyPayment =
        (amount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) /
        (Math.pow(1 + monthlyRate, termMonths) - 1);
    } else {
      monthlyPayment = amount / termMonths;
    }

    const totalRepaid = monthlyPayment * termMonths;
    const totalInterest = totalRepaid - amount;

    // Build Amortization Schedule
    const schedule: AmortizationRow[] = [];
    let currentBalance = amount;

    for (let m = 1; m <= termMonths; m++) {
      const interestForMonth = currentBalance * monthlyRate;
      const principalForMonth = monthlyPayment - interestForMonth;
      currentBalance = Math.max(0, currentBalance - principalForMonth);

      schedule.push({
        month: m,
        payment: monthlyPayment,
        principal: principalForMonth,
        interest: interestForMonth,
        remainingBalance: currentBalance,
      });
    }

    return {
      monthlyPayment,
      totalInterest,
      totalRepaid,
      schedule,
    };
  }, [amount, termMonths, apr]);

  // CSV Export for Amortization Schedule
  const downloadCSV = () => {
    const headers = [
      "Month,Payment ($),Principal ($),Interest ($),Remaining Balance ($)",
    ];
    const rows = calculationResults.schedule.map(
      (r) =>
        `${r.month},${r.payment.toFixed(2)},${r.principal.toFixed(2)},${r.interest.toFixed(
          2,
        )},${r.remainingBalance.toFixed(2)}`,
    );

    const csvContent =
      "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `ryer_loan_amortization_${amount}_${termMonths}m_${apr}apr.csv`,
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              Transparent Borrowing Terms
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Calculate your exact personal loan costs. Ryer Loans provides
              unsecured personal loans from{" "}
              <span className="font-semibold text-slate-900">
                $2,000 to $25,000
              </span>{" "}
              at a locked rate of{" "}
              <span className="font-semibold text-sky-700">10.00% APR</span>{" "}
              with zero origination fees and zero prepayment penalties.
            </p>
          </div>
        </div>
      </div>

      {/* CALCULATOR TOOL INTERFACE */}
      <section id="calculator-tool" className="scroll-mt-24 space-y-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-3 rounded-xl bg-sky-50 text-sky-600">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Personal Loan Repayment Simulator
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Adjust amount, term, or rate to see real-time payment outputs.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* INPUT CONTROLS */}
            <div className="lg:col-span-7 space-y-6">
              {/* Amount Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="font-bold text-slate-900 flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-sky-600" />
                    Loan Amount
                  </label>
                  <span className="text-lg font-extrabold text-sky-700 bg-sky-50 px-3 py-1 rounded-lg border border-sky-100">
                    ${amount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="25000"
                  step="500"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span>$2,000</span>
                  <span>$13,500</span>
                  <span>$25,000</span>
                </div>
              </div>

              {/* Term Selector */}
              <div className="space-y-2">
                <label className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-sky-600" />
                  Loan Term (Months)
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[12, 24, 36, 48, 60].map((term) => (
                    <button
                      key={term}
                      onClick={() => setTermMonths(term)}
                      className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        termMonths === term
                          ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {term} mo
                    </button>
                  ))}
                </div>
              </div>

              {/* APR Input (Editable for comparison) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-sky-600" />
                    Estimated APR (%)
                  </label>
                  <span className="text-xs text-slate-500">
                    Locked at 10% APR at Ryer Loans
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="36"
                    value={apr}
                    onChange={(e) => setApr(Number(e.target.value))}
                    className="w-full p-3 rounded-xl border border-slate-200 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                  />
                  <button
                    onClick={() => setApr(10.0)}
                    className="absolute right-2 top-2 px-3 py-1 bg-sky-100 hover:bg-sky-200 text-sky-800 text-xs font-semibold rounded-lg transition"
                  >
                    Reset to 10%
                  </button>
                </div>
              </div>
            </div>

            {/* OUTPUT DISPLAY */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900 text-white space-y-6 shadow-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold block">
                Calculated Breakdown
              </span>

              <div className="space-y-1">
                <span className="text-xs text-slate-400">Monthly Payment</span>
                <div className="text-3xl sm:text-4xl font-black text-white">
                  ${calculationResults.monthlyPayment.toFixed(2)}
                  <span className="text-xs text-slate-400 font-normal">
                    {" "}
                    / mo
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-4 text-xs">
                <div>
                  <span className="text-slate-400 block">
                    Total Interest Cost:
                  </span>
                  <strong className="text-emerald-400 text-base font-bold">
                    ${calculationResults.totalInterest.toFixed(2)}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block">
                    Total Amount Repaid:
                  </span>
                  <strong className="text-slate-200 text-base font-bold">
                    ${calculationResults.totalRepaid.toFixed(2)}
                  </strong>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/apply"
                  className="w-full inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm py-3 rounded-xl transition shadow-lg shadow-sky-500/20"
                >
                  <span>Apply at 10.00% APR</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* AMORTIZATION TABLE DISPLAY */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Table className="w-5 h-5 text-sky-600" />
                <span>Amortization Schedule</span>
              </h3>
              <button
                onClick={downloadCSV}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2 rounded-xl transition self-start sm:self-auto"
              >
                <Download className="w-4 h-4 text-sky-600" />
                <span>Download Schedule (CSV)</span>
              </button>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 max-h-72">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-700 font-bold sticky top-0 border-b border-slate-200">
                  <tr>
                    <th className="p-3">Month</th>
                    <th className="p-3">Payment</th>
                    <th className="p-3">Principal</th>
                    <th className="p-3">Interest</th>
                    <th className="p-3">Remaining Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {calculationResults.schedule.map((row) => (
                    <tr key={row.month} className="hover:bg-sky-50/50">
                      <td className="p-3 font-bold text-slate-900">
                        {row.month}
                      </td>
                      <td className="p-3">${row.payment.toFixed(2)}</td>
                      <td className="p-3 text-emerald-700">
                        ${row.principal.toFixed(2)}
                      </td>
                      <td className="p-3 text-amber-700">
                        ${row.interest.toFixed(2)}
                      </td>
                      <td className="p-3 text-slate-500">
                        ${row.remainingBalance.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* PRE-SET SCENARIO BLOCKS */}
      <section id="preset-scenarios" className="space-y-6 scroll-mt-24">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            Common Scenarios
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Popular Loan Benchmarks at 10.00% Fixed APR
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Scenario $2,000 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
              Starter Loan
            </span>
            <div className="text-2xl font-black text-slate-900">$2,000</div>
            <div className="space-y-1 text-xs text-slate-600">
              <p>
                • 12 Mo: <strong>$175.83/mo</strong> ($110 interest)
              </p>
              <p>
                • 24 Mo: <strong>$92.29/mo</strong> ($215 interest)
              </p>
            </div>
            <button
              onClick={() => {
                setAmount(2000);
                setTermMonths(12);
                setApr(10);
              }}
              className="w-full text-center text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 py-2 rounded-lg transition"
            >
              Load $2,000 Setup
            </button>
          </div>

          {/* Scenario $3,000 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
              Emergency Expense
            </span>
            <div className="text-2xl font-black text-slate-900">$3,000</div>
            <div className="space-y-1 text-xs text-slate-600">
              <p>
                • 12 Mo: <strong>$263.75/mo</strong> ($165 interest)
              </p>
              <p>
                • 24 Mo: <strong>$138.43/mo</strong> ($322 interest)
              </p>
            </div>
            <button
              onClick={() => {
                setAmount(3000);
                setTermMonths(24);
                setApr(10);
              }}
              className="w-full text-center text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 py-2 rounded-lg transition"
            >
              Load $3,000 Setup
            </button>
          </div>

          {/* Scenario $5,000 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
              Medium Relief
            </span>
            <div className="text-2xl font-black text-slate-900">$5,000</div>
            <div className="space-y-1 text-xs text-slate-600">
              <p>
                • 24 Mo: <strong>$230.72/mo</strong> ($537 interest)
              </p>
              <p>
                • 36 Mo: <strong>$161.34/mo</strong> ($808 interest)
              </p>
            </div>
            <button
              onClick={() => {
                setAmount(5000);
                setTermMonths(36);
                setApr(10);
              }}
              className="w-full text-center text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 py-2 rounded-lg transition"
            >
              Load $5,000 Setup
            </button>
          </div>

          {/* Scenario $10,000 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
              Consolidation Loan
            </span>
            <div className="text-2xl font-black text-slate-900">$10,000</div>
            <div className="space-y-1 text-xs text-slate-600">
              <p>
                • 36 Mo: <strong>$322.67/mo</strong> ($1,616 interest)
              </p>
              <p>
                • 48 Mo: <strong>$253.63/mo</strong> ($2,174 interest)
              </p>
            </div>
            <button
              onClick={() => {
                setAmount(10000);
                setTermMonths(36);
                setApr(10);
              }}
              className="w-full text-center text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 py-2 rounded-lg transition"
            >
              Load $10,000 Setup
            </button>
          </div>
        </div>
      </section>

      {/* SUPPORTING COPY: EDITORIAL CONTENT */}
      <div className="space-y-12 pt-6">
        {/* SECTION 1 */}
        <section id="payment-formula" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            1. How the Personal Loan Payment Formula Works
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Understanding the math behind your monthly payment empowers you to
            make informed borrowing decisions. Personal loans are standard
            installment debts governed by an amortization formula.
          </p>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <strong className="text-slate-900 font-mono text-xs sm:text-sm block">
              M = P · [ r(1 + r)ⁿ ] / [ (1 + r)ⁿ - 1 ]
            </strong>
            <p className="text-xs text-slate-600 leading-relaxed">
              Where <strong>M</strong> is the monthly payment,{" "}
              <strong>P</strong> is principal, <strong>r</strong> is the monthly
              interest rate (APR / 12), and <strong>n</strong> is the total term
              in months.
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section id="apr-vs-interest-rate" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            2. Why APR Beats Nominal Interest Rate for Comparison
          </h2>
          <p className="text-slate-600 leading-relaxed">
            When shopping for personal loans, evaluating only the "nominal
            interest rate" can be misleading. Many lenders advertise low
            baseline interest rates while adding compulsory 5% to 8% origination
            fees.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 text-xs">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <strong className="text-slate-900 font-bold block">
                Nominal Interest Rate:
              </strong>
              <p className="text-slate-600">
                Reflects only the baseline percentage charged on the principal
                balance over time. Ignores upfront fees.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <strong className="text-slate-900 font-bold block">
                Annual Percentage Rate (APR):
              </strong>
              <p className="text-slate-600">
                Incorporates both interest charges and upfront lender fees to
                reflect the true annual borrowing cost.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="extra-payments-impact" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            3. How Extra Payments Alter Your Schedule
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Because Ryer Loans charges zero prepayment penalties, any additional
            capital paid above your monthly minimum goes directly toward
            reducing your principal balance. This reduces monthly interest
            accrual and accelerates your payoff timeline.
          </p>
        </section>

        {/* SECTION 4 */}
        <section id="reading-amortization" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            4. How to Read Your Amortization Table
          </h2>
          <p className="text-slate-600 leading-relaxed">
            An amortization table provides a complete month-by-month trajectory
            of your loan. In the early months, interest makes up a higher
            proportion of your fixed payment. As your principal shrinks,
            interest drops, and principal reduction accelerates.
          </p>
        </section>

        {/* SECTION 5: FAQ */}
        <section
          id="frequently-asked-questions"
          className="space-y-6 scroll-mt-24"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            5. Frequently Asked Questions
          </h2>
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
            Ready to Secure a 10.00% Fixed APR?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Apply online in under two minutes with Ryer Loans—featuring fixed
            10.00% APR terms, no origination fees, and 1–2 day direct bank ACH
            deposit.
          </p>
          <div>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition hover:scale-[1.02]"
            >
              <span>Apply Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
