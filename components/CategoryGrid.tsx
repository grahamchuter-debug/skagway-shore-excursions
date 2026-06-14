import Link from "next/link";
import { categoryLinks } from "@/lib/site";

export function CategoryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categoryLinks.map((cat) => (
        <Link
          key={cat.href}
          href={cat.href}
          className="card-hover rounded-xl border border-forest/10 bg-white p-5 shadow-sm"
        >
          <h3 className="font-display text-lg font-semibold text-forest">
            {cat.label}
          </h3>
          <p className="mt-2 text-sm text-mountain">{cat.description}</p>
          <span className="mt-3 inline-block text-sm font-semibold text-glacier">
            Explore →
          </span>
        </Link>
      ))}
    </div>
  );
}
