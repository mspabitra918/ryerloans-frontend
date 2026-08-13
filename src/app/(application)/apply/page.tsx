import ApplyForm from "@/src/components/form/apply/ApplyForm";
import ApplyHero from "@/src/components/form/apply/ApplyHero";
import { constructMetadata } from "@/src/lib/metadata";
export const metadata = constructMetadata({
  title: "Apply for a Personal Loan Online | $2,000–$25,000 | Ryer Loans",
  description:
    "Apply online in about 7 minutes for a personal loan from $2,000 to $25,000 at a fixed 10% APR. All credit types considered. No obligation.",
  path: "/apply",
  keywords: [
    "apply for personal loan",
    "online loan application",
    "fixed 10 apr loan",
    "ryer loans apply",
    "personal loan 2000 to 25000",
  ],
});
export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <ApplyHero />
      <ApplyForm />
    </main>
  );
}
