import Link from "next/link";
import ProductImageFrame from "@/components/ProductImageFrame";
import type { Product, QualityBrand, ProductQualityDetail } from "@/lib/data/products";
import { ChevronRight, QualityTierIcon } from "@/lib/icons";

export default function ProductCard({
  href,
  product,
  brand,
  detail,
  hideProductName = false,
}: {
  href: string;
  product: Product;
  brand: QualityBrand;
  detail: ProductQualityDetail;
  hideProductName?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex h-full flex-col overflow-hidden rounded-xl border bg-white ${brand.cardBorder} shadow-sm ring-1 ring-black/[0.03] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`}
    >
      <div className={`h-1 w-full shrink-0 bg-gradient-to-r ${brand.headerGradient}`} />

      <div className={`bg-gradient-to-br ${brand.cardBg} p-2.5 pb-2`}>
        <ProductImageFrame
          src={detail.image}
          alt={`${brand.name} ${product.name}`}
          size="compact"
          fallbackClassName={`bg-gradient-to-br ${brand.cardBg}`}
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 px-3 pb-3 pt-2.5">
        <div className="space-y-1.5">
          <span
            className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${brand.badge}`}
          >
            <QualityTierIcon tier={brand.id} className="h-3 w-3 shrink-0" />
            {brand.name}
          </span>

          {hideProductName ? (
            <p className={`text-xs font-semibold ${brand.accentText}`}>{brand.tier} Quality</p>
          ) : (
            <h3 className="text-sm font-bold leading-snug text-gray-900">{product.name}</h3>
          )}

          <p className="line-clamp-2 text-xs leading-relaxed text-gray-500">{detail.description}</p>
        </div>

        <div className="flex flex-wrap gap-1">
          {detail.sizes.slice(0, 3).map((size) => (
            <span
              key={size}
              className="rounded-md border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-[10px] font-medium text-gray-600"
            >
              {size}
            </span>
          ))}
          {detail.sizes.length > 3 && (
            <span className="self-center text-[10px] text-gray-400">+{detail.sizes.length - 3}</span>
          )}
        </div>

        <span
          className={`mt-auto inline-flex w-full items-center justify-center gap-1 rounded-lg px-3 py-2 text-xs font-semibold transition ${brand.buttonPrimary}`}
        >
          View Details
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
