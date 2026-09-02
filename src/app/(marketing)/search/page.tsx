import SiteSearch from "@/src/components/marketing/search/SiteSearch";
import { constructMetadata } from "@/src/lib/metadata";

/*
 * Results pages are thin and near-duplicate by nature, so this is noindex —
 * matching the robots.txt Disallow. The WebSite SearchAction still points here,
 * which is what it is for: a destination for searchers, not for crawlers.
 */
export const metadata = constructMetadata({
  title: "Search",
  description: "Search every page on the Ryer Loans site.",
  path: "/search",
  noIndex: true,
});

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteSearch query={(q ?? "").trim()} />
    </main>
  );
}
