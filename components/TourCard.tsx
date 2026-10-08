import Link from "next/link";
import type { Tour } from "@/lib/tours";
import { borderLabel, priceLabel } from "@/lib/tours";
import { cta, enquireHref } from "@/lib/site";
import { CruiseConfidenceBadge } from "./CruiseConfidenceBadge";
import { TourImage } from "./TourImage";

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <article className="card-hover flex flex-col overflow-hidden rounded-xl border border-forest/10 bg-white shadow-sm">
      <Link href={`/tours/${tour.slug}/`} className="relative block aspect-[16/10]">
        <TourImage
          src={tour.image}
          alt={tour.imageAlt}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <CruiseConfidenceBadge level={tour.cruiseConfidence} />
          {tour.format && (
            <span className="inline-flex rounded-full border border-forest/15 px-3 py-1 text-xs font-semibold text-forest">
              {tour.format}
            </span>
          )}
        </div>
        <h3 className="font-display text-lg font-semibold text-forest">
          <Link href={`/tours/${tour.slug}/`} className="hover:text-glacier">
            {tour.name}
          </Link>
        </h3>
        <dl className="mt-3 grid grid-cols-2 gap-2 text-xs text-mountain">
          <div>
            <dt className="font-semibold text-forest">Duration</dt>
            <dd>{tour.duration}</dd>
          </div>
          <div>
            <dt className="font-semibold text-forest">Activity</dt>
            <dd>{tour.activityLevel}</dd>
          </div>
          <div className="col-span-2">
            <dt className="font-semibold text-forest">Border</dt>
            <dd>{borderLabel[tour.crossesIntoCanada]}</dd>
          </div>
        </dl>
        <ul className="mt-4 flex-1 space-y-1.5 text-sm text-mountain">
          {tour.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2">
              <span aria-hidden="true" className="text-gold">
                ✦
              </span>
              {h}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm font-semibold text-forest">{priceLabel(tour)}</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Link
            href={`/tours/${tour.slug}/`}
            className="rounded-md border border-forest/20 px-3 py-2.5 text-center text-sm font-semibold text-forest hover:bg-cream"
            aria-label={`${cta.viewTour}: ${tour.name}`}
          >
            {cta.viewTour}
          </Link>
          <Link
            href={enquireHref(tour.slug)}
            className="rounded-md bg-gold px-3 py-2.5 text-center text-sm font-semibold text-forest-dark hover:bg-gold-light"
            aria-label={`${cta.enquireNow}: ${tour.name}`}
          >
            {cta.enquireNow}
          </Link>
        </div>
      </div>
    </article>
  );
}
