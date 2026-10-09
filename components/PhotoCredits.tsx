import { photoCredits } from "@/lib/photo-credits";

const linkClass = "underline hover:text-forest";

export function PhotoCredits() {
  return (
    <section id="photo-credits" className="mt-12 border-t border-forest/10 pt-6 text-sm text-mountain">
      <h2 className="font-semibold text-forest">Photo credits</h2>
      <ul className="mt-2 space-y-2 leading-relaxed">
        {photoCredits.map((credit) => (
          <li key={credit.file}>
            {credit.usedOn}:{" "}
            <a href={credit.sourceUrl} className={linkClass}>
              &ldquo;{credit.title}&rdquo;
            </a>{" "}
            by{" "}
            <a href={credit.authorUrl} className={linkClass}>
              {credit.author}
            </a>
            , licensed under{" "}
            <a href={credit.licenceUrl} className={linkClass} rel="license">
              {credit.licence}
            </a>
            ; {credit.changes}.
          </li>
        ))}
      </ul>
      <p className="mt-2">
        No endorsement by the photographers, or by any business shown, is implied.
      </p>
    </section>
  );
}
