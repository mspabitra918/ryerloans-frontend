import { constructMetadata } from "@/src/lib/metadata";
import BankVerificationClient from "./BankVerificationClient";

export const metadata = constructMetadata({
  title: "Verify Your Bank Account",
  description:
    "Securely connect the bank account you want your Ryer Loans funds sent to.",
  path: "/bank-verification",
  // A one-time link is not a page search engines should hold on to.
  noIndex: true,
});

// `params` is a Promise in this Next version — it must be awaited.
export default async function BankVerificationTokenPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  return <BankVerificationClient token={token} />;
}
