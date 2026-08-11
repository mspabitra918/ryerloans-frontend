"use client";

import { useState } from "react";
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

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 1));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToStep = (targetStep: number) => {
    setStep(targetStep);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          Apply for a Personal Loan
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Complete your application in a few simple steps.
        </p>
      </div>

      {/* Form Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-8">
        <ProgressBar step={step} />

        {/* Autosave */}
        <div className="mb-6 flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
          <span className="text-xs text-slate-500">
            Your progress is saved automatically.
          </span>

          <span className="text-xs font-medium text-green-600">Saved</span>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <Step1LoanRequest
            data={formData.loan}
            update={(data) => updateFormData("loan", data)}
            onNext={nextStep}
          />
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <Step2PersonalDetails
            data={formData.personal}
            update={(data) => updateFormData("personal", data)}
            onBack={previousStep}
            onNext={nextStep}
          />
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <Step3EmploymentIncome
            data={formData.employment}
            update={(data) => updateFormData("employment", data)}
            onBack={previousStep}
            onNext={nextStep}
          />
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <Step4Banking
            data={formData.banking}
            update={(data) => updateFormData("banking", data)}
            onBack={previousStep}
            onNext={nextStep}
          />
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <Step5ReviewConsent
            data={formData}
            updateConsent={(data) => updateFormData("consent", data)}
            onBack={previousStep}
            onEdit={goToStep}
          />
        )}
      </div>

      <p className="mt-5 text-center text-xs text-slate-500">
        Your information is protected and handled securely.
      </p>
    </div>
  );
}
