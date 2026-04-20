export type Product = {
  slug: string;
  name: string;
  category:
    | "Home Care"
    | "Personal Care"
    | "Air Care"
    | "Industrial Cleaning";
  description: string;
  packaging: string;
  variants?: string;
  image?: string;
};

export const products: Product[] = [
  {
    slug: "detergent-liquid",
    name: "Detergent Liquid",
    category: "Home Care",
    description: "High-foam liquid detergent suitable for machine and hand wash.",
    packaging: "5 Ltr / 1 Ltr",
  },
  {
    slug: "toilet-cleaner",
    name: "Toilet Cleaner",
    category: "Home Care",
    description: "Thick liquid toilet cleaner for deep cleaning and stain removal.",
    packaging: "5 Ltr / 1 Ltr / 500 ml",
  },
  {
    slug: "hand-wash",
    name: "Hand Wash",
    category: "Personal Care",
    description: "Mild liquid hand wash with effective germ protection.",
    packaging: "5 Ltr / 1 Ltr / 500 ml / 250 ml",
    variants: "Rose / Lemon / Neem Green",
  },
  {
    slug: "floor-cleaner",
    name: "Floor Cleaner",
    category: "Home Care",
    description: "Multipurpose floor cleaner suitable for tiles, marble, and granite.",
    packaging: "5 Ltr / 1 Ltr / 500 ml",
    variants: "Rose / Lemon / Neem Green",
  },
  {
    slug: "dish-wash-liquid",
    name: "Dish Wash Liquid",
    category: "Home Care",
    description: "Concentrated dish wash liquid tough on grease and gentle on hands.",
    packaging: "5 Ltr / 1 Ltr / 500 ml / 250 ml",
    variants: "Lemon / Neem Green",
  },
  {
    slug: "fabric-wash-comfort",
    name: "Fabric Wash Comfort",
    category: "Home Care",
    description: "Fabric conditioner for soft, fragrant clothes with long-lasting freshness.",
    packaging: "5 Ltr / 1 Ltr",
    variants: "Blue / Pink",
  },
  {
    slug: "phenyl",
    name: "Phenyl",
    category: "Industrial Cleaning",
    description: "White phenyl floor disinfectant for general cleaning.",
    packaging: "5 Ltr / 1 Ltr",
    variants: "Without Fragrance",
  },
  {
    slug: "cleaning-compound",
    name: "Cleaning Compound",
    category: "Industrial Cleaning",
    description: "Heavy-duty cleaning compound for industrial and institutional use.",
    packaging: "5 Ltr / 1 Ltr",
  },
  {
    slug: "room-spray",
    name: "Room Spray",
    category: "Air Care",
    description: "Premium room freshener spray for long-lasting fragrance.",
    packaging: "5 Ltr / 500 ml",
    variants: "Jasmine / Strawberry / Floral / Lavender / Sandal",
  },
  {
    slug: "multipurpose-liquid-soap-oil",
    name: "Multipurpose Liquid (Soap Oil)",
    category: "Industrial Cleaning",
    description: "Concentrated multipurpose liquid soap oil for various cleaning applications.",
    packaging: "5 Ltr / 1 Ltr",
    variants: "With & Without Fragrance",
  },
  {
    slug: "glass-cleaner",
    name: "Glass Cleaner",
    category: "Home Care",
    description: "Streak-free glass cleaner for windows, mirrors, and glass surfaces.",
    packaging: "5 Ltr / 500 ml",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

