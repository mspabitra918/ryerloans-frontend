import { Metadata } from "next";

// 1. Define parameter types
interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string[]; // Explicitly typed as an array of strings
  path?: string;
  noIndex?: boolean;
}

const defaultSiteConfig = {
  siteName: "Ryer Loans",
  baseUrl: "https://www.ryerloans.com",
  defaultTitle: "Personal Loans $2,000–$25,000 at 10% Fixed APR | Ryer Loans",
  defaultDescription:
    "Apply online for a personal loan from $2,000 to $25,000 at a fixed 10.00% APR.",
  defaultKeywords: [
    "personal loans",
    "personal loan",
    "online personal loans",
    "personal loans direct lender",
  ],
};

// 2. Type the options parameter and return type
export function constructMetadata({
  title,
  description,
  keywords = [], // TypeScript now knows this is string[] instead of never[]
  path = "",
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${defaultSiteConfig.siteName}`
    : defaultSiteConfig.defaultTitle;

  const pageDescription = description || defaultSiteConfig.defaultDescription;

  // Merge keywords safely
  const pageKeywords = Array.from(
    new Set([...defaultSiteConfig.defaultKeywords, ...keywords]),
  );

  const url = `${defaultSiteConfig.baseUrl}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    metadataBase: new URL(defaultSiteConfig.baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: defaultSiteConfig.siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
