import { CategoryPageContent } from "@/components/CategoryPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Family-Friendly Skagway Excursions",
  description:
    "Family-friendly Skagway shore excursions for all ages — easy activity levels, sled dogs, waterfalls, and rail tours with cruise confidence guidance.",
  path: "/family-friendly-skagway-excursions/",
});

export default function FamilyPage() {
  return (
    <CategoryPageContent
      title="Family-Friendly Skagway Excursions"
      description="Skagway offers gentle adventures for multi-generational cruise groups. These tours prioritize easy activity levels, shorter walking requirements, and formats that typically align well with family ship schedules — from rail journeys and husky encounters to scenic waterfall drives. Age, weight, and health rules vary by tour, so tell us your children's ages when you enquire."
      path="/family-friendly-skagway-excursions/"
      category="family-friendly"
    />
  );
}
