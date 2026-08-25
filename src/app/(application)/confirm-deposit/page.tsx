import Link from "next/link";
import { constructMetadata } from "@/src/lib/metadata";
import ActionShell from "@/src/components/borrower-action/ActionShell";
import { RATE_CONFIG } from "@/src/lib/config";

export const metadata = constructMetadata({
  title: "Confirm Your Verification Deposits",
  description:
    "Confirming your Ryer Loans verification deposits is done through the secure link we email you.",
  path: "/confirm-deposit",
  noIndex: true,
});

/**
 * The fallback, not the front door.
 *
 * The §6.2 tracker opens the confirmation form directly now — its button mints
 * a live single-use link into /confirm-deposit/[token]. This page is where a
 * borrower lands when that could not happen: a stale bookmark, a truncated
 * email link, or the tracker's own error fallback.
 */
export default function ConfirmDepositLandingPage() {
  return (
    <ActionShell
      title="Two ways to confirm your deposits"
      intro="The confirmation form opens from a secure, single-use link. You can have the tracker create one for you now, or use the one we emailed you."
    >
      <ol className="space-y-3 text-slate-700">
        <li>
          <strong>1.</strong> Look for two small deposits from{" "}
          {RATE_CONFIG.name} in the account you verified. They usually arrive
          within 1–3 business days.
        </li>
        <li>
          <strong>2.</strong> Go to your application status, enter your
          six-digit Application ID and the email you applied with, then tap{" "}
          <em>Confirm Deposit Amounts</em>. The link we emailed you — subject
          &ldquo;{RATE_CONFIG.name}: Verification Transaction Initiated&rdquo; —
          opens the same form.
        </li>
        <li>
          <strong>3.</strong> Enter both amounts exactly as they appear on your
          statement. Either order is fine.
        </li>
      </ol>

      <p className="mt-6 text-slate-600">
        A wrong guess costs an attempt but not the link — you get ten tries. If
        you run out, call {RATE_CONFIG.phone.trim()} and we will reissue the
        deposits.
      </p>

      <Link
        href="/loan-status"
        className="mt-6 inline-block rounded-lg bg-blue-700 px-5 py-3 font-medium text-white hover:bg-blue-800"
      >
        Go to my application status
      </Link>
    </ActionShell>
  );
}
