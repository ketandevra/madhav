import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-40 w-full bg-gray-100">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-brand-100 to-white" />
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-medium text-gray-900">{product.name}</h3>
          <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700">{product.category}</span>
        </div>
        <p className="mt-1 text-sm text-gray-600">Formula: {product.formula}</p>
        <p className="text-xs text-gray-500">CAS: {product.cas}</p>
      </div>
    </Link>
  );
}


