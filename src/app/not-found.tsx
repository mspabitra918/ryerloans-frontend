import Link from "next/link";
import {
  FileQuestion,
  ArrowLeft,
  Home,
  HelpCircle,
  PhoneCall,
} from "lucide-react";
import { RATE_CONFIG } from "@/src/lib/config";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 text-slate-700">
      <div className="max-w-md w-full text-center space-y-8">
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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/apply"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Application</span>
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold border border-slate-300 px-6 py-3 rounded-xl transition text-sm"
          >
            <Home className="w-4 h-4 text-slate-500" />
            <span>Home Page</span>
          </Link>
        </div>

        {/* Helpful Links Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs space-y-3 mt-8">
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
