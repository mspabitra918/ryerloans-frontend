import Link from "next/link";
import { CityLoanData } from "@/src/data/california-cities";
import { RATE_CONFIG } from "@/src/lib/config";
import LoanTerms from "./LoanTerms";
import LocalEconomy from "./LocalEconomy";
import WhyResidentsBorrow from "./WhyResidentsBorrow";
import FinancialResources from "./FinancialResources";
import CityFAQ from "./CityFAQ";
import CityNavigation from "./CityNavigation";

interface Props {
  data: CityLoanData;
}

export default function CityLoanPage({ data }: Props) {
  const phoneHref = `tel:${RATE_CONFIG.phone.replace(/[^0-9+]/g, "")}`;

  return (
    <main className="space-y-12">
      <section className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
              California personal loans
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">
              Personal Loans in {data.city}, California
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200 max-w-7xl">
              {data.intro}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 hover:bg-sky-300 transition"
              >
                Apply now
              </Link>
              <Link
                href={phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
              >
                Call {RATE_CONFIG.phone.trim()}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LoanTerms city={data.city} />
      <LocalEconomy city={data.city} data={data.economy} />
      <WhyResidentsBorrow
        city={data.city}
        reasons={data.borrowingReasons}
        reasonDetails={data.borrowingDetails}
      />
      <FinancialResources
        city={data.city}
        resources={data.financialResources}
      />

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Ready to apply?
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                  Start your application or call us for guidance.
                </h2>
                <p className="mt-3 max-w-2xl text-slate-600">
                  We offer fixed-rate personal loans from $2,000 to $25,000 with
                  no origination fee and no prepayment penalty. If you want to
                  discuss your situation first, we’re here to help.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition"
                >
                  Apply now
                </Link>
                <Link
                  href={phoneHref}
                  className="inline-flex items-center justify-center rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition"
                >
                  Call {RATE_CONFIG.phone.trim()}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CityFAQ city={data.city} faqs={data.faqs} />
      <CityNavigation nearbyCities={data.nearbyCities} />
    </main>
  );
}
