import Link from "next/link";
import { RATE_CONFIG } from "@/src/lib/config";

export default function WhatWeNeverDo() {
  return (
    <section className="py-16 px-4 bg-[#030712] border-t border-[#1f293d]/50">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight">
          What We Never Do
        </h2>

        <p className="font-mono text-sm sm:text-base text-gray-400 leading-relaxed">
          We are direct about this because loan scams are common and they hurt
          people who are already stretched thin.
        </p>

        <ul className="space-y-4 font-mono text-xs sm:text-sm text-gray-300">
          <li className="bg-[#050b14] p-5 rounded-xl border border-rose-900/30">
            <span className="text-rose-400 font-semibold block mb-1">
              • We never ask for money before funding.
            </span>
            No application fee, no insurance payment, no “good faith deposit,”
            no processing charge. Not by wire, not by gift card, not by cash
            app, not by any method. If anyone contacts you claiming to be Ryer
            Loans and asks you to send funds first, it is a scam — hang up and
            call us at{" "}
            <span className="text-white font-semibold">
              {RATE_CONFIG.phone}
            </span>
            .
          </li>

          <li className="bg-[#050b14] p-5 rounded-xl border border-[#1f293d]">
            <span className="text-sky-300 font-semibold block mb-1">
              • We never ask for your online banking password.
            </span>
            Verification runs through Plaid, inside Plaid’s own secure window.
          </li>

          <li className="bg-[#050b14] p-5 rounded-xl border border-[#1f293d]">
            <span className="text-sky-300 font-semibold block mb-1">
              • We never sell your personal information to third parties for
              their marketing.
            </span>
            Full detail in our{" "}
            <Link
              href="/privacy-policy"
              className="text-sky-400 underline hover:text-sky-300"
            >
              [Privacy Policy]
            </Link>
            .
          </li>

          <li className="bg-[#050b14] p-5 rounded-xl border border-[#1f293d]">
            <span className="text-sky-300 font-semibold block mb-1">
              • We never charge a prepayment penalty.
            </span>
            Pay early, pay ahead, pay it off in month three — the interest
            simply stops accruing.
          </li>
        </ul>
      </div>
    </section>
  );
}
