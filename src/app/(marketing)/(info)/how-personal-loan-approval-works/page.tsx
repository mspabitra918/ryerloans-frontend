import { constructMetadata } from "@/src/lib/metadata";
import InformationalPage from "@/src/components/marketing/info/InformationalPage";

export const metadata = constructMetadata({
  title: "How Personal Loan Approval Works | Ryer Loans",
  description:
    "See the step-by-step personal loan approval process, what lenders review, and why no lender can guarantee approval.",
  path: "/how-personal-loan-approval-works",
  keywords: [
    "how personal loan approval works",
    "loan approval process",
    "instant approval loan",
    "guaranteed approval",
  ],
});

export default function HowPersonalLoanApprovalWorksPage() {
  return (
    <InformationalPage
      title="How Personal Loan Approval Works | Ryer Loans"
      description="Personal loan approval is not a one-click decision. It is a review process that looks at whether the applicant can reasonably repay the loan and whether the application is complete, accurate, and eligible."
      path="/how-personal-loan-approval-works"
      h1="How Personal Loan Approval Works"
      intro="The approval process usually starts with a complete application and continues through identity verification, income review, and a final underwriting decision. The goal is to decide if the loan can be responsibly offered."
      sections={[
        {
          heading: "The approval process end to end",
          body: (
            <>
              <p>
                Applicants submit personal and financial details, verify
                identity, and often complete a phone call or additional
                verification steps. If all requirements are satisfied, the
                lender reviews the file and issues a decision.
              </p>
              <p>
                That final decision is based on underwriting, not on marketing
                language or perceived urgency.
              </p>
            </>
          ),
        },
        {
          heading: "The five factors lenders usually weigh",
          body: (
            <>
              <p>
                Borrowers are commonly evaluated on income stability, debt
                obligations, banking history, credit profile, and identity
                verification. Each factor contributes to the question of whether
                the loan will be repaid as agreed.
              </p>
              <p>
                Different lenders weigh those factors differently, which is why
                offers and outcomes can vary even for similar applicants.
              </p>
            </>
          ),
        },
        {
          heading: "Why guaranteed approval is never real",
          body: (
            <>
              <p>
                No responsible lender can promise approval without reviewing the
                application. A guarantee would mean skipping underwriting, which
                is not how real credit decisions are made.
              </p>
              <p>
                Applicants should treat “guaranteed approval” claims as a
                warning sign rather than a benefit.
              </p>
            </>
          ),
        },
        {
          heading: "What instant approval actually means",
          body: (
            <>
              <p>
                “Instant approval” often describes an automated pre-screen or
                initial review, not a final credit decision. In many cases, a
                lender still needs to verify documents, confirm identity, and
                complete underwriting before funds can be released.
              </p>
              <p>
                That is why applicants should read the fine print and ask what
                the process actually requires.
              </p>
            </>
          ),
        },
      ]}
      faqItems={[
        {
          question: "What does approval usually require?",
          answer:
            "A complete application, identity verification, income verification, and a review of debt obligations and banking history.",
        },
        {
          question: "Can a lender guarantee approval?",
          answer:
            "No. Promise-based approval language is not a sign of a dependable lender and should raise caution.",
        },
        {
          question: "What does instant approval really mean?",
          answer:
            "It usually means an automated first-pass review, not the final approval decision.",
        },
        {
          question: "What if I am declined?",
          answer:
            "The adverse action notice will explain the reasons, and you can use those reasons to improve your profile before reapplying.",
        },
      ]}
      internalLinks={[
        {
          label: "Personal loans for bad credit",
          href: "/personal-loans-for-bad-credit",
        },
        {
          label: "No credit check loans explained",
          href: "/no-credit-check-loans-explained",
        },
        {
          label: "Personal loan rates and terms",
          href: "/personal-loan-rates-and-terms",
        },
        { label: "Online personal loans", href: "/personal-loans" },
      ]}
      authorName="Mina Patel"
      authorCredentials="MBA, CFP®"
      authorBio="Mina Patel is a financial writer and consumer-credit educator who translates lending terms into clear, practical guidance for applicants comparing loan options."
      reviewedBy="Daniel R. Kim, CRPC"
      lastUpdated="August 2026"
      sources={[
        "Consumer Financial Protection Bureau, adverse action and lending guidance",
        "Federal Reserve G.19 consumer credit data",
        "FDIC, consumer financial education materials",
        "Experian, credit decision and credit report education",
      ]}
      ctaLabel="Start your application"
      ctaHref="/apply"
    />
  );
}
