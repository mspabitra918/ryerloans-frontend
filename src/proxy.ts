import { NextRequest, NextResponse } from "next/server";

const ADMIN_AUTH_COOKIE = "river_cash_admin_auth";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const redirectPaths = [
    "/thank-you",
    "/admin",
    "/personal-loans",
    "/personal-loans-for-bad-credit",
    "/installment-loans",
    "/emergency-loans",
    "/debt-consolidation-loans",
    "/unsecured-personal-loans",
    "/personal-loan-calculator",
    "/no-credit-check-loans-explained",
    "/how-personal-loan-approval-works",
    "/personal-loan-rates-and-terms",
  ];

  const submitted = request.cookies.get("applicationSubmitted");
  if (pathname === "/thank-you" && !submitted) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    redirectPaths.some(
      (path) => pathname === path || pathname.startsWith(`${path}/`),
    )
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname === "/admin/login" || pathname.startsWith("/admin/login/")) {
    return NextResponse.next();
  }

  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    const authCookie = request.cookies.get(ADMIN_AUTH_COOKIE)?.value;

    if (!authCookie) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/thank-you",
    "/admin/:path*",
    "/personal-loans/:path*",
    "/personal-loans-for-bad-credit/:path*",
    "/installment-loans/:path*",
    "/emergency-loans/:path*",
    "/debt-consolidation-loans/:path*",
    "/unsecured-personal-loans/:path*",
    "/personal-loan-calculator/:path*",
    "/no-credit-check-loans-explained/:path*",
    "/how-personal-loan-approval-works/:path*",
    "/personal-loan-rates-and-terms/:path*",
  ],
};
