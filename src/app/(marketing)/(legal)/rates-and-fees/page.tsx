import RatesAndFeesContent from "@/src/components/marketing/legal/rates-and-fees/RatesAndFeesContent";
import RatesAndFeesHero from "@/src/components/marketing/legal/rates-and-fees/RatesAndFeesHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Rates & Fees | Ryer Loans",
  description:
    "Explore Ryer Loans interest rates, simple interest calculations, zero prepayment penalties, and representative payment terms.",
  path: "/rates-and-fees",
  keywords: [
    "ryer loans rates and fees",
    "personal loan interest rate",
    "no origination fee loan",
    "fixed apr loan terms",
  ],
});

export default function RatesAndFeesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <RatesAndFeesHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <RatesAndFeesContent />
      </div>
    </main>
  );
}
