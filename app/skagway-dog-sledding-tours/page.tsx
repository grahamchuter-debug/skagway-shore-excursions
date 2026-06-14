import { CategoryPageContent } from "@/components/CategoryPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Skagway Dog Sledding Tours",
  description:
    "Meet Alaskan huskies and ride with mushers on Skagway dog sledding shore excursions — summit views, kennel visits, and summer cart rides.",
  path: "/skagway-dog-sledding-tours/",
});

export default function DogSleddingPage() {
  return (
    <CategoryPageContent
      title="Skagway Dog Sledding Tours"
      description="Experience Alaska's mushing tradition at musher camps near White Pass Summit. Summer tours use wheeled carts on forest trails; you'll meet working sled dogs, learn training techniques, and enjoy alpine scenery — a favorite for families and animal lovers."
      path="/skagway-dog-sledding-tours/"
      category="dog-sledding"
    />
  );
}
