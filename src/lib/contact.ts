// Contact form validation shared by the client form and the /api/contact route handler.

export type ContactValues = {
  name: string;
  email: string;
  phone: string;
  practiceArea: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export const emptyContactValues: ContactValues = {
  name: "",
  email: "",
  phone: "",
  practiceArea: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+()\-.\s]+$/;

export function validateContact(
  values: ContactValues,
  allowedPracticeAreas: string[],
): ContactErrors {
  const errors: ContactErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const message = values.message.trim();

  if (name.length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (phone) {
    const digits = phone.replace(/\D/g, "");
    if (!PHONE_PATTERN.test(phone) || digits.length < 7 || digits.length > 15) {
      errors.phone = "Please enter a valid phone number, or leave this blank.";
    }
  }

  if (!values.practiceArea || !allowedPracticeAreas.includes(values.practiceArea)) {
    errors.practiceArea = "Please select a practice area.";
  }

  if (message.length < 10) {
    errors.message = "Please provide a few more details (at least 10 characters).";
  } else if (message.length > 2000) {
    errors.message = "Please keep your message under 2,000 characters.";
  }

  return errors;
}

// Narrows an unknown request body to string fields, or returns null if the shape is wrong.
export function parseContact(body: unknown): ContactValues | null {
  if (typeof body !== "object" || body === null) return null;
  const record = body as Record<string, unknown>;
  const keys: (keyof ContactValues)[] = [
    "name",
    "email",
    "phone",
    "practiceArea",
    "message",
  ];
  const result = { ...emptyContactValues };
  for (const key of keys) {
    const value = record[key];
    if (value === undefined) continue;
    if (typeof value !== "string") return null;
    result[key] = value;
  }
  return result;
}
