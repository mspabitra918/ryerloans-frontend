export default function ContactEmail() {
  const emailDirectory = [
    {
      label: "New applications and general questions",
      email: "support@ryerloans.com",
    },
    {
      label: "Existing applications (put Application ID in subject)",
      email: "applications@ryerloans.com",
    },
    { label: "Documents", email: "documents@ryerloans.com" },
    { label: "Privacy requests", email: "privacy@ryerloans.com" },
    { label: "Complaints", email: "complaints@ryerloans.com" },
  ];

  return (
    <section className="py-12 px-4 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          By Email
        </h2>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm divide-y divide-slate-100">
          {emailDirectory.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm"
            >
              <span className="text-slate-600 font-medium">{item.label}:</span>
              <a
                href={`mailto:${item.email}`}
                className="text-sky-600 hover:text-sky-700 font-semibold font-mono break-all"
              >
                {item.email}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-5 text-sm text-amber-900 leading-relaxed">
          <p>
            We respond to email within one business day. Please do not send your
            full Social Security number or full bank account number by email —
            email is not a secure channel. Use the secure upload link our team
            provides, or call us.
          </p>
        </div>
      </div>
    </section>
  );
}
