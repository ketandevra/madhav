import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote or ask about our chemical products.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}


