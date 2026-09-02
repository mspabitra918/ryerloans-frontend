import Link from "next/link";

import {
  SEO_ROUTES,
  SITEMAP_SECTION_ORDER,
  type SeoRoute,
} from "@/src/lib/seo/routes";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Site Map",
  description:
    "Every page on the Ryer Loans site: loan guides, California city pages, and legal disclosures.",
  path: "/sitemap",
  keywords: ["site map", "all pages", "page index"],
});

/**
 * The HTML sitemap — the human counterpart to /sitemap.xml. It reads the same
 * registry, so a page cannot be in one and missing from the other, and it
 * guarantees every URL is reachable in two clicks from the footer.
 */
export default function HtmlSitemapPage() {
  const bySection = new Map<string, SeoRoute[]>();

  for (const route of SEO_ROUTES) {
    // A link to the page you are already on is noise.
    if (route.path === "/sitemap") continue;
    const existing = bySection.get(route.section);
    if (existing) existing.push(route);
    else bySection.set(route.section, [route]);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <section className="border-b border-slate-200 bg-[#030712] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-400">
            Site map
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Every page on this site
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            {SEO_ROUTES.length} pages, grouped by what they are for. Looking for
            something specific?{" "}
            <Link href="/search" className="text-sky-400 underline hover:text-white">
              Search instead
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        {SITEMAP_SECTION_ORDER.filter((section) => bySection.has(section)).map(
          (section) => (
            <section key={section}>
              <h2 className="border-b border-slate-200 pb-3 text-xl font-bold tracking-tight text-slate-900">
                {section}
              </h2>
              <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                {bySection.get(section)!.map((route) => (
                  <li key={route.path}>
                    <Link
                      href={route.path}
                      className="text-sm font-semibold text-sky-700 hover:underline"
                    >
                      {route.label}
                    </Link>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {route.summary}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ),
        )}
      </div>
    </div>
  );
}
