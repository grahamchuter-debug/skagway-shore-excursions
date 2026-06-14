import Link from "next/link";
import { tours } from "@/lib/tours";
import { cta } from "@/lib/site";

export function ComparisonTable() {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-forest lg:text-3xl">
        Which Skagway Excursion Is Right for You?
      </h2>
      <p className="mt-2 max-w-2xl text-mountain">
        Compare duration, activity level, and cruise confidence across our most
        popular Skagway shore excursions.
      </p>
      <div className="mt-6 overflow-x-auto rounded-xl border border-forest/10 bg-white shadow-sm">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-forest/10 bg-cream">
              <th className="px-4 py-3 font-semibold text-forest">Tour</th>
              <th className="px-4 py-3 font-semibold text-forest">Duration</th>
              <th className="px-4 py-3 font-semibold text-forest">Activity</th>
              <th className="px-4 py-3 font-semibold text-forest">Best For</th>
              <th className="px-4 py-3 font-semibold text-forest">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour, i) => (
              <tr
                key={tour.slug}
                className={i % 2 === 0 ? "bg-white" : "bg-cream/50"}
              >
                <td className="px-4 py-3">
                  <Link
                    href={`/tours/${tour.slug}/`}
                    className="font-medium text-glacier hover:text-forest"
                  >
                    {tour.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-mountain">{tour.duration}</td>
                <td className="px-4 py-3 text-mountain">{tour.activityLevel}</td>
                <td className="px-4 py-3 text-mountain">{tour.bestFor[0]}</td>
                <td className="px-4 py-3">
                  <span className="text-xs font-medium text-forest">
                    {tour.cruiseConfidence.replace(" Cruise Confidence", "")}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-mountain">
        <Link href="/excursions/" className="font-semibold text-glacier hover:text-forest">
          {cta.compareTours}
        </Link>{" "}
        — view full details, pricing, and booking guidance for each excursion.
      </p>
    </section>
  );
}
