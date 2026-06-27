// ─── Product Categories & Types (unchanged) ──────────────────────────────────

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
};

export const products: Product[] = [
  {
    slug: "dish-washer",
    name: "Dish Washer",
    category: "Dish Washer",
    description: "Concentrated dish washer liquid that cuts grease and keeps utensils clean.",
    packaging: "5 Ltr / 1 Ltr / 500 ml / 250 ml",
    variants: "Lemon / Neem Green",
  },
  {
    slug: "fabric-comforter",
    name: "Fabric Comforter",
    category: "Fabric Comforter",
    description: "Fabric conditioner for soft, fragrant clothes with long-lasting freshness.",
    packaging: "5 Ltr / 1 Ltr",
    variants: "Blue / Pink",
  },
  {
    slug: "floor-cleaner",
    name: "Floor Cleaner",
    category: "Floor Cleaner",
    description: "Multipurpose floor cleaner suitable for tiles, marble, and granite.",
    packaging: "5 Ltr / 1 Ltr / 500 ml",
    variants: "Rose / Lemon / Neem Green",
  },
  {
    slug: "glass-cleaner",
    name: "Glass Cleaner",
    category: "Glass Cleaner",
    description: "Streak-free glass cleaner for windows, mirrors, and glass surfaces.",
    packaging: "5 Ltr / 500 ml",
  },
  {
    slug: "handwash",
    name: "Handwash",
    category: "Handwash",
    description: "Mild liquid handwash with effective germ protection.",
    packaging: "5 Ltr / 1 Ltr / 500 ml / 250 ml",
    variants: "Rose / Lemon / Neem Green",
  },
  {
    slug: "liquid-detergent",
    name: "Liquid Detergent",
    category: "Liquid Detergent",
    description: "High-foam liquid detergent suitable for machine and hand wash.",
    packaging: "5 Ltr / 1 Ltr",
  },
  {
    slug: "phenyl",
    name: "Phenyl",
    category: "Phenyl",
    description: "White phenyl floor disinfectant for general cleaning.",
    packaging: "5 Ltr / 1 Ltr",
    variants: "Without Fragrance",
  },
  {
    slug: "room-spray",
    name: "Room Spray",
    category: "Room Spray",
    description: "Premium room freshener spray for long-lasting fragrance.",
    packaging: "5 Ltr / 500 ml",
    variants: "Jasmine / Strawberry / Floral / Lavender / Sandal",
  },
  {
    slug: "toilet-cleaner",
    name: "Toilet Cleaner",
    category: "Toilet Cleaner",
    description: "Thick liquid toilet cleaner for deep cleaning and stain removal.",
    packaging: "5 Ltr / 1 Ltr / 500 ml",
  },
  {
    slug: "multipurpose",
    name: "Multipurpose",
    category: "Multipurpose",
    description: "Concentrated multipurpose liquid for various home and institutional cleaning applications.",
    packaging: "5 Ltr / 1 Ltr",
    variants: "With & Without Fragrance",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function isQualityTier(value: string): value is QualityTier {
  return value === "monarch-mist" || value === "pearl-pure" || value === "clean-wave";
}

export function resolveQualityTier(value: string | string[] | undefined): QualityTier {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw && isQualityTier(raw) ? raw : "monarch-mist";
}

export function resolveProductsFilter(
  value: string | string[] | undefined
): QualityTier | "all" {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw && isQualityTier(raw) ? raw : "all";
}

// ─── Quality Brands ───────────────────────────────────────────────────────────

export type QualityTier = "monarch-mist" | "pearl-pure" | "clean-wave";

export type QualityBrand = {
  id: QualityTier;
  name: string;
  tier: string;
  stars: number;
  tagline: string;
  description: string;
  // Full Tailwind class strings — kept here so the Tailwind scanner includes them
  badge: string;
  cardBorder: string;
  cardBg: string;
  accentText: string;
  buttonPrimary: string;
  dotColor: string;
  headerGradient: string;
  heroText: string;
  heroDot: string;
  heroGlow: string;
  heroGradient: string;
  tableColumnBg: string;
  activeRing: string;
  features: {
    cleaningPower: string;
    foam: string;
    fragrance: string;
    recommendedUse: string;
    priceCategory: string;
  };
};

export const qualityBrands: QualityBrand[] = [
  {
    id: "monarch-mist",
    name: "Monarch Mist",
    tier: "Premium",
    stars: 5,
    tagline: "The pinnacle of cleaning excellence",
    description:
      "Our finest quality range with superior cleaning performance and premium imported fragrances. Crafted for homes and establishments that demand only the best.",
    badge: "bg-quality-premium-50 text-quality-premium-800 border border-quality-premium-200",
    cardBorder: "border-stone-200/90 hover:border-quality-premium-400/60",
    cardBg: "from-quality-premium-50/90 via-white to-white",
    accentText: "text-quality-premium-600",
    buttonPrimary: "bg-stone-900 hover:bg-stone-800 text-white shadow-sm",
    dotColor: "bg-quality-premium-500",
    headerGradient: "from-stone-900 via-stone-800 to-quality-premium-500",
    heroText: "text-quality-premium-400",
    heroDot: "bg-quality-premium-400",
    heroGlow: "bg-quality-premium-500/10",
    heroGradient: "from-quality-premium-400 via-stone-300 to-quality-economy-400",
    tableColumnBg: "bg-quality-premium-50/30",
    activeRing: "ring-quality-premium-400/50",
    features: {
      cleaningPower: "Excellent ★★★★★",
      foam: "Rich & Long-lasting",
      fragrance: "Premium Imported",
      recommendedUse: "Homes, Hotels, Premium Spaces",
      priceCategory: "Premium",
    },
  },
  {
    id: "pearl-pure",
    name: "Pearl Pure",
    tier: "Standard",
    stars: 4,
    tagline: "Balanced quality, exceptional value",
    description:
      "Our standard quality range offering the perfect blend of performance and affordability for everyday household needs.",
    badge: "bg-quality-standard-50 text-quality-standard-800 border border-quality-standard-200",
    cardBorder: "border-stone-200/90 hover:border-quality-standard-400/60",
    cardBg: "from-quality-standard-50/80 via-white to-white",
    accentText: "text-quality-standard-600",
    buttonPrimary: "bg-quality-standard-700 hover:bg-quality-standard-800 text-white shadow-sm",
    dotColor: "bg-quality-standard-500",
    headerGradient: "from-quality-standard-800 to-quality-standard-500",
    heroText: "text-quality-standard-400",
    heroDot: "bg-quality-standard-400",
    heroGlow: "bg-quality-standard-500/10",
    heroGradient: "from-quality-premium-400 via-stone-300 to-quality-economy-400",
    tableColumnBg: "bg-quality-standard-50/30",
    activeRing: "ring-quality-standard-400/50",
    features: {
      cleaningPower: "Good ★★★★☆",
      foam: "Good Lather",
      fragrance: "Standard Fragrance",
      recommendedUse: "Regular Households",
      priceCategory: "Standard",
    },
  },
  {
    id: "clean-wave",
    name: "Clean Wave",
    tier: "Economy",
    stars: 3,
    tagline: "Effective, affordable, reliable",
    description:
      "Our economy range designed for commercial and bulk usage. Maximum cleaning efficiency at the most competitive price points.",
    badge: "bg-quality-economy-50 text-quality-economy-800 border border-quality-economy-200",
    cardBorder: "border-stone-200/90 hover:border-quality-economy-400/60",
    cardBg: "from-quality-economy-50/70 via-white to-white",
    accentText: "text-quality-economy-700",
    buttonPrimary: "bg-quality-economy-700 hover:bg-quality-economy-800 text-white shadow-sm",
    dotColor: "bg-quality-economy-500",
    headerGradient: "from-quality-economy-800 to-quality-economy-500",
    heroText: "text-quality-economy-400",
    heroDot: "bg-quality-economy-400",
    heroGlow: "bg-quality-economy-500/10",
    heroGradient: "from-quality-premium-400 via-stone-300 to-quality-economy-400",
    tableColumnBg: "bg-quality-economy-50/30",
    activeRing: "ring-quality-economy-400/50",
    features: {
      cleaningPower: "Effective ★★★☆☆",
      foam: "Standard",
      fragrance: "Basic / Unscented",
      recommendedUse: "Commercial, Bulk, Industrial",
      priceCategory: "Economy",
    },
  },
];

export function getQualityBrand(id: QualityTier): QualityBrand | undefined {
  return qualityBrands.find((b) => b.id === id);
}

// ─── Per-product quality details ──────────────────────────────────────────────

export type ProductQualityDetail = {
  description: string;
  sizes: string[];
  fragrances?: string[];
  image?: string;
};

export const productQualityDetails: Record<string, Record<QualityTier, ProductQualityDetail>> = {
  "dish-washer": {
    "monarch-mist": {
      description:
        "Premium concentrated formula with imported citrus extracts. Effortlessly dissolves grease with a lingering freshness.",
      sizes: ["5 Ltr", "1 Ltr", "500 ml", "250 ml"],
      fragrances: ["Premium Lemon", "Neem Extract"],
      image: "/products/dish-washer-monarch-mist.png",
    },
    "pearl-pure": {
      description: "Effective grease-cutting liquid for everyday dishwashing needs at great value.",
      sizes: ["5 Ltr", "1 Ltr", "500 ml", "250 ml"],
      fragrances: ["Lemon", "Neem Green"],
      image: "/products/dish-washer-pearl-pure-v2.png",
    },
    "clean-wave": {
      description: "High-volume economy formula for commercial kitchens and bulk institutional use.",
      sizes: ["5 Ltr", "1 Ltr"],
      fragrances: ["Lemon"],
      image: "/products/dish-washer-clean-wave-v3.png",
    },
  },
  "toilet-cleaner": {
    "monarch-mist": {
      description:
        "Thick, powerful formula with premium disinfection. Removes tough stains and limescale while deodorizing deeply.",
      sizes: ["5 Ltr", "1 Ltr", "500 ml"],
      image: "/products/toilet-cleaner-monarch-mist.png",
    },
    "pearl-pure": {
      description:
        "Reliable toilet cleaner with effective stain removal and fresh scent for regular household bathrooms.",
      sizes: ["5 Ltr", "1 Ltr", "500 ml"],
      image: "/products/toilet-cleaner-pearl-pure.png",
    },
    "clean-wave": {
      description:
        "Economy-grade toilet cleaner for bulk institutional and commercial bathroom maintenance.",
      sizes: ["5 Ltr", "1 Ltr"],
      image: "/products/toilet-cleaner-clean-wave.png",
    },
  },
  handwash: {
    "monarch-mist": {
      description:
        "Luxuriously mild formula with premium botanical extracts. Moisturizes as it cleanses with a long-lasting fragrance.",
      sizes: ["5 Ltr", "1 Ltr", "500 ml", "250 ml"],
      fragrances: ["Premium Rose", "Jasmine", "Premium Lemon"],
      image: "/products/handwash-monarch-mist.png",
    },
    "pearl-pure": {
      description:
        "Gentle, effective handwash with good germ protection and a pleasant fragrance for everyday use.",
      sizes: ["5 Ltr", "1 Ltr", "500 ml", "250 ml"],
      fragrances: ["Rose", "Lemon", "Neem Green"],
      image: "/products/handwash-pearl-pure-v2.png",
    },
    "clean-wave": {
      description:
        "Economical handwash formula for high-traffic areas, offices, and institutional facilities.",
      sizes: ["5 Ltr", "1 Ltr"],
      fragrances: ["Lemon"],
      image: "/products/handwash-clean-wave.png",
    },
  },
  "floor-cleaner": {
    "monarch-mist": {
      description:
        "Premium concentrated formula for sparkling clean floors. Leaves a beautiful shine with a long-lasting premium fragrance.",
      sizes: ["5 Ltr", "1 Ltr", "500 ml"],
      fragrances: ["Premium Rose", "Premium Lemon", "Neem"],
      image: "/products/floor-cleaner-monarch-mist.png",
    },
    "pearl-pure": {
      description:
        "Multipurpose floor cleaner suitable for tiles, marble, and granite with a pleasant scent.",
      sizes: ["5 Ltr", "1 Ltr", "500 ml"],
      fragrances: ["Rose", "Lemon", "Neem Green"],
      image: "/products/floor-cleaner-pearl-pure-v2.png",
    },
    "clean-wave": {
      description:
        "Economy floor cleaner for commercial spaces, warehouses, and high-traffic industrial areas.",
      sizes: ["5 Ltr", "1 Ltr"],
      fragrances: ["Lemon"],
      image: "/products/floor-cleaner-clean-wave-v2.png",
    },
  },
  "liquid-detergent": {
    "monarch-mist": {
      description:
        "High-performance concentrated detergent with superior stain removal and premium fragrance for fine fabrics.",
      sizes: ["5 Ltr", "1 Ltr"],
      image: "/products/liquid-detergent-monarch-mist.png",
    },
    "pearl-pure": {
      description:
        "Effective liquid detergent for machine and hand wash. Good cleaning power for everyday laundry.",
      sizes: ["5 Ltr", "1 Ltr"],
      image: "/products/liquid-detergent-pearl-pure-v2.png",
    },
    "clean-wave": {
      description:
        "Economy liquid detergent for bulk laundry in hotels, hospitals, and commercial laundry operations.",
      sizes: ["5 Ltr", "1 Ltr"],
      image: "/products/liquid-detergent-clean-wave.png",
    },
  },
  "fabric-comforter": {
    "monarch-mist": {
      description:
        "Luxury fabric conditioner with premium imported fragrance. Leaves fabrics incredibly soft with lasting freshness.",
      sizes: ["5 Ltr", "1 Ltr"],
      fragrances: ["Premium Floral", "Lavender"],
      image: "/products/fabric-comforter-monarch-mist.png",
    },
    "pearl-pure": {
      description:
        "Good fabric conditioner for soft, fresh-smelling clothes. Reduces static and wrinkles effectively.",
      sizes: ["5 Ltr", "1 Ltr"],
      fragrances: ["Blue", "Pink"],
      image: "/products/fabric-comforter-pearl-pure.png",
    },
    "clean-wave": {
      description:
        "Economy fabric conditioner for commercial laundries and bulk textile processing operations.",
      sizes: ["5 Ltr", "1 Ltr"],
      fragrances: ["Blue"],
      image: "/products/fabric-comforter-clean-wave-v2.png",
    },
  },
  phenyl: {
    "monarch-mist": {
      description:
        "Premium grade white phenyl with superior disinfection. Highly effective against bacteria with lasting freshness.",
      sizes: ["5 Ltr", "1 Ltr"],
      image: "/products/phenyl-monarch-mist.png",
    },
    "pearl-pure": {
      description:
        "Standard white phenyl for reliable floor disinfection and general cleaning in households.",
      sizes: ["5 Ltr", "1 Ltr"],
      image: "/products/phenyl-pearl-pure.png",
    },
    "clean-wave": {
      description:
        "Economy phenyl for bulk institutional use in schools, hospitals, and industrial facilities.",
      sizes: ["5 Ltr", "1 Ltr"],
      image: "/products/phenyl-clean-wave.png",
    },
  },
  "glass-cleaner": {
    "monarch-mist": {
      description:
        "Premium streak-free formula for crystal-clear glass. Leaves a protective coating on windows and mirrors.",
      sizes: ["5 Ltr", "500 ml"],
      image: "/products/glass-cleaner-monarch-mist.png",
    },
    "pearl-pure": {
      description:
        "Effective streak-free cleaner for glass surfaces, windows, and mirrors with good clarity results.",
      sizes: ["5 Ltr", "500 ml"],
      image: "/products/glass-cleaner-pearl-pure.png",
    },
    "clean-wave": {
      description:
        "Economy glass cleaner for commercial buildings, large facades, and bulk institutional use.",
      sizes: ["5 Ltr", "500 ml"],
      image: "/products/glass-cleaner-clean-wave-v2.png",
    },
  },
  "room-spray": {
    "monarch-mist": {
      description:
        "Premium room freshener with exotic imported fragrances. Long-lasting, sophisticated scent for premium spaces.",
      sizes: ["5 Ltr", "500 ml"],
      fragrances: ["Jasmine Premium", "Lavender Premium", "Sandalwood", "Floral Bouquet"],
      image: "/products/room-spray-monarch-mist-v2.png",
    },
    "pearl-pure": {
      description:
        "Pleasant room freshener spray with good fragrance throw. Ideal for homes and offices.",
      sizes: ["5 Ltr", "500 ml"],
      fragrances: ["Jasmine", "Strawberry", "Floral", "Lavender", "Sandal"],
      image: "/products/room-spray-pearl-pure.png",
    },
    "clean-wave": {
      description:
        "Economy room spray for commercial spaces and high-traffic areas requiring regular freshening.",
      sizes: ["5 Ltr", "500 ml"],
      fragrances: ["Lavender", "Floral"],
      image: "/products/room-spray-clean-wave.png",
    },
  },
  multipurpose: {
    "monarch-mist": {
      description:
        "Premium concentrated multipurpose liquid with superior cleaning action for all home and institutional surfaces.",
      sizes: ["5 Ltr", "1 Ltr"],
      fragrances: ["Premium Fragrance", "Unscented"],
      image: "/products/multipurpose-monarch-mist.png",
    },
    "pearl-pure": {
      description:
        "Effective multipurpose cleaner for various home and institutional applications at great value.",
      sizes: ["5 Ltr", "1 Ltr"],
      fragrances: ["With Fragrance", "Without Fragrance"],
      image: "/products/multipurpose-pearl-pure.png",
    },
    "clean-wave": {
      description:
        "Economy multipurpose liquid for bulk commercial cleaning and industrial applications.",
      sizes: ["5 Ltr", "1 Ltr"],
      fragrances: ["Without Fragrance"],
      image: "/products/multipurpose-clean-wave.png",
    },
  },
};
