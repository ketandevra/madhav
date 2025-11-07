import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data/products";

export const metadata = {
  title: "Products",
  description: "Browse our portfolio of industrial and specialty chemicals.",
};

export default function ProductsPage() {
  return (
    <div className="container py-12 sm:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">Products</h1>
        <p className="mt-2 text-gray-600">Browse our portfolio of industrial and specialty chemicals.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}


