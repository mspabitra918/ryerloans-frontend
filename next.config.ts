import type { NextConfig } from "next";

/**
 * Permanent redirects for URLs that were linked or published before the current
 * route names settled. Each one existed as a live internal link or a URL
 * advertised in an earlier sitemap, so each is a real 404 to a crawler until it
 * is redirected. The in-app links have been pointed at the current URLs too —
 * these exist for inbound links and anything already indexed.
 */
const legacyRedirects = [
  { source: "/security", destination: "/security-policy" },
  { source: "/privacy", destination: "/privacy-policy" },
  { source: "/terms", destination: "/terms-of-use" },
  { source: "/fair-lending", destination: "/fair-lending-policy" },
  { source: "/esign-consent", destination: "/e-sign-consent" },
  { source: "/rates-and-terms", destination: "/personal-loan-rates-and-terms" },
  { source: "/how-it-works", destination: "/how-personal-loan-approval-works" },
  {
    source: "/personal-loans/debt-consolidation",
    destination: "/debt-consolidation-loans",
  },
  { source: "/faqs", destination: "/faq" },
  // The previous sitemap advertised city pages under /ca/<city>.
  {
    source: "/ca/:city",
    destination: "/personal-loans/california/:city",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    // 301 explicitly, rather than `permanent: true`, which Next serves as a 308.
    return legacyRedirects.map((redirect) => ({ ...redirect, statusCode: 301 }));
  },
};

export default nextConfig;
