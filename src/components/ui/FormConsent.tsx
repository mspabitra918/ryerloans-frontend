import type { ReactNode } from "react";

interface FormConsentProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  title: string;
  required?: boolean;
  children: ReactNode;
}

export default function FormConsent({
  checked,
  onChange,
  title,
  required = false,
  children,
}: FormConsentProps) {
  return (
    <label
      className={[
        "flex cursor-pointer gap-3 rounded-2xl border p-4",
        "transition-all duration-200",
        checked
          ? "border-blue-300 bg-blue-50/50"
          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50",
      ].join(" ")}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-5 w-5 shrink-0 accent-blue-600"
      />

      <span className="text-sm leading-6 text-slate-700">
        <span className="font-bold text-slate-900">{title}</span>

        {required && (
          <span className="ml-1 text-red-500" aria-hidden="true">
            *
          </span>
        )}

        <span className="mt-1 block">{children}</span>
      </span>
    </label>
  );
}
