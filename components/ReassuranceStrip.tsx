const items = [
  {
    title: "Cruise passenger focused",
    detail: "Every tour rated against typical all-aboard times",
  },
  {
    title: "Guided and independent options",
    detail: "Guided coach and glacier tours, rail journeys, or a self-drive Jeep route",
  },
  {
    title: "Help choosing the right tour",
    detail: "Compare duration, activity level, and walking required",
  },
  {
    title: "Help planning your port day",
    detail: "Send your ship and arrival date — we reply by email",
  },
];

export function ReassuranceStrip() {
  return (
    <section aria-label="Why plan with us" className="border-b border-forest/10 bg-white">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-5 px-4 py-6 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <li key={item.title} className="flex gap-3">
            <span aria-hidden="true" className="mt-1 text-gold">
              ✦
            </span>
            <div>
              <p className="text-sm font-semibold text-forest">{item.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-mountain">{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
