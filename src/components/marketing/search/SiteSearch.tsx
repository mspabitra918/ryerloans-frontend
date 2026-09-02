import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

import { searchRoutes } from "@/src/lib/seo/search";

/** Popular destinations, shown when there is no query and when nothing matches. */
const POPULAR = [
  { label: "Apply for a loan", href: "/apply" },
  { label: "Check your loan status", href: "/loan-status" },
  { label: "Personal loan calculator", href: "/personal-loan-calculator" },
  { label: "Rates and terms explained", href: "/personal-loan-rates-and-terms" },
  { label: "Frequently asked questions", href: "/faq" },
  { label: "Contact us", href: "/contact" },
];

/**
 * A server component with a plain GET form. No client JavaScript is involved:
 * results are in the HTML on first paint, and the page keeps working with
 * scripting unavailable — which is the whole point of a fallback search.
 */
export default function SiteSearch({ query }: { query: string }) {
  const results = query ? searchRoutes(query) : [];

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
        Search
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Search every page on this site.
      </p>

      <form role="search" action="/search" method="get" className="mt-6 flex gap-2">
        <label htmlFor="site-search" className="sr-only">
          Search this site
        </label>
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            id="site-search"
            name="q"
            type="search"
            defaultValue={query}
            placeholder="Try “bad credit”, “fees”, or a city name"
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-9 pr-3 text-sm text-slate-800 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>
        <button
          type="submit"
          className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
        >
          Search
        </button>
      </form>

      {query ? (
        <section className="mt-10">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
            {results.length} result{results.length === 1 ? "" : "s"} for “{query}”
          </p>

          {results.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {results.map(({ route }) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow"
                  >
                    <p className="font-mono text-xs text-slate-400">
                      {route.section}
                    </p>
                    <h2 className="mt-1 text-lg font-bold text-slate-900 group-hover:text-sky-600">
                      {route.label}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {route.summary}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm text-slate-600">
                Nothing matched that. Try a broader term, or start from one of
                these:
              </p>
              <PopularLinks />
            </div>
          )}
        </section>
      ) : (
        <section className="mt-10">
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-500">
            Popular pages
          </h2>
          <PopularLinks />
        </section>
      )}

      <p className="mt-10 text-sm text-slate-500">
        Prefer to browse?{" "}
        <Link href="/sitemap" className="font-medium text-sky-600 hover:underline">
          See every page on the site map
        </Link>
        .
      </p>
    </div>
  );
}

function PopularLinks() {
  return (
    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
      {POPULAR.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 hover:underline"
          >
            {item.label}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
