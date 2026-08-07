import TermsContent from "@/src/components/marketing/legal/terms/TermsContent";
import TermsHero from "@/src/components/marketing/legal/terms/TermsHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Terms of Use | Ryer Loans",
  description:
    "Read the Terms of Use governing your access to and use of the Ryer Loans website, personal loan applications, and services.",
  path: "/terms-of-use",
  keywords: [
    "ryer loans terms of use",
    "ryer loans terms and conditions",
    "personal loan terms",
    "legal terms ryer loans",
  ],
});

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <TermsHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <TermsContent />
      </div>
    </main>
  );
}
