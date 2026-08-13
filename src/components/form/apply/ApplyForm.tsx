"use client";

import { useState } from "react";
import Link from "next/link";
import ProgressBar from "./ProgressBar";
import Step1LoanRequest from "./Step1LoanRequest";
import Step2PersonalDetails from "./Step2PersonalDetails";
import Step3EmploymentIncome from "./Step3EmploymentIncome";
import Step4Banking from "./Step4Banking";
import Step5ReviewConsent from "./Step5ReviewConsent";
import { ApplicationFormData, initialData } from "@/src/lib/types/application";

export default function ApplyForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ApplicationFormData>(initialData);

  const updateFormData = (section: keyof ApplicationFormData, data: any) => {
    setFormData((previous) => ({
      ...previous,
      [section]: {
        ...previous[section],
        ...data,
      },
    }));
  };

  const nextStep = () => {
    setStep((current) => Math.min(current + 1, 5));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToStep = (targetStep: number) => {
    setStep(targetStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Format currency display safely
  const formattedAmount = formData.loan?.amount
    ? Number(formData.loan.amount).toLocaleString("en-US")
    : "0";

  const apr = 10;

  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 -mt-10 sm:-mt-12 sm:px-6 pb-16">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Form Card */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:col-span-7 xl:col-span-8">
          <ProgressBar step={step} />

          {/* Steps */}
          {step === 1 && (
            <Step1LoanRequest
              data={formData.loan}
              update={(data) => updateFormData("loan", data)}
              onNext={nextStep}
            />
          )}

          {step === 2 && (
            <Step2PersonalDetails
              data={formData.personal}
              update={(data) => updateFormData("personal", data)}
              onBack={previousStep}
              onNext={nextStep}
            />
          )}

          {step === 3 && (
            <Step3EmploymentIncome
              data={formData.employment}
              update={(data) => updateFormData("employment", data)}
              onBack={previousStep}
              onNext={nextStep}
            />
          )}

          {step === 4 && (
            <Step4Banking
              data={formData.banking}
              update={(data) => updateFormData("banking", data)}
              onBack={previousStep}
              onNext={nextStep}
            />
          )}

          {step === 5 && (
            <Step5ReviewConsent
              data={formData}
              updateConsent={(data) => updateFormData("consent", data)}
              onBack={previousStep}
              onEdit={goToStep}
            />
          )}
        </div>

        {/* Right Column: Information Cards */}
        <div className="space-y-6 lg:sticky lg:top-8 lg:col-span-5 xl:col-span-4">
          {/* Summary Card */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-900/5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Loan Overview
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-slate-900">
                ${formattedAmount}
              </span>
              <span className="text-sm font-medium text-slate-500">
                · {apr}% fixed APR
              </span>
            </div>

            <hr className="my-5 border-slate-100" />

            <ul className="space-y-3.5">
              <li className="flex items-center text-sm font-medium text-slate-700">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                No collateral required
              </li>
              <li className="flex items-center text-sm font-medium text-slate-700">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                $0 upfront fees
              </li>
              <li className="flex items-center text-sm font-medium text-slate-700">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                Funded within 24 hours
              </li>
            </ul>
          </div>

          {/* Security & Data Protection Card */}
          <div className="rounded-3xl border border-slate-200/80 bg-slate-200/70 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <span className="text-base">🔒</span>
              <h3 className="text-sm font-semibold">Your data is protected</h3>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
              Submitted over TLS 1.3 and encrypted at rest with AES-256. We
              never store your online-banking password.
            </p>
          </div>

          {/* Already applied link */}
          <p className="text-center text-sm text-slate-600">
            Already applied?{" "}
            <Link
              href="/loan-status"
              className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              Check your status
            </Link>
          </p>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        Your information is protected and handled securely.
      </p>
    </div>
  );
}
