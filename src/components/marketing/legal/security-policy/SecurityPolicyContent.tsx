import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  AlertTriangle,
  Key,
  UserCheck,
  ShieldAlert,
} from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

const sections = [
  { id: "protecting-your-data", title: "1. How We Protect Your Data" },
  { id: "bank-verification", title: "2. Bank Account Verification" },
  { id: "what-we-never-do", title: "3. What We Will Never Do" },
  { id: "how-to-protect-yourself", title: "4. How to Protect Yourself" },
  { id: "reporting-a-concern", title: "5. Reporting a Security Concern" },
];

export default function SecurityPolicyContent() {
  const rawPhone = RATE_CONFIG.phone.replace(/[^0-9+]/g, "");

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 text-slate-700 text-base leading-relaxed px-4 sm:px-6 lg:px-8">
      {/* Introduction Notice */}
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-sm">
        <Lock className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-sky-950 leading-relaxed">
          At Ryer Loans, safeguarding your personal and financial information is
          our highest priority. We deploy bank-grade encryption, continuous
          monitoring, and strict security controls to keep your data secure.
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
          {/* How We Protect Your Data */}
          <section id="protecting-your-data" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              1. How We Protect Your Data
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 text-sm pt-2">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1.5">
                <span className="font-bold text-slate-900 block">
                  In Transit
                </span>
                <p className="text-slate-600 text-xs sm:text-sm">
                  All data travels over TLS 1.3 with 256-bit encryption. HTTP
                  Strict Transport Security (HSTS) is strictly enforced across
                  all web domains.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1.5">
                <span className="font-bold text-slate-900 block">At Rest</span>
                <p className="text-slate-600 text-xs sm:text-sm">
                  AES-256 encryption on all stored data, with additional
                  field-level AES-256-GCM encryption on Social Security numbers,
                  dates of birth, driver’s license numbers, and bank account
                  credentials.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1.5">
                <span className="font-bold text-slate-900 block">
                  Key Management
                </span>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Encryption keys are stored and managed in a dedicated
                  hardware-backed key management service (KMS), completely
                  isolated from data storage.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1.5">
                <span className="font-bold text-slate-900 block">
                  Access Controls
                </span>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Role-based access controls on a strict least-privilege basis.
                  Multi-factor authentication (MFA) is mandatory for all
                  internal personnel. Every access to sensitive data is logged
                  with user, timestamp, and business reason.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1.5">
                <span className="font-bold text-slate-900 block">
                  Monitoring &amp; Testing
                </span>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Continuous security logging, automated intrusion detection,
                  rate limiting, regular vulnerability scanning, annual
                  third-party penetration testing, and continuous dependency
                  monitoring.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1.5">
                <span className="font-bold text-slate-900 block">
                  Information Security Program
                </span>
                <p className="text-slate-600 text-xs sm:text-sm">
                  We maintain a formal written Information Security Program
                  compliant with the FTC Safeguards Rule, overseen by a
                  designated Qualified Individual and reviewed annually.
                </p>
              </div>
            </div>
          </section>

          {/* Bank Account Verification */}
          <section id="bank-verification" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              2. Bank Account Verification
            </h2>
            <p>
              Bank account verification is handled securely via{" "}
              <strong>Plaid</strong>. When connecting your bank, you enter your
              credentials directly into Plaid’s secure, encrypted interface.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1">
              <p className="font-semibold text-slate-900">
                Credential Isolation:
              </p>
              <p>
                Ryer Loans never sees, receives, or stores your online banking
                username, password, or login credentials. Plaid provides us with
                read-only access to verify income and account details, and
                cannot initiate unauthorized wire transfers or withdrawals.
              </p>
            </div>
          </section>

          {/* What We Will Never Do */}
          <section id="what-we-never-do" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              3. What We Will Never Do
            </h2>
            <p className="text-sm text-slate-600">
              To protect yourself against impostor scams and phishing attempts,
              remember that Ryer Loans will <strong>NEVER</strong>:
            </p>
            <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-6 shadow-sm space-y-2.5 text-xs sm:text-sm text-rose-950">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Ask you to send money, wire funds, buy gift cards, or pay an
                  upfront fee before your loan is funded
                </li>
                <li>
                  Ask for your online banking username or password by phone,
                  email, or text
                </li>
                <li>
                  Ask you to download remote-access software or screen-sharing
                  tools
                </li>
                <li>
                  Ask for your full Social Security number or unmasked bank
                  account number via unencrypted email
                </li>
              </ul>
            </div>
          </section>

          {/* How to Protect Yourself */}
          <section
            id="how-to-protect-yourself"
            className="space-y-3 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              4. How to Protect Yourself
            </h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3 text-sm text-slate-600">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Use Strong Credentials:</strong> Maintain a unique,
                  strong password and enable multi-factor authentication on your
                  primary email account.
                </li>
                <li>
                  <strong>Verify Callers Independently:</strong> Verify our
                  phone number independently —{" "}
                  <a
                    href={`tel:${rawPhone}`}
                    className="text-sky-600 font-medium hover:underline"
                  >
                    {RATE_CONFIG.phone}
                  </a>{" "}
                  — before acting on any high-pressure call or request.
                </li>
                <li>
                  <strong>Be Suspicious of Urgency:</strong> Legitimate lenders
                  will never force immediate action through threats or
                  artificial deadlines.
                </li>
                <li>
                  <strong>Never Pay Upfront Fees:</strong> Legitimate personal
                  loans do not require upfront payments, collateral deposits, or
                  advance transfer fees.
                </li>
              </ul>
            </div>
          </section>

          {/* Reporting a Concern */}
          <section
            id="reporting-a-concern"
            className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md space-y-4 scroll-mt-24"
          >
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-rose-600 flex-shrink-0" />
              <h2 className="font-bold text-slate-900 text-lg">
                5. Reporting a Security Incident or Fraud Concern
              </h2>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              If you suspect fraudulent activity on your account, believe you
              have received a suspicious communication claiming to be from Ryer
              Loans, or wish to report a security vulnerability:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm pt-2">
              <div className="space-y-1">
                <span className="font-bold text-slate-900 block">
                  Security Team:
                </span>
                <p className="text-slate-600">
                  Email:{" "}
                  <a
                    href="mailto:security@ryerloans.com"
                    className="text-sky-600 underline"
                  >
                    security@ryerloans.com
                  </a>
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-slate-900 block">
                  Immediate Fraud Support:
                </span>
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
            </div>
            <p className="text-xs text-slate-500 pt-2">
              We promptly investigate all reported incidents and will notify
              affected individuals in full compliance with state and federal
              security breach notification regulations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
