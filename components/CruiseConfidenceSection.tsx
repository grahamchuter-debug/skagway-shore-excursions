import { cta } from "@/lib/site";

export function CruiseConfidenceSection() {
  const levels = [
    {
      level: "High Cruise Confidence",
      className: "confidence-high",
      description:
        "Shorter formats (typically under 4 hours) that generally align well with standard cruise schedules. Still confirm your all-aboard time.",
      examples: "Helicopter discovery, city & summit, ocean raft, waterfall tours",
    },
    {
      level: "Medium Cruise Confidence",
      className: "confidence-medium",
      description:
        "Half- to full-day tours with border crossings or self-drive elements. Choose morning departures and carry your passport.",
      examples: "Yukon rail & bus, suspension bridge rail combo, Jeep to Yukon",
    },
    {
      level: "Plan Carefully",
      className: "confidence-plan",
      description:
        "Extended itineraries approaching a full port day. Best for ships with long Skagway calls and early tour starts.",
      examples: "Bennett Scenic Journey, 8-hour Klondike Highway odysseys",
    },
  ];

  return (
    <section className="rounded-xl bg-forest-dark p-6 text-white lg:p-10">
      <h2 className="font-display text-2xl font-semibold text-gold-light lg:text-3xl">
        Cruise Confidence & Return-to-Ship Guidance
      </h2>
      <p className="mt-3 max-w-3xl text-white/75 leading-relaxed">
        We rate every tour to help you match excursions to your ship schedule.
        These ratings are planning guidance only — we do not claim guaranteed
        return to ship. Always verify your vessel&apos;s all-aboard time with the
        cruise line.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {levels.map((item) => (
          <div
            key={item.level}
            className="rounded-lg border border-white/10 bg-white/5 p-5"
          >
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.className}`}
            >
              {item.level}
            </span>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              {item.description}
            </p>
            <p className="mt-2 text-xs text-glacier-light">
              Examples: {item.examples}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-white/60">
        Tip: Book morning departures, keep your passport accessible for Yukon
        routes, and leave buffer time before all-aboard — especially on full-day
        adventures. {cta.compareTours} on our excursions page.
      </p>
    </section>
  );
}
