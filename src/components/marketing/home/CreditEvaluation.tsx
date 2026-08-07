export default function CreditEvaluation() {
  return (
    <section className="py-16 px-4 bg-[#030712] border-t border-[#1f293d]/50 text-gray-300">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight">
          Every Credit Profile Gets a Real Look
        </h2>

        <p className="font-mono text-sm sm:text-base text-gray-400 leading-relaxed">
          We accept applications across the full credit spectrum — excellent,
          good, fair, poor, and thin-file borrowers with almost no credit
          history at all. A low score does not send your application to an
          automatic rejection queue.
        </p>

        <p className="font-mono text-sm sm:text-base text-gray-400 leading-relaxed">
          That is a genuine commitment, and it is worth being precise about what
          it means and what it does not.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 pt-4 font-mono text-xs sm:text-sm">
          {/* What it means */}
          <div className="bg-[#050b14] p-5 rounded-xl border border-[#1f293d] space-y-2">
            <h3 className="text-sky-300 font-semibold text-base">
              What it means
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Your score is one input among several, not a gate. We weigh your
              income stability, your banking history, your existing obligations,
              and how consistently money moves through your account. A 580 score
              attached to two years of steady deposits and manageable debt is a
              far better risk than a 700 attached to an account that overdrafts
              every month — and we underwrite accordingly.
            </p>
          </div>

          {/* What it does not mean */}
          <div className="bg-[#050b14] p-5 rounded-xl border border-[#1f293d] space-y-2">
            <h3 className="text-rose-300 font-semibold text-base">
              What it does not mean
            </h3>
            <p className="text-gray-400 leading-relaxed">
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
