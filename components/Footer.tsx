import Link from "next/link";
import { siteConfig, categoryLinks, cta } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-forest-dark text-white">
      <div className="railway-stripe" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-display text-lg font-semibold text-gold-light">
              {siteConfig.name}
            </h2>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Premium Skagway shore excursions for cruise passengers — White Pass
              Railway, Yukon day trips, glacier helicopters, and Gold Rush history
              in Alaska&apos;s Inside Passage.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-glacier-light">
              Explore
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/excursions/" className="text-white/70 hover:text-white">
                  All Excursions
                </Link>
              </li>
              <li>
                <Link href="/port-guide/" className="text-white/70 hover:text-white">
                  Skagway Port Guide
                </Link>
              </li>
              <li>
                <Link href="/one-day-in-skagway/" className="text-white/70 hover:text-white">
                  One Day in Skagway
                </Link>
              </li>
              <li>
                <Link href="/faq/" className="text-white/70 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-glacier-light">
              Tour Themes
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-glacier-light">
              Plan Your Visit
            </h3>
            <p className="mt-3 text-sm text-white/70">
              {siteConfig.port}
              <br />
              {siteConfig.email}
            </p>
            <Link
              href="/excursions/"
              className="mt-4 inline-block rounded-md border border-gold/40 px-4 py-2 text-sm font-medium text-gold-light hover:bg-gold/10"
            >
              {cta.planPortDay}
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          <p>
            © {year} {siteConfig.name}. {siteConfig.domain} — Skagway, Alaska cruise
            shore excursions.
          </p>
          <p className="mt-2">
            Cruise confidence ratings are planning guidance only — not a guarantee of
            return to ship. Always confirm your vessel&apos;s all-aboard time.
          </p>
        </div>
      </div>
    </footer>
  );
}
