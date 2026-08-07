import ComplaintsContent from "@/src/components/marketing/legal/complaints/ComplaintsContent";
import ComplaintsHero from "@/src/components/marketing/legal/complaints/ComplaintsHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Complaints & Dispute Resolution | Ryer Loans",
  description:
    "How to submit a formal complaint to Ryer Loans, our internal dispute resolution timeline, and contact information for regulatory oversight agencies.",
  path: "/complaints-and-dispute-resolution",
  keywords: [
    "ryer loans complaints",
    "dispute resolution process",
    "cfpb complaint",
    "customer support escalation",
    "financial regulatory contact",
  ],
});

export default function ComplaintsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Hero Section */}
      <ComplaintsHero />

      {/* Main Content Area */}
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <ComplaintsContent />
      </div>
    </main>
  );
}
