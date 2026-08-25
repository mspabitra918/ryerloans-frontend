import Link from "next/link";
import { RATE_CONFIG } from "@/src/lib/config";

/**
 * The frame shared by the three §6.1 borrower-link pages — bank verification,
 * e-signature, deposit confirmation.
 *
 * All three are reached from an email by someone who is mid-application and
 * possibly on a phone, so they get one column, one heading, one action, and the
 * anti-fraud notice that §0.3 requires on every money-adjacent page.
 */
export default function ActionShell({
  title,
  intro,
  children,
  showFeeNotice = true,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
  showFeeNotice?: boolean;
}) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
          {title}
        </h1>

        {intro ? (
          <p className="mt-3 text-slate-600 leading-relaxed">{intro}</p>
        ) : null}

        <div className="mt-8">{children}</div>
      </div>

      {showFeeNotice ? (
        /*
         * §0.3 — the build implements micro-deposits *into* the borrower's
         * account, and the pages have to say so explicitly. Anyone asking this
         * borrower to send money is not us, and this is where they are most
         * likely to be asked.
         */
        <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {RATE_CONFIG.name} will never ask you to send money, buy a gift card,
          or pay a fee before your loan is funded. If anyone asks you to, call
          us on {RATE_CONFIG.phone.trim()}.
        </p>
      ) : null}

      <p className="mt-4 text-center text-sm text-slate-500">
        Need help? Call {RATE_CONFIG.phone.trim()} or{" "}
        <Link href="/loan-status" className="text-blue-700 hover:underline">
          check your application status
        </Link>
        .
      </p>
    </div>
  );
}

/** Terminal state for these pages: the step is done, nothing more to do here. */
export function ActionDone({
  title,
  message,
  reference,
}: {
  title: string;
  message: string;
  reference?: string;
}) {
  return (
    <ActionShell title={title} showFeeNotice={false}>
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4">
        <p className="text-emerald-900">{message}</p>

        {reference ? (
          <p className="mt-2 text-sm text-emerald-800">
            Application ID <strong>{reference}</strong>
          </p>
        ) : null}
      </div>

      <Link
        href="/loan-status"
        className="mt-6 inline-block rounded-lg bg-blue-700 px-5 py-3 text-white font-medium hover:bg-blue-800"
      >
        View my application status
      </Link>
    </ActionShell>
  );
}

/**
 * A dead link, which is the most common way these pages are reached wrongly —
 * an expired token, a used one, or a newer email superseding an older link.
 * The backend deliberately returns one message for all of those, so this does
 * not try to guess which happened.
 */
export function ActionError({ message }: { message: string }) {
  return (
    <ActionShell title="This link is no longer valid" showFeeNotice={false}>
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-red-900">
        {message}
      </div>

      <p className="mt-4 text-slate-600">
        Check your inbox for a more recent email from us — a new link replaces
        any earlier one. If you cannot find it, call {RATE_CONFIG.phone.trim()}{" "}
        and we will send another.
      </p>
    </ActionShell>
  );
}
