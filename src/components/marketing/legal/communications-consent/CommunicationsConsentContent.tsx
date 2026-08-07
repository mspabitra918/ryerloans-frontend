import Link from "next/link";
import {
  Phone,
  Mail,
  FileText,
  AlertCircle,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

const sections = [
  { id: "consent-to-contact", title: "1. Express Consent to Contact" },
  { id: "consent-not-required", title: "2. Optional Marketing Consent" },
  { id: "servicing-communications", title: "3. Servicing Communications" },
  { id: "message-frequency-rates", title: "4. Message Frequency & Rates" },
  { id: "how-to-opt-out", title: "5. How to Opt Out" },
  { id: "call-recording", title: "6. Call Recording & Monitoring" },
  { id: "revoking-consent", title: "7. Revoking Consent" },
];

export default function CommunicationsConsentContent() {
  const rawPhone = RATE_CONFIG.phone.replace(/[^0-9+]/g, "");

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 text-slate-700 text-base leading-relaxed px-4 sm:px-6 lg:px-8">
      {/* Introduction Notice */}
      {/* <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-sm">
        <FileText className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-sky-950 leading-relaxed">
          Under the Telephone Consumer Protection Act (TCPA) and applicable
          state laws, we require your explicit consent to contact you via
          automated tools or text messages. Please review this policy to
          understand your rights and opt-out procedures.
        </p>
      </div> */}

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
          {/* Scope of Consent */}
          <section id="consent-to-contact" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              1. Express Consent to Contact
            </h2>
            <p>
              By checking the communications consent box or submitting an
              application, you expressly authorize Ryer Loans, its affiliates,
              agents, and service providers to contact you using the phone
              numbers and email addresses provided. This includes authorization
              for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-600 pl-2">
              <li>Automatic telephone dialing systems (autodialers)</li>
              <li>Artificial or prerecorded voice messages</li>
              <li>SMS and MMS text messaging</li>
              <li>Direct emails and account alerts</li>
            </ul>
          </section>

          {/* Consent Not Required */}
          <section id="consent-not-required" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              2. Optional Marketing Consent
            </h2>
            <p>
              Your consent to receive promotional or marketing calls and text
              messages is completely voluntary.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-emerald-950 leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>No Condition of Credit:</strong> Consent to marketing
                communications is not required as a condition of purchasing any
                property, goods, or services, or securing a loan through Ryer
                Loans.
              </div>
            </div>
          </section>

          {/* Servicing Communications */}
          <section
            id="servicing-communications"
            className="space-y-3 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              3. Servicing Communications
            </h2>
            <p>
              Regardless of your marketing preferences, we retain the right to
              contact you regarding non-marketing operational and servicing
              needs. These include:
            </p>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <ul className="list-disc list-inside text-slate-600 space-y-1.5">
                  <li>Identity verification and fraud prevention checks</li>
                  <li>
                    Application status updates and missing document alerts
                  </li>
                  <li>
                    Payment reminders, collection notices, and ACH verification
                  </li>
                  <li>Mandatory regulatory disclosures and legal updates</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Message Frequency & Rates */}
          <section
            id="message-frequency-rates"
            className="space-y-3 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              4. Message Frequency & Rates
            </h2>
            <p>
              Message frequency varies depending on your interaction with our
              platform, active loan applications, and preferred account
              settings. Standard{" "}
              <strong>message and data rates may apply</strong> as determined by
              your mobile carrier. Ryer Loans is not responsible for wireless
              carrier fees.
            </p>
          </section>

          {/* How to Opt Out */}
          <section id="how-to-opt-out" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              5. How to Opt Out
            </h2>
            <p>
              You have the right to unsubscribe or opt out from marketing
              communications at any time through any of the following channels:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm">
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Text & Phone</span>
                </div>
                <p className="text-xs text-slate-600">
                  Reply{" "}
                  <strong className="font-mono bg-slate-100 px-1 py-0.5 rounded border border-slate-200 text-slate-900">
                    STOP
                  </strong>{" "}
                  to any SMS message, or call us directly at{" "}
                  <a
                    href={`tel:${rawPhone}`}
                    className="text-sky-600 font-medium hover:underline"
                  >
                    {RATE_CONFIG.phone}
                  </a>
                  .
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm">
                  <Mail className="w-4 h-4 text-sky-600" />
                  <span>Email</span>
                </div>
                <p className="text-xs text-slate-600">
                  Click the "Unsubscribe" link at the bottom of marketing
                  emails, or contact us at{" "}
                  <a
                    href="mailto:support@ryerloans.com"
                    className="text-sky-600 font-medium hover:underline"
                  >
                    support@ryerloans.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Call Recording */}
          <section id="call-recording" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              6. Call Recording & Monitoring
            </h2>
            <p>
              To maintain service quality, train personnel, and comply with
              regulatory requirements, telephone calls with Ryer Loans
              representatives may be recorded or monitored. Where required by
              state or federal law, you will be notified at the start of the
              call.
            </p>
          </section>

          {/* Revoking Consent */}
          <section id="revoking-consent" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              7. Revoking Consent
            </h2>
            <p>
              You may revoke your consent to contact at any time by any
              reasonable method. Once processed, we will promptly update your
              contact preferences in our system.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Notice:</strong> Revoking marketing consent does not
                prevent us from sending important servicing alerts or legally
                required transaction records for an active loan application.
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
