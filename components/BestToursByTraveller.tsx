import Link from "next/link";
import { cta } from "@/lib/site";

const travellerTypes = [
  {
    type: "First-Time Alaska Visitors",
    tours: ["White Pass Summit Rail and Bus", "Skagway City and White Pass Summit"],
    href: "/white-pass-railway-tours/",
  },
  {
    type: "Yukon & Scenery Seekers",
    tours: ["Yukon Rail and Bus Adventure", "Bennett Scenic Journey"],
    href: "/yukon-tours-from-skagway/",
  },
  {
    type: "Families with Kids",
    tours: ["Summit Views and Sled Dogs", "Scenic Waterfall Adventure"],
    href: "/family-friendly-skagway-excursions/",
  },
  {
    type: "Adrenaline & Aerial Fans",
    tours: ["Helicopter Glacier Discovery", "Ocean Raft Adventure"],
    href: "/helicopter-glacier-tours/",
  },
  {
    type: "Independent Explorers",
    tours: ["Self-Guided Jeep to the Yukon"],
    href: "/private-skagway-tours/",
  },
  {
    type: "History & Gold Rush Buffs",
    tours: ["Skagway City and White Pass Summit", "White Pass Summit Rail and Bus"],
    href: "/port-guide/",
  },
];

export function BestToursByTraveller() {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-forest lg:text-3xl">
        Best Tours by Traveller Type
      </h2>
      <p className="mt-2 max-w-2xl text-mountain">
        Match your Skagway port day to how you travel — whether you chase
        railways, Yukon lakes, or husky encounters.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {travellerTypes.map((item) => (
          <div
            key={item.type}
            className="rounded-xl border border-forest/10 bg-white p-5 shadow-sm"
          >
            <h3 className="font-display font-semibold text-forest">{item.type}</h3>
            <ul className="mt-3 space-y-1 text-sm text-mountain">
              {item.tours.map((tour) => (
                <li key={tour} className="flex items-start gap-2">
                  <span className="text-gold">•</span>
                  {tour}
                </li>
              ))}
            </ul>
            <Link
              href={item.href}
              className="mt-4 inline-block text-sm font-semibold text-glacier hover:text-forest"
            >
              {cta.checkOptions} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
