import PersonalLoansBadCreditContent from "@/src/components/marketing/info/personal-loans-for-bad-credit/PersonalLoansBadCreditContent";
import PersonalLoansHero from "@/src/components/marketing/info/personal-loans-for-bad-credit/PersonalLoansHero";
import { constructMetadata } from "@/src/lib/metadata";

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
    "ryer loans bad credit",
  ],
});

export default function PersonalLoansBadCreditPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <PersonalLoansHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <PersonalLoansBadCreditContent />
      </div>
    </main>
  );
}
