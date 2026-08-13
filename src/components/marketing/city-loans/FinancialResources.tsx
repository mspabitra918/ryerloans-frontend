import { ArrowUpRight, CheckCircle2, HeartHandshake } from "lucide-react";

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
    <section className="border-b border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
            <HeartHandshake className="h-4 w-4" />
            <span>Community Support</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Financial Resources in {city}
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Check these resources before borrowing. You may find utility
            assistance, housing support, financial counselling, emergency
            assistance, or lower-cost credit options that solve the problem
            without taking on a new loan.
          </p>
        </div>

        {/* Resources */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {resources.map((resource, index) => {
            const content = (
              <div className="group flex gap-5 p-5 transition hover:bg-slate-50 sm:p-6">
                {/* Number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sm font-bold text-sky-700">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-sky-700 sm:text-lg">
                        {resource.name}
                      </h3>

                      {resource.category && (
                        <span className="mt-1 inline-block text-xs font-medium uppercase tracking-wide text-slate-400">
                          {resource.category}
                        </span>
                      )}
                    </div>

                    {resource.url && (
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-600" />
                    )}
                  </div>

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                    {resource.description}
                  </p>

                  {resource.url && (
                    <div className="mt-3 text-xs font-semibold text-sky-600">
                      Visit resource
                    </div>
                  )}
                </div>
              </div>
            );

            return (
              <div key={resource.name}>
                {resource.url ? (
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}

                {index < resources.length - 1 && (
                  <div className="ml-[60px] border-b border-slate-100" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-6 flex max-w-7xl items-start gap-3 rounded-xl border border-sky-100 bg-sky-50/70 p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />

          <p className="text-sm leading-6 text-slate-600">
            <span className="font-semibold text-slate-900">
              Check these options first.
            </span>{" "}
            If a utility discount, assistance program, credit union, or
            counselling service can solve your problem, that may be a better
            option than taking on new debt.
          </p>
        </div>
      </div>
    </section>
  );
}
