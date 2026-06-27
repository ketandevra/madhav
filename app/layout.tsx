import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Madhav Chemicals",
    template: "%s | Madhav Chemicals",
  },
  description: "Manufacture all types of home care products. Quality, compliance, and on-time delivery.",
  icons: {
    icon: [{ url: "/logo-nav.png", type: "image/png" }],
    apple: "/logo-nav.png",
  },
  openGraph: {
    title: "Madhav Chemicals",
    description: "Manufacture all types of home care products. Quality, compliance, and on-time delivery.",
    type: "website",
    url: "https://www.madhavchemicals.example",
  },
  metadataBase: new URL("https://www.madhavchemicals.example"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen w-full flex-col overflow-x-hidden`}>
        <Navbar />
        <main className="w-full min-w-0 flex-1 overflow-x-hidden pt-16 pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


