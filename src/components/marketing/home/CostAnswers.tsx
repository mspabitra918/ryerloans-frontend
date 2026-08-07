import Link from "next/link";
import { RATE_CONFIG } from "@/src/lib/config";
export default function CostAnswers() {
  const formattedApr = `${RATE_CONFIG.apr.toFixed(2)}%`;

  const feeSchedule = [
    { label: "Interest rate", value: `${formattedApr} fixed APR` },
    { label: "Origination fee", value: "None" },
    { label: "Prepayment penalty", value: "None" },
    { label: "Application fee", value: "None" },
    {
      label: "Late fee",
      value: "As disclosed in your loan agreement and permitted by your state",
    },
    {
      label: "Returned payment fee",
      value: "As disclosed in your loan agreement",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#030712] border-t border-[#1f293d]/50">
      <div className="max-w-5xl mx-auto space-y-6 font-mono">
        <h2 className="text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight">
          Straight Answers on Cost
        </h2>

        <div className="bg-[#050b14] border border-[#1f293d] rounded-xl overflow-hidden divide-y divide-[#1f293d]">
          {feeSchedule.map((fee, idx) => (
            <div
              key={idx}
              className="p-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-1"
            >
              <span className="text-gray-400 font-medium">{fee.label}:</span>
              <span className="text-white font-semibold">{fee.value}</span>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pt-2">
          Every fee that could ever apply to your loan appears in your agreement
          before you sign. There is nothing that shows up later. See{" "}
          <Link
            href="/rates-and-fees"
            className="text-sky-400 underline hover:text-sky-300"
          >
            [Rates & Fees]
          </Link>{" "}
          for the complete schedule.
        </p>
      </div>
    </section>
  );
}
