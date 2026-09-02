import RatesAndTermsContent from "@/src/components/marketing/legal/personal-loan-rates-and-terms/RatesAndTermsContent";
import RatesAndTermsHero from "@/src/components/marketing/legal/personal-loan-rates-and-terms/RatesAndTermsHero";
import { constructMetadata } from "@/src/lib/metadata";

export const metadata = constructMetadata({
  title: "Personal Loan Rates and Terms Explained",
  description:
    "Understand personal loan APR, how rate ranges work, what origination fees really cost, and how term length changes total interest.",
  path: "/personal-loan-rates-and-terms",
  keywords: [
    "personal loan apr",
    "loan interest rate",
    "loan terms explained",
    "how apr works",
  ],
});

export default function PersonalLoanRatesAndTermsPage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      <RatesAndTermsHero />
      <div className="bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <RatesAndTermsContent />
      </div>
    </main>
  );
}
