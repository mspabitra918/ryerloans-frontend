import Link from "next/link";

export const metadata = {
  title: "Personal Loans $2,000–$25,000 at 10% Fixed APR | Ryer Loans",
  description:
    "Apply online for a personal loan from $2,000 to $25,000 at a fixed 10.00% APR. Fast online application with clear terms.",
  keywords: [
    "personal loans",
    "personal loan",
    "online personal loans",
    "personal loans direct lender",
  ],
};

const benefits = [
  {
    title: "Secure & Private",
    description: "256-bit encryption",
  },
  {
    title: "Fast Funding",
    description: "As soon as the next business day*",
  },
  {
    title: "Fixed 10.00% APR",
    description: "Same rate from start to finish",
  },
  {
    title: "Responsible Lending",
    description: "Clear terms. No hidden fees.",
  },
];

function BenefitIcon({ index }: { index: number }) {
  const paths = [
    <>
      <path d="M12 3l8 3v5c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-3z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </>,
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3 2" />
    </>,
    <>
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16" cy="16" r="2.5" />
      <path d="M18 6L6 18" />
    </>,
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8 12 2.5 2.5L16 9" />
    </>,
  ];

  return (
    <svg
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      {paths[index]}
    </svg>
  );
}

function FactIcon({ type }: { type: string }) {
  if (type === "money") {
    return (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v12M15 9.5c0-1-1.1-1.8-3-1.8s-3 .8-3 2 1.2 1.7 3 2c1.8.3 3 1 3 2.1s-1.1 2-3 2-3-.9-3-2" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <rect x="3.5" y="5" width="17" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3.5 9h17" />
        <path d="M8 13h2M14 13h2M8 17h2M14 17h2" />
      </svg>
    );
  }

  if (type === "rate") {
    return (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  return (
    <svg
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M12 3c1.5 2 5 2.5 6.5 5.5 1.7 3.5-.2 8.2-4.1 9.7-4.2 1.7-8.8-.5-9.8-4.7-.8-3.1.8-5.4 3.3-7.2C10 5.1 11.1 4.2 12 3z" />
      <path d="M9 13c.5 1.2 1.5 1.8 3 1.8 1.4 0 2.5-.7 2.5-1.8 0-1.1-1-1.6-2.5-2-1.5-.4-2.5-.9-2.5-2 0-1 .9-1.7 2.3-1.7 1.1 0 2 .4 2.5 1.3" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#FCFAF5] px-4 pb-14 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
        {/* Soft background decorations */}
        {/* <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-sky-100/50 blur-3xl" /> */}

        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-[#1558D6]">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 3l8 3v5c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-3z" />
              <path d="m8.5 12 2.2 2.2 4.8-5" />
            </svg>
            Fixed 10.00% APR • No origination fee • Fast online application
          </div>

          {/* Heading */}
          <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-[#13294B] sm:text-5xl lg:text-6xl">
            Personal Loans From{" "}
            <span className="text-[#1558D6]">$2,000 to $25,000</span> at a Fixed
            10.00% APR.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Apply online in minutes, review your terms clearly, and borrow with
            a simple rate that stays the same from day one to payoff.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/apply"
              className="rounded-lg bg-[#1558D6] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0F47B0]"
            >
              Apply Now
            </Link>

            <Link
              href="/loan-status"
              className="rounded-lg border border-[#1558D6] bg-white px-8 py-3.5 text-sm font-semibold text-[#1558D6] transition hover:bg-blue-50"
            >
              Check Application Status
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="5" y="10" width="14" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>

            <span>
              Applying takes about seven minutes and does not obligate you to
              accept a loan.
            </span>
          </div>

          {/* Benefits */}
          <div className="mt-10 w-full border-t border-slate-200 pt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="flex items-center justify-center gap-3 border-slate-200 lg:border-r lg:last:border-r-0"
                >
                  <div className="text-[#1558D6]">
                    <BenefitIcon index={index} />
                  </div>

                  <div className="text-left">
                    <p className="text-sm font-semibold text-[#13294B]">
                      {benefit.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOAN FACTS */}
      <section className="bg-[#12366B] px-4 py-7 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* Loan Amount */}
          <div className="flex items-center gap-4 px-5 lg:border-r lg:border-white/20">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
              <FactIcon type="money" />
            </div>

            <div>
              <p className="text-sm font-semibold">Loan Amounts</p>
              <p className="mt-1 text-sm text-blue-100">$2,000 – $25,000</p>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-4 px-5 lg:border-r lg:border-white/20">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
              <FactIcon type="calendar" />
            </div>

            <div>
              <p className="text-sm font-semibold">Loan Terms</p>
              <p className="mt-1 text-sm text-blue-100">12 to 60 months</p>
            </div>
          </div>

          {/* APR */}
          <div className="flex items-center gap-4 px-5 lg:border-r lg:border-white/20">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
              <FactIcon type="rate" />
            </div>

            <div>
              <p className="text-sm font-semibold">Fixed APR</p>
              <p className="mt-1 text-sm text-blue-100">10.00%</p>
            </div>
          </div>

          {/* Origination Fee */}
          <div className="flex items-center gap-4 px-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
              <FactIcon type="fee" />
            </div>

            <div>
              <p className="text-sm font-semibold">No Origination Fee</p>
              <p className="mt-1 text-sm text-blue-100">Never</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
