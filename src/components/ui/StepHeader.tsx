export function StepHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>

      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </div>
  );
}
