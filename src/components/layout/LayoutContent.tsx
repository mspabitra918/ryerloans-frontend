"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "../marketing/layout/Footer";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Hide global layout elements on specific routes
  const isThankYouPage = pathname === "/thank-you";
  const isAdminPage =
    pathname.startsWith("/auth") ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/investments") ||
    pathname.startsWith("/investments") ||
    pathname.startsWith("/investments") ||
    pathname.startsWith("/investments");

  const hideHeaderFooter = isThankYouPage || isAdminPage;
  const hideFooter =
    pathname.startsWith("/auth") ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/investments") ||
    pathname.startsWith("/loan-status") ||
    pathname.startsWith("/apply") ||
    pathname.startsWith("/investments");

  return (
    <>
      {!hideHeaderFooter && <Navbar />}
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </>
  );
}
