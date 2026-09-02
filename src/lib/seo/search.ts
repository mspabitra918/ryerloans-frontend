import { SEO_ROUTES, type SeoRoute } from "./routes";

/**
 * On-site search over the route registry.
 *
 * There is no search backend and no reason to add one: the site is a fixed set
 * of ~50 pages, so matching a query against their labels, summaries and
 * keywords is both exact and instant. It backs the /search page, the 404
 * page's search box, and the WebSite SearchAction we publish in schema.
 */

export interface SearchHit {
  route: SeoRoute;
  score: number;
}

function normalise(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

export function searchRoutes(query: string, limit = 20): SearchHit[] {
  const terms = normalise(query).split(" ").filter(Boolean);
  if (terms.length === 0) return [];

  const hits: SearchHit[] = [];

  for (const route of SEO_ROUTES) {
    // The search page itself is never a useful result.
    if (route.path === "/search") continue;

    const label = normalise(route.label);
    const summary = normalise(route.summary);
    const keywords = normalise((route.searchTerms ?? []).join(" "));
    const slug = normalise(route.path.replace(/[/-]/g, " "));

    let score = 0;
    let matchedEvery = true;

    for (const term of terms) {
      // Weighted so a title match outranks a passing mention in body copy.
      let termScore = 0;
      if (label === term) termScore += 100;
      else if (label.includes(term)) termScore += 40;
      if (keywords.includes(term)) termScore += 20;
      if (slug.includes(term)) termScore += 10;
      if (summary.includes(term)) termScore += 5;

      if (termScore === 0) matchedEvery = false;
      score += termScore;
    }

    // Every term has to land somewhere, so "bad credit" does not match every
    // page that happens to contain the word "credit".
    if (matchedEvery && score > 0) {
      hits.push({ route, score: score + route.priority * 5 });
    }
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
}
