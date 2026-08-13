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
    <section className="border-t border-slate-200 bg-[#F8F6F0] px-4 py-16 text-[#13294B] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Heading */}
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#13294B] sm:text-3xl">
            What Your Loan Can Pay For
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Personal loans from Ryer are unsecured and flexible. Borrowers use
            them for:
          </p>
        </div>

        {/* Use Case Tags */}
        <div className="flex flex-wrap gap-2.5">
          {uses.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-[#1558D6] sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Debt Consolidation Note */}
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1558D6]">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M7 7h10M7 12h10M7 17h6" />
                <path d="M4 4h16v16H4z" />
              </svg>
            </div>

            <div>
              <h3 className="font-semibold text-[#13294B]">
                Debt Consolidation Highlight
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Debt consolidation is the single most common use, and the
                arithmetic is easy to see. The average credit card in the United
                States charges well over 20% APR on revolving balances. Rolling
                $12,000 of card debt into a fixed{" "}
                <span className="font-semibold text-[#1558D6]">
                  {formattedApr}
                </span>{" "}
                installment loan replaces several minimum payments — which are
                structured so the balance barely moves — with one fixed payment
                and a definite payoff date on the calendar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
