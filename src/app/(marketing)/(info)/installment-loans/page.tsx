import InstallmentLoansContent from "@/src/components/marketing/info/installment-loans/InstallmentLoansContent";
import InstallmentLoansHero from "@/src/components/marketing/info/installment-loans/InstallmentLoansHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Online Installment Loans With Monthly Payments | Ryer Loans",
  description:
    "Installment loans give you a lump sum repaid in fixed monthly payments. Compare installment loans to payday loans and credit cards. $2,000–$25,000 at 10% fixed APR.",
  path: "/installment-loans",
  keywords: [
    "online installment loans",
    "installment loan monthly payments",
    "installment loan vs payday loan",
    "fixed rate installment loan",
    "installment loan amortization schedule",
    "ryer loans installment loan",
  ],
});

export default function InstallmentLoansPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <InstallmentLoansHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <InstallmentLoansContent />
      </div>
    </main>
  );
}
