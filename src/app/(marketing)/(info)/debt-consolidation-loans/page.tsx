import DebtConsolidationContent from "@/src/components/marketing/info/debt-consolidation/DebtConsolidationContent";
import DebtConsolidationHero from "@/src/components/marketing/info/debt-consolidation/DebtConsolidationHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title:
    "Debt Consolidation Loans | Combine Debt at 10% Fixed APR | Ryer Loans",
  description:
    "Consolidate high-interest credit card debt into one fixed monthly payment. See the math on whether consolidation saves you money with our interactive calculator.",
  path: "/debt-consolidation-loans",
  keywords: [
    "debt consolidation loan",
    "consolidate credit card debt",
    "combine debt 10 percent fixed APR",
    "debt consolidation calculator",
    "pay off credit card debt fast",
    "ryer loans debt consolidation",
  ],
});

export default function DebtConsolidationPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <DebtConsolidationHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <DebtConsolidationContent />
      </div>
    </main>
  );
}
