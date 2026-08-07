import { RATE_CONFIG } from "@/src/lib/config";

export default function AboutOneRate() {
  const formattedApr = `${RATE_CONFIG.apr.toFixed(2)}%`;

  return (
    <section className="py-16 px-4 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Why We Publish One Rate
        </h2>

        <div className="space-y-4 text-slate-600 text-base leading-relaxed">
          <p>
            Tiered pricing is standard in consumer lending, and there is real
            actuarial logic behind it. But in practice it has become a way to
            advertise a rate that almost nobody actually receives. The 6.99% in
            the headline goes to a small handful of applicants; most people,
            after committing their SSN and completing the full application, are
            offered something closer to 30%.
          </p>
          <p>
            We chose the opposite approach. One published rate —{" "}
            <span className="font-bold text-slate-900 font-mono">
              {formattedApr} fixed
            </span>{" "}
            — across every approved borrower. It costs us margin on the
            strongest applicants. What it buys is that nobody who applies to
            Ryer Loans discovers a different number at the end.
          </p>
          <p>
            The tradeoff is that we have to underwrite carefully, because we
            cannot price our way out of a bad decision. That is why our process
            includes a required phone call and bank verification rather than an
            instant automated yes.
          </p>
        </div>
      </div>
    </section>
  );
}
