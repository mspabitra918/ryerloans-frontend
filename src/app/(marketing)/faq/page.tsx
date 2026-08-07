import FaqContent from "@/src/components/marketing/faq/FaqContent";
import FaqHero from "@/src/components/marketing/faq/FaqHero";
import { RATE_CONFIG } from "@/src/lib/config";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Personal Loan FAQ | Ryer Loans — Rates, Approval, Funding",
  description:
    "Answers on personal loan eligibility, our fixed 10% APR, bad credit applications, bank verification, funding times, and how to check your status.",
  path: "/faq",
  keywords: [
    "ryer loans faq",
    "personal loan questions",
    "personal loan eligibility",
    "10 percent fixed apr loan",
    "bank verification plaid loans",
  ],
});

export default function FaqPage() {
  const formattedApr = `${RATE_CONFIG.apr.toFixed(2)}%`;
  const formattedMin = `$${RATE_CONFIG.minAmount.toLocaleString()}`;
  const formattedMax = `$${RATE_CONFIG.maxAmount.toLocaleString()}`;

  // Complete Question & Answer Dataset
  const faqCategories = [
    {
      title: "Loan Basics",
      items: [
        {
          q: "How much can I borrow?",
          a: `Between ${formattedMin} and ${formattedMax}, in $500 increments. The amount you are approved for depends on your income, existing obligations, and banking history — it may be less than you request.`,
        },
        {
          q: "What is the interest rate?",
          a: `A fixed ${formattedApr} Annual Percentage Rate on every approved loan. It does not vary by credit score, loan size, or term.`,
        },
        {
          q: "Are there fees?",
          a: "No origination fee, no application fee, no prepayment penalty. Late and returned-payment fees may apply as disclosed in your agreement and permitted by your state. See [Rates & Fees](/rates-and-fees).",
        },
        {
          q: "What are the repayment terms?",
          a: "Fixed monthly installments, typically 12 to 60 months depending on loan size. Your exact term and payment appear in your agreement before you sign.",
        },
        {
          q: "Is this a payday loan?",
          a: `No. Payday loans are small, due in full on your next payday, and commonly carry APRs in the triple digits. Ryer offers installment loans — larger amounts, fixed monthly payments over months or years, at ${formattedApr} APR.`,
        },
        {
          q: "Can I pay it off early?",
          a: "Yes, at any time, with no penalty. Interest stops accruing on the day the balance clears.",
        },
      ],
    },
    {
      title: "Eligibility",
      items: [
        {
          q: "What do I need to qualify?",
          a: "Be at least 18 (19 in Alabama and Nebraska); be a US citizen or permanent resident; have a valid SSN; have verifiable regular income; hold an active checking or savings account in your own name; provide a valid phone number and email address; reside in a state where we currently lend.",
        },
        {
          q: "Do you accept bad credit?",
          a: "We accept applications from every credit tier and do not use a minimum score cutoff. Income stability and banking history carry substantial weight. We cannot guarantee approval to anyone.",
        },
        {
          q: "Is there a minimum credit score?",
          a: "No fixed cutoff.",
        },
        {
          q: "Do you check credit?",
          a: "Yes. We review credit data as part of underwriting, alongside income and banking history. Any lender claiming to extend a $25,000 unsecured loan with no verification at all is not describing a real product.",
        },
        {
          q: "Can I qualify on Social Security, disability, or pension income?",
          a: "Yes. Regular, verifiable income qualifies regardless of source. Refusing an applicant because their income comes from public assistance would violate the Equal Credit Opportunity Act.",
        },
        {
          q: "Can I qualify if I am self-employed?",
          a: "Yes. We may ask for bank statements or tax documents to verify income.",
        },
        {
          q: "Do I need a car or collateral?",
          a: "No. These are unsecured loans. We ask about vehicle ownership as one data point in assessing your overall financial picture, not as security for the loan.",
        },
        {
          q: "Which states do you serve?",
          a: "Availability varies by state licensing. The application form confirms your state’s status when you enter your address. See [State Disclosures](/state-disclosures).",
        },
      ],
    },
    {
      title: "Applying",
      items: [
        {
          q: "How long does the application take?",
          a: "About seven minutes.",
        },
        {
          q: "What will I need on hand?",
          a: "Your SSN, driver’s licence or state ID, employer name and phone, net monthly income figure, and your bank routing and account numbers.",
        },
        {
          q: "What happens right after I submit?",
          a: `Your screen displays a six-digit Application ID and a confirmation email arrives within a few minutes. Then call ${RATE_CONFIG.phone} to continue.`,
        },
        {
          q: "Why do I have to call?",
          a: "It is a required verification step. We confirm your identity, review your details for errors, and answer your questions before anything moves forward. Applications that never receive a call remain on hold and eventually expire.",
        },
        {
          q: "What if I do not call?",
          a: "Your application stays on hold. We will email reminders for three days, then stop. The application expires after 45 days of inactivity. You can call at any point during that window to reactivate it.",
        },
        {
          q: "I made a mistake on my application. Can it be fixed?",
          a: `Yes. Call ${RATE_CONFIG.phone} and we will correct it in your file. Typos in phone numbers, email addresses, and account numbers are common, particularly on small screens, and they are quick to fix.`,
        },
        {
          q: "I entered the wrong email address.",
          a: `Call ${RATE_CONFIG.phone}. We will verify your identity and update it, then resend your confirmation.`,
        },
        {
          q: "Can I submit more than one application?",
          a: "No. One active application per person. Duplicate submissions are automatically blocked.",
        },
        {
          q: "I was declined. When can I reapply?",
          a: "Ninety days after the date of your original application. Your decline letter states the exact eligible date and the specific reasons for the decision — those reasons are worth reading, because they tell you what to address before trying again.",
        },
      ],
    },
    {
      title: "Bank Verification",
      items: [
        {
          q: "What is online bank verification?",
          a: "A secure, read-only connection to your bank account that confirms it belongs to you, that the routing and account numbers are correct, and that your reported income matches actual deposits. It runs through Plaid.",
        },
        {
          q: "Is it safe?",
          a: "Yes. You enter your bank credentials inside Plaid’s own encrypted window, not on our site. Ryer never sees or stores your online banking password. Access is read-only — it cannot move money. Plaid is used by thousands of financial apps and is regulated as a consumer reporting agency.",
        },
        {
          q: "Is it required?",
          a: "Yes, for every loan. It is how we confirm we are depositing funds into the right account.",
        },
        {
          q: "How long does it take?",
          a: "Usually under two minutes.",
        },
        {
          q: "My bank is not listed.",
          a: `Call ${RATE_CONFIG.phone} and we will arrange manual verification with bank statements or microdeposits.`,
        },
        {
          q: "What is the Verification Deposit step?",
          a: "After your agreement is signed, we send one or two small deposits — typically under a dollar — into your account and ask you to confirm the exact amounts. It is a final confirmation that funds will land in the right place. This deposit goes into your account. Ryer never asks you to send us money at any stage.",
        },
      ],
    },
    {
      title: "Approval & Funding",
      items: [
        {
          q: "How long until I get a decision?",
          a: "Most applications reach a decision within one business day of your verification call and completed bank verification.",
        },
        {
          q: "When will I receive funds?",
          a: "Approved loans are typically disbursed by ACH within one business day of final approval, arriving in your account in one to two business days depending on your bank. Same-day funding is not guaranteed — ACH timing is controlled by the banking system, not by us.",
        },
        {
          q: "Will I see the terms before committing?",
          a: "Yes. Your full agreement — amount, APR, term, monthly payment, payment dates, total repayment — is emailed for review before you sign, and our funding team walks through it with you before disbursement.",
        },
        {
          q: "Why was I declined?",
          a: "Your adverse action notice lists the specific principal reasons, as required by the Equal Credit Opportunity Act. Common ones: insufficient verifiable income relative to obligations, banking history concerns, inability to verify identity or employment, or existing debt load.",
        },
      ],
    },
    {
      title: "Managing Your Loan",
      items: [
        {
          q: "How do I check my status?",
          a: "Go to [Loan Status](/loan-status), enter your six-digit Application ID and the email address on your application.",
        },
        {
          q: "I lost my Application ID.",
          a: `Check your email for the confirmation, or call ${RATE_CONFIG.phone} and we will locate your file after verifying your identity.`,
        },
        {
          q: "How do payments work?",
          a: "Automatic ACH debit on your scheduled dates. Your agreement lists every date.",
        },
        {
          q: "Can I change my payment date?",
          a: "Contact us before your next due date and we will do what we can.",
        },
        {
          q: "What if I cannot make a payment?",
          a: `Call ${RATE_CONFIG.phone} before the due date. We would far rather work out an arrangement than process a returned payment. Silence is the only response that makes it worse.`,
        },
        {
          q: "Do you report to credit bureaus?",
          a: "Yes — both on-time and late payments, as disclosed in your agreement. On-time payment can help build your credit history.",
        },
      ],
    },
    {
      title: "Privacy & Security",
      items: [
        {
          q: "How is my information protected?",
          a: "256-bit encryption in transit, AES-256 encryption at rest, field-level encryption on your SSN and account numbers, strict role-based internal access, and a written information security program. See [Security Policy](/security).",
        },
        {
          q: "Do you sell my information?",
          a: "No. We do not sell personal information to third parties for their own marketing. See [Privacy Policy](/privacy).",
        },
        {
          q: "Why do you need my SSN?",
          a: "It is required to verify your identity under federal law, to obtain credit information, and to report the loan to credit bureaus.",
        },
        {
          q: "Why do you record my IP address?",
          a: "For fraud prevention and security, and to document consent. It is standard practice for online lenders.",
        },
        {
          q: "Can I opt out of calls and texts?",
          a: `Yes. Consent to marketing calls, texts, and prerecorded messages is optional and is never a condition of getting a loan. Reply STOP to any text, or call ${RATE_CONFIG.phone}. We will still contact you about your active application, which is servicing communication rather than marketing.`,
        },
      ],
    },
  ];

  // Flatten all Q&As for JSON-LD Schema
  const schemaQuestions = faqCategories.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.replace(/\[(.*?)\]\((.*?)\)/g, "$1"), // Clean markdown links for JSON-LD
      },
    })),
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: schemaQuestions,
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Dynamic SEO JSON-LD Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqHero />
      <FaqContent categories={faqCategories} />
    </main>
  );
}
