import Link from "next/link";
import { RATE_CONFIG } from "@/src/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const rawPhone = RATE_CONFIG.phone.replace(/[^0-9+]/g, "");

  return (
    <footer className="bg-[#030712] text-slate-400 text-xs border-t border-[#1f293d] pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Corporate Address & Contact Info */}
        <div className="space-y-2 text-slate-300 font-mono">
          <p className="font-bold text-white text-sm">Ryer Loans</p>
          <p>249 E Ocean Blvd, 10th Floor, Ste 1010, Long Beach, CA 90802</p>
          <p>
            Phone:{" "}
            <a
              href={`tel:${rawPhone}`}
              className="text-sky-400 hover:underline"
            >
              {RATE_CONFIG.phone}
            </a>{" "}
            • NMLS ID: [Pending NMLS #]
          </p>
        </div>

        {/* Regulatory Disclosures & Lending Notices */}
        <div className="space-y-3 leading-relaxed text-slate-400 border-t border-slate-800 pt-6">
          <p>
            Ryer Loans is a direct lender. All loans are subject to credit
            approval, identity verification, and applicable state law. Approval
            is not guaranteed. Loan amounts range from $2,000 to $25,000 at a
            fixed Annual Percentage Rate of {RATE_CONFIG.apr}%. Representative
            example: a $10,000 loan repaid over 36 months at {RATE_CONFIG.apr}%
            fixed APR has a monthly payment of $322.67 and a total repayment of
            $11,616.19. Actual amount, rate, and term depend on your
            application, your state of residence, and our underwriting review,
            and are disclosed in full before you sign. Not all applicants
            qualify. Loan availability varies by state — see{" "}
            <Link
              href="/state-disclosures"
              className="text-sky-400 underline hover:text-white"
            >
              State Disclosures
            </Link>
            .
          </p>
          <p>
            Ryer Loans does not charge application fees, origination fees, or
            prepayment penalties. Ryer Loans will never ask you to send money,
            wire funds, purchase gift cards, or pay any fee before your loan is
            funded. If someone contacts you claiming to represent Ryer Loans and
            requests payment, do not send funds — call us immediately at{" "}
            <a
              href={`tel:${rawPhone}`}
              className="text-sky-400 underline hover:text-white"
            >
              {RATE_CONFIG.phone}
            </a>
            .
          </p>
          <p>
            Ryer Loans is an Equal Credit Opportunity Lender. We do not
            discriminate on the basis of race, color, religion, national origin,
            sex, marital status, age, receipt of public assistance, or
            good-faith exercise of rights under the Consumer Credit Protection
            Act.
          </p>
        </div>

        {/* Legal Link Grid */}
        <div className="border-t border-slate-800 pt-6 flex flex-wrap gap-x-6 gap-y-2 text-slate-300">
          <Link href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/terms-of-use" className="hover:text-white transition">
            Terms of Use
          </Link>
          <Link href="/e-sign-consent" className="hover:text-white transition">
            E-Sign Consent
          </Link>
          <Link
            href="/fair-lending-policy"
            className="hover:text-white transition"
          >
            Fair Lending
          </Link>
          <Link
            href="/communications-consent"
            className="hover:text-white transition"
          >
            Communications Consent
          </Link>
          <Link href="/rates-and-fees" className="hover:text-white transition">
            Rates &amp; Fees
          </Link>
          <Link
            href="/state-disclosures"
            className="hover:text-white transition"
          >
            State Disclosures
          </Link>
          <Link href="/security-policy" className="hover:text-white transition">
            Security
          </Link>
          <Link href="/cookie-policy" className="hover:text-white transition">
            Cookies
          </Link>
          <Link
            href="/accessibility-statement"
            className="hover:text-white transition"
          >
            Accessibility
          </Link>
          <Link
            href="/complaints-and-dispute-resolution"
            className="hover:text-white transition"
          >
            Complaints
          </Link>
          <Link
            href="/do-not-sell-my-personal-information"
            className="hover:text-white transition"
          >
            Do Not Sell My Info
          </Link>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800/60 pt-4 text-slate-500 font-mono text-[11px]">
          © {currentYear} Ryer Loans. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
