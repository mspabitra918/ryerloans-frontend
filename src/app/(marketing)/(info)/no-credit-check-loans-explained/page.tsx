import NoCreditCheckContent from "@/src/components/marketing/info/no-credit-check-loans-explained/NoCreditCheckContent";
import NoCreditCheckHero from "@/src/components/marketing/info/no-credit-check-loans-explained/NoCreditCheckHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "No Credit Check Loans: What They Really Are | Ryer Loans",
  description:
    "“No credit check loans” rarely mean what borrowers think. Learn the difference between soft and hard inquiries, what lenders actually verify, and how to spot predatory offers.",
  path: "/no-credit-check-loans-explained",
  keywords: [
    "no credit check loans explained",
    "soft credit inquiry vs hard inquiry",
    "clarity services teletrack credit check",
    "predatory loan red flags",
    "payday loan alternative 10 percent APR",
    "ryer loans soft credit check",
  ],
});

export default function NoCreditCheckPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <NoCreditCheckHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <NoCreditCheckContent />
      </div>
    </main>
  );
}
