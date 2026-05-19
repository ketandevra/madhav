import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { productCategories, products } from "@/lib/data/products";

export const metadata = {
  title: "Products",
  description: "Browse our product catalogue and available packaging options.",
};

export default function ProductsPage() {
  const categoryProducts = productCategories.flatMap((category) =>
    products.filter((product) => product.category === category)
  );

  return (
    <div className="container py-12 sm:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">Products</h1>
        <p className="mt-2 text-gray-600">Browse our product catalogue and available packaging options.</p>
      </div>

      <a
        href="/catlok.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group mb-10 block overflow-hidden rounded-2xl border-2 border-brand-200 bg-gradient-to-br from-brand-50 via-white to-brand-100/80 shadow-lg shadow-brand-600/10 ring-1 ring-brand-100 transition hover:border-brand-300 hover:shadow-xl hover:shadow-brand-600/15"
      >
        <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex gap-4">
            <span
              className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-md ring-4 ring-white/80"
              aria-hidden
            >
              <Image
                src="/logo.svg"
                alt=""
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Full catalogue</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">Download our PDF catalogue</p>
              <p className="mt-1 text-sm text-gray-600">Brands, sizes, and variants in one place. Opens in a new tab.</p>
            </div>
          </div>
          <span className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-md transition group-hover:bg-brand-700 group-hover:shadow-lg sm:w-auto">
            View catalogue PDF
            <svg className="h-5 w-5 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </div>
        <div className="border-t border-brand-100/80 bg-brand-50/60 px-5 py-2.5 text-center text-xs text-brand-800/80 sm:text-left sm:px-6">
          Tap or click the card — your browser will open the PDF in a new window
        </div>
      </a>
      <section aria-labelledby="product-categories-heading">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 id="product-categories-heading" className="text-2xl font-semibold text-gray-900">
            Product Categories
          </h2>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
            {categoryProducts.length} categories
          </span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}


