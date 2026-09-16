import Image from "next/image";

interface TourImageProps {
  src: string | null;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/** Verified local image, or neutral branded panel when no trustworthy photo exists. */
export function TourImage({
  src,
  alt,
  fill = true,
  priority,
  sizes,
  className = "object-cover",
}: TourImageProps) {
  if (!src) {
    return (
      <div
        className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-forest-dark via-forest to-glacier px-4 text-center"
        role="img"
        aria-label={alt}
      >
        <span className="font-display text-lg font-semibold text-gold-light sm:text-xl">
          Skagway Shore Excursions
        </span>
        <span className="mt-1 max-w-xs text-xs text-white/75 sm:text-sm">
          White Pass · Yukon · Gold Rush Port
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
