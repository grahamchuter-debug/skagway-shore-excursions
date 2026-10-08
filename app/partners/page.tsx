import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { EnquiryForm } from "@/components/EnquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webpageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const title = "Skagway Tour Operator Partnerships — 2027 Season";
const description =
  "Local Skagway tour operators: talk to Skagway Shore Excursions, part of Wow A Tour, about working together for the 2027 cruise season.";

export const metadata = createMetadata({ title, description, path: "/partners/" });

const lookingFor = [
  "Licensed, insured operators running tours from Skagway",
  "Departures timed around cruise ship schedules",
  "Clear meeting points close to the cruise docks",
  "Realistic durations and reliable return-to-ship timing",
];

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Tour Operator Partnerships", href: "/partners/" },
          ]),
          webpageSchema({ name: title, description, path: "/partners/" }),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Tour Operator Partnerships", href: "/partners/" },
        ]}
      />
      <PageHeader
        title={title}
        description={`Skagway Shore Excursions is part of ${siteConfig.parentBrand}. Ahead of the 2027 cruise season we're looking to work with local Skagway operators whose tours suit cruise passengers.`}
      />

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <EnquiryForm variant="supplier" />
        </div>
        <aside className="space-y-6">
          <section className="rounded-xl border border-forest/10 bg-white p-6 shadow-sm">
            <h2 className="font-display text-lg font-semibold text-forest">What we look for</h2>
            <ul className="mt-4 space-y-2 text-sm text-mountain">
              {lookingFor.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="text-gold">
                    ✦
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-xl border border-forest/10 bg-cream p-6">
            <h2 className="font-display text-lg font-semibold text-forest">Good to know</h2>
            <p className="mt-2 text-sm text-mountain leading-relaxed">
              Tours described on this site are not necessarily offered under a supplier
              agreement, and listing a tour type here doesn&apos;t imply a partnership with
              any operator. We&apos;ll reply by email to discuss next steps — there&apos;s no
              commitment on either side.
            </p>
            <p className="mt-3 text-sm text-mountain">
              Prefer email?{" "}
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Skagway supplier partnership 2027")}`}
                className="font-medium text-glacier underline hover:text-forest"
              >
                {siteConfig.email}
              </a>
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
