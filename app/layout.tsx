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
  description: "Industrial and specialty chemicals supplier. Bulk & packaged sales with compliance and on-time delivery.",
  openGraph: {
    title: "Madhav Chemicals",
    description: "Industrial and specialty chemicals supplier. Bulk & packaged sales with compliance and on-time delivery.",
    type: "website",
    url: "https://www.madhavchemicals.example",
  },
  metadataBase: new URL("https://www.madhavchemicals.example"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


