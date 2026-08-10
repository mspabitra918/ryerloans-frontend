import UnsecuredLoansContent from "@/src/components/marketing/info/unsecured-loans/UnsecuredLoansContent";
import UnsecuredLoansHero from "@/src/components/marketing/info/unsecured-loans/UnsecuredLoansHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Unsecured Personal Loans — No Collateral Required | Ryer Loans",
  description:
    "Unsecured personal loans require no collateral. Learn how they differ from secured loans, what lenders assess, and what happens if you default. $2,000–$25,000 at 10% fixed APR.",
  path: "/unsecured-personal-loans",
  keywords: [
    "unsecured personal loans",
    "no collateral loans",
    "unsecured vs secured loan",
    "personal loan default timeline",
    "fixed rate unsecured loan",
    "ryer loans personal loan",
  ],
});

export default function UnsecuredLoansPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <UnsecuredLoansHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <UnsecuredLoansContent />
      </div>
    </main>
  );
}
