import { RATE_CONFIG } from "@/src/lib/config";
export default function ContactOffice() {
  const encodedAddress = encodeURIComponent(RATE_CONFIG.address);

  return (
    <section className="py-12 px-4 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* By Mail */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            By Mail
          </h2>
          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl font-mono text-sm text-slate-700 inline-block shadow-sm">
            <span className="font-semibold text-slate-900">Ryer Loans</span>{" "}
            <br />
            {RATE_CONFIG.address}
          </div>
        </div>

        {/* Our Office */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Our Office
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {RATE_CONFIG.address} <br />
            Located in downtown Long Beach near the waterfront. Visits are by
            appointment — call ahead so we can have the right person available.
          </p>

          {/* Map Frame */}
          <div className="w-full h-96 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
            <iframe
              title="Ryer Loans Long Beach Office Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              //   src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}`}
              src={`https://www.google.com/maps?q=${encodedAddress}&t=k&output=embed`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
