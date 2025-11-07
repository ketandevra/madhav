"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
  const search = useSearchParams();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });

  useEffect(() => {
    const p = search.get("product");
    if (p) setForm((f) => ({ ...f, product: p }));
  }, [search]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to submit");
      setSuccess("Thanks! We will contact you shortly.");
      setForm({ name: "", email: "", phone: "", company: "", product: "", message: "" });
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="container py-12 sm:py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold">Contact Sales</h1>
        <p className="mt-2 text-gray-600">Request quotations, MSDS/COA, or bulk availability.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" required>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" />
            </Field>
            <Field label="Email" required>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" />
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Phone">
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input" />
            </Field>
            <Field label="Company">
              <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="input" />
            </Field>
          </div>
          <Field label="Product (optional)">
            <input value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} className="input" />
          </Field>
          <Field label="Message" required>
            <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input" />
          </Field>

          {success && <div className="rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-sm">{success}</div>}
          {error && <div className="rounded-md bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm">{error}</div>}

          <button
            type="submit"
            disabled={submitting}
            className="rounded-md bg-brand-600 px-6 py-3 text-white font-medium hover:bg-brand-700 disabled:opacity-70"
          >
            {submitting ? "Submitting..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <div className="">{children}</div>
      <style jsx global>{`
        .input { @apply w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-brand-600/30 focus:border-brand-600; }
      `}</style>
    </label>
  );
}


