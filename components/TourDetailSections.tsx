import Link from "next/link";
import type { Tour } from "@/lib/tours";
import { borderNote } from "@/lib/tours";
import { operatorPassportNote, TRAVEL_DOCS_HREF } from "@/lib/travel-documents";
import { CruiseConfidenceBadge } from "./CruiseConfidenceBadge";

interface TourDetailSectionsProps {
  tour: Tour;
}

export function TourDetailSections({ tour }: TourDetailSectionsProps) {
  const sections = [
    {
      title: "Duration",
      content: tour.duration,
    },
    {
      title: "Activity Level",
      content: tour.activityLevel,
    },
    {
      title: "Best For",
      content: tour.bestFor.join(", "),
    },
    {
      title: "Walking Required",
      content: tour.walkingRequired,
    },
    ...(tour.requirements.length
      ? [
          {
            title: "Requirements & Restrictions",
            content: (
              <>
                <ul className="list-disc pl-5 space-y-1">
                  {tour.requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-2 text-sm">
                  Typical rules — they vary by operator and are confirmed when you enquire.
                </p>
              </>
            ),
          },
        ]
      : []),
    {
      title: "Border Crossing",
      content: (
        <>
          <p>{borderNote(tour)}</p>
          {tour.crossesIntoCanada !== "no" && (
            <p className="mt-2">
              {operatorPassportNote}{" "}
              <Link href={TRAVEL_DOCS_HREF} className="font-medium text-glacier underline hover:text-forest">
                Which documents you need
              </Link>
              .
            </p>
          )}
        </>
      ),
    },
    {
      title: "Food & Drink",
      content: tour.foodDrink,
    },
    {
      title: "Cruise Confidence",
      content: <CruiseConfidenceBadge level={tour.cruiseConfidence} />,
    },
    {
      title: "Who Should Choose This Tour",
      content: tour.whoShouldChoose,
    },
    {
      title: "Who Should Choose a Different Tour",
      content: tour.whoShouldChooseDifferent,
    },
    {
      title: "What to Bring",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          {tour.whatToBring.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Return-to-Ship Advice",
      content: tour.returnToShipAdvice,
    },
  ];

  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <section
          key={section.title}
          className="rounded-lg border border-forest/10 bg-white p-5 shadow-sm"
        >
          <h2 className="font-display text-lg font-semibold text-forest">
            {section.title}
          </h2>
          <div className="mt-2 text-mountain leading-relaxed">{section.content}</div>
        </section>
      ))}
    </div>
  );
}
