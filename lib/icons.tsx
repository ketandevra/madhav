import {
  ArrowLeft,
  ArrowRight,
  Bath,
  Building2,
  ChevronRight,
  Crown,
  Droplets,
  Filter,
  FileText,
  FlaskConical,
  Gem,
  Grid3x3,
  Hand,
  Home,
  Layers,
  LayoutGrid,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Package,
  Phone,
  ScanLine,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Tag,
  Truck,
  UtensilsCrossed,
  Waves,
  Wind,
  X,
  type LucideIcon,
} from "lucide-react";
import type { QualityTier } from "@/lib/data/products";

export const productIcons: Record<string, LucideIcon> = {
  "dish-washer": UtensilsCrossed,
  "fabric-comforter": Wind,
  "floor-cleaner": LayoutGrid,
  "glass-cleaner": ScanLine,
  handwash: Hand,
  "liquid-detergent": Droplets,
  phenyl: FlaskConical,
  "room-spray": SprayCan,
  "toilet-cleaner": Bath,
  multipurpose: Layers,
};

export const qualityTierIcons: Record<QualityTier, LucideIcon> = {
  "monarch-mist": Crown,
  "pearl-pure": Gem,
  "clean-wave": Waves,
};

export const comparisonFeatureIcons = {
  cleaningPower: Sparkles,
  foam: Droplets,
  fragrance: Wind,
  recommendedUse: Building2,
  priceCategory: Tag,
} as const;

export const navIcons = {
  home: Home,
  products: Package,
  contact: Phone,
} as const;

export {
  ArrowLeft,
  ArrowRight,
  Bath,
  Building2,
  ChevronRight,
  Crown,
  Droplets,
  Filter,
  FileText,
  FlaskConical,
  Gem,
  Grid3x3,
  Hand,
  Home,
  Layers,
  LayoutGrid,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Package,
  Phone,
  ScanLine,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Tag,
  Truck,
  Waves,
  Wind,
  X,
};

export function ProductIcon({
  slug,
  className = "h-5 w-5",
}: {
  slug: string;
  className?: string;
}) {
  const Icon = productIcons[slug] ?? Package;
  return <Icon className={className} aria-hidden />;
}

export function QualityTierIcon({
  tier,
  className = "h-4 w-4",
}: {
  tier: QualityTier;
  className?: string;
}) {
  const Icon = qualityTierIcons[tier];
  return <Icon className={className} aria-hidden />;
}
