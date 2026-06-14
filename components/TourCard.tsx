import Link from "next/link";
import Image from "next/image";
import type { Tour } from "@/lib/tours";
import { formatPrice } from "@/lib/tours";
import { CruiseConfidenceBadge } from "./CruiseConfidenceBadge";

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <article className="card-hover flex flex-col overflow-hidden rounded-xl border border-forest/10 bg-white shadow-sm">
      <Link href={`/tours/${tour.slug}/`} className="relative block aspect-[16/10]">
        <Image
          src={tour.image}
          alt={tour.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <CruiseConfidenceBadge level={tour.cruiseConfidence} />
          <span className="text-sm font-semibold text-forest">
            From {formatPrice(tour.priceFrom)}
          </span>
        </div>
        <h3 className="font-display text-lg font-semibold text-forest">
          <Link href={`/tours/${tour.slug}/`} className="hover:text-glacier">
            {tour.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-mountain leading-relaxed">
          {tour.shortDescription}
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-mountain">
          <div>
            <dt className="font-semibold text-forest">Duration</dt>
            <dd>{tour.duration}</dd>
          </div>
          <div>
            <dt className="font-semibold text-forest">Activity</dt>
            <dd>{tour.activityLevel}</dd>
          </div>
        </dl>
        <Link
          href={`/tours/${tour.slug}/`}
          className="mt-4 text-sm font-semibold text-glacier hover:text-forest"
        >
          Check Tour Options →
        </Link>
      </div>
    </article>
  );
}
