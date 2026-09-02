"use client";
import Link from "next/link";
import {
  FileQuestion,
  ArrowLeft,
  Home,
  HelpCircle,
  PhoneCall,
  Search,
  ArrowRight,
} from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";
import { useRouter } from "next/navigation";

/** Popular destinations, so a dead URL still ends somewhere useful. */
const POPULAR_LINKS = [
  { label: "Apply for a loan", href: "/apply" },
  { label: "Check your loan status", href: "/loan-status" },
  { label: "Personal loan calculator", href: "/personal-loan-calculator" },
  {
    label: "Rates and terms explained",
    href: "/personal-loan-rates-and-terms",
  },
  { label: "Frequently asked questions", href: "/faq" },
  { label: "California city pages", href: "/personal-loans/california" },
];

export default function NotFound() {
  const route = useRouter();

  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 text-slate-700">
      <div className="max-w-xl w-full text-center space-y-8">
        {/* Visual Icon Badge */}
        <div className="relative inline-flex items-center justify-center">
          <div className="w-24 h-24 bg-sky-50 border border-sky-100 rounded-full flex items-center justify-center shadow-sm">
            <FileQuestion className="w-12 h-12 text-sky-600" />
          </div>
          <span className="absolute -top-1 -right-1 bg-slate-900 text-white font-mono text-xs font-bold px-2.5 py-0.5 rounded-full border-2 border-white shadow-sm">
            404
          </span>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved, renamed, or doesn’t exist.
          </p>
        </div>

        {/* Search */}
        {/* <form role="search" action="/search" method="get" className="flex gap-2">
          <label htmlFor="not-found-search" className="sr-only">
            Search this site
          </label>
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              id="not-found-search"
              name="q"
              type="search"
              placeholder="Search for a page"
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-9 pr-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Search
          </button>
        </form> */}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => route.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold border border-slate-300 px-6 py-3 rounded-xl transition text-sm"
          >
            <Home className="w-4 h-4 text-slate-500" />
            <span>Home Page</span>
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-left">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500">
            Popular pages
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {POPULAR_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 hover:underline"
                >
                  {link.label}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-500">
            Or browse{" "}
            <Link
              href="/sitemap"
              className="font-medium text-sky-600 hover:underline"
            >
              every page on the site map
            </Link>
            .
          </p>
        </div>

        {/* Helpful Links Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs space-y-3">
          <p className="font-semibold text-slate-900 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            Need assistance with your loan application?
          </p>
          <p className="text-slate-500 leading-relaxed">
            If you were in the middle of applying or have questions about our
            personal loans, our support team is available to assist you.
          </p>
          <div className="pt-1 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-slate-600 font-medium">
            <span className="flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
              {RATE_CONFIG.phone}
            </span>
            <a
              href="mailto:support@ryerloans.com"
              className="text-sky-600 hover:underline"
            >
              support@ryerloans.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
