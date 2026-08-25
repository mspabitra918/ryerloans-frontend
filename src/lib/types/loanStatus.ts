export type ApplicationStage =
  "received" | "bank" | "deposit" | "funded_declined";

export interface ApplicationData {
  id: string;
  submittedDate: string;
  amountRequested: number;
  email: string;
  hasCalledIn: boolean;
  bankStatus: "pending" | "completed";
  bankCompletedDate?: string;
  depositStatus: "not_started" | "sent" | "confirmed";
  fundingStatus: "pending" | "funded" | "declined";
  accountEnding?: string;
  /**
   * Where the tracker sends a borrower who still needs to verify, straight from
   * the API. Null once verified. It carries no identifier — verification is
   * authenticated by the one-time link in the borrower's email, and an
   * Application ID plus an email address is a lookup, not a credential.
   */
  bankVerificationUrl?: string;
  fundedDate?: string;
  firstPaymentDue?: string;
  declinedDate?: string;
  reapplyDate?: string;
}
