import { constructMetadata } from "@/src/lib/metadata";

/*
 * The page itself is a client component and so cannot export metadata. This
 * layout carries it: the confirmation screen shows an applicant their own
 * Application ID, is reached only by submitting the form, and is disallowed in
 * robots.txt — noindex keeps it out of the index if it is ever linked.
 */
export const metadata = constructMetadata({
  title: "Application Received",
  description: "Your loan application has been received.",
  path: "/apply/success",
  noIndex: true,
});

export default function ApplySuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
