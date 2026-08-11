import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Info,
  HelpCircle,
  Clock,
  AlertTriangle,
  Zap,
  Check,
  X,
  ShieldAlert,
  FileText,
  CreditCard,
  Building2,
  DollarSign,
  UserCheck,
  PhoneCall,
  Scale,
  XCircle,
  RotateCcw,
  Search,
  Lock,
  FileSearch,
} from "lucide-react";

interface Section {
  id: string;
  title: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const sections: Section[] = [
  {
    id: "end-to-end-approval-process",
    title: "1. The Approval Process End-to-End",
  },
  {
    id: "five-underwriting-factors",
    title: "2. The 5 Factors Lenders Weigh",
  },
  {
    id: "guaranteed-approval-myth",
    title: "3. Why 'Guaranteed Approval' Is Never Real",
  },
  {
    id: "what-instant-approval-means",
    title: "4. What 'Instant Approval' Actually Describes",
  },
  {
    id: "why-ryer-requires-a-phone-call",
    title: "5. Why Ryer Requires a Brief Verification Phone Call",
  },
  {
    id: "reading-adverse-action-notice",
    title: "6. How to Read & Use an Adverse Action Notice",
  },
  {
    id: "what-to-do-after-a-decline",
    title: "7. What to Do After a Loan Decline",
  },
  {
    id: "frequently-asked-questions",
    title: "8. Frequently Asked Questions",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Does submitting a pre-qualification request affect my credit score?",
    a: "No. Checking your pre-qualified rates at Ryer Loans utilizes a soft credit inquiry, which is visible only to you and does not impact your credit score or affect your borrowing profile with other lenders.",
  },
  {
    q: "When does a hard credit inquiry occur during the process?",
    a: "A hard credit inquiry is conducted only after you select a specific loan offer, complete full identity verification, and formally agree to submit your finalized loan contract for binding underwriting.",
  },
  {
    q: "Why is a phone call mandatory before loan disbursement?",
    a: "Federal anti-money laundering (AML) protocols and truth-in-lending regulations require positive identity confirmation and clear verbal consent to protect both you and Ryer Loans against identity theft and loan fraud.",
  },
  {
    q: "What should I do if my loan application is declined?",
    a: "Review your Adverse Action Notice carefully to identify the specific reason for decline (e.g., high DTI or recent delinquency). Take targeted action—such as paying down revolving debt or verifying income documentation—before re-applying after 30 days.",
  },
  {
    q: "How long does the entire loan approval and funding cycle take?",
    a: "Initial automated soft pre-screening takes under 2 minutes. Full documentation review and the mandatory identity call typically conclude within 1 business day, followed by ACH bank deposit clearing in 1–2 business days.",
  },
  {
    q: "Can I get approved if I am a 1099 contractor or self-employed?",
    a: "Yes. Self-employed borrowers can satisfy income verification requirements by providing 2 years of tax returns (1040s) or 3 to 6 months of consecutive bank statements showing steady operational cash flow.",
  },
];

export default function HowApprovalWorksContent(): React.JSX.Element {
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
              Underwriting Standards & Terms Summary
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Ryer Loans offers unsecured personal loans from{" "}
              <span className="font-semibold text-slate-900">
                $2,000 to $25,000
              </span>{" "}
              at a single fixed rate of{" "}
              <span className="font-semibold text-sky-700">10.00% APR</span>.
              All approvals require full income underwriting, identity
              verification via phone, and adherence to federal lending
              standards. Zero origination or hidden fees.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-10 items-start">
        {/* Main Editorial Column */}
        <div className="space-y-16 min-w-0">
          {/* SECTION 1 */}
          <section
            id="end-to-end-approval-process"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                1. The Approval Process End-to-End
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Legitimate credit origination follows a regulated, multi-phase
              lifecycle designed to verify identity, establish capacity to
              repay, and protect consumers from unsustainable debt burdens.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-sm">
                  1
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Pre-Screen & Soft Check
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You submit basic financial credentials. An automated soft
                  credit check verifies general eligibility without impacting
                  your credit score.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-sm">
                  2
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Document Submission
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You select loan parameters and upload government ID, pay stubs
                  or bank statements, and banking verification details into our
                  secure portal.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-sm">
                  3
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Verification & Phone Call
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Underwriters review document authenticity, perform final DTI
                  calculations, and conduct a mandatory brief security
                  verification call.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-sm">
                  4
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Hard Check & Disbursal
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Upon agreement execution, a hard credit inquiry is logged, and
                  funds are disbursed via national ACH batch clearing in 1–2
                  business days.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section
            id="five-underwriting-factors"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                2. The Five Factors Lenders Weigh
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Underwriting models evaluate five core financial signals—often
              referred to as credit criteria—to evaluate whether a loan can be
              comfortably managed alongside your existing commitments.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  1. Income Stability
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Demonstrated, recurring cash flow through payroll deposits,
                  W-2s, or tax returns ensuring predictable monthly liquidity.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  2. Debt-to-Income (DTI) Ratio
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The percentage of gross monthly income spent on existing debt
                  obligations. Lower ratios indicate headroom for new payments.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  3. Payment Track Record
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Historical consistency on credit lines, utility bills, and
                  loans, reflecting diligence in managing financial schedules.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  4. Length of Credit History
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The age of your active financial accounts. Longer history
                  provides deeper statistical data for risk assessment.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2 sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  5. Cash Flow Stability & Cushion
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Average daily balance trends in your primary bank account to
                  ensure you do not operate on zero-margin thresholds.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section
            id="guaranteed-approval-myth"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                3. Why "Guaranteed Approval" Is Never Real
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              In legitimate financial markets, the phrase{" "}
              <strong>
                "guaranteed approval" is a predatory marketing fiction
              </strong>
              . Under federal law, regulated financial institutions are legally
              prohibited from promising credit without evaluating a borrower's
              ability to repay.
            </p>

            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
                <Scale className="w-5 h-5 text-rose-400" />
                <span>Legal & Regulatory Framework</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Under the Truth in Lending Act (TILA), Dodd-Frank Act
                guidelines, and FTC unfair or deceptive practice laws, issuing
                credit without assessing underwriting risk violates federal
                standards. Websites advertising "100% Guaranteed Approval" are
                typically doing one of three deceptive things:
              </p>

              <div className="grid gap-3 sm:grid-cols-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <strong className="text-rose-300 block font-bold">
                    Lead Brokers (Selling Data):
                  </strong>
                  <p className="text-slate-300">
                    They are not lenders. They collect and sell your sensitive
                    personal data to third-party networks, subjecting you to
                    endless spam calls.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <strong className="text-rose-300 block font-bold">
                    Predatory High-Fee Products:
                  </strong>
                  <p className="text-slate-300">
                    They offer loans with triple-digit APRs (300%–700%) or
                    exorbitant hidden fees that trap borrowers in cycles of
                    debt.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <strong className="text-rose-300 block font-bold">
                    Upfront Fee Scams:
                  </strong>
                  <p className="text-slate-300">
                    Fraudulent operators demand advance "collateral," "insurance
                    fees," or prepaid gift cards before disappearing without
                    funding.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section
            id="what-instant-approval-means"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                4. What "Instant Approval" Actually Describes
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              When reputable digital lenders use the phrase "instant approval,"
              they are describing an{" "}
              <strong>
                automated pre-screen or conditional pre-qualification
              </strong>
              —not binding, final loan origination.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-sky-50/50 border border-sky-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-sky-950 text-base">
                  <Zap className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  <span>Automated Pre-Screen (Instant)</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li>• Algorithmic check of basic self-reported inputs.</li>
                  <li>• Uses a soft credit inquiry without score impact.</li>
                  <li>• Generates estimated loan amounts and rate tiers.</li>
                  <li>
                    • <strong>Conditional:</strong> Pending full document
                    verification.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-950 text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Final Approval & Binding Origination</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li>• Underwriter validation of tax/paystub documents.</li>
                  <li>• Automated identity check (KYC/AML rules).</li>
                  <li>• Verbal telephone confirmation of agreement terms.</li>
                  <li>• Triggers hard credit pull and immediate ACH payout.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 5 */}
          <section
            id="why-ryer-requires-a-phone-call"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                5. Why Ryer Requires a Brief Verification Phone Call
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              In an age of automated digital processes, applicants occasionally
              ask why Ryer Loans mandates a brief, 3-minute telephone
              confirmation prior to final loan release. We require this step for
              three fundamental reasons:
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <ShieldAlert className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>1. Identity Theft Protection</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Identity theft and stolen personal data are rampant. Direct
                  verbal confirmation ensures an unauthorized third party is not
                  fraudulently opening debt in your name.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Info className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>2. Truth-in-Lending Clarity</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We verbally review repayment schedules, monthly obligations,
                  and confirm zero hidden fees so you are completely confident
                  in your contract terms.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Building2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>3. Account Deposit Accuracy</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Confirming bank routing and account numbers directly over the
                  phone prevents ACH transfer rejections or misdirected funds.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6 */}
          <section
            id="reading-adverse-action-notice"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                6. How to Read & Use an Adverse Action Notice
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              If an application cannot be approved under current parameters, the
              Equal Credit Opportunity Act (ECOA) mandates that lenders provide
              an <strong>Adverse Action Notice</strong>. Far from being a dead
              end, this document is an invaluable diagnostic tool.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <FileSearch className="w-5 h-5 text-sky-600" />
                <span>Key Information Contained in Your Notice</span>
              </h3>

              <div className="grid gap-3 sm:grid-cols-2 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    Principal Denial Reasons:
                  </strong>
                  <p className="text-slate-600">
                    Up to four specific statutory reasons for decline (e.g.,
                    "Excessive debt obligations relative to income" or
                    "Insufficient length of credit history").
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/5 border border-slate-200/80 p-3.5 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    Credit Reporting Agency Source:
                  </strong>
                  <p className="text-slate-600">
                    Identifies which bureau (Equifax, Experian, TransUnion)
                    supplied the credit report evaluated during underwriting.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    Right to a Free Credit Report:
                  </strong>
                  <p className="text-slate-600">
                    Entitles you to request a full, free copy of your credit
                    disclosure from that bureau within 60 days of receiving the
                    notice.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <strong className="text-slate-900 block font-bold">
                    Credit Score Disclosure:
                  </strong>
                  <p className="text-slate-600">
                    Provides the exact credit score used during the decision
                    along with key factors negatively affecting the score.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7 */}
          <section
            id="what-to-do-after-a-decline"
            className="space-y-6 scroll-mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                7. What to Do After a Loan Decline
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              A decline is a reflection of current financial metrics—not your
              character. Use these actionable steps to address the factors
              identified in your Adverse Action Notice:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <RotateCcw className="w-4 h-4 text-sky-600" />
                  <span>1. Audit Your Credit Bureau File</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Request your free copy of the credit report used. Search for
                  inaccurate late payments, duplicate accounts, or fraudulent
                  records, and file disputes directly with the reporting bureau.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <DollarSign className="w-4 h-4 text-sky-600" />
                  <span>2. Pay Down High Revolving Balances</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lowering revolving credit card balances reduces both your
                  credit utilization ratio and total monthly debt payments,
                  improving your Debt-to-Income profile.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FileText className="w-4 h-4 text-sky-600" />
                  <span>3. Document Supplemental Income</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If secondary income (freelance work, part-time earnings,
                  regular side work) was omitted on your initial check, assemble
                  tax records to demonstrate full earning capacity.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>4. Wait 30 Days Before Re-applying</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Avoid submitting multiple credit applications simultaneously
                  across lenders. Give your file time to reflect balance
                  reductions and updated account cycles.
                </p>
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
              Ready for Transparent Underwriting?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Check your eligibility in under 2 minutes with zero credit score
              impact. Fixed 10.00% APR terms, no hidden fees, and responsible
              underwriting.
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
