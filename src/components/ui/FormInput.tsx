import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export default function FormInput({
  error = false,
  className = "",
  ...props
}: FormInputProps) {
  return (
    <input
      {...props}
      className={`
        w-full rounded-xl border bg-white
        px-4 py-3 text-sm text-slate-900
        shadow-sm outline-none
        transition
        placeholder:text-slate-400
        hover:border-slate-400
        focus:ring-4
        ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
            : "border-slate-300 focus:border-blue-500 focus:ring-blue-500/10"
        }
        ${className}
      `}
    />
  );
}
