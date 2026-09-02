import { MetadataRoute } from "next";

import { SITEMAP_URLS, absoluteUrl } from "@/src/lib/seo/sitemap-xml";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/api/",
        "/apply/success",
        "/loan-status/",
        "/bank-verification/",
        /*
         * The rest of the token-gated borrower flow. Each of these is reachable
         * only through a link emailed to one borrower, and each is already
         * noindex — but a page that is crawled to be told not to index it still
         * burns crawl budget on URLs no searcher can use.
         */
        "/review/",
        "/confirm-deposit/",
        "/documents/",
        "/sign-agreement/",
        "/investments",
        // On-site search results: useful to visitors, thin duplicates to a crawler.
        "/search",
        "/*?utm_",
        "/*?fbclid",
      ],
    },
    // The index, not a flat sitemap — it is the URL submitted to Search Console.
    sitemap: absoluteUrl(SITEMAP_URLS.index),
  };
}
