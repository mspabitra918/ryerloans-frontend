import CommunicationsConsentContent from "@/src/components/marketing/legal/communications-consent/CommunicationsConsentContent";
import CommunicationsConsentHero from "@/src/components/marketing/legal/communications-consent/CommunicationsConsentHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Communications Consent (TCPA) | Ryer Loans",
  description:
    "Review the Ryer Loans Telephone Consumer Protection Act (TCPA) communications consent policy, servicing notices, and opt-out procedures.",
  path: "/communications-consent",
  keywords: [
    "tcpa consent",
    "communications consent ryer loans",
    "telephone consumer protection act disclosure",
    "opt out marketing calls texts",
  ],
});

export default function CommunicationsConsentPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <CommunicationsConsentHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <CommunicationsConsentContent />
      </div>
    </main>
  );
}
