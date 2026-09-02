import Link from "next/link";

import ActionShell from "@/src/components/borrower-action/ActionShell";
import { RATE_CONFIG } from "@/src/lib/config";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Leave a Review",
  description:
    "Ryer Loans review invitations open from the secure link we email once a loan is funded.",
  path: "/review",
  noIndex: true,
});

/**
 * The fallback, not the front door.
 *
 * There is no way to open the review form without the token from the
 * invitation email — that token is the only thing tying a review to a funded
 * loan, and the "Verified borrower" badge on /reviews would mean nothing if
 * this page let anyone start one.
 */
export default function ReviewLandingPage() {
  return (
    <ActionShell
      title="Your review link is in your email"
      intro="We email an invitation about a week after a loan is funded. It carries a link that is unique to your application and works for 30 days."
      showFeeNotice={false}
    >
      <p className="text-slate-700">
        Look for the subject line &ldquo;How did we do?&rdquo; from{" "}
        {RATE_CONFIG.name}. If you cannot find it — or the link has expired —
        call {RATE_CONFIG.phone.trim()} and we will send another.
      </p>

      <p className="mt-4 text-slate-600">
        We cannot open a review form for you over the phone, and we will never
        ask you to pay for one. Reviews are voluntary and change nothing about
        your loan.
      </p>

      <Link
        href="/reviews"
        className="mt-6 inline-block rounded-lg bg-blue-700 px-5 py-3 font-medium text-white hover:bg-blue-800"
      >
        Read published reviews
      </Link>
    </ActionShell>
  );
}
