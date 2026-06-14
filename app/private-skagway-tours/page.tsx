import { CategoryPageContent } from "@/components/CategoryPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Private Skagway Tours",
  description:
    "Private and self-paced Skagway shore excursions — self-guided Jeep adventures to the Yukon and independent exploration with flexible photo stops.",
  path: "/private-skagway-tours/",
});

export default function PrivateToursPage() {
  return (
    <CategoryPageContent
      title="Private Skagway Tours"
      description="Prefer your own pace? Private-format Skagway excursions include self-guided Jeep adventures along the Klondike Highway to Emerald Lake. Drive your own vehicle on a curated route with freedom to linger at waterfalls and viewpoints — within the operator's return window."
      path="/private-skagway-tours/"
      category="private"
    />
  );
}
