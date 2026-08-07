import type { Metadata, Viewport } from "next";
// import { Manrope } from "next/font/google";
import { Fira_Code } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
// import { BRAND } from "../lib/constants";
// import { JsonLd } from "../components/layout/JsonLd";
import { LayoutContent } from "../components/layout/LayoutContent";
import { constructMetadata } from "../lib/metadata";
// import { TrackingScripts } from "../components/layout/TrackingScripts";
// import { loanProductSchema, organizationSchema } from "../lib/schema";

// const manrope = Manrope({
//   subsets: ["latin"],
//   variable: "--font-manrope",
//   display: "swap",
// });

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400", "500"],
});

// export const metadata: Metadata = {
//   metadataBase: new URL(
//     process.env.NEXT_PUBLIC_SITE_URL ?? `http://localhost:3000`,
//   ),
//   title: {
//     default: `Ryer Loans | Emergency Loans up to $10,000`,
//     template: `%s | Ryer Loans`,
//   },
//   description:
//     " Short on cash before payday? Here are five options worth checking before you take on high-interest debt — " +
//     "and how to know when a personal loan actually makes sense.",
// };

// Uses default site values
export const metadata = constructMetadata();

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
  return (
    <html lang="en" className={firaCode.variable}>
      <body className="flex min-h-screen flex-col bg-white">
        {/* <JsonLd data={[organizationSchema(), loanProductSchema()]} /> */}
        <LayoutContent>{children}</LayoutContent>
        <Toaster position="top-right" richColors closeButton />
        {/* <TrackingScripts /> */}
      </body>
    </html>
  );
}
