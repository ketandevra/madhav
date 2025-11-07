"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-brand-600" />
          <span className="font-semibold text-lg">Madhav Chemicals</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-brand-700 ${active ? "text-brand-700" : "text-gray-600"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            Get Quote
          </Link>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-gray-700">
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white text-center"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


