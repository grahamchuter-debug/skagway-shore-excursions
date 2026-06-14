export function CruisePassengerSnapshot() {
  const stats = [
    { label: "Typical port time", value: "6–10 hours" },
    { label: "Pier to Broadway", value: "5–10 min walk" },
    { label: "Passport needed", value: "For Yukon tours" },
    { label: "Peak season", value: "May – September" },
  ];

  return (
    <section className="rounded-xl border border-glacier/30 bg-white p-6 shadow-sm lg:p-8">
      <h2 className="font-display text-2xl font-semibold text-forest">
        Cruise Passenger Snapshot
      </h2>
      <p className="mt-2 text-mountain">
        Skagway is a compact Gold Rush town at the head of the Lynn Canal fjord.
        Most ships dock steps from historic Broadway Street, with White Pass
        Railway departures and tour pickups nearby.
      </p>
      <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg bg-cream px-4 py-3 border border-forest/5"
          >
            <dt className="text-xs font-semibold uppercase tracking-wide text-mountain">
              {stat.label}
            </dt>
            <dd className="mt-1 font-display text-lg font-semibold text-forest">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
