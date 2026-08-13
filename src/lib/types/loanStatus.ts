export type ApplicationStage =
  | "received"
  | "bank"
  | "deposit"
  | "funded_declined";

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
  fundedDate?: string;
  firstPaymentDue?: string;
  declinedDate?: string;
  reapplyDate?: string;
}
