import { constructMetadata } from "@/src/lib/metadata";
import ReviewClient from "./ReviewClient";

export const metadata = constructMetadata({
  title: "Leave a Review",
  description:
    "Tell us how your Ryer Loans experience went. This form opens from the secure link we email once a loan is funded.",
  path: "/review",
  noIndex: true,
});

// `params` is a Promise in this Next version — it must be awaited.
export default async function ReviewPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  return <ReviewClient token={token} />;
}
