import Link from "next/link";
import { RATE_CONFIG } from "@/src/lib/config";

const sections = [
  { id: "who-we-are", title: "1. Who We Are" },
  { id: "information-we-collect", title: "2. Information We Collect" },
  { id: "why-we-collect-it", title: "3. Why We Collect It" },
  { id: "how-we-share-it", title: "4. How We Share It" },
  { id: "how-long-we-keep-it", title: "5. How Long We Keep It" },
  { id: "how-we-protect-it", title: "6. How We Protect It" },
  { id: "your-rights", title: "7. Your Rights" },
  { id: "cookies-children-links", title: "8. Cookies, Children & Links" },
  { id: "policy-changes", title: "9. Policy Changes" },
  { id: "contact-us", title: "10. Contact Us" },
];

export default function PrivacyContent() {
  const sharingTable = [
    {
      recipient: "Consumer reporting agencies",
      purpose: "Obtain credit data; report loan performance",
    },
    {
      recipient: "Identity verification & fraud vendors",
      purpose: "KYC, OFAC screening, fraud detection",
    },
    {
      recipient: "Bank verification providers (Plaid)",
      purpose: "Verify account ownership and details, with your authorization",
    },
    {
      recipient: "Payment processors & ACH originators",
      purpose: "Disburse funds and collect payments",
    },
    {
      recipient: "Email & communications providers",
      purpose: "Deliver application and servicing communications",
    },
    {
      recipient: "Cloud hosting & storage providers",
      purpose: "Operate the service",
    },
    {
      recipient: "Servicing & collections partners",
      purpose: "Service or collect your loan",
    },
    { recipient: "Professional advisers", purpose: "Legal, accounting, audit" },
    {
      recipient: "Regulators & law enforcement",
      purpose: "Where required by law, subpoena, or court order",
    },
    {
      recipient: "Successor entities",
      purpose: "In connection with a merger, acquisition, or sale of assets",
    },
    {
      recipient: "Affiliates",
      purpose: "As permitted by law and described in our GLBA notice",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 text-slate-700 text-base leading-relaxed px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* Table of contents */}
        <aside className="hidden lg:block">
          <nav
            aria-label="On this page"
            className="sticky top-24 rounded-2xl border border-slate-200 bg-slate-100/60 p-5"
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

        <div className="space-y-12 min-w-0">
          {/* 1. Who We Are */}
          <section id="who-we-are" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              1. Who We Are
            </h2>
            <p>
              Ryer Loans (“Ryer Loans,” “we,” “us,” “our”) operates
              ryerloans.com and offers personal installment loans.
            </p>
            <p>
              Our office is located at{" "}
              <span className="font-semibold text-slate-900">
                {RATE_CONFIG.address}
              </span>
              . Phone:{" "}
              <a
                href={`tel:${RATE_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
                className="text-sky-600 font-semibold hover:underline"
              >
                {RATE_CONFIG.phone}
              </a>
              . Email:{" "}
              <a
                href="mailto:privacy@ryerloans.com"
                className="text-sky-600 font-semibold hover:underline"
              >
                privacy@ryerloans.com
              </a>
              .
            </p>
            <p>
              This policy explains what personal information we collect, why,
              how we use and share it, and what rights you have. As a financial
              institution we are also subject to the Gramm-Leach-Bliley Act, and
              our GLBA Privacy Notice appears in Section 11 of this policy.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section
            id="information-we-collect"
            className="space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              2. Information We Collect
            </h2>

            <div className="space-y-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900">
                  You give us directly:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                  <li>
                    <strong className="text-slate-800">Identity:</strong> Full
                    name, date of birth, Social Security number, driver’s
                    licence or state ID number and issuing state.
                  </li>
                  <li>
                    <strong className="text-slate-800">Contact:</strong> Email,
                    phone, residential address, mailing address.
                  </li>
                  <li>
                    <strong className="text-slate-800">Financial:</strong> Net
                    monthly income, income source, pay frequency, employment
                    status, employer name and phone, length of employment,
                    housing status and cost, existing obligations.
                  </li>
                  <li>
                    <strong className="text-slate-800">Banking:</strong> Bank
                    name, account type, routing number, account number, account
                    age, current balance range, direct deposit status.
                  </li>
                  <li>
                    <strong className="text-slate-800">Assets:</strong> Vehicle
                    ownership, year, make, model, and payoff status.
                  </li>
                  <li>
                    <strong className="text-slate-800">Loan Request:</strong>{" "}
                    Amount requested, purpose, and additional descriptions
                    provided.
                  </li>
                  <li>
                    <strong className="text-slate-800">Documents:</strong>{" "}
                    Identification, pay stubs, bank statements, proof of
                    address.
                  </li>
                  <li>
                    <strong className="text-slate-800">Communications:</strong>{" "}
                    Emails, call recordings (where recorded and disclosed),
                    support messages.
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900">
                  Collected automatically:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                  <li>
                    IP address and approximate geographic location derived from
                    it.
                  </li>
                  <li>
                    Browser type and version, operating system, device type,
                    screen resolution.
                  </li>
                  <li>
                    Pages visited, time on page, referring URL, exit pages.
                  </li>
                  <li>Date and time of visit and application submission.</li>
                  <li>
                    Cookies and similar technologies (see our{" "}
                    <Link
                      href="/cookie-policy"
                      className="text-sky-600 underline"
                    >
                      Cookie Policy
                    </Link>
                    ).
                  </li>
                  <li>
                    Form interaction data, including time spent completing the
                    application.
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900">
                  From third parties:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                  <li>
                    Consumer reports from nationwide and alternative consumer
                    reporting agencies.
                  </li>
                  <li>Identity verification and fraud prevention data.</li>
                  <li>
                    Bank account and transaction data via Plaid, with your
                    authorization.
                  </li>
                  <li>Employment and income verification data.</li>
                  <li>Public records and address verification data.</li>
                  <li>
                    Marketing partners and advertising platforms, where engaged
                    with our advertising.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Why We Collect It */}
          <section id="why-we-collect-it" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              3. Why We Collect It
            </h2>
            <p>
              To process and evaluate your application · verify your identity as
              required under the Bank Secrecy Act and USA PATRIOT Act · assess
              creditworthiness and ability to repay · verify income, employment,
              and bank account ownership · detect and prevent fraud · originate,
              service, and collect loans · report to consumer reporting agencies
              · communicate about your application and loan · comply with
              federal and state law, including recordkeeping, ECOA, and
              anti-money-laundering obligations · improve our website and
              services · with your consent, send marketing communications.
            </p>
            <p>
              Legal bases include your consent, the necessity of processing to
              take steps at your request before entering a contract and to
              perform that contract, our legal obligations, and our legitimate
              interests in fraud prevention and business operation.
            </p>
          </section>

          {/* 4. How We Share It */}
          <section id="how-we-share-it" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              4. How We Share It
            </h2>
            <p className="font-semibold text-slate-900">
              We do not sell your personal information to third parties for
              their own marketing purposes.
            </p>
            <div className="border border-slate-200 rounded-2xl overflow-x-auto shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-900 font-bold">
                  <tr>
                    <th className="p-3.5">Recipient</th>
                    <th className="p-3.5">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {sharingTable.map((row, idx) => (
                    <tr key={idx}>
                      <td className="p-3.5 font-semibold text-slate-800 whitespace-nowrap sm:whitespace-normal">
                        {row.recipient}
                      </td>
                      <td className="p-3.5 text-slate-600">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500">
              All service providers are bound by contract to protect your
              information and use it only for the purposes we specify.
            </p>
          </section>

          {/* 5. How Long We Keep It */}
          <section id="how-long-we-keep-it" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              5. How Long We Keep It
            </h2>
            <p>
              Credit application records are retained at least 25 months as
              required by Regulation B, and generally seven years to satisfy
              federal and state recordkeeping requirements. Loan records are
              retained seven years after payoff or charge-off. After the
              applicable period we delete or de-identify your information. Some
              information may be retained longer where required by law or where
              necessary to resolve disputes or enforce agreements.
            </p>
          </section>

          {/* 6. How We Protect It */}
          <section id="how-we-protect-it" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              6. How We Protect It
            </h2>
            <p>
              256-bit TLS encryption in transit; AES-256 encryption at rest;
              field-level encryption on Social Security numbers, dates of birth,
              and bank account credentials; role-based access limited to
              personnel with a business need; multi-factor authentication on all
              internal systems; audit logging of access to sensitive data;
              regular security assessments and penetration testing; a written
              Information Security Program maintained under the FTC Safeguards
              Rule. No system is perfectly secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          {/* 7. Your Rights */}
          <section id="your-rights" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              7. Your Rights
            </h2>
            <p>
              <strong className="text-slate-900">All applicants:</strong> Access
              the information we hold about you · request correction of
              inaccurate information · request deletion, subject to our legal
              retention obligations · opt out of marketing communications at any
              time · opt out of certain information sharing as described in our
              GLBA notice.
            </p>
            <p>
              <strong className="text-slate-900">
                California residents (CCPA/CPRA):
              </strong>{" "}
              The right to know the categories and specific pieces of personal
              information collected, the sources, the business purpose, and the
              categories of recipients · the right to delete · the right to
              correct · the right to opt out of sale or sharing (we do not sell
              or share as those terms are defined) · the right to limit use of
              sensitive personal information · the right to non-discrimination
              for exercising these rights. Note that information collected in
              connection with a financial product is largely governed by the
              GLBA and exempt from certain CCPA provisions. Submit requests at{" "}
              <a
                href="mailto:privacy@ryerloans.com"
                className="text-sky-600 underline"
              >
                privacy@ryerloans.com
              </a>
              , via [Do Not Sell My Personal Information], or by calling (747)
              200-5220. We verify identity before responding and reply within 45
              days, extendable by a further 45 days with notice.
            </p>
            <p>
              <strong className="text-slate-900">Other state residents:</strong>{" "}
              Residents of Virginia, Colorado, Connecticut, Utah, Texas, Oregon,
              Montana, and others as laws take effect have comparable rights.
              Contact{" "}
              <a
                href="mailto:privacy@ryerloans.com"
                className="text-sky-600 underline"
              >
                privacy@ryerloans.com
              </a>
              .
            </p>
          </section>

          {/* 8. Cookies, Children & Links */}
          <section
            id="cookies-children-links"
            className="space-y-4 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              8. Cookies, Children & Third-Party Links
            </h2>
            <p>
              See our{" "}
              <Link
                href="/cookie-policy"
                className="text-sky-600 underline font-medium"
              >
                Cookie Policy
              </Link>
              . We honour Global Privacy Control signals. Our services are not
              directed to anyone under 18, and we do not knowingly collect
              information from minors. If we learn we have, we delete it. Our
              site links to third-party sites. We are not responsible for their
              privacy practices.
            </p>
          </section>

          {/* 9. Policy Changes */}
          <section id="policy-changes" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              9. Policy Changes
            </h2>
            <p>
              Material changes will be posted here with an updated date and,
              where required, communicated to you directly.
            </p>
          </section>

          {/* 10. Contact Us */}
          <section id="contact-us" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              10. Contact Us
            </h2>
            <p className="font-mono text-sm bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              Privacy Officer, Ryer Loans <br />
              {RATE_CONFIG.address} <br />
              Email: privacy@ryerloans.com | Phone: {RATE_CONFIG.phone}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
