import Link from "next/link";
import {
  MessageSquare,
  ShieldAlert,
  Building2,
  HelpCircle,
} from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

const sections = [
  { id: "step-1", title: "Step 1: Direct Support" },
  { id: "step-2", title: "Step 2: Compliance Escalation" },
  { id: "step-3", title: "Step 3: External & Regulatory Agencies" },
];

export default function ComplaintsContent() {
  const rawPhone = RATE_CONFIG.phone.replace(/[^0-9+]/g, "");

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 text-slate-700 text-base leading-relaxed px-4 sm:px-6 lg:px-8">
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-sm">
        <MessageSquare className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-sky-950 leading-relaxed">
          Ryer Loans values your feedback and strives to resolve all concerns
          quickly and fairly. If you have an issue with an application or
          account, please follow our resolution framework below.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
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

        <div className="space-y-10 min-w-0">
          <section id="step-1" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              Step 1: Contact Customer Support
            </h2>
            <p>
              Please contact us with your <strong>Application ID</strong> or{" "}
              <strong>Loan Number</strong> along with a detailed description of
              your issue:
            </p>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2 text-sm">
              <p>
                Email:{" "}
                <a
                  href="mailto:complaints@ryerloans.com"
                  className="text-sky-600 font-medium underline"
                >
                  complaints@ryerloans.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href={`tel:${rawPhone}`}
                  className="text-sky-600 font-medium underline"
                >
                  {RATE_CONFIG.phone}
                </a>
              </p>
            </div>
            <p className="text-xs text-slate-500">
              We acknowledge all complaints within{" "}
              <strong>1 business day</strong> and aim to resolve matters within{" "}
              <strong>15 business days</strong>.
            </p>
          </section>

          <section id="step-2" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              Step 2: Compliance Escalation
            </h2>
            <p>
              If your issue is not resolved to your satisfaction in Step 1, you
              may request an escalation to our Compliance Department. A senior
              compliance manager will conduct an independent review and issue a
              written determination within <strong>30 calendar days</strong>.
            </p>
          </section>

          <section id="step-3" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              Step 3: External Regulatory Agencies
            </h2>
            <p className="text-sm text-slate-600">
              If you remain dissatisfied after our internal review, you may
              submit a complaint to external government regulatory oversight
              bodies:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm pt-2">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1">
                <strong className="text-slate-900 block font-semibold">
                  Consumer Financial Protection Bureau (CFPB)
                </strong>
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
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1">
                <strong className="text-slate-900 block font-semibold">
                  Federal Trade Commission (FTC)
                </strong>
                <p className="text-slate-600">
                  Web:{" "}
                  <a
                    href="https://reportfraud.ftc.gov"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 underline"
                  >
                    reportfraud.ftc.gov
                  </a>
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1">
                <strong className="text-slate-900 block font-semibold">
                  California DFPI (For CA Residents)
                </strong>
                <p className="text-slate-600">
                  Web:{" "}
                  <a
                    href="https://dfpi.ca.gov"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 underline"
                  >
                    dfpi.ca.gov
                  </a>
                </p>
                <p className="text-slate-600">Phone: 1-866-275-2677</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1">
                <strong className="text-slate-900 block font-semibold">
                  Better Business Bureau (BBB)
                </strong>
                <p className="text-slate-600">
                  Web:{" "}
                  <a
                    href="https://www.bbb.org"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 underline"
                  >
                    bbb.org
                  </a>
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-2">
              For state regulatory agency contact details in other licensed
              jurisdictions, visit our{" "}
              <Link
                href="/state-disclosures"
                className="text-sky-600 underline"
              >
                State Disclosures
              </Link>{" "}
              page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
