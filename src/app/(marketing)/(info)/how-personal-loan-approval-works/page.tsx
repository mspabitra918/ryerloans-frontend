import HowApprovalWorksContent from "@/src/components/marketing/legal/how-personal-loan-approval-works/HowApprovalWorksContent";
import HowApprovalWorksHero from "@/src/components/marketing/legal/how-personal-loan-approval-works/HowApprovalWorksHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "How Personal Loan Approval Works | Ryer Loans",
  description:
    "A step-by-step look at how lenders evaluate personal loan applications, what 'instant approval' really means, and why no lender can guarantee approval.",
  path: "/how-personal-loan-approval-works",
  keywords: [
    "how personal loan approval works",
    "personal loan underwriting process",
    "guaranteed loan approval myth",
    "instant approval personal loans",
    "adverse action notice explanation",
    "personal loan eligibility factors",
    "ryer loans approval process",
  ],
});

export default function HowPersonalLoanApprovalWorksPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <HowApprovalWorksHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <HowApprovalWorksContent />
      </div>
    </main>
  );
}
