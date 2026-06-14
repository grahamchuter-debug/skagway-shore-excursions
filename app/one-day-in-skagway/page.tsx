import Link from "next/link";
import { PageHeader, CTABanner } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { cta } from "@/lib/site";

export const metadata = createMetadata({
  title: "One Day in Skagway — Cruise Port Itinerary",
  description:
    "How to spend one day in Skagway, Alaska — sample itineraries for short and long port calls, White Pass Railway, Yukon trips, and downtown Gold Rush exploring.",
  path: "/one-day-in-skagway/",
});

const itineraries = [
  {
    title: "Short Port Call (4–6 hours)",
    confidence: "High Cruise Confidence focus",
    steps: [
      "Disembark early and walk Broadway Street for Gold Rush atmosphere",
      "Choose a 2.5–3.5 hour tour: city & summit, waterfall drive, or ocean raft",
      "Grab lunch at a downtown café with time to spare before all-aboard",
    ],
    tourLink: "/excursions/",
  },
  {
    title: "Standard Port Day (6–8 hours)",
    confidence: "High to Medium Cruise Confidence",
    steps: [
      "Book a morning White Pass rail-and-bus or suspension bridge combo",
      "Return for independent time at Klondike Gold Rush National Historical Park",
      "Shop local galleries and enjoy salmon or chowder before heading back",
    ],
    tourLink: "/white-pass-railway-tours/",
  },
  {
    title: "Full Port Day (8+ hours)",
    confidence: "Medium Cruise Confidence for Yukon",
    steps: [
      "Depart on earliest Yukon rail-and-bus or Bennett Scenic Journey",
      "Carry passport — border crossing is part of the adventure",
      "Minimal extra activities; build buffer before ship all-aboard",
    ],
    tourLink: "/yukon-tours-from-skagway/",
  },
  {
    title: "Family Day",
    confidence: "High Cruise Confidence",
    steps: [
      "Summit Views and Sled Dogs for husky encounters plus mountain scenery",
      "Afternoon stroll on Broadway — short walks, ice cream, and park visitor center",
      "Optional scenic waterfall tour if energy allows",
    ],
    tourLink: "/family-friendly-skagway-excursions/",
  },
];

export default function OneDayPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "One Day in Skagway", href: "/one-day-in-skagway/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "One Day in Skagway", href: "/one-day-in-skagway/" },
        ]}
      />
      <PageHeader
        title="One Day in Skagway"
        description="Skagway rewards early risers. Whether your ship stays six hours or ten, this guide helps you balance excursions, Gold Rush history, and return-to-ship buffer time."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {itineraries.map((plan) => (
          <article
            key={plan.title}
            className="rounded-xl border border-forest/10 bg-white p-6 shadow-sm"
          >
            <h2 className="font-display text-xl font-semibold text-forest">
              {plan.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-gold">{plan.confidence}</p>
            <ol className="mt-4 space-y-3 text-mountain">
              {plan.steps.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <Link
              href={plan.tourLink}
              className="mt-4 inline-block text-sm font-semibold text-glacier hover:text-forest"
            >
              {cta.checkOptions} →
            </Link>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-xl bg-cream border border-forest/10 p-6 lg:p-8">
        <h2 className="font-display text-xl font-semibold text-forest">
          Downtown Skagway Between Tours
        </h2>
        <p className="mt-3 text-mountain leading-relaxed">
          If your excursion ends mid-afternoon, Broadway Street offers museums, the
          Red Onion Saloon, local crafts, and easy walking back to the pier. The
          national park visitor center explains the Chilkoot Trail and stampede
          history — a perfect complement to any White Pass Railway experience.
        </p>
      </section>

      <div className="mt-12">
        <CTABanner
          title="Build Your Skagway Itinerary"
          description="Compare all shore excursions with cruise confidence ratings and detailed return-to-ship advice."
          buttonLabel={cta.compareTours}
        />
      </div>
    </div>
  );
}
