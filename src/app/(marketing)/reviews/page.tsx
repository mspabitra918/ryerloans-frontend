import ReviewsEmptyState from "@/src/components/marketing/reviews/ReviewsEmptyState";
import ReviewsHero from "@/src/components/marketing/reviews/ReviewsHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Borrower Reviews | Ryer Loans",
  description:
    "Verified reviews from Ryer Loans borrowers. Every review comes from a borrower with a funded loan.",
  path: "/reviews",
  keywords: [
    "ryer loans reviews",
    "verified borrower reviews",
    "ryer loans feedback",
    "direct lender reviews",
  ],
});

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <ReviewsHero />
      <ReviewsEmptyState />
    </main>
  );
}
