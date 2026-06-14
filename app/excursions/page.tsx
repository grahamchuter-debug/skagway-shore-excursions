import { PageHeader, CTABanner } from "@/components/PageHeader";
import { TourCard } from "@/components/TourCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { tours } from "@/lib/tours";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { cta } from "@/lib/site";

export const metadata = createMetadata({
  title: "Skagway Shore Excursions & Tours",
  description:
    "Browse all Skagway shore excursions — White Pass Railway, Yukon day trips, dog sledding, helicopter glaciers, and fjord adventures with cruise confidence guidance.",
  path: "/excursions/",
});

export default function ExcursionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Excursions", href: "/excursions/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Excursions", href: "/excursions/" },
        ]}
      />
      <PageHeader
        title="Skagway Shore Excursions"
        description="Every tour below includes duration, activity level, cruise confidence rating, and return-to-ship guidance. Skagway is Alaska's gateway to the White Pass Railway, Yukon Territory, and Klondike Gold Rush history."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </div>
      <div className="mt-16">
        <ComparisonTable />
      </div>
      <div className="mt-16">
        <CTABanner
          title="Need Help Choosing?"
          description="Review our One Day in Skagway itinerary guide or browse tours by theme — railway, Yukon, family-friendly, and more."
          href="/one-day-in-skagway/"
          buttonLabel={cta.planPortDay}
        />
      </div>
    </div>
  );
}
