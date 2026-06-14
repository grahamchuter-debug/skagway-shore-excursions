import { CategoryPageContent } from "@/components/CategoryPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "White Pass Railway Tours from Skagway",
  description:
    "White Pass & Yukon Route Railway shore excursions from Skagway — summit rail journeys, bus combos, and Gold Rush scenery with cruise confidence guidance.",
  path: "/white-pass-railway-tours/",
});

export default function WhitePassRailwayPage() {
  return (
    <CategoryPageContent
      title="White Pass Railway Tours"
      description="Ride the historic White Pass & Yukon Route narrow-gauge railway — the defining Skagway experience. These tours climb from sea level to the summit pass stampeders crossed during the Klondike Gold Rush, with options to combine rail with motorcoach returns and Yukon extensions."
      path="/white-pass-railway-tours/"
      category="white-pass-railway"
      extraContent={
        <section className="mb-8 rounded-xl bg-cream border border-forest/10 p-6">
          <h2 className="font-display text-lg font-semibold text-forest">
            Why the White Pass Railway?
          </h2>
          <p className="mt-2 text-mountain leading-relaxed">
            Completed in 1900, the railway was an engineering marvel — 20 miles of
            track with steep grades, cliff-hanging trestles, and two tunnels. Today
            cruise passengers ride vintage parlor cars to White Pass Summit for
            panoramic views of glaciers, waterfalls, and the route to the Yukon.
          </p>
        </section>
      }
    />
  );
}
