import {
  operatorPassportNote,
  travelDocsDisclaimer,
  travelDocsGroups,
  travelDocsIntro,
  travelDocsSources,
} from "@/lib/travel-documents";

export function TravelDocuments() {
  return (
    <section
      id="travel-documents"
      aria-labelledby="travel-documents-heading"
      className="scroll-mt-24 rounded-xl border border-gold/30 bg-white p-6 shadow-sm lg:p-8"
    >
      <h2 id="travel-documents-heading" className="font-display text-xl font-semibold text-forest">
        Passports &amp; Border Documents
      </h2>
      <p className="mt-3 text-mountain leading-relaxed">{travelDocsIntro}</p>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {travelDocsGroups.map((group) => (
          <div key={group.heading}>
            <h3 className="font-display text-base font-semibold text-forest">{group.heading}</h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-mountain leading-relaxed">
              {group.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 rounded-lg bg-gold/10 px-4 py-3 text-sm font-medium text-forest">
        {operatorPassportNote}
      </p>
      <p className="mt-4 text-sm text-mountain">{travelDocsDisclaimer}</p>
      <ul className="mt-2 space-y-1 text-sm">
        {travelDocsSources.map((source) => (
          <li key={source.href}>
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-glacier underline hover:text-forest"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
