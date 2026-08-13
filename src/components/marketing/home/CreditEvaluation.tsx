export default function CreditEvaluation() {
  return (
    <section className="border-t border-slate-200 bg-[#F8F6F0] px-4 py-16 text-[#13294B] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-[#13294B] sm:text-3xl">
          Every Credit Profile Gets a Real Look
        </h2>

        <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
          We accept applications across the full credit spectrum — excellent,
          good, fair, poor, and thin-file borrowers with almost no credit
          history at all. A low score does not send your application to an
          automatic rejection queue.
        </p>

        <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
          That is a genuine commitment, and it is worth being precise about what
          it means and what it does not.
        </p>

        <div className="grid gap-6 pt-4 sm:grid-cols-2">
          {/* What it means */}
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#1558D6]">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8 12 2.5 2.5L16 9" />
                </svg>
              </div>

              <h3 className="text-base font-semibold text-[#1558D6]">
                What it means
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Your score is one input among several, not a gate. We weigh your
              income stability, your banking history, your existing obligations,
              and how consistently money moves through your account. A 580 score
              attached to two years of steady deposits and manageable debt is a
              far better risk than a 700 attached to an account that overdrafts
              every month — and we underwrite accordingly.
            </p>
          </div>

          {/* What it does not mean */}
          <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" />
                </svg>
              </div>

              <h3 className="text-base font-semibold text-rose-600">
                What it does not mean
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Guaranteed approval. No lender on earth can promise that, and any
              website telling you otherwise is either breaking advertising law
              or is not actually a lender. We decline applications. If we
              decline yours, we tell you specifically why, in writing, as
              federal law requires — so you know what to work on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
