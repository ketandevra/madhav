export type Product = {
  slug: string;
  name: string;
  formula: string;
  cas: string;
  category: "Solvents" | "Acids" | "Bases" | "Oxidizers" | "Specialty";
  description: string;
  image?: string;
};

export const products: Product[] = [
  {
    slug: "acetone",
    name: "Acetone",
    formula: "C3H6O",
    cas: "67-64-1",
    category: "Solvents",
    description: "High-purity solvent for coatings, adhesives, and cleaning applications.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "isopropyl-alcohol",
    name: "Isopropyl Alcohol (IPA)",
    formula: "C3H8O",
    cas: "67-63-0",
    category: "Solvents",
    description: "Electronics-grade cleaning solvent and disinfectant.",
    image: "https://images.unsplash.com/photo-1628067203158-2b6b5480bec7?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "ethanol",
    name: "Ethanol",
    formula: "C2H6O",
    cas: "64-17-5",
    category: "Solvents",
    description: "Denatured and absolute grades for pharma and industrial use.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "hydrochloric-acid",
    name: "Hydrochloric Acid",
    formula: "HCl",
    cas: "7647-01-0",
    category: "Acids",
    description: "Pickling, pH control, and water treatment applications.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "sulfuric-acid",
    name: "Sulfuric Acid",
    formula: "H2SO4",
    cas: "7664-93-9",
    category: "Acids",
    description: "Battery-grade and industrial-grade supply in bulk and IBCs.",
    image: "https://images.unsplash.com/photo-1520975922284-5f1d7c97207f?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "sodium-hydroxide",
    name: "Sodium Hydroxide (Caustic Soda)",
    formula: "NaOH",
    cas: "1310-73-2",
    category: "Bases",
    description: "Available in flakes and lye for manufacturing and effluent treatment.",
    image: "https://images.unsplash.com/photo-1581093588401-16f64c2c2a98?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "hydrogen-peroxide",
    name: "Hydrogen Peroxide",
    formula: "H2O2",
    cas: "7722-84-1",
    category: "Oxidizers",
    description: "Textile bleaching, wastewater treatment, and sanitation applications.",
    image: "https://images.unsplash.com/photo-1602793221492-c9b2d6f2a444?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "toluene",
    name: "Toluene",
    formula: "C7H8",
    cas: "108-88-3",
    category: "Solvents",
    description: "High solvency aromatic solvent for paints and resins.",
    image: "https://images.unsplash.com/photo-1505575972945-321fc8b2d2d8?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "xylene",
    name: "Xylene",
    formula: "C8H10",
    cas: "1330-20-7",
    category: "Solvents",
    description: "Mixed isomers for ink, adhesive, and coating industries.",
    image: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "methanol",
    name: "Methanol",
    formula: "CH3OH",
    cas: "67-56-1",
    category: "Solvents",
    description: "Fuel-grade and industrial-grade methanol for diverse applications.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "glycerin",
    name: "Glycerin",
    formula: "C3H8O3",
    cas: "56-81-5",
    category: "Specialty",
    description: "USP and industrial grades for cosmetics, pharma, and food.",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "citric-acid",
    name: "Citric Acid",
    formula: "C6H8O7",
    cas: "77-92-9",
    category: "Specialty",
    description: "Food and industrial grades for cleaning and chelation.",
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?w=1200&q=80&auto=format&fit=crop",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

