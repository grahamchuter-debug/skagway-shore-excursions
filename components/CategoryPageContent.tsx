import type { ReactNode } from "react";
import { PageHeader, CTABanner } from "@/components/PageHeader";
import { TourCard } from "@/components/TourCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { getToursByCategory, type TourCategory } from "@/lib/tours";
import { breadcrumbSchema } from "@/lib/schema";
import { cta } from "@/lib/site";

interface CategoryPageProps {
  title: string;
  description: string;
  path: string;
  category: TourCategory;
  extraContent?: ReactNode;
}

export function CategoryPageContent({
  title,
  description,
  path,
  category,
  extraContent,
}: CategoryPageProps) {
  const tours = getToursByCategory(category);
  const breadcrumbName = title;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: breadcrumbName, href: path },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: breadcrumbName, href: path },
        ]}
      />
      <PageHeader title={title} description={description} />
      {extraContent}
      {tours.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      ) : (
        <p className="text-mountain">No tours currently listed in this category.</p>
      )}
      <div className="mt-12">
        <CTABanner
          title="Explore All Skagway Excursions"
          description="Compare every tour with cruise confidence ratings and detailed port-day guidance."
          buttonLabel={cta.compareTours}
          href="/excursions/"
        />
      </div>
    </div>
  );
}
