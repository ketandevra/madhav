import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-brand-600" />
            <span className="font-semibold text-lg">Madhav Chemicals</span>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            manufacture all types of home care products
          </p>
        </div>
        <div>
          <h3 className="font-medium mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Email: chemicalmadhav@gmail.com</li>
            <li>Phone: +91-90431-33705</li>
            <li>Address: #151, Madhavaram High Road, Grandlyon, Chennai - 600052</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-xs text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Madhav Chemicals. All rights reserved.</span>
          {/* <span>ISO 9001:2015 Certified</span> */}
        </div>
      </div>
    </footer>
  );
}


