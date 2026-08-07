import Link from "next/link";
import { Monitor, Phone, Mail, FileText, AlertCircle } from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

const sections = [
  { id: "scope-of-consent", title: "1. Scope of Consent" },
  { id: "how-we-deliver", title: "2. How We Deliver Communications" },
  {
    id: "hardware-software-requirements",
    title: "3. Hardware and Software Requirements",
  },
  { id: "paper-copies", title: "4. Paper Copies" },
  { id: "withdrawing-consent", title: "5. Withdrawing Consent" },
  { id: "updating-email-address", title: "6. Updating Your Email Address" },
  { id: "affirmative-consent", title: "7. Your Affirmative Consent" },
];

export default function ESignContent() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 text-slate-700 text-base leading-relaxed px-4 sm:px-6 lg:px-8">
      {/* Introduction Notice */}
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-sm">
        <FileText className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-sky-950 leading-relaxed">
          Under the federal Electronic Signatures in Global and National
          Commerce Act (E-SIGN), you must consent before we can provide records
          to you electronically. Please read this carefully and keep a copy for
          your records.
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
          {/* Scope */}
          <section id="scope-of-consent" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              1. Scope of Consent
            </h2>
            <p>
              This consent applies to all records and communications relating to
              your application and any resulting loan, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-600 pl-2">
              <li>This E-Sign Consent document</li>
              <li>
                Our{" "}
                <Link href="/privacy-policy" className="text-sky-600 underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms-of-use" className="text-sky-600 underline">
                  Terms of Use
                </Link>
              </li>
              <li>
                Your loan application and related pre-approval or adverse action
                disclosures
              </li>
              <li>Federal Truth in Lending Act (TILA) disclosures</li>
              <li>
                Your loan agreement, promissory note, and ACH debit
                authorization
              </li>
              <li>
                Periodic statements, payment reminders, and change-in-terms
                notices
              </li>
              <li>Annual privacy notices and required tax documents</li>
              <li>
                Any other legal notice or disclosure required by federal or
                state law
              </li>
            </ul>
          </section>

          {/* How We Deliver */}
          <section id="how-we-deliver" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              2. How We Deliver Communications
            </h2>
            <p>
              We deliver disclosures electronically either by email to the
              primary email address specified in your application, or by posting
              the document to a secure area of ryerloans.com and notifying you
              via email. It is your legal responsibility to keep your email
              address current and active.
            </p>
          </section>

          {/* Hardware & Software Requirements */}
          <section
            id="hardware-software-requirements"
            className="space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              3. Hardware and Software Requirements
            </h2>
            <p>
              To access, view, and retain electronic records, you confirm that
              you have access to the following:
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <Monitor className="w-5 h-5 text-sky-600 flex-shrink-0 mt-1" />
                <div className="space-y-1 text-sm">
                  <span className="font-bold text-slate-900">
                    System Capabilities:
                  </span>
                  <ul className="list-disc list-inside text-slate-600 space-y-1 pt-1">
                    <li>
                      A personal computer or mobile device with reliable
                      internet access
                    </li>
                    <li>
                      A current, supported version of a web browser (Google
                      Chrome, Apple Safari, Mozilla Firefox, or Microsoft Edge)
                    </li>
                    <li>
                      An active email account capable of sending and receiving
                      messages from{" "}
                      <span className="font-mono text-slate-800">
                        ryerloans.com
                      </span>
                    </li>
                    <li>
                      Software capable of opening and viewing PDF files (such as
                      Adobe Acrobat Reader)
                    </li>
                    <li>
                      A printer or sufficient electronic local storage to
                      download and retain records
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 italic">
              By consenting, you confirm that you have access to the hardware
              and software specified above, and that you are able to receive,
              open, view, and retain sample PDF documents electronically.
            </p>
          </section>

          {/* Paper Copies */}
          <section id="paper-copies" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              4. Paper Copies
            </h2>
            <p>
              You may request a paper copy of any electronic record at no charge
              by calling{" "}
              <a
                href={`tel:${RATE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
                className="font-semibold text-slate-900 underline hover:text-sky-600"
              >
                {RATE_CONFIG.phone}
              </a>{" "}
              or writing to us at our physical office. Requesting a paper copy
              does not automatically withdraw your consent to receive future
              communications electronically.
            </p>
          </section>

          {/* Withdrawing Consent */}
          <section id="withdrawing-consent" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              5. Withdrawing Consent
            </h2>
            <p>
              You may withdraw your consent at any time by calling{" "}
              <span className="font-semibold text-slate-900">
                {RATE_CONFIG.phone}
              </span>{" "}
              or emailing{" "}
              <a
                href="mailto:support@ryerloans.com"
                className="text-sky-600 font-semibold hover:underline"
              >
                support@ryerloans.com
              </a>
              . Withdrawal becomes effective after we have had a reasonable
              period of time to process your request.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Important Impact:</strong> Withdrawing consent before
                your application is completed will prevent you from applying for
                or receiving a loan online. If you withdraw consent after your
                loan is originated, we will send subsequent records by paper
                mail, which may delay communications. No fee applies for
                withdrawing consent.
              </div>
            </div>
          </section>

          {/* Updating Email Address */}
          <section
            id="updating-email-address"
            className="space-y-3 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              6. Updating Your Email Address
            </h2>
            <p>
              To ensure you receive all notices on time, you must notify us
              promptly of any change in your email address. Call{" "}
              <span className="font-semibold text-slate-900">
                {RATE_CONFIG.phone}
              </span>{" "}
              or email{" "}
              <a
                href="mailto:support@ryerloans.com"
                className="text-sky-600 font-semibold hover:underline"
              >
                support@ryerloans.com
              </a>{" "}
              to update your contact information.
            </p>
          </section>

          {/* Final Affirmation */}
          <section
            id="affirmative-consent"
            className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md space-y-3 scroll-mt-24"
          >
            <h2 className="font-bold text-slate-900 text-lg">
              7. Your Affirmative Consent
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              By checking the electronic records consent box during application
              submission, you confirm that:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1 pl-2">
              <li>
                You have read and understood this E-Sign Consent disclosure.
              </li>
              <li>
                You satisfy the hardware and software requirements listed above.
              </li>
              <li>
                You can access, view, and retain electronic records and PDF
                files.
              </li>
              <li>
                You consent to receive records electronically and to execute
                legal documents using electronic signatures.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
