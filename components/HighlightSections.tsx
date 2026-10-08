import Image from "next/image";
import Link from "next/link";
import { cta } from "@/lib/site";

export function WhitePassHighlight() {
  return (
    <section className="overflow-hidden rounded-xl bg-white shadow-sm border border-forest/10">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[280px] lg:min-h-full">
          <Image
            src="/hero-white-pass-railway.png"
            alt="White Pass & Yukon Route railway train with red roofs winding through forested mountains near Skagway, Alaska"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center p-6 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            Signature Experience
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-forest lg:text-3xl">
            White Pass & Yukon Route Railway
          </h2>
          <p className="mt-4 text-mountain leading-relaxed">
            Begun in 1898 during the Klondike Gold Rush, this narrow-gauge railway
            climbs from sea level to White Pass Summit — nearly 3,000 feet — past
            tunnels, trestles, and waterfalls. It&apos;s the classic Skagway excursion
            for cruise passengers.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-mountain">
            <li>• Historic Gold Rush route to the summit</li>
            <li>• Combine with bus, bridge, or Yukon extensions</li>
            <li>• High Cruise Confidence on the shorter rail-and-bus format</li>
          </ul>
          <Link
            href="/white-pass-railway-tours/"
            className="mt-6 inline-flex w-fit rounded-md bg-forest px-5 py-2.5 text-sm font-semibold text-white hover:bg-forest-dark"
          >
            {cta.viewExcursions}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function YukonHighlight() {
  return (
    <section className="overflow-hidden rounded-xl bg-white shadow-sm border border-forest/10">
      <div className="grid lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center p-6 lg:order-1 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            Cross the Border
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-forest lg:text-3xl">
            Yukon Day Trips from Skagway
          </h2>
          <p className="mt-4 text-mountain leading-relaxed">
            Cross into Canada for Emerald Lake and Carcross in the Yukon, the
            Yukon Suspension Bridge over the Tutshi River canyon in northern British
            Columbia, and the high mountain scenery of the Klondike Highway.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-mountain">
            <li>• Border documents needed — a passport is simplest</li>
            <li>• Emerald Lake and Klondike Highway vistas</li>
            <li>• Medium Cruise Confidence — plan morning departures</li>
          </ul>
          <Link
            href="/yukon-tours-from-skagway/"
            className="mt-6 inline-flex w-fit rounded-md bg-glacier px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
          >
            {cta.planPortDay}
          </Link>
        </div>
        <div className="relative order-1 min-h-[280px] lg:order-2 lg:min-h-full">
          <Image
            src="/tours/yukon-rail-and-bus-adventure.png"
            alt="Wooden &quot;Yukon — Larger than Life&quot; sign beside a mountain highway at the entrance to Yukon Territory"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
