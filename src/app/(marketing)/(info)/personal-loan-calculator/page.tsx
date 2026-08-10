import PersonalLoanCalculatorContent from "@/src/components/marketing/info/personal-loan-calculator/PersonalLoanCalculatorContent";
import PersonalLoanCalculatorHero from "@/src/components/marketing/info/personal-loan-calculator/PersonalLoanCalculatorHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Personal Loan Calculator | Payment & Total Cost | Ryer Loans",
  description:
    "Calculate your monthly payment and total interest on a personal loan from $2,000 to $25,000 at 10% fixed APR. Includes a full downloadable amortization schedule.",
  path: "/personal-loan-calculator",
  keywords: [
    "personal loan calculator",
    "loan payment calculator",
    "amortization schedule download",
    "10 percent fixed APR personal loan",
    "monthly personal loan cost simulator",
    "ryer loans calculator",
  ],
});

export default function PersonalLoanCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <PersonalLoanCalculatorHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <PersonalLoanCalculatorContent />
      </div>
    </main>
  );
}
