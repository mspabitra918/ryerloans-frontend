"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLLIElement>(null);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
    { name: "California Hub", href: "/personal-loans/california" },
  ];

  const resourceLinks = [
    { name: "Personal Loans", href: "/personal-loans" },
    { name: "Bad Credit Loans", href: "/personal-loans-for-bad-credit" },
    { name: "Installment Loans", href: "/installment-loans" },
    { name: "Emergency Loans", href: "/emergency-loans" },
    { name: "Debt Consolidation", href: "/debt-consolidation-loans" },
    { name: "Unsecured Loans", href: "/unsecured-personal-loans" },
    { name: "Loan Calculator", href: "/personal-loan-calculator" },
    { name: "No Credit Check", href: "/no-credit-check-loans-explained" },
    { name: "Approval Process", href: "/how-personal-loan-approval-works" },
    { name: "Rates & Terms", href: "/personal-loan-rates-and-terms" },
  ];

  return (
    <header className="p-4 bg-[#050b14] shadow-md  sticky top-0 z-50">
      <nav className="w-full max-w-7xl mx-auto bg-[#050b14] border border-[#1f293d] rounded-lg px-6 py-3 font-mono text-gray-200 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white font-sans font-bold text-xl tracking-tight hover:opacity-90 transition-opacity z-10"
        >
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span>Ryer Loans</span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li className="relative" ref={resourcesRef}>
            <button
              type="button"
              onClick={() => setIsResourcesOpen((prev) => !prev)}
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Resources{" "}
              {isResourcesOpen ? (
                <svg
                  className="w-4 h-4 inline-block ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 inline-block ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>

            {isResourcesOpen && (
              <div className="absolute left-0 top-8 w-56 rounded-lg border border-[#1f293d] bg-[#050b14] p-2 shadow-lg">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsResourcesOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-slate-900 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/loan-status"
            className="px-4 py-2 text-sm bg-transparent border border-[#1f293d] text-gray-200 rounded-md hover:bg-slate-900 hover:border-slate-700 transition-all"
          >
            Loan Status
          </Link>

          <Link
            href="/apply"
            className="px-4 py-2 text-sm bg-sky-100 border border-sky-100 text-slate-900 font-medium rounded-md hover:bg-sky-200 transition-all"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden text-gray-400 hover:text-white focus:outline-none p-1 z-50"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              // Close / X Icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger Icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Backdrop Dark Overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Left-to-Right Sliding Mobile Menu */}
        <aside
          className={`fixed top-0 left-0 bottom-0 w-72 bg-[#050b14] border-r border-[#1f293d] p-6 z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            {/* Mobile Header Inside Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-[#1f293d]">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-white font-sans font-bold text-lg"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span>Ryer Loans</span>
              </Link>
            </div>

            {/* Mobile Nav Links */}
            <ul className="flex flex-col gap-4 mt-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-white text-base py-1 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li>
                <div className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Resources
                </div>
                <ul className="mt-2 space-y-2">
                  {resourceLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-300 hover:text-white text-base py-1 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/* Mobile Actions at Bottom */}
          <div className="flex flex-col gap-3 pt-6 border-t border-[#1f293d]">
            <Link
              href="/loan-status"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-2.5 text-sm bg-transparent border border-[#1f293d] text-gray-200 rounded-md hover:bg-slate-900 transition-all"
            >
              Loan Status
            </Link>

            <Link
              href="/apply"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-2.5 text-sm bg-sky-100 border border-sky-100 text-slate-900 font-medium rounded-md hover:bg-sky-200 transition-all"
            >
              Apply Now
            </Link>
          </div>
        </aside>
      </nav>
    </header>
  );
}
