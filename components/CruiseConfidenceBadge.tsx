import type { CruiseConfidence } from "@/lib/site";

interface CruiseConfidenceBadgeProps {
  level: CruiseConfidence;
}

const styles: Record<CruiseConfidence, string> = {
  "High Cruise Confidence": "confidence-high",
  "Medium Cruise Confidence": "confidence-medium",
  "Plan Carefully": "confidence-plan",
};

export function CruiseConfidenceBadge({ level }: CruiseConfidenceBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[level]}`}
    >
      {level}
    </span>
  );
}
