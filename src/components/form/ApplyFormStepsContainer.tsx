"use client";

import React, { useState } from "react";
import StepLoanAmount from "./StepLoanAmount";
import StepAboutYou from "./StepAboutYou";
import StepEmployment from "./StepEmployment";
import StepBankDetails from "./StepBankDetails";
import StepReviewConsents from "./StepReviewConsents";

export interface ApplyFormData {
  amount: number;
  purpose: string;
  otherPurpose: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ssn: string;
  dob: string;
  employmentStatus: string;
  netMonthlyIncome: string;
  hasVehicle: string;
  bankName: string;
  routingNumber: string;
  accountNumber: string;
  accountAge: string;
  eSignConsent: boolean;
  termsConsent: boolean;
  creditAuth: boolean;
  contactConsent: boolean;
}

export default function ApplyFormStepsContainer() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<ApplyFormData>({
    amount: 5000,
    purpose: "debt_consolidation",
    otherPurpose: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ssn: "",
    dob: "",
    employmentStatus: "employed",
    netMonthlyIncome: "",
    hasVehicle: "yes",
    bankName: "",
    routingNumber: "",
    accountNumber: "",
    accountAge: "1_to_3_years",
    eSignConsent: false,
    termsConsent: false,
    creditAuth: false,
    contactConsent: false,
  });

  const updateField = <K extends keyof ApplyFormData>(
    field: K,
    value: ApplyFormData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100 shadow-xl">
      {step === 1 && (
        <StepLoanAmount
          formData={formData}
          updateField={updateField}
          formattedMin="$1,000"
          formattedMax="$50,000"
        />
      )}
      {step === 2 && (
        <StepAboutYou formData={formData} updateField={updateField} />
      )}
      {step === 3 && (
        <StepEmployment formData={formData} updateField={updateField} />
      )}
      {step === 4 && (
        <StepBankDetails formData={formData} updateField={updateField} />
      )}
      {step === 5 && (
        <StepReviewConsents
          formData={formData}
          updateField={updateField}
          setStep={setStep}
        />
      )}
    </div>
  );
}
