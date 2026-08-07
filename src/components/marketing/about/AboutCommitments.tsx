import Link from "next/link";

export default function AboutCommitments() {
  const commitments = [
    {
      title: "Transparency",
      description:
        "Rate published, fees published, terms disclosed in writing before signature. No cost appears after you sign that was not visible before.",
    },
    {
      title: "Fair lending",
      description: (
        <>
          We comply fully with the Equal Credit Opportunity Act. Credit
          decisions are never based on race, colour, religion, national origin,
          sex, marital status, age, receipt of public assistance, or the
          exercise of rights under consumer credit law. See our{" "}
          <Link
            href="/fair-lending"
            className="text-sky-600 underline font-medium hover:text-sky-700"
          >
            [Fair Lending Policy]
          </Link>
          .
        </>
      ),
    },
    {
      title: "Data security",
      description: (
        <>
          Bank-grade encryption, strict internal access controls, and a written
          information security program. See our{" "}
          <Link
            href="/security"
            className="text-sky-600 underline font-medium hover:text-sky-700"
          >
            [Security Policy]
          </Link>
          .
        </>
      ),
    },
    {
      title: "No prepayment penalty",
      description: "Pay it off whenever you can. Interest stops accruing.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Our Commitments
          </h2>

          <div className="space-y-4">
            {commitments.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1"
              >
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/apply"
            className="w-full sm:w-auto px-8 py-3.5 text-center font-medium bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
          >
            Apply Now
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 text-center font-medium bg-white text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
