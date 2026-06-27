import type { QualityBrand } from "@/lib/data/products";
import { QualityTierIcon } from "@/lib/icons";

export default function QualityBadge({
  brand,
  showTier = false,
  size = "sm",
}: {
  brand: QualityBrand;
  showTier?: boolean;
  size?: "sm" | "md";
}) {
  const sizeClass =
    size === "md" ? "px-3 py-1.5 text-sm tracking-wide" : "px-2.5 py-1 text-[11px] tracking-wide";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md font-semibold uppercase ${sizeClass} ${brand.badge}`}
    >
      <QualityTierIcon tier={brand.id} className="h-3.5 w-3.5 shrink-0" />
      {brand.name}
      {showTier && (
        <>
          <span className="opacity-35">·</span>
          <span className="normal-case tracking-normal">{brand.tier}</span>
        </>
      )}
    </span>
  );
}
