"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mail, Menu, MessageCircle, navIcons, X } from "@/lib/icons";

const navItems = [
  { href: "/", label: "Home", icon: navIcons.home },
  { href: "/products", label: "Products", icon: navIcons.products },
  { href: "/contact", label: "Contact", icon: navIcons.contact },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="block leading-none">
          <span className="text-[17px] font-bold tracking-tight sm:text-lg">
            <span className="text-brand-800">Madhav</span>
            <span className="text-emerald-600"> Chemical</span>
          </span>
          <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.16em] text-gray-500 sm:text-[10px]">
            Clean Solutions · Better Life
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center gap-1.5 text-sm transition-colors hover:text-brand-700 ${active ? "font-medium text-brand-700" : "text-gray-600"}`}
              >
                <Icon className="h-4 w-4" aria-hidden />
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Get Quote
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border px-3 py-2 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 bg-black/20 md:hidden"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 right-0 top-16 z-50 border-t bg-white shadow-lg md:hidden">
            <div className="container flex flex-col gap-1 py-3">
              {navItems.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href));
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`inline-flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm ${active ? "bg-brand-50 font-medium text-brand-700" : "text-gray-700 hover:bg-gray-50"}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-center text-sm font-medium text-white"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Get Quote
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
