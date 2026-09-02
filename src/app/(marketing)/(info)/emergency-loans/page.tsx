import EmergencyLoansContent from "@/src/components/marketing/info/emergency-loans/EmergencyLoansContent";
import EmergencyLoansHero from "@/src/components/marketing/info/emergency-loans/EmergencyLoansHero";
import JsonLd from "@/src/components/seo/JsonLd";
import { constructMetadata } from "@/src/lib/metadata";
import { loanServiceSchema } from "@/src/lib/seo/schema";

export const metadata = constructMetadata({
  title: "Emergency Loans for Unexpected Expenses | Ryer Loans",
  description:
    "How emergency loans work, realistic funding timelines, and what to consider before borrowing for an urgent expense. $2,000–$25,000 at 10% fixed APR.",
  path: "/emergency-loans",
  keywords: [
    "emergency loans",
    "same day emergency loan funding",
    "loans for unexpected expenses",
    "urgent personal loan",
    "emergency financial assistance",
    "Ryer Loans emergency loan",
  ],
});

// Service schema for the loan product this page describes.
const serviceSchema = loanServiceSchema({
  name: "Emergency Loans",
  description:
    "Personal loans for urgent, unexpected expenses, funded by ACH after approval and bank verification.",
  path: "/emergency-loans",
});

export default function EmergencyLoansPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <JsonLd data={serviceSchema} />
      <EmergencyLoansHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <EmergencyLoansContent />
      </div>
    </main>
  );
}
