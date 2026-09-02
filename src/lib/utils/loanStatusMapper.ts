import type { PublicStatusResponse } from "@/src/lib/api";
import type { ApplicationData } from "@/src/lib/types/loanStatus";

/**
 * Maps the §6.2 API response onto the tracker's view model.
 *
 * The two shapes differ on purpose: the API answers "what is true about this
 * file", the view model answers "what does the four-step tracker draw". Keeping
 * the translation in one function means a change to either side breaks here,
 * loudly, instead of somewhere inside a component.
 */
export function toApplicationData(
  response: PublicStatusResponse,
  email: string,
): ApplicationData {
  const { tracker } = response;

  return {
    id: response.application_id,
    submittedDate: formatDate(response.submitted_at) ?? "—",
    amountRequested: response.amount_requested,
    // Not returned by the API — and it should not be. It is what the borrower
    // just typed to get here.
    email,
    hasCalledIn: response.called_in,

    bankStatus:
      tracker.bank_verification.status === "completed"
        ? "completed"
        : "pending",
    bankCompletedDate: formatDate(tracker.bank_verification.timestamp),

    depositStatus: depositStatus(tracker.verification_deposit.status),

    fundingStatus: fundingStatus(tracker.final_status.status),
    accountEnding: response.account_last4 ?? undefined,
    bankVerificationUrl: response.bank_verification_url ?? undefined,
    bankVerification: response.bank_verified,

    fundedDate:
      tracker.final_status.status === "funded"
        ? formatDate(tracker.final_status.timestamp)
        : undefined,

    declinedDate:
      tracker.final_status.status === "declined"
        ? formatDate(tracker.final_status.timestamp)
        : undefined,

    reapplyDate:
      formatDate(response.adverse_action?.reapply_eligible_date ?? null) ??
      undefined,
  };
}

/** API: completed | pending | not_sent → view: confirmed | sent | not_started. */
function depositStatus(value: string): ApplicationData["depositStatus"] {
  if (value === "completed") return "confirmed";
  if (value === "pending") return "sent";
  return "not_started";
}

/**
 * The API reports the real terminal status; the tracker's fourth step only
 * distinguishes funded from declined. Withdrawn and expired are neither — they
 * are closures, and showing them as "declined" would imply an adverse action
 * notice that was never issued.
 */
function fundingStatus(value: string): ApplicationData["fundingStatus"] {
  if (value === "funded") return "funded";
  if (value === "declined") return "declined";
  return "pending";
}

function formatDate(value: string | null | undefined): string | undefined {
  if (!value) return undefined;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return undefined;

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
