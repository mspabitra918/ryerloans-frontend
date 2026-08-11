"use client";

export interface RadioOption {
  label: string;
  value: string;
}

interface FormRadioGroupProps {
  value: string;
  options: RadioOption[];
  onChange: (value: string) => void;
  columns?: 1 | 2 | 3;
}

export default function FormRadioGroup({
  value,
  options,
  onChange,
  columns = 2,
}: FormRadioGroupProps) {
  const gridClass =
    columns === 1
      ? "grid-cols-1"
      : columns === 3
        ? "grid-cols-3"
        : "grid-cols-2";

  return (
    <div className={`grid gap-3 ${gridClass}`}>
      {options.map((option) => {
        const active = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`
              flex min-h-[54px]
              items-center justify-center
              gap-3 rounded-xl border
              px-4 py-3
              text-sm font-semibold
              transition
              ${
                active
                  ? "border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-500/10"
                  : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
              }
            `}
          >
            <span
              className={`
                flex h-5 w-5
                items-center justify-center
                rounded-full border
                ${active ? "border-blue-600 bg-blue-600" : "border-slate-300"}
              `}
            >
              {active && <span className="h-2 w-2 rounded-full bg-white" />}
            </span>

            {option.label}
          </button>
        );
      })}
    </div>
  );
}
