import AccessibilityContent from "@/src/components/marketing/legal/accessibility/AccessibilityContent";
import AccessibilityHero from "@/src/components/marketing/legal/accessibility/AccessibilityHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Accessibility Statement | Ryer Loans",
  description:
    "Ryer Loans is committed to digital accessibility for all users. View our conformance standards, supported features, and how to report an accessibility barrier.",
  path: "/accessibility-statement",
  keywords: [
    "ryer loans accessibility statement",
    "wcag 2.1 level aa",
    "digital accessibility",
    "disability support",
  ],
});

export default function AccessibilityStatementPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Hero Section */}
      <AccessibilityHero />

      {/* Main Content Area */}
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <AccessibilityContent />
      </div>
    </main>
  );
}
