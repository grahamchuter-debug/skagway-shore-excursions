import Link from "next/link";
import { PageHeader, CTABanner } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { cta } from "@/lib/site";

export const metadata = createMetadata({
  title: "Skagway Port Guide for Cruise Passengers",
  description:
    "Everything cruise passengers need to know about Skagway, Alaska — pier location, Gold Rush history, White Pass Railway, weather, passports, and planning your port day.",
  path: "/port-guide/",
});

export default function PortGuidePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Port Guide", href: "/port-guide/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Port Guide", href: "/port-guide/" },
        ]}
      />
      <PageHeader
        title="Skagway Port Guide"
        description="Skagway sits at the northern end of Alaska's Inside Passage, where mountains rise straight from the Lynn Canal fjord. This compact Gold Rush town packs railway history, Yukon access, and walkable downtown charm into every cruise port call."
      />

      <div className="prose prose-forest max-w-none space-y-10">
        <section className="rounded-xl border border-forest/10 bg-white p-6 shadow-sm lg:p-8">
          <h2 className="font-display text-xl font-semibold text-forest">
            Getting Ashore
          </h2>
          <p className="mt-3 text-mountain leading-relaxed">
            Most cruise ships dock at the Broadway pier or nearby terminals, placing
            you within a five- to ten-minute walk of historic downtown Skagway.
            Tour operators for White Pass Railway and motorcoach excursions typically
            meet passengers at the pier or a short shuttle away.
          </p>
        </section>

        <section className="rounded-xl border border-forest/10 bg-white p-6 shadow-sm lg:p-8">
          <h2 className="font-display text-xl font-semibold text-forest">
            Klondike Gold Rush History
          </h2>
          <p className="mt-3 text-mountain leading-relaxed">
            Skagway boomed in 1897–1899 as stampeders rushed toward the Yukon gold
            fields. Today, wooden boardwalks, restored saloons, and the Klondike
            Gold Rush National Historical Park preserve that frontier era. Broadway
            Street is a living museum — browse shops, visit the visitor center, and
            walk the same routes prospectors once traveled.
          </p>
        </section>

        <section className="rounded-xl border border-forest/10 bg-white p-6 shadow-sm lg:p-8">
          <h2 className="font-display text-xl font-semibold text-forest">
            White Pass & Yukon Route Railway
          </h2>
          <p className="mt-3 text-mountain leading-relaxed">
            The White Pass Railway is Skagway&apos;s signature attraction — a
            narrow-gauge line climbing to the summit pass stampeders crossed on foot.
            Excursions range from half-day rail-and-bus combinations to full Yukon
            extensions.{" "}
            <Link href="/white-pass-railway-tours/" className="text-glacier font-medium">
              Browse White Pass Railway tours
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-forest/10 bg-white p-6 shadow-sm lg:p-8">
          <h2 className="font-display text-xl font-semibold text-forest">
            Yukon Territory Access
          </h2>
          <p className="mt-3 text-mountain leading-relaxed">
            Skagway is the closest Alaska port for crossing into Canada&apos;s Yukon.
            Emerald Lake, the Tutshi River Canyon suspension bridge, and Klondike
            Highway scenery await — but you need a valid passport.{" "}
            <Link href="/yukon-tours-from-skagway/" className="text-glacier font-medium">
              View Yukon tours from Skagway
            </Link>
            .
          </p>
        </section>

        <section className="rounded-xl border border-forest/10 bg-white p-6 shadow-sm lg:p-8">
          <h2 className="font-display text-xl font-semibold text-forest">
            Weather & What to Wear
          </h2>
          <p className="mt-3 text-mountain leading-relaxed">
            Skagway weather shifts quickly. Summers are mild (50–65°F) with frequent
            rain. Summit and Yukon areas run cooler. Layer with a waterproof jacket,
            warm mid-layer, and comfortable walking shoes. Open-air rail cars and
            fjord boat tours feel colder than downtown.
          </p>
        </section>

        <section className="rounded-xl border border-forest/10 bg-white p-6 shadow-sm lg:p-8">
          <h2 className="font-display text-xl font-semibold text-forest">
            Cruise Schedule Tips
          </h2>
          <p className="mt-3 text-mountain leading-relaxed">
            Match tour length to your all-aboard time. Half-day excursions typically
            offer High Cruise Confidence; full Yukon days require Medium confidence or
            careful planning. We do not claim guaranteed return to ship — always
            confirm timing with your cruise line and choose morning departures when
            possible.
          </p>
        </section>
      </div>

      <div className="mt-12">
        <CTABanner
          title="Plan Your Skagway Port Day"
          description="Use our excursion comparison tools and one-day itinerary guide to build the perfect Alaska port call."
          buttonLabel={cta.viewExcursions}
        />
      </div>
    </div>
  );
}
