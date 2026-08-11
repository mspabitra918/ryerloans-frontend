import RatesAndTermsContent from "@/src/components/marketing/legal/personal-loan-rates-and-terms/RatesAndTermsContent";
import RatesAndTermsHero from "@/src/components/marketing/legal/personal-loan-rates-and-terms/RatesAndTermsHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Loan Rates and Terms Explained | Ryer Loans",
  description:
    "Understand personal loan APR, how rate ranges work, what origination fees really cost, and how term length changes total interest.",
  openGraph: {
    title: "Personal Loan Rates and Terms Explained | Ryer Loans",
    description:
      "Understand personal loan APR, how rate ranges work, what origination fees really cost, and how term length changes total interest.",
    type: "article",
    url: "https://ryerloans.com/personal-loan-rates-and-terms",
  },
};

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
