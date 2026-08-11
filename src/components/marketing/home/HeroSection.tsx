import Link from "next/link";

export const metadata = {
  title: "Personal Loans $2,000–$25,000 at 10% Fixed APR | Ryer Loans",
  description:
    "Apply online for a personal loan from $2,000 to $25,000 at a fixed 10.00% APR. All credit types considered. Direct lender. Fast online application — no obligation to accept.",
  keywords: [
    "personal loans",
    "personal loan",
    "online personal loans",
    "personal loans direct lender",
  ],
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_35%),linear-gradient(135deg,_#030712_0%,_#07111f_45%,_#030712_100%)] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200 backdrop-blur">
          Fixed 10.00% APR • No origination fee • Fast online application
        </div>

        <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
          Personal Loans From $2,000 to $25,000 at a Fixed 10.00% APR.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          Apply online in minutes, review your terms clearly, and borrow with a
          simple rate that stays the same from day one to payoff.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/apply"
            className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            Apply Now
          </Link>
          <Link
            href="/loan-status"
            className="rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-white/10"
          >
            Check Application Status
          </Link>
        </div>

        <p className="mt-4 text-sm text-slate-400">
          Applying takes about seven minutes and does not obligate you to accept
          a loan.
        </p>
      </div>
    </section>
  );
}
