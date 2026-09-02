import { BadgeCheck } from "lucide-react";

import type { PublicReview } from "@/src/lib/api";

/**
 * §11 step 4 — published reviews, each tied to a real funded application.
 *
 * The badge is the whole claim of this page, so it says what it means: every
 * row here came from a borrower who was emailed a single-use link after their
 * loan was disbursed. Nothing on this page can be written by us — there is no
 * code path that puts a review into the database except a borrower submitting
 * one, and none that edits the text afterwards.
 */
export default function ReviewsList({
  reviews,
  total,
  averageRating,
}: {
  reviews: PublicReview[];
  total: number;
  averageRating: number | null;
}) {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-3xl font-bold text-slate-900">
            {averageRating?.toFixed(1) ?? "—"}
            <span className="ml-2 text-base font-normal text-slate-500">
              out of 5
            </span>
          </p>

          <Stars rating={Math.round(averageRating ?? 0)} />
        </div>

        <p className="text-sm text-slate-600">
          {total} published {total === 1 ? "review" : "reviews"}, every one from
          a borrower with a funded loan.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {reviews.map((review) => (
          <li
            key={review.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <Stars rating={review.rating} />

            <p className="mt-4 whitespace-pre-line text-slate-700 leading-relaxed">
              {review.review_text}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-slate-100 pt-4">
              <span className="font-medium text-slate-900">
                {review.display_name}
              </span>

              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-200">
                <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
                Verified borrower
              </span>

              <span className="text-sm text-slate-500">
                {new Date(review.submitted_at).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-sm text-slate-500">
        Reviews are published or declined as written — we do not edit a
        borrower&rsquo;s words. A review is declined only for profanity,
        personal information, being off-topic, or making a claim we cannot tie
        to the file, and the reason is logged.
      </p>
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <p
      className="mt-1 text-lg tracking-wide text-amber-400"
      aria-label={`${rating} out of 5`}
    >
      {"★".repeat(rating)}
      <span className="text-slate-300">{"★".repeat(5 - rating)}</span>
    </p>
  );
}
