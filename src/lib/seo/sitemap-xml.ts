import { SITE_CONFIG } from "@/src/lib/config";
import type { SeoRoute } from "./routes";

/**
 * Hand-rolled XML rather than Next's MetadataRoute.Sitemap, because the spec
 * calls for a sitemap *index* at /sitemap.xml pointing at three named children.
 * The metadata convention emits a single flat sitemap at that URL instead.
 */

export const SITEMAP_URLS = {
  index: "/sitemap.xml",
  pages: "/sitemap-pages.xml",
  info: "/sitemap-info.xml",
  locations: "/sitemap-locations.xml",
} as const;

export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_CONFIG.url : `${SITE_CONFIG.url}${path}`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** The newest content date in a set — the lastmod for that child sitemap. */
export function latestLastModified(routes: SeoRoute[]): string {
  return routes.reduce(
    (newest, route) => (route.lastModified > newest ? route.lastModified : newest),
    routes[0]?.lastModified ?? "",
  );
}

export function buildUrlSet(routes: SeoRoute[]): string {
  const entries = routes
    .map((route) =>
      [
        "  <url>",
        `    <loc>${escapeXml(absoluteUrl(route.path))}</loc>`,
        `    <lastmod>${route.lastModified}</lastmod>`,
        `    <changefreq>${route.changeFrequency}</changefreq>`,
        `    <priority>${route.priority.toFixed(1)}</priority>`,
        "  </url>",
      ].join("\n"),
    )
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    "</urlset>",
    "",
  ].join("\n");
}

export function buildSitemapIndex(
  children: { path: string; lastModified: string }[],
): string {
  const entries = children
    .map((child) =>
      [
        "  <sitemap>",
        `    <loc>${escapeXml(absoluteUrl(child.path))}</loc>`,
        `    <lastmod>${child.lastModified}</lastmod>`,
        "  </sitemap>",
      ].join("\n"),
    )
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    "</sitemapindex>",
    "",
  ].join("\n");
}

export function xmlResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
