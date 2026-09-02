import { RATE_CONFIG, SITE_CONFIG } from "@/src/lib/config";
import { absoluteUrl } from "./sitemap-xml";

/** JSON-LD builders shared across pages, so @id values stay consistent. */

export const ORGANIZATION_ID = `${SITE_CONFIG.url}/#organization`;
export const WEBSITE_ID = `${SITE_CONFIG.url}/#website`;

export interface Crumb {
  label: string;
  path: string;
}

/**
 * BreadcrumbList for every page below root. The trail passed in includes Home
 * as its first item, matching the visible breadcrumb.
 */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/** WebSite + SearchAction — home page only. */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Service schema for a loan product page. */
export function loanServiceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}/#service`,
    name,
    description,
    serviceType: "Personal loan",
    category: "Unsecured installment loan",
    url: absoluteUrl(path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "State", name: "California" },
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/apply"),
      priceCurrency: "USD",
      /*
       * The single fixed rate is the whole product. Expressing it as an
       * interestRate on a LoanOrCredit is a factual claim we can stand behind;
       * a rate *range* here would be the thing that is not true of us.
       */
      itemOffered: {
        "@type": "LoanOrCredit",
        name,
        loanType: "Unsecured personal installment loan",
        annualPercentageRate: RATE_CONFIG.apr,
        currency: "USD",
        amount: {
          "@type": "MonetaryAmount",
          currency: "USD",
          minValue: RATE_CONFIG.minAmount,
          maxValue: RATE_CONFIG.maxAmount,
        },
        loanTerm: {
          "@type": "QuantitativeValue",
          minValue: 12,
          maxValue: 60,
          unitCode: "MON",
        },
        requiredCollateral: "None — these loans are unsecured",
      },
    },
  };
}
