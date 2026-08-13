import { RATE_CONFIG } from "@/src/lib/config";

export default function SingleRate() {
  const formattedApr = `${RATE_CONFIG.apr.toFixed(2)}%`;

  return (
    <section className="border-t border-slate-200 bg-[#F8F6F0] px-4 py-16 text-[#13294B]">
      <div className="mx-auto max-w-6xl space-y-6">
        <h2 className="text-2xl font-sans font-semibold tracking-tight text-[#13294B] sm:text-3xl">
          A Single Rate, Published Openly
        </h2>

        <div className="space-y-4 text-sm font-mono leading-relaxed text-slate-600 sm:text-base">
          <p>
            Most online lenders show you a rate range — something like “6.99% to
            35.99% APR” — and you find out where you actually land only after
            you have handed over your Social Security number and let them run
            your file. It is a frustrating way to borrow money, and it is
            designed that way.
          </p>

          <p>
            Ryer Loans does it differently. Our personal loans carry a fixed{" "}
            <span className="font-semibold text-[#1558D6]">{formattedApr}</span>{" "}
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
