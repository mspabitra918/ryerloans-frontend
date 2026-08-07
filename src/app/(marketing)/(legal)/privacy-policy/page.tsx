import GlbaNotice from "@/src/components/marketing/legal/privacy/GlbaNotice";
import PrivacyContent from "@/src/components/marketing/legal/privacy/PrivacyContent";
import PrivacyHero from "@/src/components/marketing/legal/privacy/PrivacyHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Privacy Policy & GLBA Notice | Ryer Loans",
  description:
    "Learn what personal information Ryer Loans collects, how we use and protect it, your CCPA/CPRA rights, and our GLBA Privacy Notice.",
  path: "/privacy-policy",
  keywords: [
    "ryer loans privacy policy",
    "glba privacy notice",
    "ccpa rights ryer loans",
    "data protection ryer loans",
  ],
});

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <PrivacyHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <PrivacyContent />
        <GlbaNotice />
      </div>
    </main>
  );
}
