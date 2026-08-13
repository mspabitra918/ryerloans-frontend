import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/api/",
        "/apply/success",
        "/loan-status/",
        "/bank-verification/",
        "/*?utm_",
        "/*?fbclid",
      ],
    },
    sitemap: "https://www.ryerloans.com/sitemap.xml",
  };
}
