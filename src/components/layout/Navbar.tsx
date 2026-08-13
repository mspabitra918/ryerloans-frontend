"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const resourcesRef = useRef<HTMLLIElement>(null);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
    {
      name: "California Hub",
      href: "/personal-loans/california",
    },
  ];

  const resourceLinks = [
    {
      name: "Personal Loans",
      href: "/personal-loans",
    },
    {
      name: "Bad Credit Loans",
      href: "/personal-loans-for-bad-credit",
    },
    {
      name: "Installment Loans",
      href: "/installment-loans",
    },
    {
      name: "Emergency Loans",
      href: "/emergency-loans",
    },
    {
      name: "Debt Consolidation",
      href: "/debt-consolidation-loans",
    },
    {
      name: "Unsecured Loans",
      href: "/unsecured-personal-loans",
    },
    {
      name: "Loan Calculator",
      href: "/personal-loan-calculator",
    },
    {
      name: "No Credit Check",
      href: "/no-credit-check-loans-explained",
    },
    {
      name: "Approval Process",
      href: "/how-personal-loan-approval-works",
    },
    {
      name: "Rates & Terms",
      href: "/personal-loan-rates-and-terms",
    },
  ];

  // Close Resources dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setIsResourcesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent background page from scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close mobile menu when screen becomes desktop size
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu and resources dropdown
  function closeMobileMenu() {
    setIsOpen(false);
    setIsResourcesOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F0] p-4">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-lg border border-slate-200 bg-white px-6 py-3 shadow-sm">
        {/* =========================================================
            LOGO
        ========================================================= */}
        <Link
          href="/"
          className="z-10 flex items-center gap-2.5 font-sans text-xl font-bold tracking-tight text-[#13294B] transition-opacity hover:opacity-80"
        >
          <svg
            className="h-6 w-6 text-[#1558D6]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>

          <span>Ryer Loans</span>
        </Link>

        {/* =========================================================
            DESKTOP NAVIGATION
        ========================================================= */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-[#1558D6]"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Resources Dropdown */}
          <li className="relative" ref={resourcesRef}>
            <button
              type="button"
              onClick={() => setIsResourcesOpen((prev) => !prev)}
              aria-expanded={isResourcesOpen}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-[#1558D6]"
            >
              Resources
              {isResourcesOpen ? (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m5 15 7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              )}
            </button>

            {isResourcesOpen && (
              <div className="absolute left-0 top-8 z-50 w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                <div className="max-h-[70vh] overflow-y-auto">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsResourcesOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-blue-50 hover:text-[#1558D6]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* =========================================================
            DESKTOP CTA
        ========================================================= */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/loan-status"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#13294B] transition-all hover:border-blue-200 hover:bg-blue-50"
          >
            Loan Status
          </Link>

          <Link
            href="/apply"
            className="rounded-lg border border-[#1558D6] bg-[#1558D6] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#0F47B0]"
          >
            Apply Now
          </Link>
        </div>

        {/* =========================================================
            MOBILE MENU BUTTON
        ========================================================= */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="z-[60] rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#1558D6] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* =========================================================
            MOBILE BACKDROP
        ========================================================= */}
        <div
          onClick={closeMobileMenu}
          aria-hidden="true"
          className={`fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        />

        {/* =========================================================
            MOBILE DRAWER

            IMPORTANT:
            - overflow-hidden = drawer itself doesn't scroll
            - nav area below uses overflow-y-auto
            - bottom buttons stay fixed
        ========================================================= */}
        <aside
          aria-hidden={!isOpen}
          className={`fixed inset-y-0 left-0 z-50 flex w-[300px] max-w-[85vw] flex-col border-r border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* =====================================================
              MOBILE DRAWER HEADER
          ===================================================== */}
          <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-6 py-5">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 font-sans text-lg font-bold text-[#13294B]"
            >
              <svg
                className="h-5 w-5 text-[#1558D6]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>

              <span>Ryer Loans</span>
            </Link>

            <button
              type="button"
              onClick={closeMobileMenu}
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-[#13294B]"
              aria-label="Close menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* =====================================================
              SCROLLABLE MOBILE NAVIGATION

              ONLY THIS AREA SCROLLS
          ===================================================== */}
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-[#1558D6]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Resources */}
              <li className="mt-5">
                <div className="px-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  Resources
                </div>

                <ul className="mt-2 space-y-1">
                  {resourceLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-[#1558D6]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/* =====================================================
              MOBILE ACTIONS

              THESE STAY AT THE BOTTOM
          ===================================================== */}
          <div className="shrink-0 space-y-3 border-t border-slate-200 bg-white px-6 py-5">
            <Link
              href="/loan-status"
              onClick={closeMobileMenu}
              className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-[#13294B] transition-colors hover:border-blue-200 hover:bg-blue-50"
            >
              Loan Status
            </Link>

            <Link
              href="/apply"
              onClick={closeMobileMenu}
              className="block w-full rounded-lg bg-[#1558D6] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#0F47B0]"
            >
              Apply Now
            </Link>
          </div>
        </aside>
      </nav>
    </header>
  );
}
