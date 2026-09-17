"use client";

import { useEffect, useState } from "react";
import { BadgeCheck, ChevronLeft, ChevronRight, Quote } from "lucide-react";

import type { PublicReview } from "@/src/lib/api";

type TestimonialsProps = {
  reviews: PublicReview[];
  total: number;
  averageRating: number | null;
};

export default function Testimonials({
  reviews,
  total,
  averageRating,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    if (reviews.length <= visibleCount) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length, maxIndex]);

  if (!reviews.length) {
    return null;
  }

  return (
    <section className="bg-slate-50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What our borrowers are saying
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Real experiences from borrowers who have received their loans
            through Fiona Loans.
          </p>

          {/* Rating */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-3xl font-bold text-slate-900">
              {averageRating?.toFixed(1) ?? "—"}
            </span>

            <div className="text-left">
              <Stars rating={Math.round(averageRating ?? 0)} />

              <p className="mt-1 text-sm text-slate-500">
                Based on {total} verified {total === 1 ? "review" : "reviews"}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mt-12">
          {/* Previous Button */}
          {reviews.length > visibleCount && (
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonials"
              className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:bg-slate-50 md:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCount)
                }%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full shrink-0 px-2 md:w-1/2 lg:w-1/3"
                >
                  <article className="relative flex h-full min-h-[330px] flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md">
                    {/* Quote */}
                    <Quote className="absolute right-6 top-6 h-9 w-9 text-slate-100" />

                    {/* Rating */}
                    <Stars rating={review.rating} />

                    {/* Review */}
                    <blockquote className="mt-5 flex-1">
                      <p className="text-[15px] leading-7 text-slate-700">
                        &ldquo;{review.review_text}&rdquo;
                      </p>
                    </blockquote>

                    {/* User */}
                    <div className="mt-7 border-t border-slate-100 pt-5">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                          {getInitials(review.display_name)}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate font-semibold text-slate-900">
                            {review.display_name}
                          </p>

                          <div className="mt-1 flex items-center gap-1.5">
                            <BadgeCheck
                              className="h-4 w-4 text-emerald-600"
                              aria-hidden
                            />

                            <span className="text-xs font-medium text-emerald-700">
                              Verified borrower
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Date */}
                      <p className="mt-3 text-xs text-slate-400">
                        {new Date(review.submitted_at).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            year: "numeric",
                          },
                        )}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          {reviews.length > visibleCount && (
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonials"
              className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:bg-slate-50 md:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Mobile Buttons */}
        {reviews.length > 1 && (
          <div className="mt-6 flex justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Dots */}
        {reviews.length > visibleCount && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({
              length: maxIndex + 1,
            }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-7 bg-blue-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Trust statement */}
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-5 text-slate-500">
          Testimonials are submitted by verified Fiona Loans borrowers after
          receiving their funded loan.
        </p>
      </div>
    </section>
  );
}

/* --------------------------------
   Stars
-------------------------------- */

function Stars({ rating }: { rating: number }) {
  const safeRating = Math.min(5, Math.max(0, Math.round(rating)));

  return (
    <div
      className="text-lg tracking-wide"
      aria-label={`${safeRating} out of 5`}
    >
      <span className="text-amber-400">{"★".repeat(safeRating)}</span>

      <span className="text-slate-200">{"★".repeat(5 - safeRating)}</span>
    </div>
  );
}

/* --------------------------------
   Initials
-------------------------------- */

function getInitials(name: string) {
  if (!name) return "B";

  const parts = name.trim().split(/\s+/);

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
