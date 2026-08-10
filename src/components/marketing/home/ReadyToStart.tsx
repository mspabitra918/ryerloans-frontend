import Link from "next/link";
import { RATE_CONFIG } from "@/src/lib/config";
export default function ReadyToStart() {
  return (
    <section className="py-20 px-4 bg-[#030712] border-t border-[#1f293d]/50 text-center font-mono">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl sm:text-4xl font-sans font-semibold text-white tracking-tight">
          Ready to Start?
        </h2>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto">
          Your application takes about seven minutes and puts you under no
          obligation. You will have a six-digit Application ID before you close
          the tab.
        </p>

        <div className="pt-4">
          <Link
            href="/apply"
            className="inline-block px-8 py-3.5 text-base font-normal bg-[#e0f2fe] text-[#070e1b] rounded-xl border border-[#e0f2fe] hover:bg-[#bae6fd] transition-all duration-200 shadow-[0_0_25px_rgba(224,242,254,0.2)]"
          >
            Apply Now
          </Link>
        </div>

        <div className="pt-6 border-t border-[#1f293d]/50 text-xs sm:text-sm text-gray-400 space-y-1">
          <p>
            Questions first? Call{" "}
            <a
              href={`tel:${RATE_CONFIG.phone}`}
              className="text-sky-400 underline hover:text-sky-300"
            >
              {RATE_CONFIG.phone}
            </a>{" "}
            and speak to someone.
          </p>
          <p>Our office is at {RATE_CONFIG.address}.</p>
        </div>
      </div>
    </section>
  );
}
