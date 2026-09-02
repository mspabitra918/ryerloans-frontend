import { californiaCities } from "@/src/data/california-cities";
import { labelForPath } from "./route-labels";

/**
 * The single source of truth for every indexable URL on the site.
 *
 * The sitemap index, the three child sitemaps, the HTML sitemap at /sitemap,
 * the breadcrumb trail and the on-site search all read from this file. Adding a
 * page here is what makes it discoverable; nothing else needs touching.
 *
 * `lastModified` is a real content modification date, recorded by hand when the
 * page's copy actually changes. It is deliberately NOT derived from file mtimes
 * or Date.now(): a CI checkout rewrites every mtime to the build time, which
 * produces exactly the rolling lastmod Google learns to discount.
 */

export type SitemapGroup = "pages" | "info" | "locations";

export type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export interface SeoRoute {
  /** Path relative to the origin, always leading-slash, never trailing. */
  path: string;
  /**
   * Short label — breadcrumb crumb and HTML sitemap link text. Filled in from
   * `route-labels.ts`, which the client-side breadcrumb also reads, so the two
   * cannot disagree.
   */
  label: string;
  /** One-line description, used by the HTML sitemap and on-site search. */
  summary: string;
  /** Which child sitemap the URL belongs in. */
  group: SitemapGroup;
  /** Heading it appears under on the HTML sitemap. */
  section: string;
  /** Real date the page content last changed (YYYY-MM-DD). */
  lastModified: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  /** Extra terms the on-site search should match on. */
  searchTerms?: string[];
}

/**
 * Loan products get Service schema; the remaining informational pages are
 * explainers and do not.
 */
export const LOAN_PRODUCT_PATHS = [
  "/personal-loans",
  "/personal-loans-for-bad-credit",
  "/installment-loans",
  "/emergency-loans",
  "/debt-consolidation-loans",
  "/unsecured-personal-loans",
] as const;

/** Every city page shares the dataset that generates them. */
const CITY_CONTENT_LAST_MODIFIED = "2026-08-25";

/** A route as written below; the label is attached from the shared map. */
type RouteDefinition = Omit<SeoRoute, "label">;

function withLabel(definition: RouteDefinition): SeoRoute {
  return { ...definition, label: labelForPath(definition.path) };
}

const CORE_ROUTES: RouteDefinition[] = [
  {
    path: "/",
    summary:
      "Personal loans of $2,000–$25,000 at a fixed 10.00% APR from a direct lender.",
    group: "pages",
    section: "Main",
    lastModified: "2026-08-04",
    changeFrequency: "weekly",
    priority: 1.0,
    searchTerms: ["personal loan", "apply", "10% apr", "direct lender"],
  },
  {
    path: "/apply",
    summary:
      "The online application: about seven minutes, followed by a verification call.",
    group: "pages",
    section: "Main",
    lastModified: "2026-08-25",
    changeFrequency: "monthly",
    priority: 0.9,
    searchTerms: ["application", "apply now", "get a loan", "check my rate"],
  },
  {
    path: "/about",
    summary:
      "Who Ryer Loans is, how we underwrite, and why there is only one rate.",
    group: "pages",
    section: "Main",
    lastModified: "2026-08-25",
    changeFrequency: "monthly",
    priority: 0.8,
    searchTerms: ["about us", "company", "long beach", "who we are"],
  },
  {
    path: "/faq",
    summary:
      "Answers on eligibility, the fixed rate, bank verification, funding and status.",
    group: "pages",
    section: "Main",
    lastModified: "2026-08-25",
    changeFrequency: "monthly",
    priority: 0.8,
    searchTerms: ["questions", "help", "eligibility", "fees", "requirements"],
  },
  {
    path: "/contact",
    summary: "Phone, email and the Long Beach office address.",
    group: "pages",
    section: "Main",
    lastModified: "2026-08-25",
    changeFrequency: "monthly",
    priority: 0.8,
    searchTerms: ["phone number", "call", "email", "support", "address"],
  },
  {
    path: "/reviews",
    summary: "Reviews from borrowers with funded loans.",
    group: "pages",
    section: "Main",
    lastModified: "2026-09-01",
    changeFrequency: "weekly",
    priority: 0.8,
    searchTerms: ["testimonials", "ratings", "feedback", "borrower reviews"],
  },
  {
    path: "/loan-status",
    summary:
      "Check an application with your six-digit Application ID and email address.",
    group: "pages",
    section: "Main",
    lastModified: "2026-08-25",
    changeFrequency: "monthly",
    priority: 0.6,
    searchTerms: ["track application", "status", "application id", "where is my loan"],
  },
  {
    path: "/personal-loans/california",
    summary: "City-by-city loan pages for California residents.",
    group: "pages",
    section: "Main",
    lastModified: "2026-08-11",
    changeFrequency: "monthly",
    priority: 0.8,
    searchTerms: ["california", "cities", "local", "ca loans"],
  },
  {
    path: "/sitemap",
    summary: "Every page on this site, in one list.",
    group: "pages",
    section: "Main",
    lastModified: "2026-09-02",
    changeFrequency: "monthly",
    priority: 0.3,
    searchTerms: ["sitemap", "all pages", "index"],
  },
];

const INFO_ROUTES: RouteDefinition[] = [
  {
    path: "/personal-loans",
    summary:
      "What an unsecured personal loan is, what it costs, and when it makes sense.",
    group: "info",
    section: "Loans & Guides",
    lastModified: "2026-08-25",
    changeFrequency: "monthly",
    priority: 0.9,
    searchTerms: ["personal loan", "unsecured", "borrow money"],
  },
  {
    path: "/personal-loans-for-bad-credit",
    summary:
      "How applications are assessed when your credit score is not the strong part of the file.",
    group: "info",
    section: "Loans & Guides",
    lastModified: "2026-08-25",
    changeFrequency: "monthly",
    priority: 0.9,
    searchTerms: ["bad credit", "low credit score", "poor credit loan"],
  },
  {
    path: "/installment-loans",
    summary:
      "Fixed monthly payments over a set term, and how that differs from revolving credit.",
    group: "info",
    section: "Loans & Guides",
    lastModified: "2026-08-25",
    changeFrequency: "monthly",
    priority: 0.9,
    searchTerms: ["installment", "monthly payments", "fixed term"],
  },
  {
    path: "/emergency-loans",
    summary: "Borrowing for an urgent expense, and the realistic funding timeline.",
    group: "info",
    section: "Loans & Guides",
    lastModified: "2026-08-25",
    changeFrequency: "monthly",
    priority: 0.9,
    searchTerms: ["emergency", "urgent", "fast cash", "same day"],
  },
  {
    path: "/debt-consolidation-loans",
    summary:
      "Rolling several balances into one fixed payment, with a calculator to check the maths.",
    group: "info",
    section: "Loans & Guides",
    lastModified: "2026-08-25",
    changeFrequency: "monthly",
    priority: 0.9,
    searchTerms: ["debt consolidation", "consolidate", "credit card debt", "payoff"],
  },
  {
    path: "/unsecured-personal-loans",
    summary: "Borrowing without collateral, and what lenders look at instead.",
    group: "info",
    section: "Loans & Guides",
    lastModified: "2026-08-25",
    changeFrequency: "monthly",
    priority: 0.9,
    searchTerms: ["unsecured", "no collateral", "no car title"],
  },
  {
    path: "/personal-loan-calculator",
    summary: "Monthly payment, total interest and total repayment for any amount and term.",
    group: "info",
    section: "Loans & Guides",
    lastModified: "2026-08-25",
    changeFrequency: "monthly",
    priority: 0.9,
    searchTerms: ["calculator", "monthly payment", "how much", "estimate"],
  },
  {
    path: "/personal-loan-rates-and-terms",
    summary:
      "How APR works, what rate ranges hide, and how term length changes total interest.",
    group: "info",
    section: "Loans & Guides",
    lastModified: "2026-08-25",
    changeFrequency: "monthly",
    priority: 0.9,
    searchTerms: ["apr", "interest rate", "terms", "how rates work"],
  },
  {
    path: "/how-personal-loan-approval-works",
    summary: "Every step from submitted application to funded loan, and what decides each one.",
    group: "info",
    section: "Loans & Guides",
    lastModified: "2026-08-25",
    changeFrequency: "monthly",
    priority: 0.9,
    searchTerms: ["approval", "underwriting", "how it works", "process", "decision"],
  },
  {
    path: "/no-credit-check-loans-explained",
    summary: "What the phrase actually means, and why a real lender always verifies something.",
    group: "info",
    section: "Loans & Guides",
    lastModified: "2026-08-25",
    changeFrequency: "monthly",
    priority: 0.9,
    searchTerms: ["no credit check", "guaranteed approval", "soft pull"],
  },
];

const LEGAL_ROUTES: RouteDefinition[] = [
  {
    path: "/privacy-policy",
    summary: "What we collect, why, and the GLBA privacy notice.",
    group: "pages",
    section: "Legal & Disclosures",
    lastModified: "2026-08-25",
    changeFrequency: "yearly",
    priority: 0.3,
    searchTerms: ["privacy", "data", "glba", "information sharing"],
  },
  {
    path: "/terms-of-use",
    summary: "The terms governing use of this website.",
    group: "pages",
    section: "Legal & Disclosures",
    lastModified: "2026-08-25",
    changeFrequency: "yearly",
    priority: 0.3,
    searchTerms: ["terms", "conditions", "agreement"],
  },
  {
    path: "/rates-and-fees",
    summary: "The fixed APR, and every fee that can and cannot be charged.",
    group: "pages",
    section: "Legal & Disclosures",
    lastModified: "2026-08-25",
    changeFrequency: "yearly",
    priority: 0.3,
    searchTerms: ["fees", "cost", "late fee", "origination", "prepayment"],
  },
  {
    path: "/state-disclosures",
    summary: "Licensing and lending availability by state.",
    group: "pages",
    section: "Legal & Disclosures",
    lastModified: "2026-08-25",
    changeFrequency: "yearly",
    priority: 0.3,
    searchTerms: ["states", "licence", "license", "availability", "where do you lend"],
  },
  {
    path: "/e-sign-consent",
    summary: "Consent to receive disclosures and sign documents electronically.",
    group: "pages",
    section: "Legal & Disclosures",
    lastModified: "2026-08-06",
    changeFrequency: "yearly",
    priority: 0.3,
    searchTerms: ["esign", "electronic signature", "sign"],
  },
  {
    path: "/communications-consent",
    summary: "Calls, texts and emails: what you consent to and how to opt out.",
    group: "pages",
    section: "Legal & Disclosures",
    lastModified: "2026-08-25",
    changeFrequency: "yearly",
    priority: 0.3,
    searchTerms: ["texts", "calls", "opt out", "stop", "tcpa"],
  },
  {
    path: "/fair-lending-policy",
    summary: "Our Equal Credit Opportunity Act commitments.",
    group: "pages",
    section: "Legal & Disclosures",
    lastModified: "2026-08-25",
    changeFrequency: "yearly",
    priority: 0.3,
    searchTerms: ["fair lending", "ecoa", "discrimination", "equal credit"],
  },
  {
    path: "/security-policy",
    summary: "Encryption, access control and our information security programme.",
    group: "pages",
    section: "Legal & Disclosures",
    lastModified: "2026-08-25",
    changeFrequency: "yearly",
    priority: 0.3,
    searchTerms: ["security", "encryption", "data protection", "safe"],
  },
  {
    path: "/cookie-policy",
    summary: "The cookies this site sets and how to control them.",
    group: "pages",
    section: "Legal & Disclosures",
    lastModified: "2026-08-25",
    changeFrequency: "yearly",
    priority: 0.3,
    searchTerms: ["cookies", "tracking", "consent"],
  },
  {
    path: "/accessibility-statement",
    summary: "Our accessibility commitments and how to report a barrier.",
    group: "pages",
    section: "Legal & Disclosures",
    lastModified: "2026-08-25",
    changeFrequency: "yearly",
    priority: 0.3,
    searchTerms: ["accessibility", "wcag", "screen reader", "ada"],
  },
  {
    path: "/complaints-and-dispute-resolution",
    summary: "How to raise a complaint and where to escalate it.",
    group: "pages",
    section: "Legal & Disclosures",
    lastModified: "2026-08-25",
    changeFrequency: "yearly",
    priority: 0.3,
    searchTerms: ["complaint", "dispute", "cfpb", "dfpi", "escalate"],
  },
  {
    path: "/do-not-sell-my-personal-information",
    summary: "Your CCPA/CPRA rights and how to exercise them.",
    group: "pages",
    section: "Legal & Disclosures",
    lastModified: "2026-08-25",
    changeFrequency: "yearly",
    priority: 0.3,
    searchTerms: ["ccpa", "do not sell", "opt out", "california privacy"],
  },
];

/**
 * City pages are generated from the dataset that renders them, so a city can
 * never appear in a sitemap without a page behind it.
 */
const LOCATION_ROUTES: RouteDefinition[] = Object.values(californiaCities).map(
  (city) => ({
    path: `/personal-loans/california/${city.slug}`,
    label: city.city,
    summary: `Personal loans for ${city.city} residents, with local economic context and borrowing resources.`,
    group: "locations" as const,
    section: "California Cities",
    lastModified: CITY_CONTENT_LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    searchTerms: [city.city.toLowerCase(), `${city.county.toLowerCase()} county`],
  }),
);

export const SEO_ROUTES: SeoRoute[] = [
  ...CORE_ROUTES,
  ...INFO_ROUTES,
  ...LEGAL_ROUTES,
  ...LOCATION_ROUTES,
].map(withLabel);

export function routesInGroup(group: SitemapGroup): SeoRoute[] {
  return SEO_ROUTES.filter((route) => route.group === group);
}

export function findRoute(path: string): SeoRoute | undefined {
  return SEO_ROUTES.find((route) => route.path === path);
}

/** Sections in the order the HTML sitemap should present them. */
export const SITEMAP_SECTION_ORDER = [
  "Main",
  "Loans & Guides",
  "California Cities",
  "Legal & Disclosures",
] as const;
