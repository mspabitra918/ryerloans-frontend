import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  ShieldCheck,
} from "lucide-react";
import type { ReactNode } from "react";

interface SectionItem {
  heading: string;
  body: ReactNode;
}

interface FaqItem {
  question: string;
  answer: ReactNode;
}

interface InternalLink {
  label: string;
  href: string;
}

interface InformationalPageProps {
  title: string;
  description: string;
  path?: string;
  h1: string;
  intro: ReactNode;
  sections: SectionItem[];
  faqItems: FaqItem[];
  internalLinks: InternalLink[];
  authorName: string;
  authorCredentials: string;
  authorBio: string;
  reviewedBy: string;
  lastUpdated: string;
  sources: string[];
  ctaLabel: string;
  ctaHref: string;
}

export default function InformationalPage({
  title,
  description,
  h1,
  intro,
  sections,
  faqItems,
  internalLinks,
  authorName,
  authorCredentials,
  authorBio,
  reviewedBy,
  lastUpdated,
  sources,
  ctaLabel,
  ctaHref,
}: InformationalPageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof item.answer === "string" ? item.answer : "",
      },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-slate-200 bg-[#030712]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
              Informational resource
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {h1}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">{intro}</p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-slate-700">
            <span className="rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-700">
              {authorName}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              {authorCredentials}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Reviewed by {reviewedBy}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8">
        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <BadgeCheck className="h-5 w-5 text-sky-600" />
              <h2 className="text-base font-semibold text-slate-900">
                About the author
              </h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600">{authorBio}</p>
            <p className="mt-4 text-sm font-medium text-slate-700">
              Reviewed by {reviewedBy}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Last updated {lastUpdated}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <BookOpenText className="h-5 w-5 text-sky-600" />
              <h2 className="text-base font-semibold text-slate-900">
                Related reading
              </h2>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {internalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="underline-offset-2 hover:text-sky-600 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-sky-600" />
              <h2 className="text-base font-semibold text-slate-900">
                Sources
              </h2>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {sources.map((source) => (
                <li key={source} className="leading-6">
                  {source}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-medium text-sky-700">{title}</p>
            <p className="mt-3 text-base leading-8 text-slate-600">
              {description}
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <section
                key={section.heading}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-3 text-base leading-8 text-slate-600">
                  {section.body}
                </div>
              </section>
            ))}
          </div>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <BookOpenText className="h-5 w-5 text-sky-600" />
              <h2 className="text-2xl font-semibold text-slate-900">
                Frequently asked questions
              </h2>
            </div>
            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <h3 className="font-semibold text-slate-900">
                    {item.question}
                  </h3>
                  <div className="mt-2 text-sm leading-7 text-slate-600">
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
              Need a clear next step?
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              See whether a fixed-rate loan fits your budget.
            </h2>
            <p className="mt-3 text-base leading-8 text-slate-600">
              Our team can walk you through eligibility, repayment terms, and
              what to expect before you apply.
            </p>
            <Link
              href={ctaHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
