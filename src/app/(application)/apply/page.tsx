"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  ArrowLeft,
  Info,
  DollarSign,
  User,
  Briefcase,
  Building2,
  FileText,
  AlertCircle,
} from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";
import { toast } from "sonner";

interface FormData {
  // Step 1: Loan Amount & Purpose
  amount: number;
  purpose: string;
  otherPurpose: string;

  // Step 2: Personal Details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ssn: string;
  dob: string;

  // Step 3: Income & Employment
  employmentStatus: string;
  netMonthlyIncome: string;
  hasVehicle: string;

  // Step 4: Bank Account Details
  bankName: string;
  routingNumber: string;
  accountNumber: string;
  accountAge: string;

  // Step 5: Consents
  eSignConsent: boolean;
  termsConsent: boolean;
  creditAuth: boolean;
  contactConsent: boolean;
}

export default function ApplyPage() {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [isSlide, setIsSlide] = useState<boolean>(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState<FormData>({
    amount: 5000,
    purpose: "",
    otherPurpose: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ssn: "",
    dob: "",
    employmentStatus: "",
    netMonthlyIncome: "",
    hasVehicle: "",
    bankName: "",
    routingNumber: "",
    accountNumber: "",
    accountAge: "",
    eSignConsent: false,
    termsConsent: false,
    creditAuth: false,
    contactConsent: false, // OPTIONAL per TCPA guidelines
  });

  const updateField = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const MIN_AMOUNT = 2000;
  const MAX_AMOUNT = 25000;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    // 1. Check if the purpose is empty
    if (!isSlide) {
      toast.error(
        `Please select an amount between $${MIN_AMOUNT.toLocaleString()} and $${MAX_AMOUNT.toLocaleString()}.`,
      );
      return;
    }
    if (!formData.purpose) {
      toast.error("Please select a purpose before continuing.");
      return; // Stop execution here
    }
    const amount = Number(formData.amount);

    if (step < 5) {
      setStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verify required checkboxes (1, 2, 3 must be true; 4 is OPTIONAL)
    if (
      !formData.eSignConsent ||
      !formData.termsConsent ||
      !formData.creditAuth
    ) {
      alert("Please accept all required agreements before submitting.");
      return;
    }

    // Submit logic here...
    router.push("/apply/success");
  };

  const formattedMin = `$${RATE_CONFIG.minAmount.toLocaleString()}`;
  const formattedMax = `$${RATE_CONFIG.maxAmount.toLocaleString()}`;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-slate-700">
      {/* Header & Meta Section */}
      <div className="text-center space-y-3 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Apply for Your Personal Loan
        </h1>
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500">
          <Lock className="w-4 h-4 text-emerald-600" />
          <span>
            About seven minutes. Your information is encrypted. Submitting does
            not obligate you to accept a loan.
          </span>
        </div>
      </div>

      {/* Progress Bar & Step Tracker */}
      <div className="mb-8 space-y-2">
        <div className="flex justify-between items-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <span>Step {step} of 5</span>
          <span>
            {step === 1 && "Loan Amount & Purpose"}
            {step === 2 && "About You"}
            {step === 3 && "Income & Employment"}
            {step === 4 && "Your Bank Account"}
            {step === 5 && "Review & Submit"}
          </span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
          <div
            className="h-full bg-sky-600 transition-all duration-300 ease-out"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Application Form */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <form
          onSubmit={step === 5 ? handleSubmit : handleNext}
          className="space-y-6"
        >
          {/* STEP 1: LOAN AMOUNT & PURPOSE */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-sky-600" />
                  How much do you need?
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Choose an amount between {formattedMin} and {formattedMax}.
                  You can discuss adjusting it when you speak with our team.
                </p>
              </div>

              {/* Amount Slider / Input */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label className="text-sm font-semibold text-slate-900">
                    Requested Amount
                  </label>
                  <span className="text-2xl font-bold text-slate-900 font-mono">
                    ${Number(formData.amount).toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={RATE_CONFIG.minAmount}
                  max={RATE_CONFIG.maxAmount}
                  step={500}
                  value={formData.amount}
                  onChange={(e) => {
                    updateField("amount", Number(e.target.value));
                    setIsSlide(true);
                  }}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span>{formattedMin}</span>
                  <span>{formattedMax}</span>
                </div>
              </div>

              {/* Purpose Selection */}
              <div className="space-y-2">
                <label
                  htmlFor="purpose"
                  className="block text-sm font-semibold text-slate-900"
                >
                  Loan Purpose
                </label>
                <p className="text-xs text-slate-500">
                  Choose the closest match. This helps us structure the right
                  term for you.
                </p>
                <div className="relative">
                  <select
                    id="purpose"
                    value={formData.purpose}
                    onChange={(e) => updateField("purpose", e.target.value)}
                    className="w-full appearance-none rounded-xl border border-slate-300 bg-white p-3 pr-10 text-sm text-slate-900 transition-colors focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                  >
                    <option value="">Select a purpose</option>
                    <option value="debt_consolidation">
                      Debt Consolidation
                    </option>
                    <option value="home_improvement">Home Improvement</option>
                    <option value="emergency_expense">Emergency Expense</option>
                    <option value="major_purchase">Major Purchase</option>
                    <option value="business">Business / Working Capital</option>
                    <option value="other">Other</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {formData.purpose === "other" && (
                <div className="space-y-1">
                  <label
                    htmlFor="otherPurpose"
                    className="block text-sm font-semibold text-slate-900"
                  >
                    Specify Purpose
                  </label>
                  <p className="text-xs text-slate-500">
                    Tell us briefly what the funds are for.
                  </p>
                  <input
                    id="otherPurpose"
                    type="text"
                    required
                    value={formData.otherPurpose}
                    onChange={(e) =>
                      updateField("otherPurpose", e.target.value)
                    }
                    placeholder="e.g. Moving expenses"
                    className="w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                  />
                </div>
              )}
            </div>
          )}

          {/* STEP 2: ABOUT YOU */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <User className="w-5 h-5 text-sky-600" />
                  About You
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Double-check this — your Application ID and every update go
                  here.
                </p>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="(555) 000-0000"
                  className="w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="ssn"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1"
                  >
                    Social Security Number (SSN)
                  </label>
                  <input
                    id="ssn"
                    type="password"
                    maxLength={9}
                    required
                    value={formData.ssn}
                    onChange={(e) => updateField("ssn", e.target.value)}
                    placeholder="XXX-XX-XXXX"
                    className="w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm font-mono focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Required by federal law to verify your identity. Encrypted
                    and never displayed in full.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="dob"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1"
                  >
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => updateField("dob", e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    You must be at least 18 (19 in Alabama and Nebraska).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: INCOME & EMPLOYMENT */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-sky-600" />
                  Income & Employment
                </h2>
              </div>

              <div>
                <label
                  htmlFor="employmentStatus"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1"
                >
                  Employment Status
                </label>
                <select
                  id="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={(e) =>
                    updateField("employmentStatus", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                >
                  <option value="employed">Employed Full-Time</option>
                  <option value="part_time">Employed Part-Time</option>
                  <option value="self_employed">Self-Employed</option>
                  <option value="retired">Retired / Pension</option>
                  <option value="other">Other Income Source</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="netMonthlyIncome"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1"
                >
                  Net Monthly Income ($)
                </label>
                <input
                  id="netMonthlyIncome"
                  type="number"
                  required
                  value={formData.netMonthlyIncome}
                  onChange={(e) =>
                    updateField("netMonthlyIncome", e.target.value)
                  }
                  placeholder="e.g. 4500"
                  className="w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm font-mono focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Your take-home pay after taxes and deductions — the amount
                  that actually lands in your account, not your gross salary.
                </p>
              </div>

              <div>
                <label
                  htmlFor="hasVehicle"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1"
                >
                  Do you own a vehicle?
                </label>
                <select
                  id="hasVehicle"
                  value={formData.hasVehicle}
                  onChange={(e) => updateField("hasVehicle", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                >
                  <option value="yes">Yes (Paid off or Financed)</option>
                  <option value="no">No</option>
                </select>
                <p className="text-xs text-slate-500 mt-1">
                  We ask as one part of your overall financial picture. Your
                  vehicle is not collateral and is not at risk.
                </p>
              </div>
            </div>
          )}

          {/* STEP 4: YOUR BANK ACCOUNT */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-sky-600" />
                  Your Bank Account
                </h2>
                <div className="mt-2 bg-sky-50 border border-sky-200 rounded-xl p-3 flex items-start gap-2.5 text-xs text-sky-950">
                  <Info className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>
                    This is where your funds would be deposited. We do not ask
                    for your online banking password here. Account verification
                    happens separately through a secure connection with your
                    bank.
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="bankName"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1"
                >
                  Bank Name
                </label>
                <input
                  id="bankName"
                  type="text"
                  required
                  value={formData.bankName}
                  onChange={(e) => updateField("bankName", e.target.value)}
                  placeholder="e.g. Chase, Bank of America"
                  className="w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="routingNumber"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1"
                  >
                    Routing Number
                  </label>
                  <input
                    id="routingNumber"
                    type="text"
                    maxLength={9}
                    required
                    value={formData.routingNumber}
                    onChange={(e) =>
                      updateField("routingNumber", e.target.value)
                    }
                    placeholder="9 digits"
                    className="w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm font-mono focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Nine digits, bottom-left of your check or in your banking
                    app.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="accountNumber"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1"
                  >
                    Account Number
                  </label>
                  <input
                    id="accountNumber"
                    type="text"
                    required
                    value={formData.accountNumber}
                    onChange={(e) =>
                      updateField("accountNumber", e.target.value)
                    }
                    placeholder="Account number"
                    className="w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm font-mono focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="accountAge"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1"
                >
                  Account Age
                </label>
                <select
                  id="accountAge"
                  value={formData.accountAge}
                  onChange={(e) => updateField("accountAge", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                >
                  <option value="less_than_1_year">Less than 1 year</option>
                  <option value="1_to_3_years">1 to 3 years</option>
                  <option value="3_plus_years">3+ years</option>
                </select>
                <p className="text-xs text-slate-500 mt-1">
                  Roughly how long this account has been open.
                </p>
              </div>
            </div>
          )}

          {/* STEP 5: REVIEW AND SUBMIT & CONSENT LANGUAGE */}
          {step === 5 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-sky-600" />
                  Review and Submit
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Check everything below. If something is wrong, use the edit
                  links — correcting it now is faster than fixing it later.
                </p>
              </div>

              {/* Application Summary Cards */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-sm space-y-3">
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <div>
                    <span className="text-xs text-slate-500 block">
                      Requested Amount
                    </span>
                    <span className="font-bold text-slate-900 font-mono">
                      ${formData.amount.toLocaleString()}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-sky-600 hover:underline font-semibold"
                  >
                    Edit
                  </button>
                </div>

                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <div>
                    <span className="text-xs text-slate-500 block">
                      Applicant
                    </span>
                    <span className="font-medium text-slate-900">
                      {formData.firstName} {formData.lastName} ({formData.email}
                      )
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs text-sky-600 hover:underline font-semibold"
                  >
                    Edit
                  </button>
                </div>

                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <div>
                    <span className="text-xs text-slate-500 block">
                      Net Monthly Income
                    </span>
                    <span className="font-medium text-slate-900">
                      ${formData.netMonthlyIncome}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="text-xs text-sky-600 hover:underline font-semibold"
                  >
                    Edit
                  </button>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-slate-500 block">
                      Bank Account
                    </span>
                    <span className="font-medium text-slate-900">
                      {formData.bankName} (Ending in{" "}
                      {formData.accountNumber.slice(-4) || "••••"})
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="text-xs text-sky-600 hover:underline font-semibold"
                  >
                    Edit
                  </button>
                </div>
              </div>

              {/* CONSENT LANGUAGE (VERBATIM) */}
              <div className="space-y-4 pt-2">
                <h3 className="font-bold text-slate-900 text-sm">
                  Required Consents & Authorizations
                </h3>

                {/* Checkbox 1 */}
                <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <input
                    id="eSignConsent"
                    type="checkbox"
                    required
                    checked={formData.eSignConsent}
                    onChange={(e) =>
                      updateField("eSignConsent", e.target.checked)
                    }
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600"
                  />
                  <label
                    htmlFor="eSignConsent"
                    className="text-xs leading-relaxed text-slate-700"
                  >
                    <strong>1. Electronic Records Consent (required)</strong> I
                    consent to receive all disclosures, notices, agreements, and
                    communications from Ryer Loans electronically, including my
                    loan agreement and any required legal notices. I confirm I
                    can access and retain PDF documents and HTML web pages. I
                    understand I may withdraw this consent by contacting Ryer
                    Loans, and that withdrawing it may prevent me from
                    completing an online application. Full terms:{" "}
                    <Link
                      href="/e-sign-consent"
                      className="text-sky-600 underline"
                    >
                      E-Sign Consent
                    </Link>
                    .
                  </label>
                </div>

                {/* Checkbox 2 */}
                <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <input
                    id="termsConsent"
                    type="checkbox"
                    required
                    checked={formData.termsConsent}
                    onChange={(e) =>
                      updateField("termsConsent", e.target.checked)
                    }
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600"
                  />
                  <label
                    htmlFor="termsConsent"
                    className="text-xs leading-relaxed text-slate-700"
                  >
                    <strong>
                      2. Privacy Policy and Terms of Use (required)
                    </strong>{" "}
                    I have read and agree to the{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-sky-600 underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/terms-of-use"
                      className="text-sky-600 underline"
                    >
                      Terms of Use
                    </Link>
                    . I confirm that all information I have provided is true,
                    complete, and accurate to the best of my knowledge, and I
                    understand that providing false information in connection
                    with a credit application may be a violation of federal and
                    state law.
                  </label>
                </div>

                {/* Checkbox 3 */}
                <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <input
                    id="creditAuth"
                    type="checkbox"
                    required
                    checked={formData.creditAuth}
                    onChange={(e) =>
                      updateField("creditAuth", e.target.checked)
                    }
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600"
                  />
                  <label
                    htmlFor="creditAuth"
                    className="text-xs leading-relaxed text-slate-700"
                  >
                    <strong>
                      3. Credit and Verification Authorization (required)
                    </strong>{" "}
                    I authorize Ryer Loans and its service providers to verify
                    the information in this application and to obtain consumer
                    reports, credit reports, and other information about me from
                    consumer reporting agencies and other sources, including
                    alternative credit bureaus, for the purposes of evaluating
                    this application, verifying my identity, preventing fraud,
                    and — if a loan is originated — servicing and collecting
                    that loan. I authorize Ryer Loans to verify my employment
                    and income, and to connect to my bank account on a read-only
                    basis to confirm ownership and account details.
                  </label>
                </div>

                {/* Checkbox 4 (OPTIONAL - TCPA compliant) */}
                <div className="space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="flex items-start gap-3">
                    <input
                      id="contactConsent"
                      type="checkbox"
                      checked={formData.contactConsent}
                      onChange={(e) =>
                        updateField("contactConsent", e.target.checked)
                      }
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-600"
                    />
                    <label
                      htmlFor="contactConsent"
                      className="text-xs leading-relaxed text-slate-700"
                    >
                      <strong>4. Consent to Contact (OPTIONAL)</strong> I
                      authorize Ryer Loans, its affiliates, and its service
                      providers to contact me at the telephone number(s) and
                      email address I have provided, including my wireless
                      number, using automatic telephone dialing systems,
                      artificial or prerecorded voice messages, ringless
                      voicemail, text/SMS messages, and email — for purposes
                      including servicing my application, marketing, and offers
                      of products and services. I understand message and data
                      rates may apply, that message frequency varies, that I may
                      reply STOP to any text message to opt out or HELP for
                      help, and that I may revoke this consent at any time by
                      calling {RATE_CONFIG.phone} or emailing
                      support@ryerloans.com.
                    </label>
                  </div>

                  {/* TCPA Visibly Rendered Legal Disclosure */}
                  <p className="text-[11px] text-slate-500 leading-relaxed pl-7 pt-1">
                    I understand that my consent to receive these calls and
                    messages is not a condition of obtaining any loan, credit,
                    goods, or services from Ryer Loans.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Form Actions / Navigation Buttons */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-xl transition text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {step < 5 ? (
              <button
                // disabled={!isSlide}
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3 rounded-xl shadow transition text-sm ml-auto"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition text-base ml-auto"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>Submit Application</span>
              </button>
            )}
          </div>
        </form>

        {/* Microcopy under Submit Button on Step 5 */}
        {step === 5 && (
          <p className="text-xs text-slate-500 leading-relaxed text-center mt-6 pt-4 border-t border-slate-100">
            By submitting, you confirm the above. Submitting an application does
            not obligate you to accept a loan, and Ryer Loans is under no
            obligation to extend one. Applications are subject to verification
            and approval. Ryer Loans will never ask you to send money or pay a
            fee before your loan is funded.
          </p>
        )}
      </div>
    </div>
  );
}
