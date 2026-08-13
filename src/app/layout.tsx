import type { Metadata, Viewport } from "next";
import { Fira_Code } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
import JsonLd from "../components/seo/JsonLd";
import { LayoutContent } from "../components/layout/LayoutContent";
import { constructMetadata } from "../lib/metadata";
import { SITE_CONFIG } from "../lib/config";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400", "500"],
});

export const metadata: Metadata = constructMetadata({
  title: "Ryer Loans | Direct Personal Lender in Long Beach, CA",
  description:
    "Ryer Loans is a direct personal lender offering $2,000–$25,000 at a fixed 10% APR. All credit types considered.",
  path: "/",
});

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Sitewide Graph: Organization + FinancialService + LocalBusiness (Long Beach)
  const sitewideSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "FinancialService"],
        "@id": `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.legalName,
        url: SITE_CONFIG.url,
        logo: SITE_CONFIG.logo,
        telephone: SITE_CONFIG.phone,
        email: SITE_CONFIG.email,
        sameAs: SITE_CONFIG.sameAs,
        address: {
          "@type": "PostalAddress",
          ...SITE_CONFIG.address,
        },
      },
      {
        "@type": "FinancialService",
        "@id": `${SITE_CONFIG.url}/#localbusiness`,
        name: `${SITE_CONFIG.name} - Long Beach Office`,
        url: SITE_CONFIG.url,
        telephone: SITE_CONFIG.phone,
        priceRange: "$$",
        image: SITE_CONFIG.logo,
        address: {
          "@type": "PostalAddress",
          ...SITE_CONFIG.address,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE_CONFIG.geo.latitude,
          longitude: SITE_CONFIG.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "14:00",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={firaCode.variable}>
      <head>
        <JsonLd data={sitewideSchema} />
      </head>
      <body className="flex min-h-screen flex-col bg-white font-sans text-slate-800 antialiased">
        <LayoutContent>{children}</LayoutContent>
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
