import { RATE_CONFIG } from "@/src/lib/config";

export default function LoanUses() {
  const formattedApr = `${RATE_CONFIG.apr.toFixed(2)}%`;

  const uses = [
    "Consolidating high-interest credit card balances",
    "Covering an emergency that will not wait for payday",
    "Medical and dental bills",
    "Home repairs and improvements",
    "Car repairs",
    "Moving costs",
    "Weddings",
    "Travel",
    "Education expenses",
    "Rent and utilities during a rough stretch",
    "A major purchase",
    "Childcare",
    "Funeral costs",
    "A tax bill",
    "Business expenses",
  ];

  return (
    <section className="py-16 px-4 bg-[#030712] border-t border-[#1f293d]/50 text-gray-300">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight">
          What Your Loan Can Pay For
        </h2>

        <p className="font-mono text-sm sm:text-base text-gray-400 leading-relaxed">
          Personal loans from Ryer are unsecured and flexible. Borrowers use
          them for:
        </p>

        {/* Use Case Tags */}
        <div className="flex flex-wrap gap-2.5 font-mono text-xs sm:text-sm">
          {uses.map((item, index) => (
            <span
              key={index}
              className="bg-[#050b14] text-gray-300 px-3.5 py-1.5 rounded-lg border border-[#1f293d]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Debt Consolidation Note */}
        <div className="bg-[#050b14] border border-[#1f293d] p-6 rounded-xl space-y-3 font-mono text-sm text-gray-400">
          <h3 className="text-white font-semibold">
            Debt Consolidation Highlight
          </h3>
          <p className="leading-relaxed">
            Debt consolidation is the single most common use, and the arithmetic
            is easy to see. The average credit card in the United States charges
            well over 20% APR on revolving balances. Rolling $12,000 of card
            debt into a fixed{" "}
            <span className="text-sky-300">{formattedApr}</span> installment
            loan replaces several minimum payments — which are structured so the
            balance barely moves — with one fixed payment and a definite payoff
            date on the calendar.
          </p>
        </div>
      </div>
    </section>
  );
}
