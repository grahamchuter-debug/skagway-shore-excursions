import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { EnquiryForm } from "@/components/EnquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { tourOptions } from "@/lib/tours";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webpageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const title = "Enquire About a Skagway Shore Excursion";
const description =
  "Send an enquiry about Skagway shore excursions — tell us your cruise ship, arrival date, and group size and we'll reply by email with suitable options and current pricing.";

export const metadata = createMetadata({ title, description, path: "/enquire/" });

const steps = [
  {
    title: "Send your details",
    body: "Your ship, arrival date, group size, and the tours you're considering.",
  },
  {
    title: "We reply by email",
    body: "With suitable options, timing against your port call, and current pricing.",
  },
  {
    title: "You decide",
    body: "Tours aren't bookable online. Nothing is booked or charged until you confirm.",
  },
];

export default function EnquirePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Enquire", href: "/enquire/" },
          ]),
          webpageSchema({ name: title, description, path: "/enquire/" }),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Enquire", href: "/enquire/" },
        ]}
      />
      <PageHeader
        title={title}
        description="Tell us about your Skagway port day and we'll help you choose an excursion that fits your time ashore — from the White Pass Railway to Yukon day trips."
      />

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <EnquiryForm variant="tour" tours={tourOptions()} />
        </div>
        <aside className="space-y-6">
          <section className="rounded-xl border border-forest/10 bg-white p-6 shadow-sm">
            <h2 className="font-display text-lg font-semibold text-forest">How enquiries work</h2>
            <ol className="mt-4 space-y-4">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-semibold text-gold-light">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-forest">{step.title}</p>
                    <p className="text-sm text-mountain leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <section className="rounded-xl border border-forest/10 bg-cream p-6">
            <h2 className="font-display text-lg font-semibold text-forest">Prefer email?</h2>
            <p className="mt-2 text-sm text-mountain">
              Write to{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-glacier underline hover:text-forest">
                {siteConfig.email}
              </a>
              . Skagway Shore Excursions is a {siteConfig.parentBrand} brand —{" "}
              <Link href="/about/" className="font-medium text-glacier underline hover:text-forest">
                about us
              </Link>
              .
            </p>
            <p className="mt-3 text-sm text-mountain">
              Cruise confidence ratings are planning guidance, not a guarantee of return to
              ship. Always confirm your vessel&apos;s all-aboard time.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
