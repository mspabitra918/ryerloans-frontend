export default function AboutUnderwriting() {
  const criteria = [
    {
      title: "Income stability",
      description: "How consistently money arrives, and from where",
    },
    {
      title: "Banking behaviour",
      description:
        "Account age, deposit patterns, overdraft frequency, average balance",
    },
    {
      title: "Existing obligations",
      description: "What you already owe relative to what you bring in",
    },
    {
      title: "Credit history",
      description: "One factor among several, weighted alongside the rest",
    },
    {
      title: "Identity verification",
      description: "Required under federal law",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          How We Underwrite
        </h2>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
          <h3 className="text-sm font-mono font-semibold uppercase text-sky-600 tracking-wider">
            We Evaluate:
          </h3>
          <ul className="space-y-3">
            {criteria.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-slate-700 text-sm sm:text-base"
              >
                <span className="text-sky-600 font-bold font-mono">•</span>
                <div>
                  <span className="font-bold text-slate-900">{item.title}</span>{" "}
                  — <span>{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-slate-600 text-base leading-relaxed">
          Credit score is deliberately not the gate. It is a backward-looking
          summary that often misses what is actually true about someone’s
          current situation — a medical collection from four years ago tells us
          very little about whether a borrower can handle $322 a month today.
          Cash flow tells us a great deal.
        </p>
      </div>
    </section>
  );
}
