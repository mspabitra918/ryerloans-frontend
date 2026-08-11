interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  city: string;
  faqs: FAQ[];
}

export default function CityFAQ({ city, faqs }: Props) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/40">
          <h2 className="text-3xl font-semibold text-slate-900">
            {city} Personal Loan FAQ
          </h2>
          <p className="mt-4 text-slate-600 leading-8">
            Answers to the most common city-specific questions about borrowing,
            eligibility, and local service area.
          </p>

          <div className="mt-10 grid gap-6">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-3 text-slate-600 leading-7">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
