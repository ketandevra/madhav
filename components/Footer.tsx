import Link from "next/link";
import { qualityBrands } from "@/lib/data/products";
import {
  ArrowRight,
  Home,
  Mail,
  MapPin,
  Package,
  Phone,
  QualityTierIcon,
  Sparkles,
} from "@/lib/icons";

const companyLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Products", icon: Package },
  { href: "/contact", label: "Contact", icon: Phone },
] as const;

export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto w-full shrink-0 overflow-hidden border-t-4 border-brand-600 bg-slate-950 text-white">
      <div
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-quality-premium-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-quality-economy-500/10 blur-3xl"
        aria-hidden
      />

      <div className="flex h-1 w-full">
        {qualityBrands.map((brand) => (
          <div
            key={brand.id}
            className={`flex-1 bg-gradient-to-r ${brand.headerGradient}`}
            aria-hidden
          />
        ))}
      </div>

      <div className="container relative py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block leading-none">
              <span className="text-lg font-bold tracking-tight sm:text-xl">
                <span className="text-white">Madhav</span>
                <span className="text-emerald-400"> Chemical</span>
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Clean Solutions · Better Life
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Clean Solutions. Better Life. — home care products across three quality tiers for
              every need.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {qualityBrands.map((brand) => (
                <Link
                  key={brand.id}
                  href={`/products?quality=${brand.id}`}
                  className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wide transition hover:opacity-90 ${brand.badge}`}
                >
                  <QualityTierIcon tier={brand.id} className="h-3 w-3" />
                  {brand.tier}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              <Sparkles className="h-3.5 w-3.5 text-quality-premium-400" aria-hidden />
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
                  >
                    <Icon className="h-4 w-4 text-slate-500" aria-hidden />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              <Package className="h-3.5 w-3.5 text-quality-standard-400" aria-hidden />
              Quality Ranges
            </h3>
            <ul className="mt-4 space-y-2.5">
              {qualityBrands.map((brand) => (
                <li key={brand.id}>
                  <Link
                    href={`/products?quality=${brand.id}`}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
                  >
                    <QualityTierIcon tier={brand.id} className={`h-4 w-4 ${brand.heroText}`} />
                    <span>
                      {brand.name}
                      <span className="text-slate-500"> · {brand.tier}</span>
                    </span>
                    <ArrowRight
                      className="h-3.5 w-3.5 text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-slate-400"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              <Phone className="h-3.5 w-3.5 text-quality-economy-400" aria-hidden />
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="mailto:chemicalmadhav@gmail.com"
                  className="flex items-start gap-2.5 transition hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden />
                  chemicalmadhav@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919043133705"
                  className="flex items-start gap-2.5 transition hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden />
                  +91-90431-33705
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden />
                <span className="leading-relaxed text-slate-400">
                  #151, Madhavaram High Road, Grandlyon, Chennai - 600052, Tamil Nadu, India
                </span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white">
        <div className="container py-4 text-center text-sm font-medium text-gray-600">
          © {new Date().getFullYear()} Madhav Chemicals. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
