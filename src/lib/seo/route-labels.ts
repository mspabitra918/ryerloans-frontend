/**
 * Path → short label, for breadcrumbs and the route registry.
 *
 * Deliberately its own module with no imports: the breadcrumb component is a
 * client component, and importing it from `routes.ts` would drag the 100KB
 * California city dataset into the bundle of every page on the site.
 */
export const ROUTE_LABELS: Record<string, string> = {
  "/": "Home",
  "/apply": "Apply",
  "/about": "About",
  "/faq": "FAQ",
  "/contact": "Contact",
  "/reviews": "Reviews",
  "/loan-status": "Loan Status",
  "/personal-loans/california": "California",
  "/sitemap": "Site Map",
  "/search": "Search",

  "/personal-loans": "Personal Loans",
  "/personal-loans-for-bad-credit": "Personal Loans for Bad Credit",
  "/installment-loans": "Installment Loans",
  "/emergency-loans": "Emergency Loans",
  "/debt-consolidation-loans": "Debt Consolidation Loans",
  "/unsecured-personal-loans": "Unsecured Personal Loans",
  "/personal-loan-calculator": "Personal Loan Calculator",
  "/personal-loan-rates-and-terms": "Rates and Terms Explained",
  "/how-personal-loan-approval-works": "How Approval Works",
  "/no-credit-check-loans-explained": "No Credit Check Loans Explained",

  "/privacy-policy": "Privacy Policy",
  "/terms-of-use": "Terms of Use",
  "/rates-and-fees": "Rates & Fees",
  "/state-disclosures": "State Disclosures",
  "/e-sign-consent": "E-Sign Consent",
  "/communications-consent": "Communications Consent",
  "/fair-lending-policy": "Fair Lending Policy",
  "/security-policy": "Security Policy",
  "/cookie-policy": "Cookie Policy",
  "/accessibility-statement": "Accessibility Statement",
  "/complaints-and-dispute-resolution": "Complaints & Dispute Resolution",
  "/do-not-sell-my-personal-information": "Do Not Sell My Personal Information",
};

const CITY_PATH = /^\/personal-loans\/california\/[a-z0-9-]+$/;

function titleCase(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function labelForPath(path: string): string {
  const known = ROUTE_LABELS[path];
  if (known) return known;

  // City slugs title-case cleanly ("santa-ana" → "Santa Ana"), which is exactly
  // the name held in the dataset, so no lookup is needed for the label.
  const segments = path.split("/").filter(Boolean);
  return titleCase(segments[segments.length - 1] ?? "");
}

/** Whether a path is a real page, and so deserves a breadcrumb trail. */
export function isKnownPath(path: string): boolean {
  return path in ROUTE_LABELS || CITY_PATH.test(path);
}
