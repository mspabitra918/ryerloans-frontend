import { constructMetadata } from "@/src/lib/metadata";
import InformationalPage from "@/src/components/marketing/info/InformationalPage";

export const metadata = constructMetadata({
  title: "Personal Loan Calculator | Payment & Total Cost | Ryer Loans",
  description:
    "Estimate monthly payment, total interest, and total repayment on a personal loan from $2,000 to $25,000 at 10% fixed APR.",
  path: "/personal-loan-calculator",
  keywords: [
    "personal loan calculator",
    "loan payment calculator",
    "monthly payment calculator",
    "amortization schedule",
  ],
});

export default function PersonalLoanCalculatorPage() {
  return (
    <InformationalPage
      title="Personal Loan Calculator | Payment & Total Cost | Ryer Loans"
      description="A personal loan calculator helps borrowers understand the monthly payment, total interest, and total repayment before they sign. The simplest way to compare offers is to look at APR, term, payment amount, and total amount repaid."
      path="/personal-loan-calculator"
      h1="Personal Loan Calculator: Estimate Payment and Total Cost"
      intro="Use the calculator to estimate the impact of amount, term, and APR on your monthly payment and total cost. The underlying idea is simple: a longer term lowers the monthly bill but usually increases the total interest paid."
      sections={[
        {
          heading: "How the payment formula works",
          body: (
            <>
              <p>
                Loan payments are based on the amount borrowed, the APR, and the
                number of months in the term. A fixed-rate amortizing loan
                distributes payments so the balance declines steadily over time.
              </p>
              <p>
                That is why the payment amount is predictable even though the
                composition of interest and principal shifts over the life of
                the loan.
              </p>
            </>
          ),
        },
        {
          heading: "Why APR matters more than interest rate",
          body: (
            <>
              <p>
                APR reflects the full borrowing cost, including the impact of
                any fees or the effective annualized cost of the credit.
                Comparing APR is more reliable than comparing a raw interest
                rate alone.
              </p>
              <p>
                Two loans with similar monthly payments can have very different
                total costs.
              </p>
            </>
          ),
        },
        {
          heading: "How extra payments change the schedule",
          body: (
            <>
              <p>
                Making extra payments can shorten the term and reduce the total
                interest paid, but borrowers should confirm the lender’s rules
                before applying additional amounts. Each extra payment usually
                lowers the remaining principal balance.
              </p>
              <p>
                That can accelerate the payoff timeline and reduce the cost of
                carrying the debt.
              </p>
            </>
          ),
        },
        {
          heading: "Reading an amortization table",
          body: (
            <>
              <p>
                An amortization schedule shows how each payment is split between
                interest and principal. In early months, interest often
                dominates; later months shift more weight toward principal
                reduction.
              </p>
              <p>
                That pattern is normal and helps explain why the loan balance
                declines gradually at first.
              </p>
            </>
          ),
        },
      ]}
      faqItems={[
        {
          question: "What does the calculator show?",
          answer:
            "It estimates monthly payment, total interest, and total repayment based on the amount, term, and APR you enter.",
        },
        {
          question: "Is the rate fixed in the calculator?",
          answer:
            "Yes. The calculator uses a fixed 10.00% APR for comparison, while still allowing an editable rate field for side-by-side planning.",
        },
        {
          question: "How do I compare a 24-month vs 60-month term?",
          answer:
            "A shorter term generally means a higher payment but less total interest paid, while a longer term usually lowers the monthly cost and increases total interest.",
        },
        {
          question: "Can extra payments reduce my total interest?",
          answer:
            "Yes, when the lender applies the extra amount to principal and the agreement allows it without penalty.",
        },
      ]}
      internalLinks={[
        {
          label: "Personal loan rates and terms",
          href: "/personal-loan-rates-and-terms",
        },
        { label: "Installment loans", href: "/installment-loans" },
        {
          label: "Debt consolidation loans",
          href: "/debt-consolidation-loans",
        },
        { label: "Personal loans explained", href: "/personal-loans" },
      ]}
      authorName="Mina Patel"
      authorCredentials="MBA, CFP®"
      authorBio="Mina Patel is a financial writer and consumer-credit educator who translates lending terms into clear, practical guidance for applicants comparing loan options."
      reviewedBy="Daniel R. Kim, CRPC"
      lastUpdated="August 2026"
      sources={[
        "Consumer Financial Protection Bureau, installment and loan terms guidance",
        "Federal Reserve G.19 consumer credit data",
        "FDIC, consumer financial education resources",
        "Experian, loan payment and credit education resources",
      ]}
      ctaLabel="Estimate your payment"
      ctaHref="/apply"
    />
  );
}
