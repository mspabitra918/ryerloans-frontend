"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { isKnownPath, labelForPath } from "@/src/lib/seo/route-labels";
import { breadcrumbSchema, type Crumb } from "@/src/lib/seo/schema";
import JsonLd from "./JsonLd";

/**
 * Visible breadcrumb trail plus BreadcrumbList schema, on every page below
 * root. Crumb text comes from the same label map the route registry uses, so
 * the trail, the HTML sitemap and the schema cannot drift apart.
 */

function crumbsForPath(pathname: string): Crumb[] {
  const segments = pathname.split("/").filter(Boolean);

  const trail = segments.map((_segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`;
    return { path, label: labelForPath(path) };
  });

  return [{ label: "Home", path: "/" }, ...trail];
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  /*
   * Root has no trail. Anything not in the registry gets none either — that
   * covers the noindex borrower flow, which is linear rather than hierarchical,
   * and the 404 page, where crumbs would invent a hierarchy of pages that do
   * not exist.
   */
  if (pathname === "/" || !isKnownPath(pathname)) return null;

  const crumbs = crumbsForPath(pathname);
  const last = crumbs.length - 1;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <nav
        aria-label="Breadcrumb"
        className="bg-[#F8F6F0] px-4 pb-3 sm:px-6 lg:px-8"
      >
        <ol className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-slate-500">
          {crumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  className="h-3.5 w-3.5 flex-shrink-0 text-slate-400"
                  aria-hidden="true"
                />
              )}
              {index === last ? (
                <span aria-current="page" className="font-medium text-slate-700">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.path} className="transition hover:text-sky-600">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
