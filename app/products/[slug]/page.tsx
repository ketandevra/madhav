import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getProductBySlug, products } from "@/lib/data/products";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
    },
  };
}

export default function ProductDetailPage({ params }: Params) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return (
      <div className="container py-16">
        <p className="text-gray-700">Product not found.</p>
        <Link href="/products" className="mt-4 inline-block text-brand-700 hover:underline">Back to products</Link>
      </div>
    );
  }

  return (
    <div className="container py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative h-64 w-full rounded-lg overflow-hidden bg-gray-100 sm:h-80">
          {product.image ? (
            <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-brand-100 to-white" />
          )}
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <span className="rounded bg-gray-100 px-2 py-0.5 text-sm text-gray-700">{product.category}</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded border p-3"><span className="text-gray-500">Formula</span><div className="font-medium">{product.formula}</div></div>
            <div className="rounded border p-3"><span className="text-gray-500">CAS</span><div className="font-medium">{product.cas}</div></div>
          </div>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <div className="mt-6 flex gap-3">
            <Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="rounded-md bg-brand-600 px-5 py-2.5 text-white font-medium hover:bg-brand-700">
              Request Quote
            </Link>
            <Link href="/products" className="rounded-md border px-5 py-2.5 font-medium text-gray-800 hover:bg-gray-50">Back to Products</Link>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-xl font-semibold">Packaging & Logistics</h2>
        <p className="mt-2 text-sm text-gray-600">
          Available in bulk tankers, IBCs, and drums subject to product specifications. Documentation includes Invoice, E‑Way Bill, and MSDS. Lead times vary by location and quantity.
        </p>
      </div>
    </div>
  );
}


