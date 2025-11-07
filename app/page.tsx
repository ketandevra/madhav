import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data/products";

export default function HomePage() {
  const featured = products.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50 to-white" />
        <div className="container py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              manufacture all types of home care products
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="rounded-md bg-brand-600 px-6 py-3 text-white font-medium hover:bg-brand-700">
                Browse Products
              </Link>
              <Link href="/contact" className="rounded-md border px-6 py-3 font-medium text-gray-800 hover:bg-gray-50">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          <Feature title="Quality Assured" desc="Sourced from audited manufacturers, supplied with COAs and MSDS." />
          <Feature title="Compliance First" desc="REACH, RoHS, and local regulatory compliance wherever applicable." />
          <Feature title="Pan-India Logistics" desc="Bulk tankers, drums, and IBCs with safe handling." />
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-12 sm:py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold">Popular Products</h2>
          <Link href="/products" className="text-sm text-brand-700 hover:underline">View all</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-50">
        <div className="container">
          <div className="rounded-lg border bg-white p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Need a bulk quote or specific grade?</h3>
              <p className="text-gray-600">Share your requirement and get a same‑day response.</p>
            </div>
            <Link href="/contact" className="rounded-md bg-brand-600 px-5 py-2.5 text-white font-medium hover:bg-brand-700">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border p-6 bg-white">
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="mt-1.5 text-sm text-gray-600">{desc}</p>
    </div>
  );
}


