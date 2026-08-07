import CostAnswers from "@/src/components/marketing/home/CostAnswers";
import CreditEvaluation from "@/src/components/marketing/home/CreditEvaluation";
import HeroSection from "@/src/components/marketing/home/HeroSection";
import HowItWorks from "@/src/components/marketing/home/HowItWorks";
import LoanUses from "@/src/components/marketing/home/LoanUses";
import ReadyToStart from "@/src/components/marketing/home/ReadyToStart";
import RepresentativeExample from "@/src/components/marketing/home/RepresentativeExample";
import SingleRate from "@/src/components/marketing/home/SingleRate";
import WhatWeNeverDo from "@/src/components/marketing/home/WhatWeNeverDo";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Personal Loans $2,000–$25,000 at 10% Fixed APR",
  description:
    "Apply online for a personal loan from $2,000 to $25,000 at a fixed 10.00% APR. All credit types considered. Direct lender. Fast online application — no obligation to accept.",
  path: "/",
  keywords: [
    "personal loans",
    "personal loan",
    "online personal loans",
    "personal loans direct lender",
  ],
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030712]">
      <HeroSection />
      <SingleRate />
      <RepresentativeExample />
      <CreditEvaluation />
      <LoanUses />
      <HowItWorks />
      <WhatWeNeverDo />
      <CostAnswers />
      <ReadyToStart />
    </main>
  );
}
