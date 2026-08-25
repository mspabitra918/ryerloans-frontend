import { constructMetadata } from "@/src/lib/metadata";
import SignAgreementClient from "./SignAgreementClient";

export const metadata = constructMetadata({
  title: "Sign Your Loan Agreement",
  description:
    "Review and electronically sign your Ryer Loans agreement at the terms you were approved for.",
  path: "/sign-agreement",
  noIndex: true,
});

// `params` is a Promise in this Next version — it must be awaited.
export default async function SignAgreementPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  return <SignAgreementClient token={token} />;
}
