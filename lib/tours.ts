import type { ActivityLevel, CruiseConfidence } from "./site";

export type TourCategory =
  | "white-pass-railway"
  | "yukon"
  | "dog-sledding"
  | "helicopter-glacier"
  | "private"
  | "family-friendly";

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
  priceFrom: number;
  image: string;
  imageAlt: string;
  highlights: string[];
  familyFriendly: boolean;
  privateOption: boolean;
}

export const tours: Tour[] = [
  {
    slug: "white-pass-summit-rail-and-bus",
    name: "White Pass Summit Rail and Bus",
    shortDescription:
      "Combine the legendary White Pass Railway with a scenic return by motorcoach on a different route.",
    description:
      "Ride the historic White Pass & Yukon Route narrow-gauge railway to the summit, tracing the path of Klondike Gold Rush stampeders. On the return leg, travel by motorcoach along Klondike Highway viewpoints for waterfalls, alpine valleys, and photo stops you would miss on rail alone.",
    duration: "3 hours 30 minutes",
    activityLevel: "Easy",
    bestFor: ["First-time Alaska visitors", "Railway enthusiasts", "Photographers"],
    walkingRequired: "Minimal — short photo stops with optional light walking at viewpoints",
    foodDrink: "Not included — bring snacks or plan time in town before/after",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose:
      "Ideal if you want the iconic White Pass train experience plus extra scenery without committing to a full Yukon day. Great for passengers who prefer seated touring with light activity.",
    whoShouldChooseDifferent:
      "Choose a Yukon day trip if you want to cross into Canada and see Emerald Lake. Choose helicopter flightseeing if rail scenery is not your priority and you prefer aerial glacier views.",
    whatToBring: [
      "Passport (recommended for summit-area travel)",
      "Layered clothing and rain jacket",
      "Camera with extra batteries",
      "Binoculars for wildlife spotting",
    ],
    returnToShipAdvice:
      "This half-day format typically allows comfortable buffer time when booked on standard cruise schedules. Confirm your ship's all-aboard time and choose a morning departure when possible.",
    categories: ["white-pass-railway", "family-friendly"],
    priceFrom: 289,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    imageAlt: "White Pass Railway train winding through snow-capped Alaskan mountains near Skagway",
    highlights: [
      "Historic narrow-gauge railway to White Pass Summit",
      "Motorcoach return with Klondike Highway photo stops",
      "Gold Rush history narration",
    ],
    familyFriendly: true,
    privateOption: false,
  },
  {
    slug: "skagway-city-and-white-pass-summit",
    name: "Skagway City and White Pass Summit",
    shortDescription:
      "Historic downtown Skagway tour combined with White Pass Summit scenery and photo stops.",
    description:
      "Begin with a guided introduction to Skagway's Gold Rush-era Broadway Street, saloons, and boardwalk charm. Continue toward White Pass Summit for panoramic mountain views, cascading waterfalls, and the dramatic landscapes that drew stampeders north in 1898.",
    duration: "2 hours 30 minutes",
    activityLevel: "Moderate",
    bestFor: ["History lovers", "Short port days", "Budget-conscious travelers"],
    walkingRequired: "Moderate — downtown walking plus optional short trails at summit stops",
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
      "Small day pack",
    ],
    returnToShipAdvice:
      "Shorter duration makes this one of the easier options to pair with lunch in town. Still verify departure times against your ship's schedule — especially on late-arrival port days.",
    categories: ["white-pass-railway", "family-friendly"],
    priceFrom: 75,
    image: "/tours/skagway-city-and-white-pass-summit.png",
    imageAlt: "Sunny view of historic Broadway Street in Skagway, Alaska, with colorful Gold Rush buildings, a cruise ship at the pier, and snow-capped mountains",
    highlights: [
      "Klondike Gold Rush downtown highlights",
      "White Pass Summit photo stops",
      "Compact format for mixed town-and-scenery days",
    ],
    familyFriendly: true,
    privateOption: false,
  },
  {
    slug: "yukon-rail-and-bus-adventure",
    name: "Yukon Rail and Bus Adventure",
    shortDescription:
      "Full-day journey deep into the Yukon Territory by rail and motorcoach with included lunch.",
    description:
      "Go beyond the summit gate on the ultimate Skagway rail-and-road combination. Travel into Canada's Yukon Territory for Emerald Lake, alpine tundra, and wide-open northern landscapes. This is the comprehensive day trip for passengers who came to Alaska to see the Yukon.",
    duration: "7 hours 30 minutes",
    activityLevel: "Moderate",
    bestFor: ["Full-day explorers", "Yukon first-timers", "Scenery collectors"],
    walkingRequired: "Light to moderate at scheduled stops — mostly optional short walks",
    foodDrink: "Lunch included",
    cruiseConfidence: "Medium Cruise Confidence",
    whoShouldChoose:
      "Best for travelers whose top priority is seeing the Yukon itself — lakes, tundra, and cross-border scenery — with a premium rail component included.",
    whoShouldChooseDifferent:
      "Choose a half-day rail tour if your ship has a short port call or you prefer more free time in Skagway. Passengers uncomfortable with border crossing paperwork should confirm passport requirements first.",
    whatToBring: [
      "Valid passport (required for Canada entry)",
      "Warm layers — summit and Yukon areas can be cool",
      "Camera and wide-angle lens",
      "Motion-sickness remedy if sensitive on mountain roads",
    ],
    returnToShipAdvice:
      "Full-day Yukon tours require careful timing. Book the earliest available departure, carry your passport accessible for border stops, and avoid adding unrelated activities before or after without checking total elapsed time.",
    categories: ["yukon", "white-pass-railway"],
    priceFrom: 387,
    image: "/tours/yukon-rail-and-bus-adventure.png",
    imageAlt: "Welcome to Yukon sign on a scenic mountain road marking the entrance to Yukon Territory on a Skagway rail and bus adventure",
    highlights: [
      "White Pass Railway segment",
      "Yukon Territory sightseeing",
      "Emerald Lake and Klondike Highway vistas",
      "Included lunch",
    ],
    familyFriendly: false,
    privateOption: false,
  },
  {
    slug: "white-pass-summit-yukon-suspension-bridge",
    name: "White Pass Summit and Yukon Suspension Bridge",
    shortDescription:
      "Rail to the summit plus an expedition to the Yukon Suspension Bridge over Tutshi River Canyon.",
    description:
      "Experience White Pass by rail, then continue to one of Skagway's most thrilling viewpoints — the Yukon Suspension Bridge spanning the Tutshi River Canyon. Gold Rush history meets heart-pounding alpine scenery on this popular half-day adventure.",
    duration: "4 hours 30 minutes",
    activityLevel: "Easy",
    bestFor: ["Adventurous sightseers", "Bridge and canyon photography", "Rail plus extra wow-factor"],
    walkingRequired: "Easy walking on bridge and viewpoint platforms — steady footing recommended",
    foodDrink: "Not included",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose:
      "Great when you want more than summit photos but are not ready for a full Yukon day. The suspension bridge adds a memorable highlight without the longest border crossing itinerary.",
    whoShouldChooseDifferent:
      "Choose the full Yukon Rail and Bus Adventure for Emerald Lake and deeper Canadian scenery. Choose dog sledding if animal experiences matter more than canyon views.",
    whatToBring: [
      "Passport recommended",
      "Secure hat and sunglasses for windy bridge areas",
      "Non-slip footwear",
      "Rain layer",
    ],
    returnToShipAdvice:
      "Mid-length format generally fits standard cruise windows well. Allow margin for border-area traffic and choose morning slots when your ship arrives early.",
    categories: ["yukon", "white-pass-railway", "family-friendly"],
    priceFrom: 349,
    image: "/tours/white-pass-summit-yukon-suspension-bridge.png",
    imageAlt: "White Pass and Yukon Route railway trestle bridge over turquoise water with historic red buildings and mountain peaks near Carcross, Yukon",
    highlights: [
      "White Pass Railway ride",
      "Yukon Suspension Bridge crossing",
      "Tutshi River Canyon panoramas",
    ],
    familyFriendly: true,
    privateOption: false,
  },
  {
    slug: "bennett-scenic-journey",
    name: "Bennett Scenic Journey",
    shortDescription:
      "Extended Klondike Highway journey with waterfalls, rivers, glaciers, and included lunch.",
    description:
      "Travel the legendary Klondike Highway on a full-day scenic journey toward Bennett Lake and beyond. Expect cascading waterfalls, glacial rivers, historic markers, and some of the most photographed wilderness between Skagway and the Yukon interior.",
    duration: "8 hours",
    activityLevel: "Moderate",
    bestFor: ["Dedicated photographers", "Long port days", "Scenic road-trip lovers"],
    walkingRequired: "Moderate at selected stops — uneven terrain at some waterfall viewpoints",
    foodDrink: "Lunch included",
    cruiseConfidence: "Plan Carefully",
    whoShouldChoose:
      "Ideal for passengers on ships with extended Skagway time who want a comprehensive overland scenic experience rather than a short rail hop.",
    whoShouldChooseDifferent:
      "Avoid if your all-aboard window is tight or you are prone to fatigue on long coach days. Half-day rail tours are better for shorter calls.",
    whatToBring: [
      "Passport",
      "Sturdy walking shoes",
      "All-day snack supply beyond included lunch",
      "Tripod if serious about photography",
    ],
    returnToShipAdvice:
      "At eight hours, this tour demands the most schedule attention. Confirm your ship's all-aboard time in writing, book the earliest departure, and skip independent plans that could delay your return to the pier.",
    categories: ["yukon"],
    priceFrom: 399,
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&q=80",
    imageAlt: "Klondike Highway waterfall and glacier scenery on Bennett scenic route from Skagway",
    highlights: [
      "Klondike Highway waterfalls",
      "Glacial rivers and mountain vistas",
      "Historic Gold Rush route markers",
      "Included lunch",
    ],
    familyFriendly: false,
    privateOption: false,
  },
  {
    slug: "summit-views-sled-dogs",
    name: "Summit Views and Sled Dogs",
    shortDescription:
      "Alpine summit scenery paired with a husky sled ride and musher camp experience.",
    description:
      "Combine White Pass summit viewpoints with an authentic Alaskan mushing experience. Meet working sled dogs, learn training traditions from experienced mushers, and ride a wheeled cart or sled through alpine terrain — a summer favorite for cruise passengers.",
    duration: "4 hours 30 minutes",
    activityLevel: "Easy",
    bestFor: ["Animal lovers", "Families with kids", "Unique Alaska experiences"],
    walkingRequired: "Minimal — short walks at musher camp",
    foodDrink: "Not included",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose:
      "Perfect when you want a signature Alaska activity (dog sledding) bundled with mountain scenery without a full Yukon commitment.",
    whoShouldChooseDifferent:
      "Choose helicopter glacier tours for aerial ice-field views. Choose Yukon day trips if cross-border landscapes are your primary goal rather than mushing.",
    whatToBring: [
      "Warm layer for summit stops",
      "Camera for puppy photos",
      "Closed-toe shoes",
      "Hand sanitizer after animal encounters",
    ],
    returnToShipAdvice:
      "Half-day length typically aligns well with cruise schedules. Morning departures leave room for downtown Skagway time after your tour.",
    categories: ["dog-sledding", "family-friendly"],
    priceFrom: 239,
    image: "https://images.unsplash.com/photo-1605568420261-e9fae8e4b476?w=1200&q=80",
    imageAlt: "Alaskan husky sled dog team with musher in alpine terrain near Skagway summit",
    highlights: [
      "Summit viewpoint stops",
      "Musher-led kennel visit",
      "Sled dog ride experience",
    ],
    familyFriendly: true,
    privateOption: false,
  },
  {
    slug: "helicopter-glacier-discovery",
    name: "Helicopter Glacier Discovery",
    shortDescription:
      "Flightseeing over Skagway's glaciers — a compact aerial adventure with high wow-factor.",
    description:
      "Soar above the Coast Mountains and Skagway ice fields on a glacier helicopter discovery flight. This is one of the most efficient ways to witness Alaska's glacial scale when your port day is limited but you want an unforgettable aerial perspective.",
    duration: "1 hour 30 minutes",
    activityLevel: "Easy",
    bestFor: ["Bucket-list flyers", "Limited mobility travelers", "Time-efficient adventurers"],
    walkingRequired: "Minimal — short ground time if glacier landing is included in your variant",
    foodDrink: "Not included",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose:
      "Best when aerial glacier views are your top Alaska priority and you want maximum impact in minimum time — leaving the rest of your port day free.",
    whoShouldChooseDifferent:
      "Choose White Pass Railway if historic ground-based scenery matters more. Weather-dependent cancellations mean having a backup plan is wise.",
    whatToBring: [
      "Sunglasses",
      "Warm layer for alpine air",
      "Secure hat (helicopter rotor wash)",
      "Motion-sickness remedy if needed",
    ],
    returnToShipAdvice:
      "Short total duration makes this among the easiest tours to combine with town exploration. Monitor weather briefings — rebooked flights can affect your buffer time.",
    categories: ["helicopter-glacier", "family-friendly"],
    priceFrom: 599,
    image: "https://images.unsplash.com/photo-1483728642387-6a3fb52032a5?w=1200&q=80",
    imageAlt: "Helicopter flying over glacier ice fields and mountains near Skagway Alaska",
    highlights: [
      "Glacier flightseeing",
      "Coast Mountain panoramas",
      "Compact premium format",
    ],
    familyFriendly: true,
    privateOption: false,
  },
  {
    slug: "self-guided-jeep-to-yukon",
    name: "Self-Guided Jeep to the Yukon",
    shortDescription:
      "Drive your own Jeep along the Klondike Highway to Emerald Lake and Yukon viewpoints.",
    description:
      "Take the wheel on a self-guided Jeep adventure deep into the Yukon. Follow a curated route with stops for waterfalls, wildlife lookouts, and Emerald Lake — one of North America's most photographed alpine lakes — at your own pace within the tour framework.",
    duration: "6 hours",
    activityLevel: "Easy",
    bestFor: ["Independent travelers", "Couples and friends", "Road-trip enthusiasts"],
    walkingRequired: "Optional — stop-dependent short walks",
    foodDrink: "Not included — plan meals or pack snacks",
    cruiseConfidence: "Medium Cruise Confidence",
    whoShouldChoose:
      "Ideal if you want Yukon scenery with freedom to linger at photo stops, and you are comfortable driving mountain highways in a provided vehicle.",
    whoShouldChooseDifferent:
      "Choose guided coach or rail tours if you prefer narration and hands-free sightseeing. Not suited for passengers without a valid driver's license or those uncomfortable on narrow mountain roads.",
    whatToBring: [
      "Valid driver's license and passport",
      "Full tank mentality — follow fuel and route guidance",
      "Offline maps backup",
      "Picnic lunch or snack budget",
    ],
    returnToShipAdvice:
      "Self-paced does not mean unlimited time — respect the operator's return window. Build in buffer for border crossing and photography stops so you are not rushing the highway back to Skagway.",
    categories: ["yukon", "private"],
    priceFrom: 649,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80",
    imageAlt: "Jeep driving Klondike Highway toward Emerald Lake in Yukon Territory from Skagway",
    highlights: [
      "Self-drive Klondike Highway",
      "Emerald Lake photo stop",
      "Flexible pacing within tour window",
    ],
    familyFriendly: false,
    privateOption: true,
  },
  {
    slug: "scenic-waterfall-adventure",
    name: "Scenic Waterfall Adventure",
    shortDescription:
      "Relaxed scenic drive to Skagway-area and Klondike Highway waterfall destinations.",
    description:
      "A gentle introduction to the waterfalls and forested valleys surrounding Skagway. Travel along scenic routes with stops at cascading falls on both the U.S. and Canadian sides of the pass when itinerary allows — perfect for passengers who want beauty without strenuous hiking.",
    duration: "3 hours",
    activityLevel: "Moderate",
    bestFor: ["Nature lovers", "Relaxed pace", "Photography at close range"],
    walkingRequired: "Moderate — short paths to waterfall viewpoints, some uneven steps",
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
      "Insect repellent in summer",
    ],
    returnToShipAdvice:
      "Three-hour format leaves generous pier buffer on most cruise schedules. Still confirm whether your variant crosses into Canada and plan passport accordingly.",
    categories: ["family-friendly"],
    priceFrom: 85,
    image: "https://images.unsplash.com/photo-1432407693418-8a62b063fd0f?w=1200&q=80",
    imageAlt: "Scenic waterfall along Klondike Highway near Skagway Alaska",
    highlights: [
      "Multiple waterfall stops",
      "Klondike Highway scenery",
      "Relaxed narrated format",
    ],
    familyFriendly: true,
    privateOption: false,
  },
  {
    slug: "ocean-raft-adventure",
    name: "Ocean Raft Adventure",
    shortDescription:
      "High-speed RIB raft along Skagway's rugged fjord shoreline for an intimate thrill ride.",
    description:
      "Zip along the Lynn Canal fjord in a custom rigid-inflatable boat, getting close to sea cliffs, waterfalls pouring into the ocean, and wildlife habitat along one of Alaska's deepest waterways. An adrenaline-forward contrast to mountain rail tours.",
    duration: "2 hours",
    activityLevel: "Moderate",
    bestFor: ["Thrill seekers", "Wildlife watchers from the water", "Active couples"],
    walkingRequired: "Minimal — boarding from dock area",
    foodDrink: "Not included",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose:
      "Choose this when you want marine Alaska — salt air, fjord cliffs, and speed — rather than summit railways or Yukon highways.",
    whoShouldChooseDifferent:
      "Not ideal for passengers sensitive to cold spray, rough motion, or loud engine noise. Choose scenic waterfall or city tours for gentler pacing.",
    whatToBring: [
      "Warm waterproof outer layer",
      "Gloves recommended",
      "Secure eyewear strap",
      "Waterproof phone pouch or leave electronics ashore",
    ],
    returnToShipAdvice:
      "Short duration fits easily into port days. Dress warmer than the air temperature suggests — fjord wind and spray are colder than downtown Skagway.",
    categories: ["family-friendly"],
    priceFrom: 229,
    image: "https://images.unsplash.com/photo-1544551763-77a7c1e2d9e3?w=1200&q=80",
    imageAlt: "Rigid inflatable boat cruising Skagway fjord with mountain coastline",
    highlights: [
      "Fjord shoreline exploration",
      "Custom RIB speed and agility",
      "Water-level Alaska perspective",
    ],
    familyFriendly: true,
    privateOption: false,
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
