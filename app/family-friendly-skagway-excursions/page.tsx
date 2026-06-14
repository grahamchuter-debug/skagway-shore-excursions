import { CategoryPageContent } from "@/components/CategoryPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Family-Friendly Skagway Excursions",
  description:
    "Family-friendly Skagway shore excursions for all ages — easy activity levels, sled dogs, waterfalls, rail tours, and fjord adventures with High Cruise Confidence.",
  path: "/family-friendly-skagway-excursions/",
});

export default function FamilyPage() {
  return (
    <CategoryPageContent
      title="Family-Friendly Skagway Excursions"
      description="Skagway offers gentle adventures for multi-generational cruise groups. These tours prioritize easy activity levels, shorter walking requirements, and formats that typically align well with family ship schedules — from husky encounters to scenic drives and fjord raft rides."
      path="/family-friendly-skagway-excursions/"
      category="family-friendly"
    />
  );
}
