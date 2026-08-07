import { MetadataRoute } from "next";

const baseUrl = "https://www.ryerloans.com";

const routes = [
  "/",
  "/about",
  "/apply",
  "/contact",
  "/faq",
  "/loan-status",
  "/personal-loans",
  "/personal-loans-for-bad-credit",
  "/installment-loans",
  "/emergency-loans",
  "/debt-consolidation-loans",
  "/unsecured-personal-loans",
  "/personal-loan-calculator",
  "/no-credit-check-loans-explained",
  "/how-personal-loan-approval-works",
  "/personal-loan-rates-and-terms",
  "/state-disclosures",
  "/privacy-policy",
  "/terms-of-use",
  "/accessibility-statement",
  "/rates-and-fees",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
