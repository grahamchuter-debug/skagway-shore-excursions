import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Skagway Shore Excursions, part of Wow A Tour, handles the details you send through our enquiry forms.",
  path: "/privacy/",
  noindex: true,
});

const headingClass = "font-display text-xl font-semibold text-forest";
const bodyClass = "mt-3 text-mountain leading-relaxed";

// UNPUBLISHED DRAFT. This folder starts with "_", so Next.js does not build it.
// TODO(owner): confirm the Wow A Tour legal operator / data controller, set
// `siteConfig.legalOperator` and `privacyPolicy.published` in lib/site.ts, then rename this
// folder to app/privacy. Keep the inline notice in EnquiryForm consistent with this page.
export default function PrivacyPage() {
  const operator = siteConfig.legalOperator;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy/" },
        ]}
      />
      <PageHeader
        title="Privacy Policy"
        description="How we handle the details you send us through this website."
      />

      {!operator && (
        <div role="note" className="mb-8 rounded-lg border border-gold/50 bg-gold-light/30 px-4 py-3 text-sm text-forest">
          Draft: the legal operator and data controller named in this policy are being
          confirmed.
        </div>
      )}

      <div className="space-y-8">
        <section>
          <h2 className={headingClass}>Who we are</h2>
          <p className={bodyClass}>
            Skagway Shore Excursions ({siteConfig.domain}) is a destination brand of{" "}
            {siteConfig.parentBrand}. The data controller for information you send us is{" "}
            {operator ?? `the ${siteConfig.parentBrand} business that operates this brand`}.
            You can contact us about privacy at{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-glacier underline hover:text-forest">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className={headingClass}>What we collect</h2>
          <p className={bodyClass}>When you send a tour enquiry, we collect:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-mountain">
            <li>your name and email address</li>
            <li>your cruise ship, arrival date, and number of passengers, if you provide them</li>
            <li>the excursion you&apos;re interested in and any additional requirements you write</li>
            <li>your agreement to this policy, and the page you sent the enquiry from</li>
          </ul>
          <p className={bodyClass}>
            Tour operators using our partnership form also send their business name, website,
            and a description of their tours.
          </p>
          <p className={bodyClass}>
            To prevent spam and abuse, our enquiry service uses your IP address. We store
            only a keyed one-way fingerprint of your IP address and email address — used to
            limit repeated submissions — not the IP address itself. Where enabled, Cloudflare
            Turnstile checks that the form is being used by a person.
          </p>
        </section>

        <section>
          <h2 className={headingClass}>How we use it</h2>
          <p className={bodyClass}>
            We use your details to reply to your enquiry and help plan your Skagway excursion,
            or to discuss a potential partnership. We don&apos;t sell your information or use
            it for marketing. If you go on to book, we&apos;ll share the details needed to
            arrange your tour with the operator involved, and tell you who they are.
          </p>
        </section>

        <section>
          <h2 className={headingClass}>Where it&apos;s stored and who processes it</h2>
          <p className={bodyClass}>
            Enquiries are sent to our enquiry service, which runs on Cloudflare (Cloudflare
            Workers and a Cloudflare D1 database). A notification email with your enquiry is
            sent to our team&apos;s inbox through Cloudflare&apos;s email service. Cloudflare
            also hosts this website and processes standard request data, such as IP address
            and browser type, to deliver and protect it. Cloudflare may process data outside
            your country.
          </p>
        </section>

        <section>
          <h2 className={headingClass}>How long we keep it</h2>
          <p className={bodyClass}>
            Personal details in our enquiry database are deleted automatically two years
            (730 days) after your enquiry. Submissions identified as spam are deleted after 30
            days. Copies of notification emails in our inbox are deleted on request.
          </p>
        </section>

        <section>
          <h2 className={headingClass}>Cookies and analytics</h2>
          <p className={bodyClass}>
            This website doesn&apos;t use analytics or advertising cookies.
          </p>
        </section>

        <section>
          <h2 className={headingClass}>Your rights</h2>
          <p className={bodyClass}>
            You can ask to see, correct, or delete the personal information you&apos;ve sent us
            by emailing{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-glacier underline hover:text-forest">
              {siteConfig.email}
            </a>
            . Please include your enquiry reference if you have one.
          </p>
        </section>

        <section>
          <h2 className={headingClass}>Changes</h2>
          <p className={bodyClass}>
            We&apos;ll update this page if the way we handle enquiries changes. Last updated:
            October 2026.
          </p>
        </section>
      </div>
    </div>
  );
}
