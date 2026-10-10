import type { ActivityLevel, CruiseConfidence } from "./site";

export type TourCategory =
  | "white-pass-railway"
  | "yukon"
  | "dog-sledding"
  | "helicopter-glacier"
  | "private"
  | "family-friendly";

export type BorderCrossing = "yes" | "most" | "no";

/** Group format. Set only once confirmed with the operator. */
export type TourFormat = "Small group" | "Private" | "Shared group";

export interface Tour {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  duration: string;
  activityLevel: ActivityLevel;
  bestFor: string[];
  walkingRequired: string;
  foodDrink: string;
  cruiseConfidence: CruiseConfidence;
  whoShouldChoose: string;
  whoShouldChooseDifferent: string;
  whatToBring: string[];
  returnToShipAdvice: string;
  categories: TourCategory[];
  /** Unverified planning figure in USD. Never displayed unless `priceVerifiedOn` is set. */
  priceFrom: number;
  /** ISO date the price was last confirmed with the operator; null keeps "Price on enquiry". */
  priceVerifiedOn: string | null;
  format: TourFormat | null;
  /** Verified local path, or null for neutral branded treatment (no stock mislabeling). */
  image: string | null;
  imageAlt: string;
  highlights: string[];
  familyFriendly: boolean;
  privateOption: boolean;
  /** Whether typical versions of this tour cross into Canada and back. */
  crossesIntoCanada: BorderCrossing;
  /** Typical operator rules (age, weight, health, driver). Indicative only — confirmed when enquiring. */
  requirements: string[];
}

export const tours: Tour[] = [
  {
    slug: "white-pass-summit-rail-and-bus",
    name: "White Pass Summit Rail and Bus",
    shortDescription:
      "Ride the White Pass & Yukon Route railway over the summit, then return to Skagway by road on the Klondike Highway.",
    description:
      "Ride the historic White Pass & Yukon Route narrow-gauge railway over White Pass Summit, tracing the path of Klondike Gold Rush stampeders. On most versions the train continues to Fraser, British Columbia, where you clear Canadian customs, then you return to Skagway by motorcoach on the Klondike Highway with photo stops you would miss on rail alone. Some departures run in reverse — bus up, train back — and the direction is confirmed when you enquire.",
    duration: "3 hours 30 minutes",
    activityLevel: "Easy",
    bestFor: ["First-time Alaska visitors", "Railway enthusiasts", "Photographers"],
    walkingRequired: "Minimal — short photo stops with optional light walking.",
    foodDrink: "Not included — bring snacks or plan time in town before/after",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose:
      "Ideal if you want the iconic White Pass train experience plus extra scenery without committing to a full Yukon day. Great for passengers who prefer seated touring with light activity.",
    whoShouldChooseDifferent:
      "Choose a Yukon day trip if you want to go further into Canada and see Emerald Lake. Choose helicopter flightseeing if rail scenery is not your priority and you prefer aerial glacier views.",
    whatToBring: [
      "Passport or other accepted border documents for every traveller (see Border Crossing below)",
      "Layered clothing and rain jacket",
      "Camera with extra batteries",
      "Binoculars for wildlife spotting",
    ],
    returnToShipAdvice:
      "This half-day format typically allows comfortable buffer time on standard cruise schedules, including Canadian and U.S. border checks. Confirm your ship's all-aboard time and choose a morning departure when possible.",
    categories: ["white-pass-railway", "family-friendly"],
    priceFrom: 289,
    priceVerifiedOn: null,
    format: null,
    image: "/hero-white-pass-railway.webp",
    imageAlt:
      "White Pass & Yukon Route train with vintage red-roofed coaches curving along a forested mountainside below snow-capped peaks",
    highlights: [
      "Historic narrow-gauge railway over White Pass Summit",
      "Klondike Highway motorcoach leg with photo stops (direction varies)",
      "Klondike Gold Rush history along the route",
    ],
    familyFriendly: true,
    privateOption: false,
    crossesIntoCanada: "yes",
    requirements: [
      "Trains and tour vehicles are generally not wheelchair accessible",
    ],
  },
  {
    slug: "skagway-city-and-white-pass-summit",
    name: "Skagway City and White Pass Summit",
    shortDescription:
      "Narrated small-bus tour of historic downtown Skagway and the Klondike Highway to the White Pass Summit area.",
    description:
      "Begin with a narrated drive through Skagway's Gold Rush-era Broadway Street and historic downtown. Continue up the Klondike Highway toward White Pass Summit for mountain views, waterfalls, and photo stops in the landscape stampeders crossed in 1898. Most versions continue briefly across the border into British Columbia.",
    duration: "2 hours 30 minutes",
    activityLevel: "Easy",
    bestFor: ["History lovers", "Short port days", "Budget-conscious travelers"],
    walkingRequired: "Light — mostly seated touring with short walks at photo stops",
    foodDrink: "Not included",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose:
      "Perfect when you want both town history and mountain scenery in a compact timeframe. Works well for passengers who also plan independent time for shopping or the national park visitor center.",
    whoShouldChooseDifferent:
      "Choose the full rail experience if riding the White Pass train is a bucket-list must. Choose a Yukon tour if summit overlooks are not enough and you want deeper wilderness.",
    whatToBring: [
      "Comfortable walking shoes",
      "Light rain layer",
      "Sun protection",
      "Passport or other accepted border documents for every traveller (see Border Crossing below)",
    ],
    returnToShipAdvice:
      "Shorter duration makes this one of the easier options to pair with lunch in town. Allow for border checks and verify departure times against your ship's schedule — especially on late-arrival port days.",
    categories: ["white-pass-railway", "family-friendly"],
    priceFrom: 75,
    priceVerifiedOn: null,
    format: null,
    image: "/tours/skagway-city-and-white-pass-summit.webp",
    imageAlt: "Broadway in Skagway's historic district on a sunny day, with Gold Rush-era storefronts, the gold dome of the Golden North Hotel, and snow-capped mountains beyond",
    highlights: [
      "Historic downtown Skagway highlights",
      "White Pass Summit area photo stops",
      "Compact format for mixed town-and-scenery days",
    ],
    familyFriendly: true,
    privateOption: false,
    crossesIntoCanada: "most",
    requirements: [],
  },
  {
    slug: "yukon-rail-and-bus-adventure",
    name: "Yukon Rail and Bus Adventure",
    shortDescription:
      "Full-day journey into Canada's Yukon by rail and motorcoach, typically with lunch included.",
    description:
      "Combine the White Pass & Yukon Route railway with a motorcoach journey on the Klondike Highway into Canada's Yukon. Typical itineraries include Carcross and Emerald Lake, with lunch at a stop in the Yukon. Some departures run in reverse — bus out, train back. The exact stops, direction, and lunch location vary by operator and are confirmed when you enquire.",
    duration: "7 hours 30 minutes",
    activityLevel: "Moderate",
    bestFor: ["Full-day explorers", "Yukon first-timers", "Scenery collectors"],
    walkingRequired: "Light to moderate at scheduled stops — mostly optional short walks",
    foodDrink: "Lunch typically included (location varies by operator — confirm when enquiring)",
    cruiseConfidence: "Medium Cruise Confidence",
    whoShouldChoose:
      "Best for travelers whose top priority is seeing the Yukon itself — lakes, mountains, and cross-border scenery — with a White Pass Railway segment included.",
    whoShouldChooseDifferent:
      "Choose a half-day rail tour if your ship has a short port call or you prefer more free time in Skagway. If you're unsure about border documents, check our travel documents guide before you choose.",
    whatToBring: [
      "Passport or other accepted border documents for every traveller (see Border Crossing below)",
      "Warm layers — summit and Yukon areas can be cool",
      "Camera and wide-angle lens",
      "Motion-sickness remedy if sensitive on mountain roads",
    ],
    returnToShipAdvice:
      "Full-day Yukon tours require careful timing. Book the earliest available departure, keep your border documents handy for both crossings, and avoid adding unrelated activities before or after without checking total elapsed time.",
    categories: ["yukon", "white-pass-railway"],
    priceFrom: 387,
    priceVerifiedOn: null,
    format: null,
    image: "/tours/yukon-rail-and-bus-adventure.webp",
    imageAlt: "Wooden \"Yukon — Larger than Life\" welcome sign at the Yukon border, with mountains and blue sky behind",
    highlights: [
      "White Pass Railway segment",
      "Carcross and Emerald Lake (typical stops)",
      "Klondike Highway scenery",
      "Lunch typically included",
    ],
    familyFriendly: false,
    privateOption: false,
    crossesIntoCanada: "yes",
    requirements: [
      "Trains and tour vehicles are generally not wheelchair accessible",
    ],
  },
  {
    slug: "white-pass-summit-yukon-suspension-bridge",
    name: "White Pass Summit and Yukon Suspension Bridge",
    shortDescription:
      "Rail over White Pass, then on to the Yukon Suspension Bridge above the Tutshi River canyon in northern British Columbia.",
    description:
      "Ride the White Pass & Yukon Route railway over the summit to Fraser, British Columbia, then continue by road to the Yukon Suspension Bridge, which spans the Tutshi River canyon on the South Klondike Highway. Despite its name, the bridge is in northern British Columbia, not the Yukon, and crossing it is optional. The attraction is typically open from early May to late September; road-only versions of this tour are shorter, at around 3½ hours.",
    duration: "4 hours 30 minutes",
    activityLevel: "Easy",
    bestFor: ["Adventurous sightseers", "Bridge and canyon photography", "Rail plus extra wow-factor"],
    walkingRequired: "Easy walking on the bridge and viewpoint platforms — crossing the bridge is optional.",
    foodDrink: "Not included",
    cruiseConfidence: "Medium Cruise Confidence",
    whoShouldChoose:
      "Great when you want more than summit photos but are not ready for a full Yukon day. The suspension bridge adds a memorable highlight without the longest border crossing itinerary.",
    whoShouldChooseDifferent:
      "Choose the full Yukon Rail and Bus Adventure for Emerald Lake and deeper Canadian scenery. Choose dog sledding if animal experiences matter more than canyon views.",
    whatToBring: [
      "Passport or other accepted border documents for every traveller (see Border Crossing below)",
      "Secure hat and sunglasses for windy bridge areas",
      "Non-slip footwear",
      "Rain layer",
    ],
    returnToShipAdvice:
      "Mid-length format generally fits standard cruise windows well. Allow margin for border-area traffic and choose morning slots when your ship arrives early.",
    categories: ["yukon", "white-pass-railway", "family-friendly"],
    priceFrom: 349,
    priceVerifiedOn: null,
    format: null,
    image: "/tours/white-pass-summit-yukon-suspension-bridge.webp",
    imageAlt: "The Yukon Suspension Bridge spanning the rocky, forested Tutshi River canyon beside the South Klondike Highway in northern British Columbia",
    highlights: [
      "White Pass Railway ride",
      "Optional Yukon Suspension Bridge crossing",
      "Tutshi River canyon views",
    ],
    familyFriendly: true,
    privateOption: false,
    crossesIntoCanada: "yes",
    requirements: [
      "Generally not suitable for wheelchairs, scooters, or strollers",
    ],
  },
  {
    slug: "bennett-scenic-journey",
    name: "Bennett Scenic Journey",
    shortDescription:
      "Full-day rail journey over White Pass to historic Bennett, BC, and Carcross, Yukon, typically with a motorcoach leg and lunch on board.",
    description:
      "Primarily a rail experience: a full day on the White Pass & Yukon Route line, following the Klondike stampeders' route over White Pass to historic Bennett, British Columbia, and on to Carcross, Yukon. On most versions, about 67.5 miles is by train, with a stop at Bennett (typically around 45 minutes) and one leg by motorcoach on the Klondike Highway; lunch is typically served on board. Departures can run train first or bus first, and the season is shorter than most tours (typically late May to mid-September). The exact itinerary, direction, and inclusions depend on the operator and are confirmed when you enquire.",
    duration: "8 hours",
    activityLevel: "Moderate",
    bestFor: ["Dedicated photographers", "Long port days", "Scenic road-trip lovers"],
    walkingRequired: "Moderate — steps onto the train and coach, plus an optional walk around the historic Bennett townsite.",
    foodDrink: "Lunch typically included (served on board — confirm when enquiring)",
    cruiseConfidence: "Plan Carefully",
    whoShouldChoose:
      "Ideal for passengers on ships with extended Skagway time who want the fullest White Pass rail experience rather than a short rail hop.",
    whoShouldChooseDifferent:
      "Avoid if your all-aboard window is tight or you are prone to fatigue on long coach days. Half-day rail tours are better for shorter calls.",
    whatToBring: [
      "Passport or other accepted border documents for every traveller (see Border Crossing below)",
      "Comfortable walking shoes for Bennett",
      "Snacks beyond the lunch",
      "Camera — the route runs the length of Lake Bennett",
    ],
    returnToShipAdvice:
      "At eight hours, this tour demands the most schedule attention. Confirm your ship's all-aboard time in writing, book the earliest departure, and skip independent plans that could delay your return to the pier.",
    categories: ["yukon", "white-pass-railway"],
    priceFrom: 399,
    priceVerifiedOn: null,
    format: null,
    image: "/tours/bennett-scenic-journey.webp",
    imageAlt: "Calm Lake Bennett reflecting the surrounding mountains, with a weathered wooden boat on the shore at historic Bennett, British Columbia",
    highlights: [
      "Train over White Pass toward Bennett and Carcross",
      "Stop at historic Bennett, BC",
      "Klondike Highway motorcoach leg",
      "Lunch typically served on board",
    ],
    familyFriendly: false,
    privateOption: false,
    crossesIntoCanada: "yes",
    requirements: [
      "The train typically has no wheelchair lift; guests climb a few steps onto the train and coach",
    ],
  },
  {
    slug: "summit-views-sled-dogs",
    name: "Summit Views and Sled Dogs",
    shortDescription:
      "White Pass summit scenery with a visit to a sled dog camp and a summer cart ride.",
    description:
      "Combine White Pass summit viewpoints with a visit to a sled dog camp — on most versions, across the border in Canada. Meet working sled dogs, hear from the mushers about how they train, and take a short ride on a wheeled cart pulled by the team — summer rides use carts rather than snow sleds.",
    duration: "4 hours 30 minutes",
    activityLevel: "Easy",
    bestFor: ["Animal lovers", "Families with kids", "Unique Alaska experiences"],
    walkingRequired: "Minimal — short walks at the dog camp.",
    foodDrink: "Not included",
    cruiseConfidence: "Medium Cruise Confidence",
    whoShouldChoose:
      "Perfect when you want a signature Alaska activity (dog sledding) bundled with mountain scenery without a full Yukon commitment.",
    whoShouldChooseDifferent:
      "Choose helicopter glacier tours for aerial ice-field views. Choose Yukon day trips if cross-border landscapes are your primary goal rather than mushing.",
    whatToBring: [
      "Warm layer for summit stops",
      "Passport or other accepted border documents for every traveller (see Border Crossing below)",
      "Closed-toe shoes",
      "Hand sanitizer after animal encounters",
    ],
    returnToShipAdvice:
      "At around 4½ hours, usually with a border crossing, this fits most standard port days. Morning departures leave room for downtown Skagway time after your tour.",
    categories: ["dog-sledding", "family-friendly"],
    priceFrom: 239,
    priceVerifiedOn: null,
    format: null,
    image: "/tours/summit-views-sled-dogs.webp",
    imageAlt: "Two harnessed sled dogs at a glacier dog camp near Skagway, Alaska, with dog houses and tents on the snow behind",
    highlights: [
      "Summit viewpoint stops",
      "Sled dog camp visit with the mushers",
      "Summer wheeled-cart ride",
    ],
    familyFriendly: true,
    privateOption: false,
    crossesIntoCanada: "most",
    requirements: [
      "The cart ride can be bumpy — typically not recommended for guests with back or heart conditions, or who are pregnant",
      "Minimum age rules vary by operator",
    ],
  },
  {
    slug: "helicopter-glacier-discovery",
    name: "Helicopter Glacier Discovery",
    shortDescription:
      "Helicopter flight to a glacier near Skagway with time on the ice — a short, high-impact excursion.",
    description:
      "Fly over the Coast Mountains from Skagway and land on a glacier for a guided walk on the ice — the landing is the heart of this tour, not an add-on. Typical tours take about two hours in total, including check-in and a safety briefing, with around 40 minutes of flying and 40 minutes on the glacier. Routes and landing sites depend on the day's weather and glacier conditions.",
    duration: "2 hours",
    activityLevel: "Moderate",
    bestFor: ["Bucket-list flyers", "Time-efficient adventurers", "Aerial photographers"],
    walkingRequired: "Moderate — high helicopter steps and about a quarter-mile guided walk over uneven glacier terrain",
    foodDrink: "Not included",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose:
      "Best when aerial glacier views are your top Alaska priority and you want maximum impact in minimum time — leaving the rest of your port day free.",
    whoShouldChooseDifferent:
      "Choose White Pass Railway if historic ground-based scenery matters more. Flights are weather dependent, so have a backup plan. See the requirements below for weight and mobility rules.",
    whatToBring: [
      "Sunglasses",
      "Warm layer for alpine air",
      "Secure hat (helicopter rotor wash)",
      "Sturdy walking shoes for the glacier",
    ],
    returnToShipAdvice:
      "Short total duration makes this among the easiest tours to combine with town exploration. Monitor weather briefings — rebooked flights can affect your buffer time.",
    categories: ["helicopter-glacier", "family-friendly"],
    priceFrom: 599,
    priceVerifiedOn: null,
    format: null,
    image: null,
    imageAlt: "Skagway shore excursion planning — helicopter glacier flightseeing options",
    highlights: [
      "Glacier landing and guided walk",
      "Coast Mountain views from the air",
      "About 2 hours in total",
    ],
    familyFriendly: true,
    privateOption: false,
    crossesIntoCanada: "no",
    requirements: [
      "Weight surcharges typically apply from about 250 lb (113 kg)",
      "Moderate mobility: high helicopter steps and about a quarter-mile walk over uneven glacier terrain",
      "Weather dependent — flights can be delayed, rerouted, or cancelled",
      "Medical and pregnancy guidance varies by operator",
    ],
  },
  {
    slug: "self-guided-jeep-to-yukon",
    name: "Self-Guided Jeep to the Yukon",
    shortDescription:
      "Drive a rental Jeep along the Klondike Highway to Emerald Lake and Yukon viewpoints, with an audio guide.",
    description:
      "Take the wheel on a self-drive Jeep rental along the Klondike Highway into Canada, guided by audio/GPS commentary rather than a live guide or convoy. The usual turnaround is Emerald Lake in the Yukon. Allow at least 5–6 hours for the round trip, at your own pace within the rental period.",
    duration: "6 hours",
    activityLevel: "Easy",
    bestFor: ["Independent travelers", "Couples and friends", "Road-trip enthusiasts"],
    walkingRequired: "Optional — stop-dependent short walks",
    foodDrink: "Not included — plan meals or pack snacks",
    cruiseConfidence: "Medium Cruise Confidence",
    whoShouldChoose:
      "Ideal if you want Yukon scenery with freedom to linger at photo stops, and you are comfortable driving mountain highways in a provided vehicle.",
    whoShouldChooseDifferent:
      "Choose guided coach or rail tours if you prefer a live guide and hands-free sightseeing. Not suited for passengers uncomfortable on mountain roads. See the requirements below for driver rules.",
    whatToBring: [
      "Driver's licence for each driver, plus passport or other accepted border documents for every passenger (see Border Crossing below)",
      "Follow the operator's fuel, mileage, and route guidance",
      "Offline maps backup",
      "Picnic lunch or snack budget",
    ],
    returnToShipAdvice:
      "Self-paced does not mean unlimited time — respect the operator's return window. Build in buffer for border crossing and photography stops so you are not rushing the highway back to Skagway.",
    categories: ["yukon", "private"],
    priceFrom: 649,
    priceVerifiedOn: null,
    format: null,
    image: null,
    imageAlt: "Skagway shore excursion planning — self-guided Jeep route to the Yukon",
    highlights: [
      "Self-drive Klondike Highway with audio guide",
      "Emerald Lake turnaround",
      "Flexible pacing within the rental window",
    ],
    familyFriendly: false,
    privateOption: true,
    crossesIntoCanada: "yes",
    requirements: [
      "Drivers need a valid driver's licence; the minimum driver age is typically 21",
      "Insurance cover and mileage limits are set by the rental operator",
      "Passenger numbers are limited by vehicle size",
    ],
  },
  {
    slug: "scenic-waterfall-adventure",
    name: "Scenic Waterfall Adventure",
    shortDescription:
      "Relaxed small-bus tour of waterfalls around Skagway and just across the border in Canada.",
    description:
      "A gentle introduction to the waterfalls and forested valleys around Skagway. Typical tours stop at falls on the Alaska side of the pass and continue just across the border into British Columbia, with an optional short forest walk. Stops can change with road and weather conditions.",
    duration: "3 hours",
    activityLevel: "Moderate",
    bestFor: ["Nature lovers", "Relaxed pace", "Photography at close range"],
    walkingRequired: "Moderate — short paths to waterfall viewpoints with some uneven steps; the forest walk is optional",
    foodDrink: "Not included",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose:
      "Great when you want outdoor Alaska scenery at a calm pace without rail tickets or aerial cost. Works well paired with afternoon downtown time.",
    whoShouldChooseDifferent:
      "Choose White Pass Railway for the iconic train experience. Choose ocean raft adventure if you prefer fjord-level excitement over forest waterfalls.",
    whatToBring: [
      "Waterproof jacket — mist at falls",
      "Non-slip shoes",
      "Camera with lens cloth",
      "Passport or other accepted border documents for every traveller (see Border Crossing below)",
    ],
    returnToShipAdvice:
      "Three-hour format leaves generous pier buffer on most cruise schedules. Typical versions cross into Canada, so bring border documents for everyone and allow for border checks.",
    categories: ["family-friendly"],
    priceFrom: 85,
    priceVerifiedOn: null,
    format: null,
    image: null,
    imageAlt: "Skagway shore excursion planning — scenic waterfall and Klondike Highway options",
    highlights: [
      "Multiple waterfall stops",
      "Klondike Highway scenery",
      "Relaxed small-bus format",
    ],
    familyFriendly: true,
    privateOption: false,
    crossesIntoCanada: "most",
    requirements: [],
  },
  {
    slug: "ocean-raft-adventure",
    name: "Ocean Raft Adventure",
    shortDescription:
      "High-speed rigid-inflatable boat ride along the Lynn Canal shoreline near Skagway.",
    description:
      "Head out on the Lynn Canal, one of North America's deepest fjords, in a rigid-inflatable boat, with stops for sea cliffs, waterfalls, and wildlife along the shoreline. Exposure suits are typically provided. An adrenaline-forward contrast to the mountain rail tours.",
    duration: "2 hours",
    activityLevel: "Moderate",
    bestFor: ["Thrill seekers", "Wildlife watchers from the water", "Older children and adults"],
    walkingRequired: "Minimal — boarding from dock area",
    foodDrink: "Not included",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose:
      "Choose this when you want marine Alaska — salt air, fjord cliffs, and speed — rather than summit railways or Yukon highways.",
    whoShouldChooseDifferent:
      "Not ideal for passengers sensitive to spray, rough motion, or engine noise, and not suitable for younger children — see the requirements below. Choose scenic waterfall or city tours for gentler pacing.",
    whatToBring: [
      "Sunglasses",
      "Camera or phone with a strap",
      "A beanie rather than a baseball cap",
      "Any medication you need for about 2 hours on the water",
    ],
    returnToShipAdvice:
      "Short duration fits easily into port days. Wind and spray on the water are colder than downtown Skagway, though exposure suits are typically provided.",
    categories: [],
    priceFrom: 229,
    priceVerifiedOn: null,
    format: null,
    image: null,
    imageAlt: "Skagway shore excursion planning — ocean raft and fjord shoreline options",
    highlights: [
      "Lynn Canal shoreline exploration",
      "Rigid-inflatable boat speed",
      "Water-level views of cliffs and waterfalls",
    ],
    familyFriendly: false,
    privateOption: false,
    crossesIntoCanada: "no",
    requirements: [
      "Minimum age typically around 10",
      "Maximum weight typically about 350 lb (159 kg)",
      "Typically not permitted during pregnancy or with back or neck conditions",
    ],
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function getToursByCategory(category: TourCategory): Tour[] {
  return tours.filter((t) => t.categories.includes(category));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);
}

export function verifiedPrice(tour: Tour): number | null {
  return tour.priceVerifiedOn ? tour.priceFrom : null;
}

export function priceLabel(tour: Tour): string {
  const price = verifiedPrice(tour);
  return price === null ? "Price on enquiry" : `From ${formatPrice(price)}`;
}

export const borderLabel: Record<BorderCrossing, string> = {
  yes: "Crosses into Canada",
  most: "Most versions cross into Canada",
  no: "Stays in Alaska",
};

export function borderNote(tour: Tour): string {
  switch (tour.crossesIntoCanada) {
    case "yes":
      return "This tour crosses into Canada and back into the U.S. Every traveller needs accepted border documents.";
    case "most":
      return "Most versions of this tour cross into Canada and back into the U.S., so plan on accepted border documents for every traveller.";
    case "no":
      return "Typical versions of this tour stay in Alaska, with no border crossing.";
  }
}

export function tourOptions(): { slug: string; name: string }[] {
  return tours.map((t) => ({ slug: t.slug, name: t.name }));
}
