import AboutCommitments from "@/src/components/marketing/about/AboutCommitments";
import AboutDirectLender from "@/src/components/marketing/about/AboutDirectLender";
import AboutHero from "@/src/components/marketing/about/AboutHero";
import AboutLocation from "@/src/components/marketing/about/AboutLocation";
import AboutOneRate from "@/src/components/marketing/about/AboutOneRate";
import AboutPhoneCall from "@/src/components/marketing/about/AboutPhoneCall";
import AboutUnderwriting from "@/src/components/marketing/about/AboutUnderwriting";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "About Ryer Loans | Direct Personal Lender in Long Beach, CA",
  description:
    "Ryer Loans is a direct personal lender offering $2,000–$25,000 at a fixed 10% APR. Learn who we are, how we underwrite, and why we publish one rate.",
  path: "/about",
  keywords: [
    "about ryer loans",
    "direct personal lender",
    "long beach ca lender",
    "fixed apr personal loans",
  ],
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <AboutHero />
      <AboutDirectLender />
      <AboutOneRate />
      <AboutUnderwriting />
      <AboutPhoneCall />
      <AboutLocation />
      <AboutCommitments />
    </main>
  );
}
