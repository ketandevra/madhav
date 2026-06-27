import Link from "next/link";
import type { QualityBrand } from "@/lib/data/products";
import { Check, ChevronRight, Star } from "lucide-react";
import { QualityTierIcon } from "@/lib/icons";

function StarRating({ count, max = 5, className }: { count: number; max?: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className ?? ""}`} aria-label={`${count} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-current" : "fill-stone-200 text-stone-200"}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

export default function QualityCard({ brand }: { brand: QualityBrand }) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-br shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${brand.cardBg} ${brand.cardBorder}`}
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${brand.headerGradient}`} />

      <div className="flex flex-1 flex-col p-6 pt-5">
        <span
          className={`inline-flex items-center gap-1.5 self-start rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${brand.badge}`}
        >
          <QualityTierIcon tier={brand.id} className="h-3.5 w-3.5" />
          {brand.tier}
        </span>

        <h3 className="mt-3 text-xl font-bold tracking-tight text-stone-900">{brand.name}</h3>

        <StarRating count={brand.stars} className={`mt-2 ${brand.accentText}`} />

        <p className="mt-3 text-sm leading-relaxed text-stone-600">{brand.description}</p>

        <ul className="mt-5 space-y-2.5">
          {[
            brand.features.cleaningPower,
            brand.features.foam,
            brand.features.recommendedUse,
          ].map((feat) => (
            <li key={feat} className="flex items-start gap-2.5 text-sm text-stone-700">
              <Check className={`mt-0.5 h-4 w-4 shrink-0 ${brand.accentText}`} aria-hidden />
              {feat}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <Link
            href={`/products?quality=${brand.id}`}
            className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${brand.buttonPrimary}`}
          >
            Explore {brand.name}
            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
