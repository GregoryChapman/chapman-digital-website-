import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const FROM = "Chapman Digital Contact Form <contact@chapmandigitalservices.com>";
const TO = "gregory.chapman@chapmandigitalservices.com";

const LIMITS = { name: 100, email: 254, company: 150, message: 5000 } as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SEND_FAILED =
  "Your message couldn't be sent right now. Please try again, or email me directly.";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function field(body: Record<string, unknown>, key: string): string {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object") throw new Error("Body is not an object");
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real people never see or fill this field. Pretend it worked.
  if (field(body, "website")) {
    return NextResponse.json({ success: true });
  }

  const name = field(body, "name");
  const email = field(body, "email");
  const company = field(body, "company");
  const message = field(body, "message");

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in your name, email and message." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    company.length > LIMITS.company ||
    message.length > LIMITS.message
  ) {
    return NextResponse.json({ error: "Your message is too long. Please shorten it and try again." }, { status: 400 });
  }

  // Fail loudly: a missing key must never look like a successful send.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set; no email was sent");
    return NextResponse.json({ error: SEND_FAILED }, { status: 500 });
  }

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    company: company ? escapeHtml(company) : "Not provided",
    message: escapeHtml(message).replace(/\n/g, "<br>"),
  };

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `Contact form: ${name.replace(/[\r\n]+/g, " ")}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">New contact form submission</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${safe.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${safe.email}</p>
            <p style="margin: 10px 0;"><strong>Brand or business:</strong> ${safe.company}</p>
          </div>
          <div style="margin-top: 20px;">
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #4F46E5; margin-top: 10px;">
              <p style="line-height: 1.6; color: #333;">${safe.message}</p>
            </div>
          </div>
        </div>
      `,
      text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nBrand or business: ${company || "Not provided"}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend rejected the send:", error.name);
      return NextResponse.json({ error: SEND_FAILED }, { status: 502 });
    }

    console.log("[contact] Sent", data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err instanceof Error ? err.name : "unknown");
    return NextResponse.json({ error: SEND_FAILED }, { status: 500 });
  }
}
