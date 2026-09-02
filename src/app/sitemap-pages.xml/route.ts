import { routesInGroup } from "@/src/lib/seo/routes";
import { buildUrlSet, xmlResponse } from "@/src/lib/seo/sitemap-xml";

export const dynamic = "force-static";

/** Core pages and legal/disclosure pages. */
export function GET() {
  return xmlResponse(buildUrlSet(routesInGroup("pages")));
}
