import Link from "next/link";
import { californiaCities } from "@/src/data/california-cities";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";

interface Props {
  nearbyCities: string[];
}

export default function CityNavigation({ nearbyCities }: Props) {
  const cityLinks = nearbyCities
    .map((slug) => californiaCities[slug])
    .filter(Boolean)
    .map((city) => city as { slug: string; city: string });

  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-900/40 p-8 sm:p-12 shadow-2xl backdrop-blur-sm">
          {/* Subtle Ambient Background Light */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />

          {/* Header & Main CTA */}
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-8 border-b border-slate-800/80">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Nearby City Pages</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Explore Adjacent California Locations
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Seamlessly navigate neighboring municipalities and local
                economic context across the state.
              </p>
            </div>

            <Link
              href="/personal-loans/california"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/50 shrink-0"
            >
              <span>Visit California Hub</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </Link>
          </div>

          {/* City Grid */}
          <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cityLinks.map((city) => (
              <Link
                key={city.slug}
                href={`/personal-loans/california/${city.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-sky-500/5"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                      {city.city}
                    </p>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    View local borrowing context & resources for {city.city}.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between text-xs font-semibold text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore {city.city} hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
