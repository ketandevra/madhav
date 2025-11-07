# Madhav Chemicals - Next.js Website

A marketing/catalog website for showcasing chemical products and collecting sales inquiries.

## Tech
- Next.js (App Router, TypeScript)
- Tailwind CSS

## Getting Started

1) Install dependencies

```bash
npm install
```

2) Run the dev server

```bash
npm run dev
```

Visit http://localhost:3000

## Project Structure
- `app/` — routes and pages (App Router)
  - `/` — homepage with hero, features, featured products
  - `/products` — catalog listing
  - `/products/[slug]` — product detail (pre-rendered)
  - `/contact` — contact form (client-side)
  - `/api/inquiry` — API route to accept inquiries
- `components/` — UI components (Navbar, Footer, ProductCard)
- `lib/data/products.ts` — sample product data

## Environment & Email
The inquiry endpoint currently logs submissions to the server console. To send real emails, integrate a provider (e.g. Resend, SendGrid) inside `app/api/inquiry/route.ts` using their SDK and your API key.

## Production
```bash
npm run build
npm start
```

## License
MIT

