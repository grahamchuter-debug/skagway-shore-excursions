import Link from "next/link";
import { cta } from "@/lib/site";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-10">
      <h1 className="font-display text-3xl font-bold text-forest sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-mountain leading-relaxed">
        {description}
      </p>
    </header>
  );
}

interface CTABannerProps {
  title: string;
  description: string;
  href?: string;
  buttonLabel?: string;
}

export function CTABanner({
  title,
  description,
  href = "/excursions/",
  buttonLabel = cta.viewExcursions,
}: CTABannerProps) {
  return (
    <section className="rounded-xl bg-gradient-to-br from-forest to-forest-dark p-8 text-center text-white lg:p-12">
      <h2 className="font-display text-2xl font-semibold text-gold-light lg:text-3xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-white/80">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-block rounded-md bg-gold px-6 py-3 text-sm font-semibold text-forest-dark hover:bg-gold-light"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
