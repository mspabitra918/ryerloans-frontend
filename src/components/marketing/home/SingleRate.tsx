import { RATE_CONFIG } from "@/src/lib/config";

export default function SingleRate() {
  const formattedApr = `${RATE_CONFIG.apr.toFixed(2)}%`;

  return (
    <section className="py-16 px-4 bg-[#030712] border-t border-[#1f293d]/50 text-gray-300">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight">
          A Single Rate, Published Openly
        </h2>

        <div className="font-mono text-sm sm:text-base leading-relaxed space-y-4 text-gray-400">
          <p>
            Most online lenders show you a rate range — something like “6.99% to
            35.99% APR” — and you find out where you actually land only after
            you have handed over your Social Security number and let them run
            your file. It is a frustrating way to borrow money, and it is
            designed that way.
          </p>

          <p>
            Ryer Loans does it differently. Our personal loans carry a fixed{" "}
            <span className="text-sky-300 font-semibold">{formattedApr}</span>{" "}
            Annual Percentage Rate. That figure does not move based on your
            credit score, your ZIP code, how much you borrow, or how long the
            term runs. The rate you read on this page is the rate written into
            your loan agreement.
          </p>

          <p>
            Fixed also means fixed. Your interest rate does not adjust with
            market conditions, your payment does not change from month to month,
            and the total you will repay is knowable on day one. If your budget
            works at signing, it still works in month eighteen.
          </p>
        </div>
      </div>
    </section>
  );
}
