import { CategoryPageContent } from "@/components/CategoryPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Helicopter Glacier Tours in Skagway",
  description:
    "Skagway helicopter glacier flightseeing shore excursions — aerial views of Coast Mountain ice fields with High Cruise Confidence half-day formats.",
  path: "/helicopter-glacier-tours/",
});

export default function HelicopterPage() {
  return (
    <CategoryPageContent
      title="Helicopter Glacier Tours"
      description="See Skagway's glaciers from above on helicopter flightseeing tours. Typical glacier tours take about two hours in total, including a landing and guided walk on the ice — leaving time to explore downtown Gold Rush Skagway."
      path="/helicopter-glacier-tours/"
      category="helicopter-glacier"
      extraContent={
        <section className="mb-8 rounded-xl bg-cream border border-forest/10 p-6">
          <p className="text-mountain leading-relaxed">
            Helicopter tours are weather-dependent. If your flight is rescheduled,
            monitor how the new time affects your all-aboard buffer. Expect high
            helicopter steps and a short walk over uneven glacier ice; weight
            surcharges typically apply from about 250 lb, and medical and pregnancy
            guidance varies by operator — confirmed when you enquire. Dress warmer
            than downtown Skagway suggests — alpine air at altitude is chilly.
          </p>
        </section>
      }
    />
  );
}
