import PersonalLoansHero from "@/src/components/marketing/info/personal-loans/PersonalLoansHero";
import PersonalLoansContent from "@/src/components/marketing/info/personal-loans/PersonalLoansContent";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Online Personal Loans $2,000–$25,000 | Fixed 10% APR | Ryer Loans",
  description:
    "How online personal loans work, what they cost, who qualifies, and how to compare offers. Ryer Loans offers $2,000–$25,000 at a fixed 10.00% APR.",
  path: "/personal-loans",
  keywords: [
    "online personal loans",
    "fixed 10 apr personal loan",
    "unsecured installment loan",
    "personal loan terms and cost",
    "ryer loans personal loans",
  ],
});

export default function PersonalLoansPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <PersonalLoansHero />
      <div className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <PersonalLoansContent />
      </div>
    </main>
  );
}
