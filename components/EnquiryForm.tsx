"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { enquiryConfig, privacyPolicy, siteConfig } from "@/lib/site";

type Variant = "tour" | "supplier";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; reference: string }
  | { kind: "error"; message: string };

type Errors = Record<string, string>;

interface TurnstileApi {
  render: (el: HTMLElement, options: Record<string, unknown>) => string;
  reset: (id?: string) => void;
  remove: (id?: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

interface EnquiryFormProps {
  variant: Variant;
  tours?: { slug: string; name: string }[];
}

const EMAIL = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[A-Za-z]{2,}$/;
const NOT_SURE = "not-sure";
const noopSubscribe = () => () => {};

const FIELD_IDS: Record<string, string> = {
  name: "enq-name",
  email: "enq-email",
  ship: "enq-ship",
  travelDate: "enq-date",
  guests: "enq-guests",
  productRef: "enq-tour",
  message: "enq-message",
  business_name: "enq-business",
  consent: "enq-consent",
  turnstile: "enq-turnstile",
};

function newKey(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
}

/** Yesterday in UTC, matching the service's earliest accepted travel date. */
function earliestDate(): string {
  return new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
}

function value(form: FormData, key: string): string {
  return String(form.get(key) ?? "").trim();
}

function validate(form: FormData, variant: Variant, tourSlugs: Set<string>): Errors {
  const errors: Errors = {};
  const name = value(form, "name");
  if (!name) errors.name = "Please enter your full name.";
  else if (name.length > 100) errors.name = "Please shorten your name (100 characters maximum).";

  const email = value(form, "email");
  if (!email) errors.email = "Please enter your email address.";
  else if (email.length > 254 || !EMAIL.test(email)) errors.email = "Please enter a valid email address.";

  const message = value(form, "message");
  if (message.length > 5000) errors.message = "Please shorten your message (5,000 characters maximum).";

  if (variant === "tour") {
    if (value(form, "ship").length > 100) errors.ship = "Please shorten the ship name.";
    const date = value(form, "travelDate");
    if (date && (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date < earliestDate())) {
      errors.travelDate = "Please choose today or a future date.";
    }
    const guests = value(form, "guests");
    if (guests) {
      const n = Number(guests);
      if (!Number.isInteger(n) || n < 1 || n > 60) errors.guests = "Please enter a number of passengers between 1 and 60.";
    }
    const tour = value(form, "productRef");
    if (tour && tour !== NOT_SURE && !tourSlugs.has(tour)) errors.productRef = "Please choose an excursion from the list.";
  } else {
    if (!value(form, "business_name")) errors.business_name = "Please enter your business name.";
    if (message.length < 2) errors.message = "Please tell us about the tours you operate.";
  }

  if (form.get("consent") !== "yes") errors.consent = "Please confirm you agree to how we'll use your details.";
  return errors;
}

function buildPayload(form: FormData, variant: Variant, tours: { slug: string; name: string }[]) {
  const tourSlug = value(form, "productRef");
  const productRef = tourSlug && tourSlug !== NOT_SURE ? tourSlug : null;
  const tourName = tours.find((t) => t.slug === productRef)?.name;
  const typed = value(form, "message");
  const extra: Record<string, string> = {
    enquiry_type: variant === "tour" ? "tour_enquiry" : "supplier_partnership",
    privacy_consent: "yes",
  };

  let message = typed;
  if (variant === "tour") {
    if (!message) {
      message = `Enquiry about ${tourName ?? "Skagway shore excursions"}. No additional requirements given.`;
    }
  } else {
    extra.business_name = value(form, "business_name");
    const website = value(form, "business_website");
    if (website) extra.business_website = website;
    const season = value(form, "season");
    if (season) extra.season = season;
  }

  return {
    siteId: enquiryConfig.siteId,
    name: value(form, "name"),
    email: value(form, "email"),
    phone: null,
    message,
    travelDate: variant === "tour" ? value(form, "travelDate") || null : null,
    ship: variant === "tour" ? value(form, "ship") || null : null,
    guests: variant === "tour" && value(form, "guests") ? Number(value(form, "guests")) : null,
    productRef,
    extra,
    website: value(form, "website"),
  };
}

const inputClass =
  "mt-1 block w-full rounded-md border border-forest/20 bg-white px-3 py-2.5 text-base text-forest shadow-sm focus:border-glacier focus:outline-none focus:ring-2 focus:ring-glacier/40 aria-[invalid=true]:border-red-600";
const labelClass = "block text-sm font-semibold text-forest";
const hintClass = "mt-1 text-xs text-mountain";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={`${id}-error`} className="mt-1 text-sm text-red-700">
      {message}
    </p>
  );
}

/**
 * Sends enquiries to the shared Wow A Tour enquiry service. Spam protection: honeypot field,
 * minimum fill time (checked server-side), and Cloudflare Turnstile when a site key is configured.
 */
export function EnquiryForm({ variant, tours = [] }: EnquiryFormProps) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<Errors>({});
  const [chosenTour, setChosenTour] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const ready = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const requestedTour = useSyncExternalStore(
    noopSubscribe,
    () => new URLSearchParams(window.location.search).get("tour") ?? "",
    () => "",
  );
  const renderedAt = useRef(0);
  const idempotencyKey = useRef("");
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const turnstileEl = useRef<HTMLDivElement>(null);
  const turnstileId = useRef<string | null>(null);
  const siteKey = enquiryConfig.turnstileSiteKey;
  const tourSlugs = new Set(tours.map((t) => t.slug));
  const selectedTour = chosenTour ?? (tourSlugs.has(requestedTour) ? requestedTour : "");
  const minDate = ready ? earliestDate() : undefined;

  useEffect(() => {
    renderedAt.current = Date.now();
    idempotencyKey.current = newKey();
  }, []);

  useEffect(() => {
    if (status.kind === "success") successRef.current?.focus();
  }, [status]);

  useEffect(() => {
    if (Object.keys(errors).length) summaryRef.current?.focus();
  }, [errors]);

  const renderTurnstile = useCallback(() => {
    if (!siteKey || !window.turnstile || !turnstileEl.current || turnstileId.current) return;
    turnstileId.current = window.turnstile.render(turnstileEl.current, {
      sitekey: siteKey,
      callback: (token: string) => setTurnstileToken(token),
      "expired-callback": () => setTurnstileToken(""),
      "error-callback": () => setTurnstileToken(""),
    });
  }, [siteKey]);

  useEffect(() => {
    return () => {
      if (turnstileId.current && window.turnstile) window.turnstile.remove(turnstileId.current);
      turnstileId.current = null;
    };
  }, []);

  function resetTurnstile() {
    if (turnstileId.current && window.turnstile) window.turnstile.reset(turnstileId.current);
    setTurnstileToken("");
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === "submitting") return;
    const form = new FormData(event.currentTarget);
    const clientErrors = validate(form, variant, tourSlugs);
    if (siteKey && !turnstileToken) clientErrors.turnstile = "Please complete the verification check.";
    if (Object.keys(clientErrors).length) {
      setStatus({ kind: "idle" });
      setErrors(clientErrors);
      return;
    }

    setErrors({});
    setStatus({ kind: "submitting" });
    try {
      const res = await fetch(enquiryConfig.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...buildPayload(form, variant, tours),
          idempotencyKey: idempotencyKey.current,
          sourceUrl: window.location.href,
          elapsedMs: Date.now() - renderedAt.current,
          turnstileToken: turnstileToken || null,
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        reference?: string;
        code?: string;
        message?: string;
        errors?: Errors;
      } | null;
      if (res.ok && data?.ok && data.reference) {
        setStatus({ kind: "success", reference: data.reference });
        idempotencyKey.current = newKey();
        return;
      }
      if (data?.code === "VERIFICATION_FAILED") resetTurnstile();
      if (data?.errors) {
        const { form: formError, ...fieldErrors } = data.errors;
        if (Object.keys(fieldErrors).length) setErrors(fieldErrors);
        setStatus({ kind: "error", message: formError ?? data.message ?? "Please check the highlighted fields." });
        return;
      }
      setStatus({ kind: "error", message: data?.message ?? "We couldn't send your enquiry just now. Please try again." });
    } catch {
      setStatus({ kind: "error", message: "We couldn't reach our enquiry service. Please check your connection and try again." });
    }
  }

  if (status.kind === "success") {
    return (
      <div role="status" className="rounded-xl border border-forest/15 bg-white p-6 shadow-sm lg:p-8" data-enquiry-success>
        <h2 ref={successRef} tabIndex={-1} className="font-display text-2xl font-semibold text-forest focus:outline-none">
          Thank you — we&apos;ve received your enquiry
        </h2>
        <p className="mt-3 text-mountain leading-relaxed">
          {variant === "tour"
            ? "We'll reply by email to help you choose the right Skagway excursion for your port day. Nothing is booked or charged until you confirm."
            : "Thank you for your interest in partnering with us for the 2027 season. We'll reply by email."}
        </p>
        <p className="mt-4 text-forest">
          Your reference: <strong data-enquiry-reference>{status.reference}</strong>
        </p>
        <p className="mt-4 text-sm text-mountain">
          Please quote this reference if you email us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-glacier underline hover:text-forest">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const errorEntries = Object.entries(errors);
  const describedBy = (key: string, hint?: boolean) => {
    const ids = [hint ? `${FIELD_IDS[key]}-hint` : "", errors[key] ? `${FIELD_IDS[key]}-error` : ""].filter(Boolean);
    return ids.length ? ids.join(" ") : undefined;
  };
  const fieldProps = (key: string, hint?: boolean) => ({
    id: FIELD_IDS[key],
    name: key,
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": describedBy(key, hint),
  });
  const mailSubject = variant === "tour" ? "Skagway tour enquiry" : "Skagway supplier partnership";

  return (
    <form method="post" noValidate onSubmit={onSubmit} className="space-y-5 rounded-xl border border-forest/10 bg-white p-6 shadow-sm lg:p-8">
      {siteKey && (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={renderTurnstile} />
      )}

      <div ref={summaryRef} tabIndex={-1} className="focus:outline-none">
        {errorEntries.length > 0 && (
          <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            <p className="font-semibold">Please fix the following:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {errorEntries.map(([key, message]) => (
                <li key={key}>
                  <a href={`#${FIELD_IDS[key] ?? FIELD_IDS.name}`} className="underline">
                    {message}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={FIELD_IDS.name} className={labelClass}>
            Full name <span className="text-red-700">*</span>
          </label>
          <input {...fieldProps("name")} type="text" required maxLength={100} autoComplete="name" className={inputClass} />
          <FieldError id={FIELD_IDS.name} message={errors.name} />
        </div>
        <div>
          <label htmlFor={FIELD_IDS.email} className={labelClass}>
            Email <span className="text-red-700">*</span>
          </label>
          <input {...fieldProps("email")} type="email" required maxLength={254} autoComplete="email" inputMode="email" className={inputClass} />
          <FieldError id={FIELD_IDS.email} message={errors.email} />
        </div>
      </div>

      {variant === "tour" ? (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor={FIELD_IDS.ship} className={labelClass}>
                Cruise ship
              </label>
              <input {...fieldProps("ship", true)} type="text" maxLength={100} placeholder="e.g. Norwegian Encore" className={inputClass} />
              <p id={`${FIELD_IDS.ship}-hint`} className={hintClass}>
                Helps us match tours to your time in port.
              </p>
              <FieldError id={FIELD_IDS.ship} message={errors.ship} />
            </div>
            <div>
              <label htmlFor={FIELD_IDS.travelDate} className={labelClass}>
                Arrival date in Skagway
              </label>
              <input {...fieldProps("travelDate")} type="date" min={minDate} className={inputClass} />
              <FieldError id={FIELD_IDS.travelDate} message={errors.travelDate} />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor={FIELD_IDS.guests} className={labelClass}>
                Number of passengers
              </label>
              <input {...fieldProps("guests")} type="number" min={1} max={60} step={1} inputMode="numeric" className={inputClass} />
              <FieldError id={FIELD_IDS.guests} message={errors.guests} />
            </div>
            <div>
              <label htmlFor={FIELD_IDS.productRef} className={labelClass}>
                Preferred excursion
              </label>
              <select
                {...fieldProps("productRef")}
                value={selectedTour}
                onChange={(e) => setChosenTour(e.target.value)}
                className={inputClass}
              >
                <option value="">Choose an excursion (optional)</option>
                {tours.map((t) => (
                  <option key={t.slug} value={t.slug}>
                    {t.name}
                  </option>
                ))}
                <option value={NOT_SURE}>Not sure yet — help me choose</option>
              </select>
              <FieldError id={FIELD_IDS.productRef} message={errors.productRef} />
            </div>
          </div>
          <div>
            <label htmlFor={FIELD_IDS.message} className={labelClass}>
              Additional requirements
            </label>
            <textarea
              {...fieldProps("message", true)}
              rows={5}
              maxLength={5000}
              placeholder="Mobility needs, ages of children, all-aboard time, or anything else we should know"
              className={inputClass}
            />
            <p id={`${FIELD_IDS.message}-hint`} className={hintClass}>
              Optional.
            </p>
            <FieldError id={FIELD_IDS.message} message={errors.message} />
          </div>
        </>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor={FIELD_IDS.business_name} className={labelClass}>
                Business name <span className="text-red-700">*</span>
              </label>
              <input {...fieldProps("business_name")} type="text" required maxLength={200} autoComplete="organization" className={inputClass} />
              <FieldError id={FIELD_IDS.business_name} message={errors.business_name} />
            </div>
            <div>
              <label htmlFor="enq-business-website" className={labelClass}>
                Business website
              </label>
              <input id="enq-business-website" name="business_website" type="url" maxLength={300} autoComplete="url" placeholder="https://" className={inputClass} />
            </div>
          </div>
          <input type="hidden" name="season" value="2027" />
          <div>
            <label htmlFor={FIELD_IDS.message} className={labelClass}>
              Tours you operate in Skagway <span className="text-red-700">*</span>
            </label>
            <textarea
              {...fieldProps("message", true)}
              rows={6}
              required
              maxLength={5000}
              placeholder="Tour names, durations, group sizes, departure times, and meeting points"
              className={inputClass}
            />
            <p id={`${FIELD_IDS.message}-hint`} className={hintClass}>
              A short outline is fine — we&apos;ll follow up by email.
            </p>
            <FieldError id={FIELD_IDS.message} message={errors.message} />
          </div>
        </>
      )}

      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="enq-website">Leave this field empty</label>
        <input id="enq-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <section aria-labelledby="enq-privacy-heading" id="enq-privacy" className="rounded-lg bg-cream px-4 py-3 text-sm text-mountain">
        <h2 id="enq-privacy-heading" className="font-semibold text-forest">
          How we use your details
        </h2>
        <p className="mt-1 leading-relaxed">
          {siteConfig.name} is a {siteConfig.parentBrand}{" "}brand. We use what you send in this form only to
          reply to your enquiry and, if you go ahead, to arrange your tour with the operator involved. We
          don&apos;t sell your details or use them for marketing.
        </p>
        <p className="mt-2 leading-relaxed">
          Your enquiry is stored in our enquiry system on Cloudflare and emailed to the{" "}
          {siteConfig.parentBrand} team. To prevent spam we keep a one-way fingerprint of your IP and email
          address, not the addresses themselves. Personal details are deleted automatically after two
          years (spam after 30 days).
        </p>
        <p className="mt-2 leading-relaxed">
          To see, correct, or delete your details, email{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-glacier underline hover:text-forest">
            {siteConfig.email}
          </a>{" "}
          with your enquiry reference.
          {privacyPolicy.published && (
            <>
              {" "}Read our full{" "}
              <a href={privacyPolicy.path} className="font-medium text-glacier underline hover:text-forest">
                privacy policy
              </a>
              .
            </>
          )}
        </p>
      </section>

      <div>
        <div className="flex items-start gap-3">
          <input
            id={FIELD_IDS.consent}
            name="consent"
            type="checkbox"
            value="yes"
            required
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? `${FIELD_IDS.consent}-error` : undefined}
            className="mt-1 h-4 w-4 shrink-0 accent-forest"
          />
          <label htmlFor={FIELD_IDS.consent} className="text-sm text-mountain">
            I agree to {siteConfig.name} ({siteConfig.parentBrand}) using these details to reply to my
            enquiry, as explained in{" "}
            <a href="#enq-privacy" className="font-medium text-glacier underline hover:text-forest">
              how we use your details
            </a>
            . <span className="text-red-700">*</span>
          </label>
        </div>
        <FieldError id={FIELD_IDS.consent} message={errors.consent} />
      </div>

      {siteKey && (
        <div>
          <div id={FIELD_IDS.turnstile} ref={turnstileEl} />
          <FieldError id={FIELD_IDS.turnstile} message={errors.turnstile} />
        </div>
      )}

      {status.kind === "error" && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" data-enquiry-error>
          <p>{status.message}</p>
          <p className="mt-2">
            If the problem continues, email us at{" "}
            <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(mailSubject)}`} className="font-medium underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={!ready || status.kind === "submitting"}
        className="w-full rounded-md bg-gold px-6 py-3 text-sm font-semibold text-forest-dark transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status.kind === "submitting" ? "Sending…" : variant === "tour" ? "Send Enquiry" : "Send Partnership Enquiry"}
      </button>
      <noscript>
        <p className="text-sm text-mountain">
          This form needs JavaScript. Please email us at {siteConfig.email} instead.
        </p>
      </noscript>
      <p className="text-xs text-mountain">
        Fields marked <span className="text-red-700">*</span>{" "}are required. We reply by email; sending an enquiry
        doesn&apos;t commit you to a booking.
      </p>
    </form>
  );
}
