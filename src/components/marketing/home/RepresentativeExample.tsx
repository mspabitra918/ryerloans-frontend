import { RATE_CONFIG } from "@/src/lib/config";

export default function RepresentativeExample() {
  const sampleAmount = 10000;
  const sampleTerm = 36;
  const calculation = RATE_CONFIG.calculateLoan(sampleAmount, sampleTerm);
  const formattedApr = `${RATE_CONFIG.apr.toFixed(2)}%`;

  return (
    <section className="bg-[#F8F6F0] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1558D6]">
              Example Payment
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#13294B] sm:text-4xl">
              See how a $10,000 loan could look at a fixed rate.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A {sampleAmount.toLocaleString()} personal loan at{" "}
              <span className="font-semibold text-[#1558D6]">
                {formattedApr}
              </span>{" "}
              fixed APR repaid over {sampleTerm} months would carry a
              predictable monthly payment with a known total repayment before
              you sign anything.
            </p>
          </div>

          {/* Calculation Card */}
          <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Monthly Payment */}
              <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
                <div className="text-sm font-medium text-slate-500">
                  Monthly payment
                </div>

                <div className="mt-2 text-2xl font-bold text-[#1558D6]">
                  ${calculation.monthlyPayment}
                </div>
              </div>

              {/* Total Interest */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-medium text-slate-500">
                  Total interest
                </div>

                <div className="mt-2 text-2xl font-bold text-[#13294B]">
                  ${calculation.totalInterest}
                </div>
              </div>

              {/* Total Repayment */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:col-span-2">
                <div className="text-sm font-medium text-slate-500">
                  Total repayment
                </div>

                <div className="mt-2 text-2xl font-bold text-[#13294B]">
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
