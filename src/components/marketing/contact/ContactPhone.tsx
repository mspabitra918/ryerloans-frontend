import { RATE_CONFIG } from "@/src/lib/config";
export default function ContactPhone() {
  return (
    <section className="py-12 px-4 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          By Phone — the fastest route
        </h2>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
          <a
            href={`tel:${RATE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
            className="text-3xl sm:text-4xl font-extrabold text-sky-600 hover:text-sky-700 transition-colors inline-block"
          >
            {RATE_CONFIG.phone}
          </a>

          <div className="space-y-1 text-sm text-slate-600 font-medium">
            <p>
              <span className="text-slate-900 font-semibold">
                Monday–Friday:
              </span>{" "}
              8:00 AM – 6:00 PM Pacific
            </p>
            <p>
              <span className="text-slate-900 font-semibold">Saturday:</span>{" "}
              9:00 AM – 2:00 PM Pacific
            </p>
            <p className="text-slate-500">Closed Sunday and federal holidays</p>
          </div>

          <div className="pt-4 border-t border-slate-200 text-sm text-slate-600 leading-relaxed font-mono">
            If you have already applied, have your six-digit Application ID
            ready. It lets us pull your file immediately instead of working
            through verification questions.
          </div>
        </div>
      </div>
    </section>
  );
}
