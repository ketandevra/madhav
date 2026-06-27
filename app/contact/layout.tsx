import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for bulk orders, quotations, and product inquiries.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
