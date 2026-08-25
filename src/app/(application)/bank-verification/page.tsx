import Link from "next/link";
import { constructMetadata } from "@/src/lib/metadata";
import ActionShell from "@/src/components/borrower-action/ActionShell";
import { RATE_CONFIG } from "@/src/lib/config";

export const metadata = constructMetadata({
  title: "Bank Verification",
  description:
    "Bank verification for your Ryer Loans application is completed through the secure link we email you.",
  path: "/bank-verification",
  noIndex: true,
});

/**
 * The fallback, not the front door.
 *
 * The §6.2 tracker opens verification directly now — its button mints a live
 * single-use link. This page is where a borrower lands when that could not
 * happen: a stale bookmark, a truncated email link, or the tracker's own error
 * fallback. It lists both routes back rather than only the email one, because
 * "wait for an email" was the answer that left people stuck here.
 */
export default function BankVerificationLandingPage() {
  return (
    <ActionShell
      title="Two ways to verify your bank"
      intro="Bank verification opens from a secure, single-use link. You can have the tracker create one for you now, or use the one we emailed you."
    >
      <p className="font-semibold text-slate-900">
        Fastest: open it from your status page
      </p>

      <ol className="mt-3 space-y-3 text-slate-700">
        <li>
          <strong>1.</strong> Go to your application status and enter your
          six-digit Application ID and the email you applied with.
        </li>
        <li>
          <strong>2.</strong> Tap <em>Complete Bank Verification</em> on the
          alert at the top.
        </li>
        <li>
          <strong>3.</strong> Connect the account you want your funds sent to.
        </li>
      </ol>

      <Link
        href="/loan-status"
        className="mt-6 inline-block rounded-lg bg-blue-700 px-5 py-3 font-medium text-white hover:bg-blue-800"
      >
        Go to my application status
      </Link>

      <p className="mt-8 font-semibold text-slate-900">
        Or use the link we emailed you
      </p>

      <p className="mt-3 text-slate-700">
        Open the most recent email from {RATE_CONFIG.name} with the subject
        &ldquo;Action Required: Verify Your Bank Account&rdquo; and tap{" "}
        <em>Verify My Bank Account</em>. A newer link always replaces an older
        one, so use the most recent thing you have — including a link you just
        opened from the status page.
      </p>

      <p className="mt-6 text-slate-600">
        Still stuck? Check your spam folder, then call{" "}
        {RATE_CONFIG.phone.trim()} and we will sort it out with you.
      </p>
    </ActionShell>
  );
}
