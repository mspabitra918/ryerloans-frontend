import { Eye, Mail, Phone, Clock, CheckCircle2 } from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

const sections = [
  { id: "our-commitment", title: "1. Our Commitment" },
  { id: "accessibility-features", title: "2. Accessibility Features" },
  { id: "feedback-support", title: "3. Feedback & Assistance" },
];

export default function AccessibilityContent() {
  const rawPhone = RATE_CONFIG.phone.replace(/[^0-9+]/g, "");

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 text-slate-700 text-base leading-relaxed px-4 sm:px-6 lg:px-8">
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-sm">
        <Eye className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-sky-950 leading-relaxed">
          Ryer Loans is committed to ensuring digital accessibility for people
          with disabilities. We continually improve the user experience for
          everyone and apply the relevant accessibility standards.
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
          <section id="our-commitment" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              1. Our Commitment
            </h2>
            <p>
              Ryer Loans is committed to making <strong>ryerloans.com</strong>{" "}
              accessible to everyone, including individuals with disabilities.
              We aim to conform to the{" "}
              <strong>
                Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              </strong>{" "}
              standards and conduct periodic accessibility audits to ensure
              compliance.
            </p>
          </section>

          <section
            id="accessibility-features"
            className="space-y-3 scroll-mt-24"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-200 pb-2">
              2. Technical Accessibility Features
            </h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                <li>
                  Full support for keyboard-only site navigation and focus
                  indicators
                </li>
                <li>
                  Screen reader compatibility with clear ARIA labels and
                  structure
                </li>
                <li>
                  Support for text resizing up to 200% without loss of content
                  or functional capability
                </li>
                <li>
                  Sufficient color contrast ratios across all text and
                  interactive elements
                </li>
              </ul>
            </div>
          </section>

          <section
            id="feedback-support"
            className="bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md space-y-4 scroll-mt-24"
          >
            <h2 className="font-bold text-slate-900 text-lg">
              3. Feedback &amp; Assistance
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              If you encounter any barrier or difficulty accessing content on
              our website, please contact us so we can provide the information
              or service you need in an accessible format:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm pt-2">
              <div className="space-y-1">
                <span className="font-bold text-slate-900 block">
                  Accessibility Email:
                </span>
                <p className="text-slate-600">
                  <a
                    href="mailto:accessibility@ryerloans.com"
                    className="text-sky-600 underline"
                  >
                    accessibility@ryerloans.com
                  </a>
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-slate-900 block">
                  Phone Support:
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
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>
                We aim to acknowledge and respond to all accessibility requests
                within <strong>three (3) business days</strong>.
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
