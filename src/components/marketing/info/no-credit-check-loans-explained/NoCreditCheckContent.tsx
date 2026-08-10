import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Info,
  HelpCircle,
  AlertTriangle,
  XCircle,
  CreditCard,
  Search,
  Lock,
  Building2,
  FileText,
  DollarSign,
  AlertOctagon,
  Scale,
  ShieldAlert,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";

const sections = [
  {
    id: "what-the-phrase-means",
    title: "1. 'No Credit Check Loans': What That Phrase Actually Means",
  },
  {
    id: "soft-vs-hard-inquiry",
    title: "2. Soft Inquiry vs. Hard Inquiry: Score Impact & Duration",
  },
  {
    id: "in-practice-truth",
    title: "3. What 'No Credit Check' Means in Practice: Alternative Bureaus",
  },
  {
    id: "why-genuine-no-check-fails",
    title: "4. Why Genuine No-Verification Loans Cannot Exist at Scale",
  },
  {
    id: "what-ryer-loans-checks",
    title:
      "5. What Ryer Loans Checks & Why (Complete Underwriting Transparency)",
  },
  {
    id: "real-cost-triple-digit-apr",
    title: "6. The Real Cost of True No-Check Lending (CFPB Data)",
  },
  {
    id: "red-flags-predatory-lenders",
    title: "7. Red Flags: How to Spot Predatory Loan Scams",
  },
  {
    id: "better-bad-credit-options",
    title: "8. Better Alternatives for Thin or Damaged Credit Profiles",
  },
  {
    id: "frequently-asked-questions",
    title: "9. Frequently Asked Questions",
  },
];

const faqItems = [
  {
    q: "Does Ryer Loans offer no credit check personal loans?",
    a: "No. Ryer Loans performs credit checks to underwrite responsibly. We use initial soft inquiries to allow you to review rate offers without impacting your credit score. A formal hard inquiry occurs only when you accept an offer and complete your final loan contract.",
  },
  {
    q: "Will checking my rate at Ryer Loans lower my FICO score?",
    a: "No. Prequalifying with Ryer Loans relies on a soft credit pull, which is visible only to you on your credit report. It does not drop your credit score or leave an inquiry visible to other lenders.",
  },
  {
    q: "What subprime credit bureaus do 'no credit check' lenders use?",
    a: "Lenders marketing 'no credit check' loans frequently query subprime reporting agencies such as Clarity Services, FactorTrust, or Teletrack. These databases track specialty data like payday loan histories, bank account closures, and short-term debt activity.",
  },
  {
    q: "Why do true 'no credit check' loans carry triple-digit APRs?",
    a: "Without evaluating a borrower's credit history or cash flow, a lender cannot measure default risk. To offset predictable high default rates, no-check lenders charge exorbitant APRs—often 300% to 600%—passing the burden onto borrowers who repay.",
  },
  {
    q: "What is the maximum interest rate charged by Ryer Loans?",
    a: "Every approved unsecured personal loan at Ryer Loans carries a single fixed rate of 10.00% APR with zero origination fees, zero monthly maintenance fees, and zero prepayment penalties.",
  },
  {
    q: "How can I borrow money safely if I have bad credit or no credit history?",
    a: "Consider credit union Payday Alternative Loans (PALs), credit-builder installment loans, secured credit cards, or applying with a creditworthy cosigner. These paths provide structured repayment without exposing you to predatory triple-digit interest rates.",
  },
];

export default function NoCreditCheckContent() {
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
              Educational Transparency Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Ryer Loans provides transparent unsecured personal loans from{" "}
              <span className="font-semibold text-slate-900">
                $2,000 to $25,000
              </span>{" "}
              at a single fixed rate of{" "}
              <span className="font-semibold text-sky-700">10.00% APR</span>. We
              conduct soft credit pulls for prequalification so you can check
              your rates with zero impact to your credit score.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-10 items-start">
        <div className="space-y-16 min-w-0">
          {/* SECTION 1 */}
          <section
            id="what-the-phrase-means"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                1. "No Credit Check Loans": What That Phrase Actually Means
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Every month, hundreds of thousands of consumers search online for{" "}
              <strong>"no credit check loans."</strong> The phrase carries an
              obvious appeal: an instant cash injection without a bank probing
              your past financial mistakes, medical debt, or lower credit score.
            </p>

            <p className="text-slate-600 leading-relaxed">
              However, in legal consumer finance, the marketing term "no credit
              check" rarely aligns with what borrowers expect. Borrowers usually
              assume it means a lender gives them money based on trust or
              employment alone, without pulling records. In reality, finance
              operates on risk math:{" "}
              <strong>
                no lender can risk thousands of dollars without verifying
                whether you can pay it back.
              </strong>
            </p>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Search className="w-5 h-5 text-sky-600" />
                <span>Deconstructing the Marketing Illusion</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When a lender advertises "No Credit Check," they are almost
                always using a precise legal technicality. They mean they will
                not perform a{" "}
                <em>
                  traditional hard inquiry against the Big Three credit bureaus
                </em>{" "}
                (Equifax, Experian, and TransUnion) at the moment of
                application. It does <strong>not</strong> mean they are making
                an unverified loan.
              </p>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="soft-vs-hard-inquiry" className="space-y-6 scroll-mt-24">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                2. Soft Inquiry vs. Hard Inquiry: Score Impact & Duration
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Understanding how inquiries work removes much of the fear
              surrounding credit checks. Not all credit checks affect your FICO
              or VantageScore.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-sky-50/50 border border-sky-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-2 font-bold text-sky-950 text-base">
                  <ShieldCheck className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  <span>Soft Credit Inquiry</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A high-level background check of your credit file. Used by
                  lenders for prequalified offers, background checks, and when
                  you check your own score.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 border-t border-sky-200/60 pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>
                      <strong>0 Points</strong> credit score impact
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>
                      Invisible to other lenders reviewing your report
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Used by Ryer Loans for rate checks</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                  <Lock className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span>Hard Credit Inquiry</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A formal review triggered when you submit a completed
                  application for credit (mortgage, auto loan, or personal loan
                  final approval).
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 border-t border-slate-200/60 pt-3">
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span>
                      Typically causes a temporary <strong>2 to 5 point</strong>{" "}
                      dip
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span>Remains listed on your report for 24 months</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span>Only affects score calculation for 12 months</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="in-practice-truth" className="space-y-6 scroll-mt-24">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                3. What "No Credit Check" Means in Practice: Alternative Bureaus
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              If a "no credit check" lender isn't pulling your main credit
              report, how do they decide to lend? They typically query{" "}
              <strong>specialized subprime reporting bureaus</strong>.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                Agencies like{" "}
                <strong>Clarity Services (an Experian company)</strong>,{" "}
                <strong>FactorTrust (a TransUnion company)</strong>, and{" "}
                <strong>Teletrack</strong> track niche consumer data outside
                standard credit scoring:
              </p>

              <div className="grid gap-3 sm:grid-cols-3 text-xs pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    Payday Loan History
                  </strong>
                  <p className="text-slate-600">
                    Tracks outstanding or defaulted short-term storefront and
                    online loans.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    Banking Involuntary Closures
                  </strong>
                  <p className="text-slate-600">
                    Monitors ChexSystems data for unpaid overdraft fees or
                    closed accounts.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    Alternative Repayments
                  </strong>
                  <p className="text-slate-600">
                    Evaluates rent-to-own agreements, auto title loans, and
                    specialty installment plans.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                Thus, a "no credit check loan" is rarely an uninspected loan; it
                is simply checked against specialized, subprime risk databases
                instead of traditional bureaus.
              </p>
            </div>
          </section>

          {/* SECTION 4 */}
          <section
            id="why-genuine-no-check-fails"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                4. Why Genuine No-Verification Loans Cannot Exist at Scale
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              In lending, interest rates serve a specific purpose: pricing risk.
              When a bank lends money, a portion of borrowers will inevitably
              default. The interest collected from paying borrowers covers those
              losses and administrative costs.
            </p>

            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-base">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>The Pricing Paradox of No-Verification Credit</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                If a lender verifies neither your credit history nor your
                income/cash flow, they operate completely blind. They have no
                way to distinguish a creditworthy borrower from an insolvent
                one. To avoid going out of business, they must assume{" "}
                <strong>extreme default rates (30% to 50%)</strong> and charge
                triple-digit APRs to offset the risk.
              </p>
            </div>
          </section>

          {/* SECTION 5 */}
          <section
            id="what-ryer-loans-checks"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                5. What Ryer Loans Checks & Why (Underwriting Transparency)
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              At Ryer Loans, we don't pretend credit checks don't exist.
              Instead, we use a transparent underwriting process that allows us
              to keep rates fixed at <strong>10.00% APR</strong> without hidden
              fees. Here is exactly what we verify and why:
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  1. Initial Soft Pull
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We check your basic credit profile via a soft inquiry. This
                  lets us confirm your eligibility without dropping your credit
                  score.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  2. Income Verification
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We confirm recurring income (employment, self-employment, or
                  pension) to ensure the monthly installment fits safely within
                  your budget.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  3. Cash Flow & DTI
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We calculate your Debt-to-Income ratio to verify that your
                  existing monthly debt payments leave enough margin for living
                  expenses.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  4. Bank Account Validity
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We verify an active, positive-balance checking account to
                  ensure secure direct ACH deposit and automated repayment
                  processing.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6 */}
          <section
            id="real-cost-triple-digit-apr"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                6. The Real Cost of True No-Check Lending (CFPB Data)
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              What does "no-check" lending cost in practice? When lenders bypass
              credit checks entirely, they rely on short-term payday loans, auto
              title loans, or high-cost installment loans.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <FileText className="w-5 h-5 text-rose-600" />
                <span>
                  Consumer Financial Protection Bureau (CFPB) Findings
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                According to extensive research published by the{" "}
                <strong>CFPB</strong>, short-term no-credit-check loans present
                severe structural traps for consumers:
              </p>

              <div className="grid gap-3 sm:grid-cols-3 text-xs pt-2">
                <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-200/80 space-y-1">
                  <strong className="text-rose-950 block font-bold">
                    391% Average Payday APR
                  </strong>
                  <p className="text-slate-600">
                    A standard two-week payday loan charging $15 per $100
                    borrowed equates to an annual rate of nearly 400%.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-200/80 space-y-1">
                  <strong className="text-rose-950 block font-bold">
                    80% Rollover Rate
                  </strong>
                  <p className="text-slate-600">
                    Over 80% of payday loans are rolled over or renewed within
                    14 days, trapping borrowers in continuous fee cycles.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-200/80 space-y-1">
                  <strong className="text-rose-950 block font-bold">
                    1 in 5 Title Loans Repossessed
                  </strong>
                  <p className="text-slate-600">
                    For no-credit-check auto title loans, 20% of borrowers
                    ultimately have their vehicle repossessed by the lender.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7 */}
          <section
            id="red-flags-predatory-lenders"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                7. Red Flags: How to Spot Predatory Loan Scams
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Searching for flexible credit options exposes borrowers to
              deceptive or predatory operations. Watch for these five major
              warning signs before providing personal information:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <AlertOctagon className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">
                    1. Demand for Upfront Fees
                  </strong>
                  <p className="text-slate-600">
                    Legitimate lenders never require "application fees,"
                    "insurance fees," or gift cards before disbursing funds.
                    Origination fees, if any, are deducted directly from loan
                    proceeds.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">
                    2. Guaranteed Approval Language
                  </strong>
                  <p className="text-slate-600">
                    Federal regulations prohibit lenders from promising 100%
                    guaranteed approval before evaluating an applicant's basic
                    eligibility and identity.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">
                    3. No Disclosed Physical Address or License
                  </strong>
                  <p className="text-slate-600">
                    Reputable lenders display state licensing disclosures and
                    verifiable physical headquarters addresses on their site
                    footers and legal pages.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <Clock className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">
                    4. High Pressure to Act Immediately
                  </strong>
                  <p className="text-slate-600">
                    Scammers use high-pressure tactics claiming an offer
                    "expires in 10 minutes" to prevent you from researching
                    their background or terms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8 */}
          <section
            id="better-bad-credit-options"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                8. Better Alternatives for Thin or Damaged Credit Profiles
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              If you have a limited credit history or are working to rebuild a
              past score, avoid triple-digit payday rates by exploring these
              safer consumer alternatives:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  Credit Union PALs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Federal credit unions offer{" "}
                  <strong>Payday Alternative Loans (PALs)</strong> with capped
                  APRs (maximum 28%), small loan amounts ($200 to $1,000), and
                  manageable monthly terms.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  Credit-Builder Loans
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lenders hold the loan amount in a secured savings account
                  while you make small monthly payments. Once paid, the funds
                  are released to you while positive history is reported to
                  credit bureaus.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  Co-Signed Installment Loans
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Applying with a family member or co-signer who has established
                  credit can help you qualify for lower fixed rates while
                  building your own credit score.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  Soft-Pull Personal Loans
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Prequalifying with transparent lenders like Ryer Loans allows
                  you to see your exact eligibility and installment terms using
                  a soft inquiry, without hurting your credit score.
                </p>
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
              Check Your Rate With Zero Credit Impact
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Experience honest, fixed-rate financing. Prequalify in under two
              minutes with a soft credit pull—featuring single fixed 10.00% APR
              terms and zero origination fees.
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
