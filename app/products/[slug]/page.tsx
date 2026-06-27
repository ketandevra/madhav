import Link from "next/link";
import type { Metadata } from "next";
import ProductImageFrame from "@/components/ProductImageFrame";
import {
  getProductBySlug,
  getQualityBrand,
  products,
  qualityBrands,
  productQualityDetails,
  resolveQualityTier,
} from "@/lib/data/products";
import ComparisonTable from "@/components/ComparisonTable";
import QualityBadge from "@/components/QualityBadge";
import {
  ArrowLeft,
  ChevronRight,
  FileText,
  Layers,
  MessageCircle,
  Package,
  ProductIcon,
  QualityTierIcon,
  Truck,
  Wind,
} from "@/lib/icons";

function slugFromParams(resolved: { slug?: string | string[] }): string {
  const raw = resolved.slug;
  if (typeof raw === "string") return raw;
  if (Array.isArray(raw) && raw[0]) return raw[0];
  return "";
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug?: string | string[] }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  const slug = slugFromParams(await params);
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };

  const qualityId = resolveQualityTier(searchParams ? (await searchParams).quality : undefined);
  const brand = getQualityBrand(qualityId);
  const detail = productQualityDetails[slug]?.[qualityId];
  const description = detail?.description ?? product.description;
  const title = brand ? `${product.name} — ${brand.name}` : product.name;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function ProductDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug?: string | string[] }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const slug = slugFromParams(await params);
  const product = getProductBySlug(slug);
  const qualityId = resolveQualityTier(searchParams ? (await searchParams).quality : undefined);

  if (!product) {
    return (
      <div className="container py-16">
        <p className="text-gray-700">Product not found.</p>
        <Link href="/products" className="mt-4 inline-block text-brand-700 hover:underline">
          Back to products
        </Link>
      </div>
    );
  }

  const qualityData = productQualityDetails[slug];
  const brand = getQualityBrand(qualityId);
  const detail = qualityData?.[qualityId];
  const heroImage = detail?.image;
  const heroDescription = detail?.description ?? product.description;

  return (
    <div className="container py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
        <Link href="/products" className="inline-flex items-center gap-1 transition-colors hover:text-brand-700">
          <Package className="h-3.5 w-3.5" aria-hidden />
          Products
        </Link>
        <ChevronRight className="h-4 w-4" aria-hidden />
        <span className="inline-flex items-center gap-1 text-gray-900">
          <ProductIcon slug={slug} className="h-3.5 w-3.5" />
          {product.name}
        </span>
        {brand && (
          <>
            <ChevronRight className="h-4 w-4" aria-hidden />
            <span className="inline-flex items-center gap-1 text-gray-900">
              <QualityTierIcon tier={brand.id} className="h-3.5 w-3.5" />
              {brand.name}
            </span>
          </>
        )}
      </nav>

      {/* Quality switcher */}
      {qualityData && (
        <div className="mb-6 flex flex-wrap gap-2">
          {qualityBrands.map((qBrand) => {
            const isActive = qBrand.id === qualityId;
            return (
              <Link
                key={qBrand.id}
                href={`/products/${slug}?quality=${qBrand.id}`}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? `${qBrand.buttonPrimary} shadow-sm`
                    : `border bg-white ${qBrand.cardBorder} ${qBrand.accentText} hover:bg-gray-50`
                }`}
              >
                <QualityTierIcon tier={qBrand.id} className="h-4 w-4" />
                {qBrand.name}
              </Link>
            );
          })}
        </div>
      )}

      {/* Main product section */}
      <div className="grid gap-8 lg:grid-cols-2">
        <ProductImageFrame
          src={heroImage}
          alt={brand ? `${brand.name} ${product.name}` : product.name}
          priority
          variant="detail"
        />

        {/* Info */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              <ProductIcon slug={slug} className="h-3.5 w-3.5" />
              {product.category}
            </span>
            {brand && <QualityBadge brand={brand} />}
          </div>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">{product.name}</h1>
          {brand && (
            <p className={`mt-1 text-sm font-semibold ${brand.accentText}`}>
              {brand.tier} Quality · {brand.name}
            </p>
          )}
          <p className="mt-3 leading-relaxed text-gray-600">{heroDescription}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <p className="mb-1 inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
                <Package className="h-3.5 w-3.5" aria-hidden />
                Available Sizes
              </p>
              {detail ? (
                <div className="flex flex-wrap gap-1.5">
                  {detail.sizes.map((size) => (
                    <span
                      key={size}
                      className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm font-medium text-gray-900">{product.packaging}</p>
              )}
            </div>
            {(detail?.fragrances?.length || product.variants) && (
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="mb-1 inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
                  <Wind className="h-3.5 w-3.5" aria-hidden />
                  {detail?.fragrances?.length ? "Fragrances" : "Variants"}
                </p>
                {detail?.fragrances?.length ? (
                  <div className="flex flex-wrap gap-1.5">
                    {detail.fragrances.map((fragrance) => (
                      <span
                        key={fragrance}
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${brand?.badge ?? "bg-gray-100 text-gray-700"}`}
                      >
                        {fragrance}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm font-medium text-gray-900">{product.variants}</p>
                )}
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/contact?product=${encodeURIComponent(brand ? `${product.name} (${brand.name})` : product.name)}`}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-medium text-white transition-colors ${brand?.buttonPrimary ?? "bg-brand-600 hover:bg-brand-700"}`}
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Request Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to Products
            </Link>
          </div>
        </div>
      </div>

      {/* Quality Variants */}
      {qualityData && (
        <section className="mt-14" aria-labelledby="quality-variants-heading">
          <h2 id="quality-variants-heading" className="inline-flex items-center gap-2 text-2xl font-bold text-gray-900">
            <Layers className="h-6 w-6 text-brand-600" aria-hidden />
            All Quality Ranges
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Compare specs for {product.name} across Monarch Mist, Pearl Pure, and Clean Wave.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {qualityBrands.map((qBrand) => {
              const variantDetail = qualityData[qBrand.id];
              if (!variantDetail) return null;
              const isActive = qBrand.id === qualityId;
              const variantImage = variantDetail.image;

              return (
                <Link
                  key={qBrand.id}
                  href={`/products/${slug}?quality=${qBrand.id}`}
                  className={`overflow-hidden rounded-2xl border-2 bg-gradient-to-br transition-all duration-200 ${qBrand.cardBg} ${
                    isActive
                      ? `${qBrand.cardBorder} shadow-lg ring-2 ring-offset-2 ${qBrand.activeRing}`
                      : `${qBrand.cardBorder} hover:shadow-md`
                  }`}
                >
                  <div className={`h-1 w-full bg-gradient-to-r ${qBrand.headerGradient}`} />
                  <div className="p-4">
                    <ProductImageFrame
                      src={variantImage}
                      alt={`${qBrand.name} ${product.name}`}
                      className="mb-3"
                    />
                    <QualityBadge brand={qBrand} />
                    <p className={`mt-1.5 text-xs font-semibold ${qBrand.accentText}`}>
                      {qBrand.tier} Quality
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      {variantDetail.description}
                    </p>

                    <div className="mt-3">
                      <p className="mb-1.5 inline-flex items-center gap-1 text-xs font-medium text-gray-500">
                        <Package className="h-3 w-3" aria-hidden />
                        Sizes
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {variantDetail.sizes.map((size) => (
                          <span
                            key={size}
                            className="rounded border border-gray-200 bg-white px-2 py-0.5 text-xs text-gray-600"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>

                    {variantDetail.fragrances && variantDetail.fragrances.length > 0 && (
                      <div className="mt-2.5">
                        <p className="mb-1.5 inline-flex items-center gap-1 text-xs font-medium text-gray-500">
                          <Wind className="h-3 w-3" aria-hidden />
                          Fragrances
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {variantDetail.fragrances.map((f) => (
                            <span key={f} className={`rounded px-2 py-0.5 text-xs ${qBrand.badge}`}>
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <span
                      className={`mt-4 inline-flex w-full items-center justify-center rounded-lg px-3 py-2 text-xs font-semibold ${qBrand.buttonPrimary}`}
                    >
                      {isActive ? `Viewing ${qBrand.name}` : `View ${qBrand.name}`}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Comparison Table */}
      <section className="mt-14" aria-labelledby="comparison-heading">
        <h2 id="comparison-heading" className="inline-flex items-center gap-2 text-2xl font-bold text-gray-900">
          <Layers className="h-6 w-6 text-brand-600" aria-hidden />
          Quality Comparison
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Compare our three quality ranges to find the perfect fit for your needs.
        </p>
        <div className="mt-6">
          <ComparisonTable />
        </div>
      </section>

      {/* Packaging info */}
      <section className="mt-10 rounded-2xl border border-gray-100 bg-gray-50 p-6">
        <h2 className="inline-flex items-center gap-2 font-semibold text-gray-900">
          <Truck className="h-5 w-5 text-brand-600" aria-hidden />
          Packaging &amp; Logistics
        </h2>
        <p className="mt-2 inline-flex items-start gap-2 text-sm leading-relaxed text-gray-600">
          <FileText className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" aria-hidden />
          <span>
            Available in bulk tankers, IBCs, and drums subject to product specifications.
            Documentation includes Invoice, E‑Way Bill, and MSDS. Lead times vary by location and
            quantity.
          </span>
        </p>
      </section>
    </div>
  );
}
