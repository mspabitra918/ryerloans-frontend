"use client";

const steps = ["Loan Request", "Personal", "Employment", "Banking", "Review"];

interface Props {
  step: number;
}

export default function ProgressBar({ step }: Props) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">
          Step {step} of 5
        </span>

        <span className="text-sm font-semibold text-slate-900">
          {steps[step - 1]}
        </span>
      </div>

      {/* Progress */}
      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-300"
          style={{
            width: `${(step / 5) * 100}%`,
          }}
        />
      </div>

      {/* Desktop labels */}
      <div className="mt-3 hidden grid-cols-5 sm:grid">
        {steps.map((name, index) => {
          const number = index + 1;

          return (
            <div
              key={name}
              className={`text-center text-xs ${
                number <= step
                  ? "font-semibold text-blue-600"
                  : "text-slate-400"
              }`}
            >
              {number}. {name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
