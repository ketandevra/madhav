import Link from "next/link";
import { qualityBrands } from "@/lib/data/products";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  QualityTierIcon,
} from "@/lib/icons";

export default function ContactPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 top-16 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl"
          aria-hidden
        />
        <div className="container relative py-14 sm:py-20">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold backdrop-blur">
            <MessageCircle className="h-3.5 w-3.5" aria-hidden />
            Contact Us
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-300 via-white to-emerald-300 bg-clip-text text-transparent">
              touch with us
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Bulk orders, product quotes, or quality tier questions — reach us by phone, email, or
            WhatsApp. We respond the same day.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container">
          <div className="space-y-5">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="inline-flex items-center gap-2 text-lg font-bold text-gray-900">
                <Phone className="h-5 w-5 text-brand-600" aria-hidden />
                Contact Details
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Reach us directly — we&apos;re happy to help with any inquiry.
              </p>

              <ul className="mt-6 space-y-4">
                <ContactLink
                  href="mailto:chemicalmadhav@gmail.com"
                  icon={Mail}
                  label="Email"
                  value="chemicalmadhav@gmail.com"
                  accent="from-blue-500 to-blue-700"
                />
                <ContactLink
                  href="tel:+919043133705"
                  icon={Phone}
                  label="Phone"
                  value="+91-90431-33705"
                  accent="from-violet-500 to-violet-700"
                />
                <ContactLink
                  href="https://wa.me/919043133705"
                  icon={MessageCircle}
                  label="WhatsApp"
                  value="+91-90431-33705"
                  accent="from-emerald-500 to-emerald-600"
                  external
                />
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Office Address</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    #151, Madhavaram High Road
                    <br />
                    Grandlyon, Chennai - 600052
                    <br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="inline-flex items-center gap-2 font-semibold text-gray-900">
                <Package className="h-5 w-5 text-brand-600" aria-hidden />
                Our Quality Ranges
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Ask us about Monarch Mist, Pearl Pure, or Clean Wave when you get in touch.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {qualityBrands.map((brand) => (
                  <span
                    key={brand.id}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${brand.badge}`}
                  >
                    <QualityTierIcon tier={brand.id} className="h-3.5 w-3.5" />
                    {brand.name}
                  </span>
                ))}
              </div>
              <Link
                href="/products"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                <Package className="h-4 w-4" aria-hidden />
                Browse Products
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
  accent,
  external,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
  value: string;
  accent: string;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50/50 p-4 transition hover:border-gray-200 hover:bg-white hover:shadow-sm"
      >
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-sm`}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span>
          <span className="block text-xs font-medium uppercase tracking-wider text-gray-400">
            {label}
          </span>
          <span className="block text-sm font-semibold text-gray-900 group-hover:text-blue-700">
            {value}
          </span>
        </span>
      </a>
    </li>
  );
}
