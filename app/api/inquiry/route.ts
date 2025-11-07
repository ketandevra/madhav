import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, product, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Here you can integrate with an email service (e.g. Resend, SendGrid) or CRM.
    // For now, we log on the server.
    console.log("New inquiry:", { name, email, phone, company, product, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}


