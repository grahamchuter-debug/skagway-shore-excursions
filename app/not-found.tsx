import Link from "next/link";
import { siteConfig, categoryLinks } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <title>Page not found | {siteConfig.name}</title>
      <h1 className="font-display text-4xl font-bold text-forest sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 text-mountain leading-relaxed">
        This page does not exist on Skagway Shore Excursions. Try a White Pass,
        Yukon, or port-day guide instead.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
        <Link
          href="/"
          className="rounded-md bg-gold px-5 py-2.5 font-semibold text-forest-dark hover:bg-gold-light"
        >
          Homepage
        </Link>
        <Link
          href="/excursions/"
          className="rounded-md border border-forest/20 px-5 py-2.5 font-semibold text-forest hover:bg-cream"
        >
          All Excursions
        </Link>
        <Link
          href="/white-pass-railway-tours/"
          className="rounded-md border border-forest/20 px-5 py-2.5 font-semibold text-forest hover:bg-cream"
        >
          White Pass Railway
        </Link>
        <Link
          href="/yukon-tours-from-skagway/"
          className="rounded-md border border-forest/20 px-5 py-2.5 font-semibold text-forest hover:bg-cream"
        >
          Yukon Tours
        </Link>
        <Link
          href="/port-guide/"
          className="rounded-md border border-forest/20 px-5 py-2.5 font-semibold text-forest hover:bg-cream"
        >
          Port Guide
        </Link>
        <Link
          href="/one-day-in-skagway/"
          className="rounded-md border border-forest/20 px-5 py-2.5 font-semibold text-forest hover:bg-cream"
        >
          One Day in Skagway
        </Link>
      </div>
      <ul className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-mountain">
        {categoryLinks.slice(0, 4).map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-forest underline-offset-2 hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-sm text-mountain">
        Questions:{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-medium text-glacier underline hover:text-forest"
        >
          {siteConfig.email}
        </a>
      </p>
    </div>
  );
}
