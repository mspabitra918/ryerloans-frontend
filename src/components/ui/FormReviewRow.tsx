interface FormReviewRowProps {
  label: string;
  value?: string | number;
  sensitive?: boolean;
}

export default function FormReviewRow({
  label,
  value,
  sensitive = false,
}: FormReviewRowProps) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1 break-words text-sm font-semibold text-slate-900">
        {sensitive ? "••••••••" : value || "—"}
      </p>
    </div>
  );
}
