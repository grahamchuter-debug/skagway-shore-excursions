import Link from "next/link";
import { siteConfig, navLinks, categoryLinks, cta, enquireHref } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-forest-dark/95 backdrop-blur-sm text-white">
      <div className="railway-stripe" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-lg font-semibold tracking-tight sm:text-2xl">
            Skagway Shore Excursions
          </span>
          <span className="text-xs text-glacier-light/80 sm:text-sm">
            {siteConfig.port} · White Pass & Yukon
          </span>
        </Link>
        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition hover:text-gold-light"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={enquireHref()}
            className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-forest-dark transition hover:bg-gold-light"
          >
            {cta.enquire}
          </Link>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={enquireHref()}
            className="rounded-md bg-gold px-3 py-2 text-xs font-semibold text-forest-dark"
          >
            Enquire
          </Link>
          <MobileMenu />
        </div>
      </div>
      <nav
        className="border-t border-white/10 lg:hidden"
        aria-label="Mobile category navigation"
      >
        <div className="flex gap-4 overflow-x-auto px-4 py-2 text-xs">
          {categoryLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-glacier-light hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
