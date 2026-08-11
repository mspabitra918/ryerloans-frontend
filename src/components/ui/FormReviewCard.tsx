import type { ReactNode } from "react";

interface FormReviewCardProps {
  title: string;
  step: number;
  onEdit: (step: number) => void;
  children: ReactNode;
}

export default function FormReviewCard({
  title,
  step,
  onEdit,
  children,
}: FormReviewCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
        <h3 className="text-sm font-bold text-slate-900">{title}</h3>

        <button
          type="button"
          onClick={() => onEdit(step)}
          className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          Edit
        </button>
      </div>

      <div className="grid gap-x-8 gap-y-5 p-5 sm:grid-cols-2">{children}</div>
    </div>
  );
}
