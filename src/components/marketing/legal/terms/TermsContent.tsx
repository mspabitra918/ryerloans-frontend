import Link from "next/link";
import { RATE_CONFIG } from "@/src/lib/config";

const sections = [
  { id: "acceptance", title: "1. Acceptance" },
  { id: "eligibility", title: "2. Eligibility" },
  { id: "no-offer-of-credit", title: "3. No Offer of Credit" },
  { id: "accuracy-of-information", title: "4. Accuracy of Information" },
  {
    id: "account-and-application",
    title: "5. Your Account and Application ID",
  },
  { id: "one-application", title: "6. One Application" },
  { id: "permitted-use", title: "7. Permitted Use" },
  { id: "prohibited-conduct", title: "8. Prohibited Conduct" },
  { id: "intellectual-property", title: "9. Intellectual Property" },
  { id: "electronic-communications", title: "10. Electronic Communications" },
  { id: "third-party-services", title: "11. Third-Party Services" },
  { id: "disclaimer-warranties", title: "12. Disclaimer of Warranties" },
  { id: "limitation-liability", title: "13. Limitation of Liability" },
  { id: "indemnification", title: "14. Indemnification" },
  {
    id: "dispute-resolution",
    title: "15. Dispute Resolution & Mandatory Arbitration",
  },
  { id: "governing-law", title: "16. Governing Law" },
  { id: "severability", title: "17. Severability" },
  { id: "changes", title: "18. Changes" },
  { id: "contact-information", title: "19. Contact Information" },
];

export default function TermsContent() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 text-slate-700 text-base leading-relaxed px-4 sm:px-6 lg:px-8">
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
          {/* 1. Acceptance */}
          <section id="acceptance" className="space-y-2 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              1. Acceptance
            </h2>
            <p>
              By accessing ryerloans.com you agree to these Terms. If you do not
              agree, do not use the site.
            </p>
          </section>

          {/* 2. Eligibility */}
          <section id="eligibility" className="space-y-2 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              2. Eligibility
            </h2>
            <p>
              You must be at least 18 years old (19 in Alabama and Nebraska), a
              US citizen or permanent resident, and located in a US state where
              Ryer Loans is authorized to lend.
            </p>
          </section>

          {/* 3. No Offer of Credit */}
          <section id="no-offer-of-credit" className="space-y-2 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              3. No Offer of Credit
            </h2>
            <p>
              Nothing on this site constitutes an offer or commitment to lend.
              All applications are subject to verification, underwriting, and
              approval. Submitting an application creates no obligation on
              either party. Rates, terms, and availability are subject to change
              without notice.
            </p>
          </section>

          {/* 4. Accuracy of Information */}
          <section
            id="accuracy-of-information"
            className="space-y-2 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              4. Accuracy of Information
            </h2>
            <p>
              You agree that all information you submit is true, complete, and
              accurate. Providing false information in connection with a credit
              application may violate federal and state law, including 18 U.S.C.
              § 1014. You agree to promptly notify us of any change.
            </p>
          </section>

          {/* 5. Your Account and Application ID */}
          <section
            id="account-and-application"
            className="space-y-2 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              5. Your Account and Application ID
            </h2>
            <p>
              You are responsible for safeguarding your Application ID and the
              email address associated with your application. Notify us
              immediately of any unauthorized access.
            </p>
          </section>

          {/* 6. One Application */}
          <section id="one-application" className="space-y-2 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              6. One Application
            </h2>
            <p>
              You may maintain only one active application. Duplicate
              applications are automatically blocked. If your application is
              declined, you may submit a new one 90 days after the date of your
              original application.
            </p>
          </section>

          {/* 7. Permitted Use */}
          <section id="permitted-use" className="space-y-2 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              7. Permitted Use
            </h2>
            <p>
              This site is for personal, non-commercial use in evaluating and
              applying for a loan.
            </p>
          </section>

          {/* 8. Prohibited Conduct */}
          <section id="prohibited-conduct" className="space-y-2 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              8. Prohibited Conduct
            </h2>
            <p>You may not:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
              <li>
                Submit false information or apply on behalf of another person
                without authorization
              </li>
              <li>Use automated means to access, scrape, or index the site</li>
              <li>Attempt to gain unauthorized access to any system</li>
              <li>Interfere with site operation or introduce malicious code</li>
              <li>
                Use the site for unlawful purposes or reverse engineer any part
                of the service
              </li>
              <li>Reproduce our content without permission</li>
            </ul>
          </section>

          {/* 9. Intellectual Property */}
          <section
            id="intellectual-property"
            className="space-y-2 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              9. Intellectual Property
            </h2>
            <p>
              All site content, design, code, text, graphics, and marks are
              owned by Ryer Loans or its licensors and protected by US and
              international law.
            </p>
          </section>

          {/* 10. Electronic Communications */}
          <section
            id="electronic-communications"
            className="space-y-2 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              10. Electronic Communications
            </h2>
            <p>
              By using this site you consent to receive communications
              electronically. See our{" "}
              <Link
                href="/esign-consent"
                className="text-sky-600 font-medium underline hover:text-sky-700"
              >
                E-Sign Consent
              </Link>
              .
            </p>
          </section>

          {/* 11. Third-Party Services */}
          <section id="third-party-services" className="space-y-2 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              11. Third-Party Services
            </h2>
            <p>
              We use third-party providers including Plaid for bank
              verification. Your use of those services is governed by their own
              terms and privacy policies.
            </p>
          </section>

          {/* 12. Disclaimer of Warranties */}
          <section
            id="disclaimer-warranties"
            className="space-y-2 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              12. Disclaimer of Warranties
            </h2>
            <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-800 leading-relaxed uppercase">
              THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES
              OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
              WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR
              SECURE.
            </div>
          </section>

          {/* 13. Limitation of Liability */}
          <section id="limitation-liability" className="space-y-2 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              13. Limitation of Liability
            </h2>
            <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-800 leading-relaxed uppercase">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, RYER LOANS SHALL NOT BE
              LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR DATA, ARISING FROM
              YOUR USE OF THIS SITE. OUR AGGREGATE LIABILITY SHALL NOT EXCEED
              $100 OR THE AMOUNT YOU PAID US IN THE PRECEDING 12 MONTHS. SOME
              JURISDICTIONS DO NOT ALLOW THESE LIMITATIONS, SO THEY MAY NOT
              APPLY TO YOU.
            </div>
          </section>

          {/* 14. Indemnification */}
          <section id="indemnification" className="space-y-2 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              14. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Ryer Loans and its
              officers, directors, employees, and agents from any claims arising
              from your breach of these Terms or misuse of the site.
            </p>
          </section>

          {/* 15. Dispute Resolution */}
          <section id="dispute-resolution" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              15. Dispute Resolution
            </h2>
            <p>
              Before filing a formal claim, the parties will first attempt to
              resolve any dispute informally by providing written notice and
              discussing the issue in good faith for at least 30 days.
            </p>
            <p>
              If the dispute cannot be resolved informally, it will be decided
              by binding arbitration before a neutral arbitrator, except that
              claims within the jurisdiction of small claims court may be
              brought there, and claims seeking temporary or preliminary
              injunctive relief may be brought in a court of competent
              jurisdiction. Covered borrowers under applicable law, including
              the Military Lending Act, may not be required to arbitrate
              disputes covered by that law.
            </p>
            <p>
              The arbitration will take place in Los Angeles County, California,
              unless applicable law requires a different forum or process.
            </p>
            <p className="text-sm text-slate-600">
              <strong>Opt-Out Right:</strong> You may reject this arbitration
              provision by sending a written notice to legal@ryerloans.com
              within 30 days of first accepting these Terms. If you opt out, the
              dispute may proceed in court to the extent permitted by law.
            </p>
          </section>

          {/* 16. Governing Law */}
          <section id="governing-law" className="space-y-2 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              16. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the State of California
              without regard to conflict of law principles, except where the law
              of your state of residence provides you greater protection.
            </p>
          </section>

          {/* 17. Severability */}
          <section id="severability" className="space-y-2 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              17. Severability
            </h2>
            <p>
              If any provision is held unenforceable, the remainder continues in
              effect.
            </p>
          </section>

          {/* 18. Changes */}
          <section id="changes" className="space-y-2 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              18. Changes
            </h2>
            <p>
              We may modify these Terms at any time. Continued use of the site
              after posting constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* 19. Contact */}
          <section id="contact-information" className="space-y-2 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              19. Contact Information
            </h2>
            <p className="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              Legal Department, Ryer Loans <br />
              Email: legal@ryerloans.com | Phone: {RATE_CONFIG.phone} <br />
              Address: {RATE_CONFIG.address}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
