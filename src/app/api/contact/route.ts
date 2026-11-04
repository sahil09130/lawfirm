import { NextResponse } from "next/server";
import { contact } from "@/content/contact";
import { practiceAreas } from "@/content/practice-areas";
import { parseContact, validateContact } from "@/lib/contact";

const allowedPracticeAreas = [
  ...practiceAreas.map((area) => area.name),
  contact.otherPracticeAreaLabel,
];

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "The request could not be read. Please try again." },
      { status: 400 },
    );
  }

  const values = parseContact(body);
  if (!values) {
    return NextResponse.json(
      { ok: false, error: "The request is missing required information." },
      { status: 400 },
    );
  }

  const errors = validateContact(values, allowedPracticeAreas);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields and try again.", fields: errors },
      { status: 422 },
    );
  }

  // TODO: Send the submission to your email service (for example Resend, SendGrid,
  // Amazon SES, or your CRM). Until then, nothing is sent and the submission is discarded.
  // Before going live, also add spam protection (honeypot field or Cloudflare Turnstile)
  // and rate limiting. Do not log personal data such as names, emails, or messages.

  return NextResponse.json({ ok: true, message: contact.successMessage });
}
