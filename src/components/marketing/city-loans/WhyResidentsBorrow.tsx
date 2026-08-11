interface Props {
  city: string;
  reasons: string[];
}

export default function WhyResidentsBorrow({ city, reasons }: Props) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/40">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-slate-900">
              Why {city} Residents Borrow
            </h2>
            <p className="mt-4 text-slate-600 leading-8">
              These are the most common local borrowing reasons we see in {city}
              . Each one reflects a real local pattern, not a generic loan
              purpose.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.map((reason, index) => (
              <div
                key={reason}
                className="rounded-3xl border border-slate-200 bg-slate-950/5 p-6 transition hover:border-sky-300"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500 text-white font-semibold shadow-sm">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {reason}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  We see this issue most often among local borrowers, especially
                  when cash flow is uneven or financial obligations stack up
                  faster than income.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
