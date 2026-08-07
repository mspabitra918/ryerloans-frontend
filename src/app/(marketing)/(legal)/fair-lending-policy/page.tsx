import FairLendingContent from "@/src/components/marketing/legal/fair-lending/FairLendingContent";
import FairLendingHero from "@/src/components/marketing/legal/fair-lending/FairLendingHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Fair Lending Policy | Ryer Loans",
  description:
    "Read the Ryer Loans Fair Lending Policy and commitment to equal credit opportunity under federal law.",
  path: "/fair-lending-policy",
  keywords: [
    "fair lending policy",
    "equal credit opportunity act ryer loans",
    "ecoa disclosure",
    "non discrimination lending",
  ],
});

export default function FairLendingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <FairLendingHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <FairLendingContent />
      </div>
    </main>
  );
}
