import { RATE_CONFIG } from "@/src/lib/config";

export default function AboutLocation() {
  return (
    <section className="py-16 px-4 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Where We Are
        </h2>
        <p className="text-slate-600 text-base leading-relaxed">
          Ryer Loans operates from{" "}
          <span className="font-semibold text-slate-900">
            {RATE_CONFIG.address}
          </span>
          . That is a real office with real staff. Our phone number reaches a
          real team during business hours, and our address appears on every page
          of this site because a lender that will not tell you where it sits is
          a lender worth being cautious about.
        </p>
      </div>
    </section>
  );
}
