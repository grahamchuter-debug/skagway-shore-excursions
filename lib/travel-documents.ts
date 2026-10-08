/**
 * Canonical border-document guidance. Summarises official sources; review each season.
 * Last checked against the sources below: October 2026.
 */
export const TRAVEL_DOCS_HREF = "/port-guide/#travel-documents";

export const travelDocsIntro =
  "Most tours from Skagway cross into Canada and come back into the U.S. by land. Every traveller, including children, needs accepted documents for both crossings. What counts depends on your citizenship.";

export const travelDocsGroups: { heading: string; points: string[] }[] = [
  {
    heading: "U.S. citizens",
    points: [
      "Entering Canada: Canada recommends a valid passport, but also accepts documents that show your name, date of birth, and citizenship, such as a birth certificate with photo ID or an enhanced driver's license.",
      "Returning to the U.S. by land: adults should carry a U.S. passport, passport card, enhanced driver's license, or Trusted Traveler card (NEXUS, SENTRI, or FAST). Children under 16 can use a birth certificate.",
      "Sailing on a birth certificate? The birth-certificate-and-photo-ID option for closed-loop cruises is a sea-travel rule. For the land crossing back from Canada, U.S. Customs and Border Protection lists the documents above and says travelers without them are likely to be delayed.",
    ],
  },
  {
    heading: "Canadian citizens",
    points: [
      "Entering Canada by land: a valid Canadian passport is recommended; other proof of identity and citizenship is accepted.",
      "Returning into the U.S. at Skagway: carry a valid passport, enhanced driver's licence, or Trusted Traveler card (NEXUS, SENTRI, or FAST). Children under 16 can use a birth certificate.",
    ],
  },
  {
    heading: "U.S. permanent residents",
    points: [
      "Carry your valid permanent resident (green) card. Canada doesn't require your passport when you arrive by land directly from the U.S., but bring it if you have it.",
    ],
  },
  {
    heading: "Other nationalities",
    points: [
      "Bring your valid passport.",
      "Some nationalities need a Canadian visitor visa, even to cross by road or rail. An eTA (electronic travel authorization) is needed only for arrivals by air, not land.",
      "Make sure you can re-enter the U.S.: you need valid U.S. status for the land crossing back to Skagway, such as a U.S. visa or, for Visa Waiver Program travellers, an approved ESTA. Check your cruise line's guidance too.",
    ],
  },
  {
    heading: "Everyone",
    points: [
      "Past convictions, including impaired driving, can make you inadmissible to Canada.",
      "If you're travelling with a child who isn't yours, or without the child's other parent or guardian, carry a consent letter.",
    ],
  },
];

export const operatorPassportNote =
  "Some tour operators require a valid passport for tours crossing into Canada, whatever your citizenship, and some require originals for everyone 16 and over. We'll confirm the requirement for your chosen tour when you enquire.";

export const travelDocsDisclaimer =
  "This is a summary, not legal advice, and rules can change. Check the official sources and your cruise line before you travel.";

export const travelDocsSources: { label: string; href: string }[] = [
  {
    label: "U.S. Customs and Border Protection — Western Hemisphere Travel Initiative",
    href: "https://www.cbp.gov/travel/us-citizens/western-hemisphere-travel-initiative",
  },
  {
    label: "Canada Border Services Agency — documents for entering Canada",
    href: "https://www.cbsa-asfc.gc.ca/travel-voyage/td-dv-eng.html",
  },
  {
    label: "Government of Canada — check if you need a visa or eTA",
    href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/check-visa-eta.html",
  },
  {
    label: "U.S. Customs and Border Protection — ESTA and I-94 for visitors",
    href: "https://www.cbp.gov/travel/international-visitors/i-94",
  },
];
