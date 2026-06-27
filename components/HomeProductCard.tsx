import {
  getQualityBrand,
  productQualityDetails,
  type Product,
  type QualityTier,
} from "@/lib/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomeProductCard({
  product,
  qualityId = "monarch-mist",
}: {
  product: Product;
  qualityId?: QualityTier;
}) {
  const brand = getQualityBrand(qualityId);
  const detail = productQualityDetails[product.slug]?.[qualityId];

  if (!brand || !detail) return null;

  return (
    <ProductCard
      href={`/products/${product.slug}?quality=${qualityId}`}
      product={product}
      brand={brand}
      detail={detail}
    />
  );
}
