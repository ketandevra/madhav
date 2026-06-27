"use client";

import { useCallback, useEffect, useState } from "react";
import { ProductIcon } from "@/lib/icons";

export type CategoryNavItem = {
  label: string;
  slug: string;
};

const NAVBAR_HEIGHT = 64;
const CATEGORY_BAR_HEIGHT = 52;
const SCROLL_OFFSET = NAVBAR_HEIGHT + CATEGORY_BAR_HEIGHT + 12;

export default function ProductCategoryNav({ categories }: { categories: CategoryNavItem[] }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const scrollToCategory = useCallback((slug: string) => {
    const el = document.getElementById(`heading-${slug}`);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveSlug(slug);
    window.history.replaceState(null, "", `#heading-${slug}`);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.startsWith("#heading-")) return;

    const slug = hash.replace("#heading-", "");
    const tryScroll = () => {
      const el = document.getElementById(`heading-${slug}`);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
        setActiveSlug(slug);
        return true;
      }
      return false;
    };

    if (tryScroll()) return;

    const observer = new MutationObserver(() => {
      if (tryScroll()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const timeout = window.setTimeout(() => observer.disconnect(), 5000);
    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const sectionIds = categories.map((c) => `heading-${c.slug}`);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSlug(visible[0].target.id.replace("heading-", ""));
        }
      },
      { rootMargin: `-${SCROLL_OFFSET}px 0px -55% 0px`, threshold: [0, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  return (
    <nav
      aria-label="Product categories"
      className="fixed inset-x-0 top-16 z-40 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md"
    >
      <div className="container py-2.5">
        <div className="-mx-4 flex gap-2 overflow-x-auto overscroll-x-contain px-4 pb-0.5 sm:mx-0 sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const isActive = activeSlug === category.slug;
            return (
              <button
                key={category.slug}
                type="button"
                onClick={() => scrollToCategory(category.slug)}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                  isActive
                    ? "border-brand-600 bg-brand-600 text-white shadow-sm"
                    : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300 hover:bg-white"
                }`}
              >
                <ProductIcon slug={category.slug} className="h-3.5 w-3.5" />
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
