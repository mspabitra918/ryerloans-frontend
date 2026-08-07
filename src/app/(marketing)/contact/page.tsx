import ContactBeforeYouCall from "@/src/components/marketing/contact/ContactBeforeYouCall";
import ContactEmail from "@/src/components/marketing/contact/ContactEmail";
import ContactHero from "@/src/components/marketing/contact/ContactHero";
import ContactOffice from "@/src/components/marketing/contact/ContactOffice";
import ContactPhone from "@/src/components/marketing/contact/ContactPhone";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Contact Ryer Loans | (747) 200-5220 | Long Beach, CA",
  description:
    "Reach Ryer Loans by phone at (747) 200-5220, by email, or at our Long Beach office. Existing applicants: have your six-digit Application ID ready.",
  path: "/contact",
  keywords: [
    "contact ryer loans",
    "ryer loans phone number",
    "ryer loans long beach ca",
    "ryer loans customer service",
  ],
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-gray-200 font-mono">
      <ContactHero />
      <ContactPhone />
      <ContactEmail />
      <ContactOffice />
      <ContactBeforeYouCall />
    </main>
  );
}
