import React from "react";

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export function StepProgress({
  currentStep,
  totalSteps,
  stepTitles,
}: StepProgressProps) {
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8 space-y-2">
      <div className="flex justify-between items-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
        <span>
          Step {currentStep} of {totalSteps}
        </span>
        <span>{stepTitles[currentStep - 1]}</span>
      </div>
      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
        <div
          className="h-full bg-sky-600 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
