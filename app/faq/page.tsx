import { PageHeader, CTABanner } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faq-data";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { cta } from "@/lib/site";

export const metadata = createMetadata({
  title: "Skagway Shore Excursions FAQ",
  description:
    "Frequently asked questions about Skagway shore excursions — passports, White Pass Railway, cruise confidence, weather, booking, and return-to-ship planning.",
  path: "/faq/",
});

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "FAQ", href: "/faq/" },
          ]),
          faqPageSchema(faqs),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq/" },
        ]}
      />
      <PageHeader
        title="Skagway Shore Excursions FAQ"
        description="Answers to common questions from cruise passengers planning White Pass Railway tours, Yukon day trips, and Skagway port days."
      />

      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-forest/10 bg-white shadow-sm"
          >
            <summary className="cursor-pointer px-6 py-4 font-display font-semibold text-forest marker:content-none list-none flex justify-between items-center">
              {faq.question}
              <span className="text-glacier group-open:rotate-180 transition-transform ml-4 shrink-0">
                ▼
              </span>
            </summary>
            <div className="border-t border-forest/5 px-6 py-4 text-mountain leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>

      <div className="mt-12">
        <CTABanner
          title="Still Deciding?"
          description="Compare Skagway tours by duration, activity level, and cruise confidence on our excursions page."
          buttonLabel={cta.compareTours}
        />
      </div>
    </div>
  );
}
