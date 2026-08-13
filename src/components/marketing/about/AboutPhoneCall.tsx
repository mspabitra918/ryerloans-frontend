import { RATE_CONFIG } from "@/src/lib/config";

export default function AboutPhoneCall() {
  return (
    <section className="py-16 px-4 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          The Phone Call
        </h2>

        <p className="text-slate-600 text-base leading-relaxed">
          Every Ryer application requires a call to{" "}
          <a
            href={`tel:${RATE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
            className="font-bold text-slate-900 underline hover:text-sky-600"
          >
            {RATE_CONFIG.phone}
          </a>{" "}
          before it advances. Some applicants find this old-fashioned. We keep
          it for three reasons:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-sky-600 font-mono font-bold text-lg">01</span>
            <h3 className="font-bold text-slate-900 text-base">
              Defeats Fraud
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Synthetic identities do not answer phones and hold coherent
              conversations about their employment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-sky-600 font-mono font-bold text-lg">02</span>
            <h3 className="font-bold text-slate-900 text-base">
              Catches Errors
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Roughly one application in six contains a typo in a digit that
              matters. A two-minute conversation fixes what an automated system
              would reject.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-sky-600 font-mono font-bold text-lg">03</span>
            <h3 className="font-bold text-slate-900 text-base">
              Human Connection
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              You talk to a person before you take on debt, which we think is
              how borrowing money ought to work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
