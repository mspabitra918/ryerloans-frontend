import { constructMetadata } from "@/src/lib/metadata";
import InformationalPage from "@/src/components/marketing/info/InformationalPage";

export const metadata = constructMetadata({
  title: "Unsecured Personal Loans — No Collateral Required | Ryer Loans",
  description:
    "Learn how unsecured personal loans work, how they differ from secured loans, and what happens if a borrower cannot repay.",
  path: "/unsecured-personal-loans",
  keywords: [
    "unsecured personal loans",
    "signature loan",
    "no collateral personal loan",
    "unsecured loan",
  ],
});

export default function UnsecuredPersonalLoansPage() {
  return (
    <InformationalPage
      title="Unsecured Personal Loans — No Collateral Required | Ryer Loans"
      description="An unsecured personal loan does not require property or another asset to secure the balance. That makes it different from secured lending, but it also means the lender relies more heavily on credit, income, and banking history."
      path="/unsecured-personal-loans"
      h1="Unsecured Personal Loans: How They Work Without Collateral"
      intro="When a loan is unsecured, the lender is taking a credit risk rather than relying on an asset to back the balance. That distinction matters because it affects pricing, underwriting, and what happens if repayment becomes difficult."
      sections={[
        {
          heading: "Secured vs unsecured explained",
          body: (
            <>
              <p>
                Secured loans are backed by collateral such as a vehicle,
                savings account, or other asset. Unsecured loans depend on the
                borrower’s financial profile, not a pledged asset.
              </p>
              <p>
                That makes unsecured lending more dependent on repayment
                capacity and credit history than on the presence of collateral.
              </p>
            </>
          ),
        },
        {
          heading: "What backs the loan instead of collateral",
          body: (
            <>
              <p>
                The lender typically looks at income, recent deposits, recurring
                debt obligations, and credit behavior. In other words, the
                repayment capacity of the borrower becomes the main basis for
                the decision.
              </p>
              <p>
                Ryer may ask about vehicle ownership as part of the broader
                financial picture, but the loan is not secured by the vehicle.
              </p>
            </>
          ),
        },
        {
          heading: "What happens if a borrower defaults",
          body: (
            <>
              <p>
                If a borrower cannot repay, the lender may report the account to
                credit bureaus or pursue collections activity, depending on the
                agreement and state law. The absence of collateral does not mean
                there is no consequence.
              </p>
              <p>
                Borrowers should view an unsecured loan as a serious commitment,
                not a casual short-term solution.
              </p>
            </>
          ),
        },
        {
          heading: "When a secured loan might serve better",
          body: (
            <>
              <p>
                Secured loans may make sense for borrowers who want a lower rate
                or a larger borrowing limit and have an asset they are
                comfortable pledging. The trade-off is that the collateral
                becomes part of the risk profile.
              </p>
              <p>
                Unsecured loans remain a practical choice when borrowers want
                flexibility and do not want to tie up an asset.
              </p>
            </>
          ),
        },
      ]}
      faqItems={[
        {
          question: "What does unsecured mean?",
          answer:
            "It means the loan is not backed by collateral and is evaluated primarily on the borrower’s credit, income, and repayment history.",
        },
        {
          question: "Is an unsecured loan the same as a signature loan?",
          answer:
            "Yes. Signature loan is another common term for an unsecured installment loan that relies on the borrower’s promise to repay.",
        },
        {
          question: "What happens on default?",
          answer:
            "The lender may report the account to credit bureaus or send it to collections, depending on the agreement and applicable law.",
        },
        {
          question: "Should I pick secured or unsecured?",
          answer:
            "Unsecured is often simpler, while secured may offer lower rates or larger limits if the borrower is comfortable pledging an asset.",
        },
      ]}
      internalLinks={[
        { label: "Personal loans explained", href: "/personal-loans" },
        { label: "Installment loans", href: "/installment-loans" },
        {
          label: "How personal loan approval works",
          href: "/how-personal-loan-approval-works",
        },
        {
          label: "Personal loan rates and terms",
          href: "/personal-loan-rates-and-terms",
        },
      ]}
      authorName="Mina Patel"
      authorCredentials="MBA, CFP®"
      authorBio="Mina Patel is a financial writer and consumer-credit educator who translates lending terms into clear, practical guidance for applicants comparing loan options."
      reviewedBy="Daniel R. Kim, CRPC"
      lastUpdated="August 2026"
      sources={[
        "Consumer Financial Protection Bureau, unsecured loans and credit guidance",
        "Federal Reserve G.19 consumer credit data",
        "FDIC, consumer financial education materials",
        "Experian, credit education and lending resources",
      ]}
      ctaLabel="Review your borrowing options"
      ctaHref="/apply"
    />
  );
}
