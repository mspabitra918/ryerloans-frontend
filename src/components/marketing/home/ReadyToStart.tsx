import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

export default function ReadyToStart() {
  return (
    <section className="border-t border-[#1E4A80] bg-[#12366B] px-4 py-20 text-center sm:py-28">
      <div className="mx-auto max-w-3xl space-y-8">
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Ready to Start?
          </h2>

          <p className="mx-auto max-w-xl text-lg leading-relaxed text-blue-100 sm:text-xl">
            Your application takes about seven minutes and puts you under no
            obligation. Get your six-digit ID immediately upon submission.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <Link
            href="/apply"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-[#12366B] shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl active:scale-[0.98] sm:text-lg"
          >
            Apply Now
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Support Footer */}
        <div className="space-y-3 border-t border-white/15 pt-10 text-sm text-blue-100">
          <p className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4 text-white" />

            <span>
              Questions first? Call{" "}
              <a
                href={`tel:${RATE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
                className="font-semibold text-white underline decoration-white/50 underline-offset-4 transition hover:decoration-white"
              >
                {RATE_CONFIG.phone}
              </a>{" "}
              to speak with our team.
            </span>
          </p>

          <p className="text-xs uppercase tracking-widest text-blue-200/70">
            Office: {RATE_CONFIG.address}
          </p>
        </div>
      </div>
    </section>
  );
}
