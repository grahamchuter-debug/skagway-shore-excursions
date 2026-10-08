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
      description="Meet working sled dogs and their mushers on a summer dog camp tour from Skagway. Summer rides use wheeled carts rather than snow sleds. Camps beyond White Pass Summit are in Canada, so bring accepted border documents; the bumpy cart rides typically aren't recommended for guests with back or heart conditions or who are pregnant, and age rules vary by operator — confirmed when you enquire."
      path="/skagway-dog-sledding-tours/"
      category="dog-sledding"
    />
  );
}
