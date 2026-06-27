import Link from "next/link";
import { Suspense } from "react";
import ProductCategoryNav from "@/components/ProductCategoryNav";
import { productCategories, products, qualityBrands, resolveProductsFilter } from "@/lib/data/products";
import ProductsGrid from "@/components/ProductsGrid";
import { Grid3x3, Layers, Package, QualityTierIcon } from "@/lib/icons";

export const metadata = {
  title: "Products",
  description: "Browse our product catalogue and available packaging options.",
};

const categoryNavItems = productCategories.flatMap((category) => {
  const product = products.find((p) => p.category === category);
  return product ? [{ label: category, slug: product.slug }] : [];
});

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const initialQuality = resolveProductsFilter(
    searchParams ? (await searchParams).quality : undefined
  );

  return (
    <div>
      <ProductCategoryNav categories={categoryNavItems} />
      <div className="h-12" aria-hidden />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className={`pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full blur-3xl ${qualityBrands[0].heroGlow}`}
          aria-hidden
        />
        <div
          className={`pointer-events-none absolute -right-20 top-16 h-72 w-72 rounded-full blur-3xl ${qualityBrands[2].heroGlow}`}
          aria-hidden
        />

        <div className="container relative py-10 sm:py-14">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold backdrop-blur">
            <Package className="h-3.5 w-3.5" aria-hidden />
            <span className="flex gap-1" aria-hidden>
              {qualityBrands.map((brand) => (
                <span key={brand.id} className={`h-2 w-2 rounded-full ${brand.heroDot}`} />
              ))}
            </span>
            Full Product Catalogue
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Browse by{" "}
            <span className="bg-gradient-to-r from-quality-premium-400 via-stone-300 to-quality-economy-400 bg-clip-text text-transparent">
              quality &amp; category
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {products.length} product types across Monarch Mist, Pearl Pure, and Clean Wave — filter
            by quality tier or jump to a category below.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {qualityBrands.map((brand) => (
              <Link
                key={brand.id}
                href={`/products?quality=${brand.id}`}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  initialQuality === brand.id
                    ? `${brand.buttonPrimary} shadow-md`
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                <QualityTierIcon tier={brand.id} className="h-4 w-4" />
                {brand.name}
              </Link>
            ))}
            <Link
              href="/products"
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                initialQuality === "all"
                  ? "bg-white text-slate-900 shadow-md"
                  : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              <Grid3x3 className="h-4 w-4" aria-hidden />
              All Qualities
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-6 sm:py-8" aria-label="Products by quality">
        <div className="container">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="inline-flex items-center gap-2 text-xl font-bold text-gray-900 sm:text-2xl">
                <Package className="h-5 w-5 text-brand-600" aria-hidden />
                All Products
              </h2>
              <p className="mt-0.5 text-xs text-gray-600 sm:text-sm">
                Each product is available in all three quality ranges with dedicated packaging.
              </p>
            </div>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold text-gray-700 shadow-sm">
              <Layers className="h-3.5 w-3.5 text-brand-600" aria-hidden />
              {products.length} categories · 3 quality tiers
            </span>
          </div>

          <Suspense fallback={<div className="py-12 text-center text-sm text-gray-500">Loading products…</div>}>
            <ProductsGrid products={products} initialQuality={initialQuality} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
