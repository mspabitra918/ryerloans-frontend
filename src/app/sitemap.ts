import { MetadataRoute } from "next";

// Define your static content update dates (NEVER use dynamic Date.now())
const LAST_MODIFIED_DATES = {
  home: new Date("2026-08-01"),
  apply: new Date("2026-08-01"),
  info: new Date("2026-07-15"),
  cities: new Date("2026-07-20"),
  legal: new Date("2026-01-10"),
};

// 20 CA City Slug Examples
const CA_CITIES = [
  "long-beach",
  "los-angeles",
  "san-diego",
  "san-jose",
  "san-francisco",
  "fresno",
  "sacramento",
  "long-beach",
  "oakland",
  "bakersfield",
  "anaheim",
  "santa-ana",
  "riverside",
  "stockton",
  "irvine",
  "chula-vista",
  "fremont",
  "san-bernardino",
  "modesto",
  "fontana",
];

// 10 Informational Pages
const INFO_PAGES = [
  "how-it-works",
  "rates-and-terms",
  "about",
  "faq",
  "credit-score-explained",
  "debt-consolidation-guide",
  "personal-loans-vs-credit-cards",
  "apr-explained",
  "underwriting-process",
  "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ryerloans.com";

  // 1. Core Pages (Priority 1.0 & 0.9)
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: LAST_MODIFIED_DATES.home,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: LAST_MODIFIED_DATES.apply,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // 2. Informational Pages (Priority 0.9)
  const infoPages: MetadataRoute.Sitemap = INFO_PAGES.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: LAST_MODIFIED_DATES.info,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // 3. CA City Location Pages (Priority 0.7)
  const cityPages: MetadataRoute.Sitemap = CA_CITIES.map((city) => ({
    url: `${baseUrl}/ca/${city}`,
    lastModified: LAST_MODIFIED_DATES.cities,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 4. Legal Pages (Priority 0.3)
  const legalPages: MetadataRoute.Sitemap = [
    "privacy-policy",
    "terms-of-service",
    "licenses",
    "disclosures",
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: LAST_MODIFIED_DATES.legal,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...corePages, ...infoPages, ...cityPages, ...legalPages];
}
