import { constructMetadata } from "@/src/lib/metadata";
import ConfirmDepositClient from "./ConfirmDepositClient";

export const metadata = constructMetadata({
  title: "Confirm Your Verification Deposits",
  description:
    "Enter the two small deposit amounts we sent to your verified bank account to confirm ownership.",
  path: "/confirm-deposit",
  noIndex: true,
});

// `params` is a Promise in this Next version — it must be awaited.
export default async function ConfirmDepositPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  return <ConfirmDepositClient token={token} />;
}
