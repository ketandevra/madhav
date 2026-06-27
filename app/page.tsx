import Link from "next/link";
import ComparisonTable from "@/components/ComparisonTable";
import HomeProductCard from "@/components/HomeProductCard";
import QualityCard from "@/components/QualityCard";
import { productCategories, products, qualityBrands } from "@/lib/data/products";
import {
  ArrowRight,
  ChevronRight,
  Grid3x3,
  Layers,
  Package,
  ProductIcon,
  QualityTierIcon,
  ShieldCheck,
  Sparkles,
  Truck,
} from "@/lib/icons";
import type { LucideIcon } from "lucide-react";

const CATEGORY_ACCENTS = [
  "from-amber-500/20 to-amber-600/5",
  "from-slate-400/20 to-slate-500/5",
  "from-emerald-500/20 to-emerald-600/5",
  "from-blue-500/20 to-blue-600/5",
  "from-violet-500/20 to-violet-600/5",
  "from-rose-500/20 to-rose-600/5",
  "from-teal-500/20 to-teal-600/5",
  "from-orange-500/20 to-orange-600/5",
  "from-cyan-500/20 to-cyan-600/5",
  "from-indigo-500/20 to-indigo-600/5",
] as const;

export default function HomePage() {
  const featured = products.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className={`pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full blur-3xl ${qualityBrands[0].heroGlow}`}
          aria-hidden
        />
        <div
          className={`pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full blur-3xl ${qualityBrands[2].heroGlow}`}
          aria-hidden
        />
        <div
          className={`pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full blur-3xl ${qualityBrands[1].heroGlow}`}
          aria-hidden
        />

        <div className="container relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-quality-premium-400" aria-hidden />
              <span className="flex gap-1" aria-hidden>
                {qualityBrands.map((brand) => (
                  <span key={brand.id} className={`h-2 w-2 rounded-full ${brand.heroDot}`} />
                ))}
              </span>
              Madhav Chemicals · Three Quality Ranges
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Home care products for{" "}
              <span className="bg-gradient-to-r from-quality-premium-400 via-stone-300 to-quality-economy-400 bg-clip-text text-transparent">
                every quality need
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
              From premium Monarch Mist to value-driven Clean Wave — explore {products.length}{" "}
              product categories across our complete home care catalogue.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                <Package className="h-4 w-4" aria-hidden />
                Browse Catalogue
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                <ArrowRight className="h-4 w-4" aria-hidden />
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Brand pills */}
          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {qualityBrands.map((brand) => (
              <Link
                key={brand.id}
                href={`/products?quality=${brand.id}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className={`mb-2 h-1 w-12 rounded-full bg-gradient-to-r ${brand.headerGradient}`} />
                <p className={`inline-flex items-center gap-1.5 text-sm font-bold ${brand.heroText}`}>
                  <QualityTierIcon tier={brand.id} className="h-4 w-4" />
                  {brand.name}
                </p>
                <p className="mt-1 text-xs text-slate-400">{brand.tier} · {brand.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100 bg-white">
        <div className="container grid grid-cols-2 divide-x divide-gray-100 py-8 sm:grid-cols-4">
          <Stat value={`${products.length}+`} label="Product Types" icon={Package} />
          <Stat value="3" label="Quality Ranges" icon={Layers} />
          <Stat value="10" label="Categories" icon={Grid3x3} />
          <Stat value="Pan-India" label="Delivery" icon={Truck} />
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="container">
          <div className="mb-10 text-center">
            <p className="mb-2 inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700">
              <Grid3x3 className="h-3.5 w-3.5" aria-hidden />
              Product Categories
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Complete Home Care Range
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              Every category available in Monarch Mist, Pearl Pure, and Clean Wave quality tiers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {productCategories.map((category, index) => {
              const product = products.find((p) => p.category === category);
              if (!product) return null;
              const accent = CATEGORY_ACCENTS[index % CATEGORY_ACCENTS.length];

              return (
                <Link
                  key={category}
                  href={`/products#heading-${product.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
                >
                  <div
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-gray-700`}
                  >
                    <ProductIcon slug={product.slug} className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold leading-snug text-gray-900 group-hover:text-brand-700">
                    {category}
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-1 text-[11px] text-gray-500">
                    <Layers className="h-3 w-3" aria-hidden />
                    3 quality options
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Choose Your Quality */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <div className="mb-10 text-center">
            <p className="mb-2 inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Our Quality Range
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Choose Your Quality</h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              Premium, standard, or economy — pick the tier that matches your usage and budget.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {qualityBrands.map((brand) => (
              <QualityCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-slate-950 py-14 sm:py-20">
        <div className="container">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-quality-premium-400">
                <Package className="h-3.5 w-3.5" aria-hidden />
                Featured Products
              </p>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Popular in Our Catalogue</h2>
              <p className="mt-2 max-w-lg text-sm text-slate-400">
                A selection from our range — each available in all three quality tiers with
                dedicated packaging and fragrance options.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-quality-premium-400 transition hover:text-quality-premium-300"
            >
              View all products
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {featured.map((product, index) => {
              const tiers = ["monarch-mist", "pearl-pure", "clean-wave"] as const;
              const qualityId = tiers[index % 3];
              return (
                <HomeProductCard key={product.slug} product={product} qualityId={qualityId} />
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-3">
          <Feature
            icon={ShieldCheck}
            accent="bg-quality-premium-50 text-quality-premium-700"
            title="Quality Assured"
            desc="Sourced from audited manufacturers, supplied with COAs and MSDS."
          />
          <Feature
            icon={Sparkles}
            accent="bg-quality-standard-50 text-quality-standard-700"
            title="Compliance First"
            desc="REACH, RoHS, and local regulatory compliance wherever applicable."
          />
          <Feature
            icon={Truck}
            accent="bg-quality-economy-50 text-quality-economy-700"
            title="Pan-India Logistics"
            desc="Bulk tankers, drums, and IBCs with safe handling nationwide."
          />
        </div>
      </section>

      {/* Comparison preview */}
      <section className="bg-gray-50 py-14 sm:py-16">
        <div className="container">
          <div className="mb-8 text-center">
            <p className="mb-2 inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700">
              <Layers className="h-3.5 w-3.5" aria-hidden />
              At a Glance
            </p>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Compare Quality Tiers</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-gray-600">
              See how Monarch Mist, Pearl Pure, and Clean Wave differ across key features.
            </p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 sm:p-12">
            <div
              className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl ${qualityBrands[0].heroGlow}`}
              aria-hidden
            />
            <div
              className={`pointer-events-none absolute -bottom-16 left-1/4 h-48 w-48 rounded-full blur-3xl ${qualityBrands[2].heroGlow}`}
              aria-hidden
            />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Need a bulk quote or specific grade?
                </h3>
                <p className="mt-2 max-w-lg text-slate-300">
                  Share your product, quality tier, and quantity — get a same-day response from our
                  team.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  <Package className="h-4 w-4" aria-hidden />
                  Browse Products
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden />
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <div className="px-4 text-center sm:px-6">
      <Icon className="mx-auto mb-2 h-5 w-5 text-brand-600" aria-hidden />
      <p className="text-2xl font-bold text-gray-900 sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">{label}</p>
    </div>
  );
}

function Feature({
  icon: Icon,
  accent,
  title,
  desc,
}: {
  icon: LucideIcon;
  accent: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <span
        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${accent}`}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
}
