import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TourDetailSections } from "@/components/TourDetailSections";
import { JsonLd } from "@/components/JsonLd";
import { CTABanner } from "@/components/PageHeader";
import { CruiseConfidenceBadge } from "@/components/CruiseConfidenceBadge";
import { tours, getTourBySlug, formatPrice } from "@/lib/tours";
import { createMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  tourProductSchema,
  touristTripSchema,
} from "@/lib/schema";
import { cta } from "@/lib/site";

interface TourPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};

  return createMetadata({
    title: `${tour.name} — Skagway Shore Excursion`,
    description: tour.shortDescription,
    path: `/tours/${tour.slug}/`,
  });
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Excursions", href: "/excursions/" },
            { name: tour.name, href: `/tours/${tour.slug}/` },
          ]),
          tourProductSchema(tour),
          touristTripSchema(tour),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Excursions", href: "/excursions/" },
          { name: tour.name, href: `/tours/${tour.slug}/` },
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
            <Image
              src={tour.image}
              alt={tour.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
          <h1 className="font-display mt-6 text-3xl font-bold text-forest sm:text-4xl">
            {tour.name}
          </h1>
          <p className="mt-4 text-lg text-mountain leading-relaxed">
            {tour.description}
          </p>
          <div className="mt-6">
            <h2 className="font-display text-lg font-semibold text-forest">
              Tour Highlights
            </h2>
            <ul className="mt-3 space-y-2 text-mountain">
              {tour.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-gold">✦</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:col-span-2">
          <div className="sticky top-24 rounded-xl border border-forest/10 bg-white p-6 shadow-sm">
            <p className="text-sm text-mountain">From</p>
            <p className="font-display text-3xl font-bold text-forest">
              {formatPrice(tour.priceFrom)}
            </p>
            <div className="mt-4">
              <CruiseConfidenceBadge level={tour.cruiseConfidence} />
            </div>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between border-b border-forest/5 pb-2">
                <dt className="text-mountain">Duration</dt>
                <dd className="font-medium text-forest">{tour.duration}</dd>
              </div>
              <div className="flex justify-between border-b border-forest/5 pb-2">
                <dt className="text-mountain">Activity</dt>
                <dd className="font-medium text-forest">{tour.activityLevel}</dd>
              </div>
              <div className="flex justify-between border-b border-forest/5 pb-2">
                <dt className="text-mountain">Food & Drink</dt>
                <dd className="font-medium text-forest text-right max-w-[60%]">
                  {tour.foodDrink.split(" — ")[0].split(".")[0]}
                </dd>
              </div>
            </dl>
            <Link
              href="/excursions/"
              className="mt-6 block w-full rounded-md bg-gold py-3 text-center text-sm font-semibold text-forest-dark hover:bg-gold-light"
            >
              {cta.checkOptions}
            </Link>
            <Link
              href="/excursions/"
              className="mt-3 block w-full rounded-md border border-forest/20 py-3 text-center text-sm font-semibold text-forest hover:bg-cream"
            >
              {cta.compareTours}
            </Link>
          </div>
        </aside>
      </div>

      <div className="mt-12">
        <TourDetailSections tour={tour} />
      </div>

      <div className="mt-12">
        <CTABanner
          title="Explore More Skagway Tours"
          description="Compare all shore excursions to find the best fit for your cruise schedule and travel style."
          buttonLabel={cta.viewExcursions}
        />
      </div>
    </div>
  );
}
