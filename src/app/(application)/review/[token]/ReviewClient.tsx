"use client";

import { useEffect, useState } from "react";

import {
  api,
  ApiError,
  type DisplayNamePreference,
  type ReviewInvitationView,
} from "@/src/lib/api";
import ActionShell, {
  ActionDone,
  ActionError,
} from "@/src/components/borrower-action/ActionShell";

const MIN_CHARACTERS = 10;
const MAX_CHARACTERS = 2000;

/**
 * §11 step 2 — the borrower's own words, from the tokenised link in the day-7
 * review request.
 *
 * Three things this form does not do, each on purpose:
 *
 * - It does not ask for a display name. The borrower picks one of the three
 *   §11 formats and the server renders it from the funded application, which
 *   is what the "Verified borrower" badge on /reviews is actually claiming.
 * - It does not pre-tick the consent box. Consent to publish is the one field
 *   a default would quietly manufacture.
 * - It does not promise publication. Every review goes to a moderator, and
 *   saying otherwise here would be the first false statement on the page.
 */
export default function ReviewClient({ token }: { token: string }) {
  const [invitation, setInvitation] = useState<ReviewInvitationView | null>(
    null,
  );
  const [loadError, setLoadError] = useState<string | null>(null);

  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [preference, setPreference] =
    useState<DisplayNamePreference>("first_initial");
  const [consent, setConsent] = useState(false);

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;

    api
      .reviewInvitation(token)
      .then((view) => {
        if (cancelled) return;
        setInvitation(view);
      })
      .catch((caught: unknown) => {
        if (cancelled) return;
        setLoadError(
          caught instanceof ApiError
            ? caught.message
            : "We could not open this review link.",
        );
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

  const trimmed = text.trim();
  const canSubmit = !busy && rating >= 1 && trimmed.length >= MIN_CHARACTERS;

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!canSubmit) return;

    setBusy(true);
    setError(null);

    try {
      await api.submitReview(token, {
        rating,
        review_text: trimmed,
        display_name_preference: preference,
        consent_to_publish: consent,
      });

      setDone(true);
    } catch (caught) {
      setError(
        caught instanceof ApiError
          ? caught.message
          : "We could not save your review. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }

  if (loadError) return <ActionError message={loadError} />;

  if (invitation?.already_submitted) {
    return (
      <ActionDone
        title="You have already reviewed us"
        message="Thank you — your review is already with our team. Each invitation can be used once."
        reference={invitation.reference}
      />
    );
  }

  if (done) {
    return (
      <ActionDone
        title="Thank you"
        message={
          consent
            ? "Your review is with our team. Once a moderator has read it, it will appear on our reviews page exactly as you wrote it — we do not edit reviews."
            : "Your review is with our team. You did not tick the box allowing us to publish it, so it stays internal and will not appear on our site."
        }
        reference={invitation?.reference}
      />
    );
  }

  if (!invitation) {
    return (
      <ActionShell title="Opening your review form…" showFeeNotice={false}>
        <p className="text-slate-600">One moment.</p>
      </ActionShell>
    );
  }

  return (
    <ActionShell
      title={`How did we do, ${invitation.first_name}?`}
      intro="Your loan is funded and the file is closed. A rating and a few honest words help the next borrower decide whether we are worth calling."
      showFeeNotice={false}
    >
      <form onSubmit={submit} className="space-y-8">
        {/* ---------------------------------------------------------- rating */}
        <fieldset>
          <legend className="text-sm font-medium text-slate-800">
            Your rating
          </legend>

          <div className="mt-3 flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                aria-label={`${value} out of 5`}
                aria-pressed={rating === value}
                className={`rounded-lg px-1.5 text-4xl leading-none transition-colors ${
                  value <= rating ? "text-amber-400" : "text-slate-300"
                } hover:text-amber-300`}
              >
                ★
              </button>
            ))}

            <span className="ml-3 text-sm text-slate-500">
              {rating ? `${rating} of 5` : "Tap a star"}
            </span>
          </div>
        </fieldset>

        {/* ------------------------------------------------------------ text */}
        <div>
          <label
            htmlFor="review_text"
            className="block text-sm font-medium text-slate-800"
          >
            Your review
          </label>

          <textarea
            id="review_text"
            name="review_text"
            rows={6}
            value={text}
            maxLength={MAX_CHARACTERS}
            onChange={(event) => setText(event.target.value)}
            placeholder="What was the process like? What would you tell someone considering us?"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />

          <p className="mt-1.5 text-sm text-slate-500">
            {trimmed.length < MIN_CHARACTERS
              ? `At least ${MIN_CHARACTERS} characters.`
              : `${text.length} of ${MAX_CHARACTERS} characters.`}{" "}
            Please leave out account numbers and other people&rsquo;s names — a
            review containing personal information cannot be published.
          </p>
        </div>

        {/* ------------------------------------------------------------ name */}
        <fieldset>
          <legend className="text-sm font-medium text-slate-800">
            How your name should appear
          </legend>

          <div className="mt-3 space-y-2">
            {invitation.display_name_options.map((option) => (
              <label
                key={option.value}
                className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 ${
                  preference === option.value
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-300"
                }`}
              >
                <input
                  type="radio"
                  name="display_name_preference"
                  value={option.value}
                  checked={preference === option.value}
                  onChange={() => setPreference(option.value)}
                  className="mt-1"
                />

                <span>
                  <span className="block text-sm font-medium text-slate-900">
                    {option.preview}
                  </span>
                  <span className="block text-sm text-slate-500">
                    {option.label}
                  </span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* --------------------------------------------------------- consent */}
        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-300 px-4 py-3">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-1"
          />

          <span className="text-sm text-slate-700">
            I agree that Ryer Loans may publish this review, with the name
            format I chose above, on its website. Leave this unticked and your
            feedback stays internal.
          </span>
        </label>

        {error ? (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full rounded-lg bg-blue-700 px-5 py-3.5 font-medium text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {busy ? "Sending…" : "Submit my review"}
        </button>

        <p className="text-center text-sm text-slate-500">
          Every review is read by a moderator before it appears. We publish or
          decline it as written — we never edit a borrower&rsquo;s words, and a
          review is never a condition of anything on your loan.
        </p>
      </form>
    </ActionShell>
  );
}
