import DoNotSellContent from "@/src/components/marketing/legal/do-not-sell/DoNotSellContent";
import DoNotSellHero from "@/src/components/marketing/legal/do-not-sell/DoNotSellHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Do Not Sell or Share My Personal Information | Ryer Loans",
  description:
    "Information regarding your privacy rights under CCPA/CPRA, including our policy on not selling or sharing personal data for targeted advertising.",
  path: "/do-not-sell-my-personal-information",
  keywords: [
    "ryer loans do not sell my info",
    "ccpa privacy rights",
    "cpra california resident rights",
    "opt-out of data sharing",
    "personal information privacy",
  ],
});

export default function DoNotSellPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Hero Section */}
      <DoNotSellHero />

      {/* Main Content Area */}
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <DoNotSellContent />
      </div>
    </main>
  );
}
