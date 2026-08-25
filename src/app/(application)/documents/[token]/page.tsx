import { constructMetadata } from "@/src/lib/metadata";
import DocumentUploadClient from "./DocumentUploadClient";

export const metadata = constructMetadata({
  title: "Upload Your Documents",
  description:
    "Securely upload the documents we need to finish reviewing your loan application.",
  path: "/documents",
  noIndex: true,
});

// `params` is a Promise in this Next version — it must be awaited.
export default async function DocumentUploadPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  return <DocumentUploadClient token={token} />;
}
