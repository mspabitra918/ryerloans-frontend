import { constructMetadata } from "@/src/lib/metadata";
import LoanStatusClient from "./LoanStatusClient";

export const metadata = constructMetadata({
  title: "Check Your Loan Application Status | Ryer Loans",
  description:
    "Track your Ryer Loans application with your six-digit Application ID and email address. See verification status and next steps instantly.",
  path: "/loan-status",
  keywords: [
    "check loan status",
    "ryer loans application status",
    "track loan application",
    "personal loan status lookup",
  ],
});

export default function LoanStatusPage() {
  return <LoanStatusClient />;
}
