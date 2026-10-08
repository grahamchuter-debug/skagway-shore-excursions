import Link from "next/link";
import { CategoryPageContent } from "@/components/CategoryPageContent";
import { createMetadata } from "@/lib/metadata";
import { operatorPassportNote, TRAVEL_DOCS_HREF } from "@/lib/travel-documents";

export const metadata = createMetadata({
  title: "Yukon Tours from Skagway",
  description:
    "Yukon Territory day trips from Skagway — Emerald Lake, suspension bridge, Klondike Highway scenery. Border documents needed. Cruise confidence guidance included.",
  path: "/yukon-tours-from-skagway/",
});

export default function YukonToursPage() {
  return (
    <CategoryPageContent
      title="Yukon Tours from Skagway"
      description="Cross into Canada for Emerald Lake and Carcross in the Yukon, the Yukon Suspension Bridge over the Tutshi River canyon in northern British Columbia, and the Klondike Highway. These half-day to full-day Skagway shore excursions come with border-document and cruise schedule guidance built in."
      path="/yukon-tours-from-skagway/"
      category="yukon"
      extraContent={
        <section className="mb-8 rounded-xl border border-gold/30 bg-gold/5 p-6">
          <h2 className="font-display text-lg font-semibold text-forest">
            Border Documents Needed
          </h2>
          <p className="mt-2 text-mountain leading-relaxed">
            These tours cross into Canada and back into the U.S., so every traveller
            needs accepted border documents — a passport is the simplest choice.{" "}
            {operatorPassportNote} Border processing adds time — another reason to
            book morning departures and review Medium Cruise Confidence ratings
            carefully.{" "}
            <Link href={TRAVEL_DOCS_HREF} className="font-medium text-glacier underline hover:text-forest">
              Which documents you need
            </Link>
            .
          </p>
        </section>
      }
    />
  );
}
