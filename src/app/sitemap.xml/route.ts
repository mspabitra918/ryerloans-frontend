import { routesInGroup } from "@/src/lib/seo/routes";
import {
  SITEMAP_URLS,
  buildSitemapIndex,
  latestLastModified,
  xmlResponse,
} from "@/src/lib/seo/sitemap-xml";

export const dynamic = "force-static";

/** The index submitted to Search Console. Children are named, not numbered. */
export function GET() {
  return xmlResponse(
    buildSitemapIndex([
      {
        path: SITEMAP_URLS.pages,
        lastModified: latestLastModified(routesInGroup("pages")),
      },
      {
        path: SITEMAP_URLS.info,
        lastModified: latestLastModified(routesInGroup("info")),
      },
      {
        path: SITEMAP_URLS.locations,
        lastModified: latestLastModified(routesInGroup("locations")),
      },
    ]),
  );
}
