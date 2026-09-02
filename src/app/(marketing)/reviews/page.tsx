import ReviewsEmptyState from "@/src/components/marketing/reviews/ReviewsEmptyState";
import ReviewsHero from "@/src/components/marketing/reviews/ReviewsHero";
import ReviewsList from "@/src/components/marketing/reviews/ReviewsList";
import { api, type PublicReviewsResponse } from "@/src/lib/api";
import { SITE_CONFIG } from "@/src/lib/config";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Borrower Reviews | Ryer Loans",
  description:
    "Verified reviews from Ryer Loans borrowers. Every review comes from a borrower with a funded loan.",
  path: "/reviews",
  keywords: [
    "Ryer Loans reviews",
    "verified borrower reviews",
    "Ryer Loans feedback",
    "direct lender reviews",
  ],
});

/*
 * Rendered per request. The API client sends `cache: "no-store"`, so a
 * moderator publishing a review is visible on the next page load rather than
 * whenever the page happens to be rebuilt.
 */
export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
  let published: PublicReviewsResponse | null = null;

  try {
    published = await api.publishedReviews();
  } catch {
    /*
     * An unreachable API is not a reason to serve a broken page. Falling
     * through to the empty state says "no reviews yet", which is what a
     * visitor sees anyway while the queue is empty.
     */
  }

  const reviews = published?.reviews ?? [];

  /*
   * §11: "Review / AggregateRating schema activates automatically once ≥ 5
   * published reviews exist". The backend owns that threshold — an
   * AggregateRating over two reviews is a rich-result claim on a sample too
   * small to mean anything, and Google treats it accordingly.
   */
  const schema =
    published?.schema_ready && published.average_rating
      ? {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE_CONFIG.legalName,
          url: `${SITE_CONFIG.url}/reviews`,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: published.average_rating,
            reviewCount: published.total,
            bestRating: 5,
            worstRating: 1,
          },
          review: reviews.slice(0, 20).map((review) => ({
            "@type": "Review",
            author: { "@type": "Person", name: review.display_name },
            datePublished: review.submitted_at.slice(0, 10),
            reviewBody: review.review_text,
            reviewRating: {
              "@type": "Rating",
              ratingValue: review.rating,
              bestRating: 5,
              worstRating: 1,
            },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {schema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ) : null}

      <ReviewsHero />

      {reviews.length > 0 ? (
        <ReviewsList
          reviews={reviews}
          total={published?.total ?? reviews.length}
          averageRating={published?.average_rating ?? null}
        />
      ) : (
        <ReviewsEmptyState />
      )}
    </main>
  );
}
