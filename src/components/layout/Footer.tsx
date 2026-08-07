import Link from "next/link";

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections: FooterSection[] = [
    {
      title: "Product",
      links: [
        { name: "Apply Now", href: "/apply" },
        { name: "Loan Status", href: "/loan-status" },
        { name: "Rates & Fees", href: "/rates-and-fees" },
        { name: "Calculator", href: "/#calculator" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Reviews", href: "/reviews" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Use", href: "/terms-of-use" },
        { name: "E-Sign Consent", href: "/e-sign-consent" },
        {
          name: "Communications Consent (TCPA)",
          href: "/communications-consent",
        },
        { name: "Fair Lending Policy", href: "/fair-lending-policy" },
        { name: "State Disclosures", href: "/state-disclosures" },
        { name: "Security Policy", href: "/security-policy" },
        { name: "Cookie Policy", href: "/cookie-policy" },
        { name: "Accessibility Statement", href: "/accessibility-statement" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#030712] text-slate-300 pt-16 pb-12 font-sans border-t border-white/10">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Brand & Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white font-bold text-xl tracking-tight hover:opacity-90 transition-opacity"
            >
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>Ryer Loans</span>
            </Link>

            {/* Subtext Description */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Ryer Loans provides fixed-rate personal loans with transparent
              terms, no hidden fees, and straightforward online application
              processing.
            </p>

            {/* Copyright */}
            <p className="text-slate-500 text-xs pt-2">
              Ryer Loans, Inc. © {currentYear}
            </p>
          </div>

          {/* Right Column: Navigation Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-white font-semibold text-sm tracking-wide">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={`${section.title}-${link.name}`}>
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-slate-400 hover:text-white transition-colors duration-150"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
