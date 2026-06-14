import Image from "next/image";
import Link from "next/link";
import { cta } from "@/lib/site";

export function WhitePassHighlight() {
  return (
    <section className="overflow-hidden rounded-xl bg-white shadow-sm border border-forest/10">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[280px] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
            alt="White Pass and Yukon Route Railway train climbing through alpine mountains near Skagway Alaska"
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
            Built in 1898 during the Klondike Gold Rush, this narrow-gauge railway
            climbs from sea level to White Pass Summit — nearly 3,000 feet — through
            tunnels, trestles, and waterfalls. It remains the defining Skagway
            experience for cruise passengers worldwide.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-mountain">
            <li>• Historic Gold Rush route to the summit</li>
            <li>• Combine with bus, bridge, or Yukon extensions</li>
            <li>• High Cruise Confidence on half-day formats</li>
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
            Cross into Canada&apos;s Yukon Territory for Emerald Lake, suspension
            bridges over the Tutshi River Canyon, and wide-open northern tundra.
            These full-day adventures deliver the majestic scenery that draws
            travelers to Alaska&apos;s interior.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-mountain">
            <li>• Valid passport required</li>
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
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
            alt="Emerald Lake and Yukon Territory mountain scenery on day trip from Skagway"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
