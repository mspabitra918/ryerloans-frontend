import Link from "next/link";
import { DollarSign, CheckCircle2 } from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

export default function CostAnswers() {
  const formattedApr = `${RATE_CONFIG.apr.toFixed(2)}%`;

  const feeSchedule = [
    {
      label: "Interest rate",
      value: `${formattedApr} fixed APR`,
      isPrimary: true,
    },
    { label: "Origination fee", value: "None", isZeroFee: true },
    { label: "Prepayment penalty", value: "None", isZeroFee: true },
    { label: "Application fee", value: "None", isZeroFee: true },
    {
      label: "Late fee",
      value: "As disclosed in your loan agreement and permitted by your state",
      isZeroFee: false,
    },
    {
      label: "Returned payment fee",
      value: "As disclosed in your loan agreement",
      isZeroFee: false,
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 bg-[#F8F6F0] border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3 text-center sm:text-left max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full inline-block">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 tracking-tight">
            Straight Answers on Cost
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            No hidden charges, no surprise fees. Here is exactly what to expect.
          </p>
        </div>

        {/* Fee Table Container */}
        <div className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-sm">
          <div className="divide-y divide-stone-200/80">
            {feeSchedule.map((fee, idx) => (
              <div
                key={idx}
                className="p-5 sm:px-7 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50/60 transition-colors"
              >
                <span className="text-sm sm:text-base font-semibold text-slate-700">
                  {fee.label}
                </span>

                <div className="flex items-center gap-2">
                  {fee.isZeroFee && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                  <span
                    className={`text-sm sm:text-base ${
                      fee.isPrimary
                        ? "font-extrabold text-sky-700 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200/80"
                        : fee.isZeroFee
                          ? "font-bold text-emerald-700"
                          : "font-medium text-slate-600"
                    }`}
                  >
                    {fee.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-stone-100/70 border border-stone-200/60">
          <DollarSign className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Every fee that could ever apply to your loan appears in your
            agreement before you sign. There is nothing that shows up later. See
            our{" "}
            <Link
              href="/rates-and-fees"
              className="text-sky-700 font-bold underline hover:text-sky-800"
            >
              Rates & Fees
            </Link>{" "}
            page for the complete schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
