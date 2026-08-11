import React from "react";

export interface SelectOption {
  label: string;
  value: string;
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  placeholder?: string;
  error?: boolean;
}

export default function FormSelect({
  options,
  placeholder = "Select",
  error = false,
  className = "",
  ...props
}: FormSelectProps) {
  return (
    <div className="relative">
      <select
        {...props}
        className={`
          w-full appearance-none rounded-xl border
          bg-white px-4 py-3 pr-10
          text-sm text-slate-900
          shadow-sm outline-none
          transition
          hover:border-slate-400
          focus:ring-4
          ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
              : "border-slate-300 focus:border-blue-500 focus:ring-blue-500/10"
          }
          ${className}
        `}
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <svg
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}
