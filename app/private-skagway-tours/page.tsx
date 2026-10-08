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
      description="Prefer your own pace? The self-paced option listed here is a self-guided Jeep adventure along the Klondike Highway to Emerald Lake — drive a rented Jeep on a set route with audio/GPS commentary and freedom to linger at waterfalls and viewpoints, within the operator's return window. Looking for a private guided tour for your group? Send an enquiry with your group size and we'll check what's possible."
      path="/private-skagway-tours/"
      category="private"
    />
  );
}
