import SecurityPolicyContent from "@/src/components/marketing/legal/security-policy/SecurityPolicyContent";
import SecurityPolicyHero from "@/src/components/marketing/legal/security-policy/SecurityPolicyHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Security Policy | Ryer Loans",
  description:
    "Learn how Ryer Loans protects user data through 256-bit encryption, FTC Safeguards compliance, secure Plaid verification, and strict fraud prevention.",
  path: "/security-policy",
  keywords: [
    "ryer loans security policy",
    "data protection personal loan",
    "ftc safeguards compliance",
    "plaid bank verification security",
  ],
});

export default function SecurityPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <SecurityPolicyHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <SecurityPolicyContent />
      </div>
    </main>
  );
}
