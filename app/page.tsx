import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TourCard } from "@/components/TourCard";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { CruiseConfidenceSection } from "@/components/CruiseConfidenceSection";
import { BestToursByTraveller } from "@/components/BestToursByTraveller";
import { WhitePassHighlight, YukonHighlight } from "@/components/HighlightSections";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CategoryGrid } from "@/components/CategoryGrid";
import { CTABanner } from "@/components/PageHeader";
import { tours } from "@/lib/tours";
import { cta } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";

export default function HomePage() {
  const featuredTours = tours.slice(0, 6);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", href: "/" }])}
      />
      <Hero
        title="Skagway Shore Excursions for Cruise Passengers"
        subtitle="Historic White Pass Railway journeys, Yukon day trips, glacier helicopters, and Gold Rush adventures — with clear cruise confidence guidance for every port day."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
        imageAlt="White Pass Railway train with alpine mountains and glacier scenery near Skagway Alaska"
        primaryCta={{ href: "/excursions/", label: cta.viewExcursions }}
        secondaryCta={{ href: "/one-day-in-skagway/", label: cta.planPortDay }}
      />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <CruisePassengerSnapshot />

        <section>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-forest lg:text-3xl">
                Featured Skagway Shore Excursions
              </h2>
              <p className="mt-2 max-w-xl text-mountain">
                From the legendary White Pass train to Yukon suspension bridges and
                helicopter glacier flightseeing.
              </p>
            </div>
            <Link
              href="/excursions/"
              className="text-sm font-semibold text-glacier hover:text-forest"
            >
              {cta.viewExcursions} →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </section>

        <WhitePassHighlight />
        <YukonHighlight />
        <BestToursByTraveller />
        <ComparisonTable />
        <CruiseConfidenceSection />

        <section>
          <h2 className="font-display text-2xl font-semibold text-forest lg:text-3xl">
            Browse by Theme
          </h2>
          <p className="mt-2 text-mountain">
            Railway, Yukon, dog sledding, helicopters, private tours, and
            family-friendly Skagway excursions.
          </p>
          <div className="mt-8">
            <CategoryGrid />
          </div>
        </section>

        <CTABanner
          title="Ready to Plan Your Skagway Port Day?"
          description="Compare tours, review cruise confidence ratings, and find the right Alaska adventure for your ship schedule."
          buttonLabel={cta.compareTours}
        />
      </div>
    </>
  );
}
