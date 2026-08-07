import { RATE_CONFIG } from "@/src/lib/config";

export default function RepresentativeExample() {
  const sampleAmount = 10000;
  const sampleTerm = 36;
  const calculation = RATE_CONFIG.calculateLoan(sampleAmount, sampleTerm);
  const formattedApr = `${RATE_CONFIG.apr.toFixed(2)}%`;

  return (
    <section className="bg-[#030712] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-4xl border border-slate-800 bg-linear-to-br from-slate-900 to-slate-950 p-8 shadow-2xl shadow-slate-950/50 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
              Example payment
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              See how a $10,000 loan could look at a fixed rate.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              A {sampleAmount.toLocaleString()} personal loan at {formattedApr}{" "}
              fixed APR repaid over {sampleTerm} months would carry a
              predictable monthly payment with a known total repayment before
              you sign anything.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                <div className="text-sm text-slate-400">Monthly payment</div>
                <div className="mt-2 text-2xl font-semibold text-sky-400">
                  ${calculation.monthlyPayment}
                </div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                <div className="text-sm text-slate-400">Total interest</div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  ${calculation.totalInterest}
                </div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 sm:col-span-2">
                <div className="text-sm text-slate-400">Total repayment</div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  ${calculation.totalRepayment}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
