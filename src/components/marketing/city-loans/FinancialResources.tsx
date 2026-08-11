import {
  Building2,
  ArrowUpRight,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

interface Resource {
  name: string;
  description: string;
  url?: string;
  category?: string;
}

interface Props {
  city: string;
  resources: Resource[];
}

export default function FinancialResources({ city, resources }: Props) {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-900/40 p-8 sm:p-12 shadow-2xl backdrop-blur-sm">
          {/* Subtle Glow Accent */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />

          {/* Section Header */}
          <div className="relative z-10 max-w-3xl pb-8 border-b border-slate-800/80">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold mb-3">
              <HeartHandshake className="w-4 h-4" />
              <span>Community Support & Guidance</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Local Financial Assistance & Resources in {city}
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Before taking out a loan, explore these local community programs
              for utility assistance, budget counseling, emergency grants, and
              low-cost credit guidance.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="relative z-10 mt-8 grid gap-6 md:grid-cols-2">
            {resources.map((resource) => {
              const CardContent = (
                <article className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-sky-500/5">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      {resource.category && (
                        <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700/60">
                          {resource.category}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors flex items-center justify-between">
                        <span>{resource.name}</span>
                        {resource.url && (
                          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        )}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs font-medium text-slate-500 group-hover:text-sky-400 transition-colors">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                    <span>Verified Community Program</span>
                  </div>
                </article>
              );

              return resource.url ? (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-sky-500/50 rounded-2xl"
                >
                  {CardContent}
                </a>
              ) : (
                <div key={resource.name}>{CardContent}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
