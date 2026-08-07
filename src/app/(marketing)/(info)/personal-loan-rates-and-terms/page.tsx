import { constructMetadata } from "@/src/lib/metadata";
import InformationalPage from "@/src/components/marketing/info/InformationalPage";

export const metadata = constructMetadata({
  title: "Personal Loan Rates and Terms Explained | Ryer Loans",
  description:
    "Understand personal loan APR, origination fees, term length, and the difference between a low rate and a lower-cost loan.",
  path: "/personal-loan-rates-and-terms",
  keywords: [
    "personal loan rates",
    "loan terms explained",
    "APR vs interest rate",
    "origination fee",
  ],
});

export default function PersonalLoanRatesAndTermsPage() {
  return (
    <InformationalPage
      title="Personal Loan Rates and Terms Explained | Ryer Loans"
      description="APR, term length, and fees all affect the real cost of a personal loan. The most important thing is to compare the total repayment and the total cost of credit, not just the advertised rate."
      path="/personal-loan-rates-and-terms"
      h1="Personal Loan Rates and Terms Explained"
      intro="Borrowing costs are determined by more than a single percentage. Terms, fees, and the timing of repayment all shape what the loan ultimately costs. This guide helps break those factors down in plain English."
      sections={[
        {
          heading: "APR vs interest rate",
          body: (
            <>
              <p>
                APR is the annualized cost of borrowing and is generally the
                more useful comparison number. An interest rate may look lower
                while the total cost is actually higher once fees or the length
                of the term are considered.
              </p>
              <p>
                That is why borrowers should compare APR and total repayment
                before committing.
              </p>
            </>
          ),
        },
        {
          heading: "How origination fees change the real cost",
          body: (
            <>
              <p>
                Origination fees can increase the effective cost of the loan
                even when the stated rate appears attractive. A loan with a
                slightly higher posted rate and no fee may cost less than one
                with a lower rate and a large upfront fee.
              </p>
              <p>
                That is why the full cost of credit matters more than the
                headline number.
              </p>
            </>
          ),
        },
        {
          heading: "Fixed vs variable and term length",
          body: (
            <>
              <p>
                Ryer’s lending offer is fixed-rate, which helps borrowers plan
                around a steady monthly payment. Variable-rate products can
                shift with market conditions, making long-term budgeting less
                predictable.
              </p>
              <p>
                Longer terms can lower the monthly payment but often increase
                total interest paid over the life of the loan.
              </p>
            </>
          ),
        },
        {
          heading: "Questions to ask before signing",
          body: (
            <>
              <p>
                Ask for the APR, any fees, the monthly payment schedule, the
                payoff amount, and whether the loan can be paid early without
                penalty. Clear answers to those questions reduce the chance of
                surprise costs later.
              </p>
              <p>
                Borrowers should review the disclosure package carefully before
                signing.
              </p>
            </>
          ),
        },
      ]}
      faqItems={[
        {
          question: "What is APR?",
          answer:
            "APR is the annualized cost of the loan and is the more useful figure for comparing offers because it accounts for the broader cost of credit.",
        },
        {
          question: "What is an origination fee?",
          answer:
            "It is an upfront fee charged by the lender that can increase the effective cost of borrowing even when the stated rate looks attractive.",
        },
        {
          question: "Does a longer term lower the total cost?",
          answer:
            "Usually not. A longer term can lower the monthly payment but often increases total interest paid over time.",
        },
        {
          question: "Should I choose a fixed or variable rate?",
          answer:
            "A fixed rate is generally easier to budget because the payment remains stable over the life of the loan.",
        },
      ]}
      internalLinks={[
        { label: "Personal loans explained", href: "/personal-loans" },
        {
          label: "Personal loan calculator",
          href: "/personal-loan-calculator",
        },
        { label: "Installment loans", href: "/installment-loans" },
        {
          label: "Debt consolidation loans",
          href: "/debt-consolidation-loans",
        },
      ]}
      authorName="Mina Patel"
      authorCredentials="MBA, CFP®"
      authorBio="Mina Patel is a financial writer and consumer-credit educator who translates lending terms into clear, practical guidance for applicants comparing loan options."
      reviewedBy="Daniel R. Kim, CRPC"
      lastUpdated="August 2026"
      sources={[
        "Consumer Financial Protection Bureau, APR and loan terms guidance",
        "Federal Reserve G.19 consumer credit data",
        "FDIC, consumer financial education resources",
        "Experian, loan terms and interest education",
      ]}
      ctaLabel="See how pricing works"
      ctaHref="/apply"
    />
  );
}
