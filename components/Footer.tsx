import Link from "next/link";
import { siteConfig, categoryLinks, cta, enquireHref } from "@/lib/site";

const exploreLinks = [
  { href: "/excursions/", label: "All Excursions" },
  { href: "/port-guide/", label: "Skagway Port Guide" },
  { href: "/one-day-in-skagway/", label: "One Day in Skagway" },
  { href: "/faq/", label: "FAQ" },
];

const companyLinks = [
  { href: "/about/", label: "About Us" },
  { href: "/enquire/", label: "Enquire About a Tour" },
  { href: "/partners/", label: "Tour Operator Partnerships" },
  { href: "/privacy/", label: "Privacy Policy" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-forest-dark text-white">
      <div className="railway-stripe" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-display text-lg font-semibold text-gold-light">
              {siteConfig.name}
            </h2>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Skagway Shore Excursions is a {siteConfig.parentBrand} brand, helping cruise
              passengers plan Skagway port days — White Pass Railway, Yukon day trips,
              glacier flightseeing, and Gold Rush history.
            </p>
            <p className="mt-4 text-sm text-white/70">
              <a href={`mailto:${siteConfig.email}`} className="text-gold-light hover:underline">
                {siteConfig.email}
              </a>
            </p>
            <Link
              href={enquireHref()}
              className="mt-4 inline-block rounded-md border border-gold/40 px-4 py-2 text-sm font-medium text-gold-light hover:bg-gold/10"
            >
              {cta.enquire}
            </Link>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-glacier-light">
              Explore
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {exploreLinks.map((link) => (
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
              About
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          <p>
            Tours on this site aren&apos;t bookable online — send an enquiry and we&apos;ll
            reply by email.
          </p>
          <p className="mt-2">
            Cruise confidence ratings are planning guidance only — not a guarantee of
            return to ship. Always confirm your vessel&apos;s all-aboard time.
          </p>
          <p className="mt-2">
            © {year} {siteConfig.name}, a {siteConfig.parentBrand} brand.
          </p>
        </div>
      </div>
    </footer>
  );
}
