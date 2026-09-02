import UnsecuredLoansContent from "@/src/components/marketing/info/unsecured-loans/UnsecuredLoansContent";
import UnsecuredLoansHero from "@/src/components/marketing/info/unsecured-loans/UnsecuredLoansHero";
import JsonLd from "@/src/components/seo/JsonLd";
import { constructMetadata } from "@/src/lib/metadata";
import { loanServiceSchema } from "@/src/lib/seo/schema";

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
    "Ryer Loans personal loan",
  ],
});

// Service schema for the loan product this page describes.
const serviceSchema = loanServiceSchema({
  name: "Unsecured Personal Loans",
  description:
    "Personal loans requiring no collateral, underwritten on income, obligations and banking history at a fixed 10.00% APR.",
  path: "/unsecured-personal-loans",
});

export default function UnsecuredLoansPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <JsonLd data={serviceSchema} />
      <UnsecuredLoansHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <UnsecuredLoansContent />
      </div>
    </main>
  );
}
