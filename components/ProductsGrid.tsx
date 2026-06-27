"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import {
  type Product,
  qualityBrands,
  productQualityDetails,
  type QualityTier,
} from "@/lib/data/products";
import { Filter, Grid3x3, ProductIcon, QualityTierIcon } from "@/lib/icons";

const SECTION_ACCENTS = [
  "border-quality-premium-200 bg-quality-premium-50 text-quality-premium-800",
  "border-quality-standard-200 bg-quality-standard-50 text-quality-standard-800",
  "border-quality-economy-200 bg-quality-economy-50 text-quality-economy-800",
  "border-blue-200 bg-blue-50 text-blue-800",
  "border-violet-200 bg-violet-50 text-violet-800",
  "border-rose-200 bg-rose-50 text-rose-800",
  "border-teal-200 bg-teal-50 text-teal-800",
  "border-orange-200 bg-orange-50 text-orange-800",
  "border-cyan-200 bg-cyan-50 text-cyan-800",
  "border-indigo-200 bg-indigo-50 text-indigo-800",
] as const;

const CATALOG_GRID = "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";

export default function ProductsGrid({
  products,
  initialQuality = "all",
}: {
  products: Product[];
  initialQuality?: QualityTier | "all";
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<QualityTier | "all">(initialQuality);

  const filteredBrands =
    activeFilter === "all"
      ? qualityBrands
      : qualityBrands.filter((b) => b.id === activeFilter);

  const setFilter = (filter: QualityTier | "all") => {
    setActiveFilter(filter);
    const params = new URLSearchParams(searchParams.toString());
    if (filter === "all") params.delete("quality");
    else params.set("quality", filter);
    const query = params.toString();
    router.replace(query ? `/products?${query}` : "/products", { scroll: false });
  };

  const singleBrand = activeFilter !== "all" ? qualityBrands.find((b) => b.id === activeFilter) : null;

  return (
    <div>
      <div className="mb-6 rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm">
        <p className="mb-2.5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400">
          <Filter className="h-3.5 w-3.5" aria-hidden />
          Filter by quality
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
              activeFilter === "all"
                ? "bg-stone-900 text-white shadow-sm"
                : "border border-stone-200 bg-stone-50 text-stone-600 hover:bg-white"
            }`}
          >
            <Grid3x3 className="h-3.5 w-3.5" aria-hidden />
            All Qualities
          </button>
          {qualityBrands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setFilter(brand.id)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                activeFilter === brand.id
                  ? `${brand.buttonPrimary} shadow-sm`
                  : `border border-stone-200 bg-stone-50 ${brand.accentText} hover:bg-white`
              }`}
            >
              <QualityTierIcon tier={brand.id} className="h-3.5 w-3.5" />
              {brand.name}
            </button>
          ))}
        </div>
      </div>

      {singleBrand ? (
        <div className={CATALOG_GRID}>
          {products.map((product) => {
            const detail = productQualityDetails[product.slug]?.[singleBrand.id];
            if (!detail) return null;
            return (
              <ProductCard
                key={product.slug}
                href={`/products/${product.slug}?quality=${singleBrand.id}`}
                product={product}
                brand={singleBrand}
                detail={detail}
              />
            );
          })}
        </div>
      ) : (
        <div className="space-y-10">
          {products.map((product, index) => {
            const qualityData = productQualityDetails[product.slug];
            if (!qualityData) return null;
            const accent = SECTION_ACCENTS[index % SECTION_ACCENTS.length];

            return (
              <section key={product.slug} aria-labelledby={`heading-${product.slug}`}>
                <div className="mb-4 flex items-start gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${accent}`}
                  >
                    <ProductIcon slug={product.slug} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2
                      id={`heading-${product.slug}`}
                      className="scroll-mt-[7.5rem] text-base font-bold text-gray-900 sm:text-lg"
                    >
                      {product.name}
                    </h2>
                    <p className="mt-0.5 line-clamp-1 text-sm text-gray-500">{product.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {filteredBrands.map((brand) => {
                    const detail = qualityData[brand.id];
                    if (!detail) return null;
                    return (
                      <ProductCard
                        key={brand.id}
                        href={`/products/${product.slug}?quality=${brand.id}`}
                        product={product}
                        brand={brand}
                        detail={detail}
                        hideProductName
                      />
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
