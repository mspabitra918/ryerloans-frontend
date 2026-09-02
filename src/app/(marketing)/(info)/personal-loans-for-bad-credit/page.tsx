import PersonalLoansBadCreditContent from "@/src/components/marketing/info/personal-loans-for-bad-credit/PersonalLoansBadCreditContent";
import PersonalLoansHero from "@/src/components/marketing/info/personal-loans-for-bad-credit/PersonalLoansHero";
import JsonLd from "@/src/components/seo/JsonLd";
import { constructMetadata } from "@/src/lib/metadata";
import { loanServiceSchema } from "@/src/lib/seo/schema";

export const metadata = constructMetadata({
  title: "Personal Loans for Bad Credit | All Credit Considered | Ryer Loans",
  description:
    "How to get a personal loan with bad credit, what lenders actually evaluate beyond your score, and how to improve your odds. Fixed 10% APR, all credit types considered.",
  path: "/personal-loans-for-bad-credit",
  keywords: [
    "personal loans for bad credit",
    "bad credit installment loan",
    "no minimum credit score loan",
    "low credit score personal loan",
    "Ryer Loans bad credit",
  ],
});

// Service schema for the loan product this page describes.
const serviceSchema = loanServiceSchema({
  name: "Personal Loans for Bad Credit",
  description:
    "Personal loans assessed on income stability and banking history as well as credit, with no minimum score cutoff. All credit tiers considered at the same fixed 10.00% APR.",
  path: "/personal-loans-for-bad-credit",
});

export default function PersonalLoansBadCreditPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <JsonLd data={serviceSchema} />
      <PersonalLoansHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <PersonalLoansBadCreditContent />
      </div>
    </main>
  );
}
