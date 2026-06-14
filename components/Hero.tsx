import Image from "next/image";
import Link from "next/link";
import { cta } from "@/lib/site";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}

export function Hero({
  title,
  subtitle,
  image,
  imageAlt,
  primaryCta = { href: "/excursions/", label: cta.viewExcursions },
  secondaryCta = { href: "/one-day-in-skagway/", label: cta.planPortDay },
}: HeroProps) {
  return (
    <section className="relative min-h-[520px] overflow-hidden lg:min-h-[620px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 lg:min-h-[620px] lg:px-8 lg:pb-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
          Skagway, Alaska · Inside Passage
        </p>
        <h1 className="font-display max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={primaryCta.href}
            className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-forest-dark transition hover:bg-gold-light"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
