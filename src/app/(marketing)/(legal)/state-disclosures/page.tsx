import StateDisclosuresContent from "@/src/components/marketing/legal/state-disclosures/StateDisclosuresContent";
import StateDisclosuresHero from "@/src/components/marketing/legal/state-disclosures/StateDisclosuresHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "State Disclosures & Licensing | Ryer Loans",
  description:
    "Review state lending licenses, regulatory authority contact information, and state-specific disclosure requirements for Ryer Loans.",
  path: "/state-disclosures",
  keywords: [
    "ryer loans state disclosures",
    "california financing law license",
    "nmls consumer access ryer loans",
    "state lending licenses",
  ],
});

export default function StateDisclosuresPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <StateDisclosuresHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <StateDisclosuresContent />
      </div>
    </main>
  );
}
