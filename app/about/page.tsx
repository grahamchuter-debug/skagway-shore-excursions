import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webpageSchema } from "@/lib/schema";
import { cta, enquireHref, privacyPolicy, siteConfig } from "@/lib/site";

const title = "About Skagway Shore Excursions — a Wow A Tour Brand";
const description =
  "Skagway Shore Excursions is the Skagway destination brand of Wow A Tour, helping cruise passengers choose White Pass Railway, Yukon, and Gold Rush shore excursions.";

const sectionClass = "rounded-xl border border-forest/10 bg-white p-6 shadow-sm lg:p-8";
const headingClass = "font-display text-xl font-semibold text-forest";
const bodyClass = "mt-3 text-mountain leading-relaxed";

export const metadata = createMetadata({ title, description, path: "/about/" });

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "About", href: "/about/" },
          ]),
          webpageSchema({ name: title, description, path: "/about/" }),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about/" },
        ]}
      />

      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          A {siteConfig.parentBrand} brand
        </p>
        <h1 className="font-display mt-2 text-3xl font-bold text-forest sm:text-4xl">
          About Skagway Shore Excursions
        </h1>
        <p className="mt-4 text-lg text-mountain leading-relaxed">
          Skagway Shore Excursions is part of {siteConfig.parentBrand}, our shore excursion
          business for cruise passengers. It&apos;s our destination-specific brand for
          Skagway, Alaska — focused on helping you choose the right excursion for the time
          your ship spends in port.
        </p>
      </header>

      <div className="space-y-8">
        <section className={sectionClass}>
          <h2 className={headingClass}>Part of {siteConfig.parentBrand}</h2>
          <p className={bodyClass}>
            {siteConfig.parentBrand}{" "}runs a family of destination-specific websites for cruise
            ports. Skagway Shore Excursions is not a separate company or an independent supplier — it&apos;s how {siteConfig.parentBrand} presents its Skagway planning
            guidance and excursion enquiries.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Our marketplace experience</h2>
          <p className={bodyClass}>
            {siteConfig.parentBrand} distributes shore excursions through established travel
            marketplaces, including Viator, Shore Excursions Group, and GetYourGuide. That
            experience shapes what we focus on here: duration, activity level, and
            return-to-ship timing for cruise passengers.
          </p>
          <p className="mt-3 text-sm text-mountain leading-relaxed">
            These marketplaces do not endorse this website. Naming them does not mean that
            every tour shown here is offered under a confirmed supplier agreement — we confirm
            the operator, availability, and price for your date when we reply to your enquiry.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>How enquiries work</h2>
          <p className={bodyClass}>
            Tours on this site aren&apos;t bookable online. Send us your ship, arrival date,
            and group size, and we&apos;ll reply by email with suitable options, timing
            against your port call, and current pricing. Sending an enquiry doesn&apos;t
            commit you to anything.
          </p>
          <Link
            href={enquireHref()}
            className="mt-5 inline-flex rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-forest-dark hover:bg-gold-light"
          >
            {cta.enquire}
          </Link>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Planning guidance, not guarantees</h2>
          <p className={bodyClass}>
            Every tour carries a cruise confidence rating to help you match excursions to your
            ship schedule. These ratings are guidance only — we don&apos;t claim guaranteed
            return to ship. Always confirm your vessel&apos;s all-aboard time.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Skagway tour operators</h2>
          <p className={bodyClass}>
            We&apos;re looking to work with local Skagway operators ahead of the 2027 cruise season.
            If you run tours in Skagway and would like to work with us, we&apos;d like to hear
            from you.
          </p>
          <Link
            href="/partners/"
            className="mt-5 inline-flex rounded-md border border-forest/20 px-5 py-2.5 text-sm font-semibold text-forest hover:bg-cream"
          >
            Tour operator partnerships
          </Link>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Contact</h2>
          <p className={bodyClass}>
            Email{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-glacier underline hover:text-forest">
              {siteConfig.email}
            </a>{" "}
            and we&apos;ll reply by email.
            {privacyPolicy.published ? (
              <>
                {" "}See our{" "}
                <Link href={privacyPolicy.path} className="font-medium text-glacier underline hover:text-forest">
                  privacy policy
                </Link>{" "}
                for how we handle enquiry details.
              </>
            ) : (
              " Our enquiry form explains how we use the details you send us."
            )}
          </p>
        </section>
      </div>

      <div className="mt-12">
        <CTABanner
          title="Explore Skagway Shore Excursions"
          description="Compare White Pass Railway, Yukon, and Gold Rush tours with cruise confidence ratings and return-to-ship advice."
          buttonLabel={cta.exploreExcursions}
        />
      </div>
    </div>
  );
}
