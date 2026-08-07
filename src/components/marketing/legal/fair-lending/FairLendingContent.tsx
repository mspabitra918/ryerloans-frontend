import Link from "next/link";
import {
  Scale,
  ShieldCheck,
  FileText,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

const sections = [
  { id: "our-commitment", title: "1. Our Commitment" },
  { id: "ecoa-notice", title: "2. Equal Credit Opportunity Act" },
  { id: "what-we-consider", title: "3. What We Do Consider" },
  {
    id: "additional-protections",
    title: "4. Additional Protections We Observe",
  },
  { id: "marketing-practices", title: "5. Marketing Practices" },
  { id: "language-access", title: "6. Language Access" },
  { id: "adverse-action-notices", title: "7. Adverse Action Notices" },
  { id: "training-and-monitoring", title: "8. Training and Monitoring" },
  { id: "complaints", title: "9. Complaints & Reporting" },
];

export default function FairLendingContent() {
  const rawPhone = RATE_CONFIG.phone.replace(/[^0-9+]/g, "");

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 text-slate-700 text-base leading-relaxed px-4 sm:px-6 lg:px-8">
      {/* Introduction Notice */}
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-sm">
        <Scale className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-sky-950 leading-relaxed">
          Ryer Loans extends credit based solely on an applicant’s financial
          capacity and willingness to repay. We strictly enforce equal credit
          opportunity rules across all lending evaluations.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* Table of contents navigation */}
        <aside className="hidden lg:block">
          <nav
            aria-label="On this page"
            className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-slate-100/60 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
              On this page
            </p>
            <ol className="mt-4 space-y-2.5 text-sm">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex gap-2 text-slate-700 transition hover:text-sky-600"
                  >
                    <span className="text-slate-400 font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Main Content Sections */}
        <div className="space-y-10 min-w-0">
          {/* Our Commitment */}
          <section id="our-commitment" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              1. Our Commitment
            </h2>
            <p>
              Ryer Loans is committed to fair and equitable lending. We extend
              credit on the basis of an applicant’s ability and willingness to
              repay, and on no other basis.
            </p>
          </section>

          {/* Equal Credit Opportunity Act */}
          <section id="ecoa-notice" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              2. Equal Credit Opportunity Act
            </h2>
            <p>
              Federal law prohibits creditors from discriminating against credit
              applicants on the basis of race, color, religion, national origin,
              sex, marital status, age (provided the applicant has the capacity
              to contract), because all or part of the applicant’s income
              derives from any public assistance program, or because the
              applicant has in good faith exercised any right under the Consumer
              Credit Protection Act.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-emerald-950 leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Non-Discrimination Guarantee:</strong> Ryer Loans does
                not consider any of these protected factors in any credit
                decision.
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-1">
              The federal agencies that administer compliance with this law
              concerning creditors are the Consumer Financial Protection Bureau
              (1700 G Street NW, Washington, DC 20552) and the Federal Trade
              Commission (Equal Credit Opportunity, Washington, DC 20580).
            </p>
          </section>

          {/* What We Do Consider */}
          <section id="what-we-consider" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              3. What We Do Consider
            </h2>
            <p>
              Our credit evaluations are based strictly on objective financial
              factors, including:
            </p>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                <li>Verifiable income and stability of earnings</li>
                <li>
                  Existing debt obligations relative to total income
                  (Debt-to-Income ratio)
                </li>
                <li>
                  Banking history, including account age, deposit patterns, and
                  overdraft activity
                </li>
                <li>Credit history and payment behavior</li>
                <li>Ability to verify identity and employment details</li>
                <li>
                  Residence in a U.S. state where we are legally licensed to
                  lend
                </li>
              </ul>
            </div>
          </section>

          {/* Additional Protections We Observe */}
          <section
            id="additional-protections"
            className="space-y-3 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              4. Additional Protections We Observe
            </h2>
            <p>
              We strictly align our operations with core federal consumer
              protection standards:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 pl-2">
              <li>
                <strong>Fair Housing Act:</strong> Where applicable to
                housing-related credit products.
              </li>
              <li>
                <strong>Servicemembers Civil Relief Act (SCRA):</strong>{" "}
                Interest rate reductions and protections for active-duty
                military personnel.
              </li>
              <li>
                <strong>Military Lending Act (MLA):</strong> Strict adherence to
                the 36% Military Annual Percentage Rate (MAPR) cap and
                limitations for covered borrowers and dependents.
              </li>
              <li>
                <strong>UDAAP Principles:</strong> Prohibition of Unfair,
                Deceptive, or Abusive Acts or Practices. We do not advertise
                terms we do not offer, conceal costs, or use pressure tactics.
              </li>
              <li>
                <strong>Fair Credit Reporting Act (FCRA):</strong> Ensuring
                accuracy in credit reporting and providing prompt dispute
                investigations.
              </li>
              <li>
                <strong>Fair Debt Collection Practices Act (FDCPA):</strong>{" "}
                Adherence to ethical debt collection principles across all
                servicing activities.
              </li>
            </ul>
          </section>

          {/* Marketing Practices */}
          <section id="marketing-practices" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              5. Marketing Practices
            </h2>
            <p>
              Our advertising campaigns are directed broadly to the public and
              are not designed or targeted to exclude or steer any protected
              class. We do not utilize audience-targeting criteria that result
              in discriminatory delivery of credit advertising.
            </p>
          </section>

          {/* Language Access */}
          <section id="language-access" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              6. Language Access
            </h2>
            <p>
              All primary application materials and legally required disclosures
              are provided in English. If you require assistance in another
              language, please contact support to verify if real-time
              translation support is available for your language.
            </p>
          </section>

          {/* Adverse Action Notices */}
          <section
            id="adverse-action-notices"
            className="space-y-3 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              7. Adverse Action Notices
            </h2>
            <p>
              If we decline your application, take adverse action on an existing
              account, or offer an approval for less than the requested amount,
              we will send a written notice within 30 days. This notice will
              state:
            </p>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2 text-sm text-slate-600">
              <ul className="list-disc list-inside space-y-1.5">
                <li>The specific principal reasons for the credit decision</li>
                <li>The required Equal Credit Opportunity Act (ECOA) notice</li>
                <li>
                  The name, address, and phone number of the credit reporting
                  agency if a consumer report was used
                </li>
                <li>
                  Notice of your right to obtain a free copy of your consumer
                  report within 60 days and your right to dispute its accuracy
                </li>
              </ul>
            </div>
          </section>

          {/* Training and Monitoring */}
          <section
            id="training-and-monitoring"
            className="space-y-3 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              8. Training and Monitoring
            </h2>
            <p>
              All personnel involved in credit decisions receive mandatory fair
              lending training upon hire and annually thereafter. We conduct
              periodic internal reviews and statistical analyses of application
              outcomes to prevent and address any potential disparate impact.
            </p>
          </section>

          {/* Complaints */}
          <section
            id="complaints"
            className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md space-y-4 scroll-mt-24"
          >
            <h2 className="font-bold text-slate-900 text-lg">
              9. Fair Lending Complaints &amp; Regulatory Contacts
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              If you believe you have been subjected to unfair or discriminatory
              treatment, you may reach our compliance team directly or contact
              federal regulatory agencies:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm pt-2">
              <div className="space-y-1">
                <span className="font-bold text-slate-900 block">
                  Ryer Loans Fair Lending Officer:
                </span>
                <p className="text-slate-600">
                  Email:{" "}
                  <a
                    href="mailto:fairlending@ryerloans.com"
                    className="text-sky-600 underline"
                  >
                    fairlending@ryerloans.com
                  </a>
                </p>
                <p className="text-slate-600">
                  Phone:{" "}
                  <a
                    href={`tel:${rawPhone}`}
                    className="text-sky-600 underline"
                  >
                    {RATE_CONFIG.phone}
                  </a>
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-slate-900 block">
                  Consumer Financial Protection Bureau (CFPB):
                </span>
                <p className="text-slate-600">
                  Web:{" "}
                  <a
                    href="https://www.consumerfinance.gov/complaint"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 underline"
                  >
                    consumerfinance.gov/complaint
                  </a>
                </p>
                <p className="text-slate-600">Phone: 1-855-411-2372</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
