import { routesInGroup } from "@/src/lib/seo/routes";
import { buildUrlSet, xmlResponse } from "@/src/lib/seo/sitemap-xml";

export const dynamic = "force-static";

/** California city pages, generated from the dataset that renders them. */
export function GET() {
  return xmlResponse(buildUrlSet(routesInGroup("locations")));
}
