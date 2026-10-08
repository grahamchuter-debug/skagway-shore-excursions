import { CategoryPageContent } from "@/components/CategoryPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Yukon Tours from Skagway",
  description:
    "Yukon Territory day trips from Skagway — Emerald Lake, suspension bridge, Klondike Highway scenery. Passport required. Cruise confidence guidance included.",
  path: "/yukon-tours-from-skagway/",
});

export default function YukonToursPage() {
  return (
    <CategoryPageContent
      title="Yukon Tours from Skagway"
      description="Cross into Canada for Emerald Lake and Carcross in the Yukon, the Yukon Suspension Bridge over the Tutshi River canyon in northern British Columbia, and the Klondike Highway. These half-day to full-day Skagway shore excursions come with passport and cruise schedule guidance built in."
      path="/yukon-tours-from-skagway/"
      category="yukon"
      extraContent={
        <section className="mb-8 rounded-xl border border-gold/30 bg-gold/5 p-6">
          <h2 className="font-display text-lg font-semibold text-forest">
            Passport Required
          </h2>
          <p className="mt-2 text-mountain leading-relaxed">
            Yukon tours cross the U.S.–Canada border. Carry a valid passport and
            keep it accessible during the journey. Border processing adds time — another
            reason to book morning departures and review Medium Cruise Confidence
            ratings carefully.
          </p>
        </section>
      }
    />
  );
}
