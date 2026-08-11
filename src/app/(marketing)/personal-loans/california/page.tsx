import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  Building2,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  ChevronRight,
  Sparkles,
  Scale,
} from "lucide-react";

const CITIES = [
  {
    name: "Los Angeles",
    slug: "los-angeles",
    county: "Los Angeles",
    tag: "Gig & Creative Economy",
  },
  {
    name: "San Diego",
    slug: "san-diego",
    county: "San Diego",
    tag: "Military & Biotech Hub",
  },
  {
    name: "San Jose",
    slug: "san-jose",
    county: "Santa Clara",
    tag: "Tech & Contract Work",
  },
  {
    name: "San Francisco",
    slug: "san-francisco",
    county: "San Francisco",
    tag: "High Cost-of-Living",
  },
  {
    name: "Fresno",
    slug: "fresno",
    county: "Fresno",
    tag: "Agricultural Seasonality",
  },
  {
    name: "Sacramento",
    slug: "sacramento",
    county: "Sacramento",
    tag: "State Capital & Public Sector",
  },
  {
    name: "Long Beach",
    slug: "long-beach",
    county: "Los Angeles",
    tag: "Headquarters & Logistics Port",
  },
  {
    name: "Oakland",
    slug: "oakland",
    county: "Alameda",
    tag: "Trade & Small Business",
  },
  {
    name: "Bakersfield",
    slug: "bakersfield",
    county: "Kern",
    tag: "Energy & Central Valley",
  },
  {
    name: "Anaheim",
    slug: "anaheim",
    county: "Orange",
    tag: "Hospitality & Tourism",
  },
  {
    name: "Santa Ana",
    slug: "santa-ana",
    county: "Orange",
    tag: "Manufacturing & Dense Urban",
  },
  {
    name: "Riverside",
    slug: "riverside",
    county: "Riverside",
    tag: "Inland Empire Logistics",
  },
  {
    name: "Stockton",
    slug: "stockton",
    county: "San Joaquin",
    tag: "Bay Area Commuter Belt",
  },
  {
    name: "Irvine",
    slug: "irvine",
    county: "Orange",
    tag: "Tech, Finance & Education",
  },
  {
    name: "Chula Vista",
    slug: "chula-vista",
    county: "San Diego",
    tag: "Border Commerce & Military",
  },
  {
    name: "Fremont",
    slug: "fremont",
    county: "Alameda",
    tag: "EV Production & Advanced Mfg",
  },
  {
    name: "San Bernardino",
    slug: "san-bernardino",
    county: "San Bernardino",
    tag: "Warehousing & Supply Chain",
  },
  {
    name: "Modesto",
    slug: "modesto",
    county: "Stanislaus",
    tag: "Food Processing & Agribusiness",
  },
  {
    name: "Fontana",
    slug: "fontana",
    county: "San Bernardino",
    tag: "Rapid Regional Growth",
  },
  {
    name: "Oxnard",
    slug: "oxnard",
    county: "Ventura",
    tag: "Naval Base & Coast Ag",
  },
];

export default function CaliforniaHubPage() {
  return (
    <div className="min-h-screen bg-white text-slate-100 font-sans selection:bg-sky-500 selection:text-slate-950">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#030712] pt-24 pb-20 border-b border-[#1f293d]">
        {/* Glow ambient background effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-sky-500/10 via-sky-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>California City Loan Pages</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Personal Loans for California Residents,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200">
                  City by City
                </span>
              </h1>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                Explore local economic insights, county-level borrowing trends,
                DFPI compliance resources, and tailored financial guidance for
                your specific municipality.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition hover:scale-[1.02]"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#city-directory"
                  className="inline-flex items-center justify-center gap-2 bg-[#111827] hover:bg-[#1f293d] text-slate-200 border border-[#1f293d] font-semibold text-sm px-8 py-3.5 rounded-xl transition"
                >
                  <span>Explore City Pages</span>
                </a>
              </div>
            </div>

            {/* Right Card Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-slate-950/50 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
                    Statewide Fixed Terms
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    DFPI Licensed
                  </span>
                </div>

                <div className="grid gap-4">
                  <div className="p-4 rounded-2xl bg-[#0b0f19] border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                        Loan Range
                      </p>
                      <p className="text-2xl font-bold text-white mt-0.5">
                        $2,000 – $25,000
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                      <DollarSign className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0b0f19] border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                        Fixed Rate
                      </p>
                      <p className="text-2xl font-bold text-sky-400 mt-0.5">
                        10.00% APR
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                      <Scale className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0b0f19] border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                        Transparent Pricing
                      </p>
                      <p className="text-xl font-bold text-white mt-0.5">
                        $0 Origination / Prepay
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING HIGHLIGHT RIBBON */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl grid gap-6 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="flex items-start gap-4 pt-4 md:pt-0">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 flex-shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">
                Fixed 10.00% APR
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Single transparent rate for all approved applicants, ensuring
                predictable monthly payments.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">DFPI Licensed</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Operating under California Financing Law License #60DBO-178383
                for statutory protection.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 flex-shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Long Beach HQ</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Headquartered in Long Beach with real local staff supporting
                California borrowers statewide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL FEATURES GRID */}
      {/* LOCAL FEATURES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Designed for California Communities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every municipal directory page delivers tailored information
            designed around local economic conditions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              City-Specific Content
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Localized borrowing insights, housing context, median income data,
              and regional economic factors tailored to your exact zip code.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Long Beach Headquarters
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Supported by consistent NAP disclosures, state regulatory
              compliance, and a physical California headquarters you can rely
              on.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Adjacent Navigation
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Easily navigate across nearby municipalities, neighboring
              counties, and regional hubs to explore loan availability near you.
            </p>
          </div>
        </div>
      </section>

      {/* CITY DIRECTORY GRID */}
      <section
        id="city-directory"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-12"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-sky-600 font-semibold">
              Municipal Directory
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Select Your California City
            </h2>
          </div>
          <p className="text-sm text-slate-500 font-mono">
            {CITIES.length} Cities Active Statewide
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/personal-loans/california/${city.slug}`}
              className="group relative rounded-2xl bg-white border border-slate-200/80 p-6 hover:border-sky-300 hover:shadow-md transition-all duration-200 hover:-translate-y-1 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                    {city.county} County
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200">
                    {city.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-sky-600 transition flex items-center justify-between">
                    <span>{city.name}</span>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    View local borrowing context, common loan uses, and support
                    resources in {city.name}.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-600 group-hover:text-sky-500">
                <span>Explore {city.name} Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA FOOTER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-8 sm:p-12 text-center border border-slate-800 shadow-2xl text-white">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Borrow Confidently in California?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Check your rate in less than 2 minutes with zero credit impact.
              Enjoy fixed 10.00% APR terms, no hidden fees, and transparent
              local service.
            </p>
            <div>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition hover:scale-[1.02]"
              >
                <span>Check Your Rate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
