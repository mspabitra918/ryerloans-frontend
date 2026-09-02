import { routesInGroup } from "@/src/lib/seo/routes";
import { buildUrlSet, xmlResponse } from "@/src/lib/seo/sitemap-xml";

export const dynamic = "force-static";

/** The ten informational / loan-product pages. */
export function GET() {
  return xmlResponse(buildUrlSet(routesInGroup("info")));
}
