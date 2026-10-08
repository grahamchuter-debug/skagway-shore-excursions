"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { navLinks, categoryLinks, cta, enquireHref } from "@/lib/site";

/** Native <details> menu so it opens without JavaScript; closes on navigation once hydrated. */
export function MobileMenu() {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  return (
    <details ref={ref} className="group lg:hidden">
      <summary
        className="flex cursor-pointer list-none items-center gap-1.5 rounded-md border border-white/30 px-3 py-2 text-xs font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden"
        aria-label="Open menu"
      >
        <span aria-hidden="true" className="text-base leading-none group-open:hidden">
          ☰
        </span>
        <span aria-hidden="true" className="hidden text-base leading-none group-open:inline">
          ✕
        </span>
        Menu
      </summary>
      <nav
        aria-label="Mobile navigation"
        className="absolute inset-x-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-forest-dark px-4 pb-6 pt-2 shadow-xl"
      >
        <ul className="divide-y divide-white/10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="block py-3 text-base font-medium text-white hover:text-gold-light">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-glacier-light">Tour themes</p>
        <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {categoryLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="block py-1 text-white/80 hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={enquireHref()}
          className="mt-6 block rounded-md bg-gold px-4 py-3 text-center text-sm font-semibold text-forest-dark hover:bg-gold-light"
        >
          {cta.enquire}
        </Link>
      </nav>
    </details>
  );
}
