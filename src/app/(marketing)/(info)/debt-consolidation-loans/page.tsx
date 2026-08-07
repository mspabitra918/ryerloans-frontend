import { constructMetadata } from "@/src/lib/metadata";
import InformationalPage from "@/src/components/marketing/info/InformationalPage";

export const metadata = constructMetadata({
  title:
    "Debt Consolidation Loans | Combine Debt at 10% Fixed APR | Ryer Loans",
  description:
    "See how debt consolidation loans work, when they save money, and how to compare consolidation against balance transfers and debt plans.",
  path: "/debt-consolidation-loans",
  keywords: [
    "debt consolidation loans",
    "combine credit card debt",
    "debt payoff loan",
    "consolidation loan",
  ],
});

export default function DebtConsolidationLoansPage() {
  return (
    <InformationalPage
      title="Debt Consolidation Loans | Combine Debt at 10% Fixed APR | Ryer Loans"
      description="Debt consolidation can simplify repayment by combining multiple balances into one monthly installment. The value depends on the rates being replaced, the new term, and the borrower’s ability to avoid adding new debt."
      path="/debt-consolidation-loans"
      h1="Debt Consolidation Loans: How They Work and When They Help"
      intro="A consolidation loan is not magic, but it can be a useful tool when it reduces the total cost of carrying debt and makes monthly repayment easier to manage. The key is to compare the math carefully before moving balances."
      sections={[
        {
          heading: "How consolidation works",
          body: (
            <>
              <p>
                Instead of making separate payments on several cards or loans,
                the borrower receives a new installment loan that repays those
                balances. The result is a single monthly payment and a clearer
                payoff timeline.
              </p>
              <p>
                That can make behavior easier to manage because the borrower is
                no longer juggling multiple due dates and minimum payments.
              </p>
            </>
          ),
        },
        {
          heading: "The arithmetic behind the decision",
          body: (
            <>
              <p>
                Consolidation becomes attractive when the new rate is materially
                lower than the average rate on the balances being paid off and
                the borrower can avoid re-accumulating debt. A simple example is
                replacing three high-interest cards with one loan at a lower
                fixed APR.
              </p>
              <p>
                In that scenario, the borrower can often save on interest and
                shorten the payoff period, depending on the term and the amount
                borrowed.
              </p>
            </>
          ),
        },
        {
          heading: "When it saves money and when it does not",
          body: (
            <>
              <p>
                A loan can help when it lowers the average interest cost and the
                borrower keeps the spending habits that created the balance
                under control. It does not help if the borrower simply moves
                debt from one account to another and continues using the cards.
              </p>
              <p>
                That behavioral trap is one reason consolidation should be
                paired with a clear repayment plan.
              </p>
            </>
          ),
        },
        {
          heading: "Consolidation vs other options",
          body: (
            <>
              <p>
                Balance transfers, debt management plans, and debt settlement
                each have different trade-offs. A fixed-rate personal loan tends
                to be straightforward and predictable, while other options may
                involve fees, time limits, or more complex negotiations.
              </p>
              <p>
                Borrowers should evaluate the total cost of each option, not
                just the headline monthly payment.
              </p>
            </>
          ),
        },
      ]}
      faqItems={[
        {
          question: "Is debt consolidation always a good idea?",
          answer:
            "Not always. It helps when the new rate and terms reduce total cost and the borrower avoids adding new debt on the old accounts.",
        },
        {
          question:
            "What is the difference between consolidation and a balance transfer?",
          answer:
            "A balance transfer moves balances to a new card with a promotional rate, while consolidation replaces them with a separate installment loan.",
        },
        {
          question: "Will consolidation hurt my credit?",
          answer:
            "Applying and paying off cards can affect your credit profile, but many borrowers see improved structure and lower utilization over time when they make on-time payments.",
        },
        {
          question: "What should I do after the loan funds?",
          answer:
            "Close or lock the old accounts if appropriate, set up automatic payments, and avoid using them while paying down the new loan.",
        },
      ]}
      internalLinks={[
        { label: "Installment loans", href: "/installment-loans" },
        {
          label: "Personal loan rates and terms",
          href: "/personal-loan-rates-and-terms",
        },
        { label: "Emergency loans", href: "/emergency-loans" },
        {
          label: "Personal loans for bad credit",
          href: "/personal-loans-for-bad-credit",
        },
      ]}
      authorName="Mina Patel"
      authorCredentials="MBA, CFP®"
      authorBio="Mina Patel is a financial writer and consumer-credit educator who translates lending terms into clear, practical guidance for applicants comparing loan options."
      reviewedBy="Daniel R. Kim, CRPC"
      lastUpdated="August 2026"
      sources={[
        "Consumer Financial Protection Bureau, debt collection and credit card debt guidance",
        "Federal Reserve G.19 consumer credit data",
        "FDIC, consumer financial education resources",
        "Experian, debt management and credit education research",
      ]}
      ctaLabel="Explore consolidation options"
      ctaHref="/apply"
    />
  );
}
