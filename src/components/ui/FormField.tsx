import React from "react";

interface FormFieldProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}

export default function FormField({
  label,
  htmlFor,
  required = false,
  error,
  hint,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-semibold text-slate-900"
      >
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      {children}

      {error ? (
        <p className="text-xs font-medium text-red-600">{error}</p>
      ) : hint ? (
        <p className="text-xs leading-5 text-slate-500">{hint}</p>
      ) : null}
    </div>
  );
}
