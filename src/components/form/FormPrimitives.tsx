import React from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  helperText?: string;
  required?: boolean;
  children: React.ReactNode;
}

export function FormField({
  label,
  htmlFor,
  helperText,
  required,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={htmlFor}
        className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      {children}
      {helperText && (
        <p className="text-xs text-slate-500 mt-1">{helperText}</p>
      )}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export function TextInput({ id, className = "", ...props }: InputProps) {
  return (
    <input
      id={id}
      className={`w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20 ${className}`}
      {...props}
    />
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  options: { label: string; value: string }[];
}

export function SelectInput({
  id,
  options,
  className = "",
  ...props
}: SelectProps) {
  return (
    <select
      id={id}
      className={`w-full rounded-xl border border-slate-300 p-3 text-slate-900 text-sm focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20 ${className}`}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
