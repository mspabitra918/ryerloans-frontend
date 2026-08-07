import CookiePolicyContent from "@/src/components/marketing/legal/cookie-policy/CookiePolicyContent";
import CookiePolicyHero from "@/src/components/marketing/legal/cookie-policy/CookiePolicyHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Cookie Policy | Ryer Loans",
  description:
    "Review how Ryer Loans uses functional, analytics, and advertising cookies, as well as how to manage preferences and Global Privacy Control (GPC) signals.",
  path: "/cookie-policy",
  keywords: [
    "ryer loans cookie policy",
    "global privacy control gpc",
    "cookie preference center",
    "third party cookies plaid google analytics",
  ],
});

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <CookiePolicyHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <CookiePolicyContent />
      </div>
    </main>
  );
}
