import Link from "next/link";
import { AlertTriangle, ShieldCheck, MapPin, Percent } from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

export default function ReviewsEmptyState() {
  const formattedApr = `${RATE_CONFIG.apr.toFixed(2)}%`;

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto space-y-12">
      {/* Developer / Attorney Warning Notice Callout */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 sm:p-6 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs sm:text-sm text-amber-900 leading-relaxed">
          <span className="font-bold uppercase tracking-wider block text-amber-950">
            Developer Notice — Pre-Launch State
          </span>
          <p>
            Ryer Loans policies require that no written-in-house content
            populate this page under any circumstances. Reviews are collected
            dynamically via post-funding verification links (Build Spec §11).
          </p>
        </div>
      </div>

      {/* Main Copy Block for Launch */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
          <p className="font-semibold text-slate-900">
            Ryer Loans is a new lender, and this page is currently empty. That
            is deliberate.
          </p>
          <p>
            Every review published here comes from a borrower with a funded
            loan, invited by email after their loan was disbursed, submitted
            through a link tied to their own application. We do not write
            reviews, we do not buy reviews, and we do not edit the words a
            borrower submits. When we have reviews, they will appear here with
            the borrower’s own name and their own wording — including the
            critical ones.
          </p>
        </div>

        {/* Verification Checkpoints */}
        <div className="pt-6 border-t border-slate-100 space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
            Until then, here is what you can verify about us independently:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <ShieldCheck className="w-5 h-5 text-sky-600" />
              <h3 className="font-bold text-slate-900">Licence Numbers</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Fully state-licensed and compliant with consumer finance
                regulations. See our{" "}
                <Link
                  href="/state-disclosures"
                  className="text-sky-600 underline"
                >
                  State Disclosures
                </Link>
                .
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <MapPin className="w-5 h-5 text-sky-600" />
              <h3 className="font-bold text-slate-900">Physical Office</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Located at{" "}
                <span className="font-semibold text-slate-800">
                  {RATE_CONFIG.address}
                </span>
                . Real staff in a real location.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <Percent className="w-5 h-5 text-sky-600" />
              <h3 className="font-bold text-slate-900">Published Rate</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                <span className="font-bold text-slate-900 font-mono">
                  {formattedApr} fixed APR
                </span>
                . The exact same rate that appears in every loan agreement.
              </p>
            </div>
          </div>
        </div>

        <p className="text-slate-600 text-sm sm:text-base italic pt-2">
          If you would rather borrow from a lender with an established review
          history, that is a reasonable decision and we would not argue with it.
        </p>

        {/* CTAs */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/apply"
            className="w-full sm:w-auto px-8 py-3 text-center font-medium bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors shadow-sm text-sm"
          >
            Apply Now
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3 text-center font-medium bg-white text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors shadow-sm text-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
