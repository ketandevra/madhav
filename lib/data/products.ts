export const productCategories = [
  "Dish Washer",
  "Fabric Comforter",
  "Floor Cleaner",
  "Glass Cleaner",
  "Handwash",
  "Liquid Detergent",
  "Phenyl",
  "Room Spray",
  "Toilet Cleaner",
  "Multipurpose",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  packaging: string;
  variants?: string;
  image?: string;
};

export const products: Product[] = [
  {
    slug: "dish-washer",
    name: "Dish Washer",
    category: "Dish Washer",
    description: "Concentrated dish washer liquid that cuts grease and keeps utensils clean.",
    packaging: "5 Ltr / 1 Ltr / 500 ml / 250 ml",
    variants: "Lemon / Neem Green",
    image: "/products/dish-washer.jpg",
  },
  {
    slug: "fabric-comforter",
    name: "Fabric Comforter",
    category: "Fabric Comforter",
    description: "Fabric conditioner for soft, fragrant clothes with long-lasting freshness.",
    packaging: "5 Ltr / 1 Ltr",
    variants: "Blue / Pink",
    image: "/products/fabric-comforter.jpg",
  },
  {
    slug: "floor-cleaner",
    name: "Floor Cleaner",
    category: "Floor Cleaner",
    description: "Multipurpose floor cleaner suitable for tiles, marble, and granite.",
    packaging: "5 Ltr / 1 Ltr / 500 ml",
    variants: "Rose / Lemon / Neem Green",
    image: "/products/floor-cleaner.jpg",
  },
  {
    slug: "glass-cleaner",
    name: "Glass Cleaner",
    category: "Glass Cleaner",
    description: "Streak-free glass cleaner for windows, mirrors, and glass surfaces.",
    packaging: "5 Ltr / 500 ml",
    image: "/products/glass-cleaner.jpg",
  },
  {
    slug: "handwash",
    name: "Handwash",
    category: "Handwash",
    description: "Mild liquid handwash with effective germ protection.",
    packaging: "5 Ltr / 1 Ltr / 500 ml / 250 ml",
    variants: "Rose / Lemon / Neem Green",
    image: "/products/handwash.jpg",
  },
  {
    slug: "liquid-detergent",
    name: "Liquid Detergent",
    category: "Liquid Detergent",
    description: "High-foam liquid detergent suitable for machine and hand wash.",
    packaging: "5 Ltr / 1 Ltr",
    image: "/products/liquid-detergent.jpg",
  },
  {
    slug: "phenyl",
    name: "Phenyl",
    category: "Phenyl",
    description: "White phenyl floor disinfectant for general cleaning.",
    packaging: "5 Ltr / 1 Ltr",
    variants: "Without Fragrance",
    image: "/products/phenyl.jpg",
  },
  {
    slug: "room-spray",
    name: "Room Spray",
    category: "Room Spray",
    description: "Premium room freshener spray for long-lasting fragrance.",
    packaging: "5 Ltr / 500 ml",
    variants: "Jasmine / Strawberry / Floral / Lavender / Sandal",
    image: "/products/room-spray.jpg",
  },
  {
    slug: "toilet-cleaner",
    name: "Toilet Cleaner",
    category: "Toilet Cleaner",
    description: "Thick liquid toilet cleaner for deep cleaning and stain removal.",
    packaging: "5 Ltr / 1 Ltr / 500 ml",
    image: "/products/toilet-cleaner.jpg",
  },
  {
    slug: "multipurpose",
    name: "Multipurpose",
    category: "Multipurpose",
    description: "Concentrated multipurpose liquid for various home and institutional cleaning applications.",
    packaging: "5 Ltr / 1 Ltr",
    variants: "With & Without Fragrance",
    image: "/products/multipurpose.jpg",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

