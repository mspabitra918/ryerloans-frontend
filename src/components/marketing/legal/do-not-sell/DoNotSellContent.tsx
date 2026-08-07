import { ShieldCheck, UserCheck, Mail, Phone, Lock } from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

const sections = [
  { id: "our-policy", title: "1. Non-Sale Statement" },
  { id: "your-privacy-rights", title: "2. Your Privacy Rights" },
  { id: "submit-request", title: "3. How to Submit a Request" },
];

export default function DoNotSellContent() {
  const rawPhone = RATE_CONFIG.phone.replace(/[^0-9+]/g, "");

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 text-slate-700 text-base leading-relaxed px-4 sm:px-6 lg:px-8">
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-sm">
        <ShieldCheck className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-sky-950 leading-relaxed">
          Ryer Loans strictly respects your personal data privacy rights. We do
          not sell personal data or share data for cross-context behavioral
          advertising.
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
          <section id="our-policy" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              1. Non-Sale &amp; Non-Sharing Statement
            </h2>
            <p>
              Ryer Loans <strong>does not sell personal information</strong> and{" "}
              <strong>does not share personal information</strong> for
              cross-context behavioral advertising, as those terms are defined
              under the California Consumer Privacy Act (CCPA) and California
              Privacy Rights Act (CPRA).
            </p>
            <p className="text-xs text-slate-500">
              If our practices change in the future, we will immediately update
              this policy and provide an opt-out mechanism before engaging in
              any such activity.
            </p>
          </section>

          <section id="your-privacy-rights" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              2. Your Consumer Privacy Rights
            </h2>
            <p>
              Regardless of data selling practices, eligible residents may
              exercise the following statutory privacy rights:
            </p>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                <li>
                  <strong>Right to Know / Access:</strong> Request details on
                  personal data collected, used, or disclosed.
                </li>
                <li>
                  <strong>Right to Correct:</strong> Request correction of
                  inaccurate personal information.
                </li>
                <li>
                  <strong>Right to Delete:</strong> Request deletion of personal
                  information (subject to statutory financial retention
                  exemptions).
                </li>
                <li>
                  <strong>Right to Limit Sensitive Data:</strong> Request
                  limitations on the use of sensitive personal information.
                </li>
                <li>
                  <strong>Non-Discrimination:</strong> We will never
                  discriminate against you for exercising any privacy rights.
                </li>
              </ul>
            </div>
          </section>

          <section
            id="submit-request"
            className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md space-y-4 scroll-mt-24"
          >
            <h2 className="font-bold text-slate-900 text-lg">
              3. How to Submit a Request
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              You or your authorized agent (with proof of authorization) may
              submit a privacy rights request through any of the following
              channels:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm pt-2">
              <div className="space-y-1">
                <span className="font-bold text-slate-900 block">
                  Privacy Email:
                </span>
                <p className="text-slate-600">
                  <a
                    href="mailto:privacy@ryerloans.com"
                    className="text-sky-600 underline"
                  >
                    privacy@ryerloans.com
                  </a>
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-slate-900 block">
                  Toll-Free Phone:
                </span>
                <p className="text-slate-600">
                  <a
                    href={`tel:${rawPhone}`}
                    className="text-sky-600 underline"
                  >
                    {RATE_CONFIG.phone}
                  </a>
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              We verify identity using standard security criteria prior to
              processing any privacy request.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
