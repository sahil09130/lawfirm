"use client";

import { useId, useState } from "react";
import { contact } from "@/content/contact";
import { practiceAreas } from "@/content/practice-areas";
import {
  emptyContactValues,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "@/lib/contact";

type Status = "idle" | "submitting" | "success" | "error";

const practiceAreaOptions = [
  ...practiceAreas.map((area) => area.name),
  contact.otherPracticeAreaLabel,
];

// Keep the form in sync with the server's allow-list (see src/app/api/contact/route.ts).
const FIELD_ORDER: (keyof ContactValues)[] = [
  "name",
  "email",
  "phone",
  "practiceArea",
  "message",
];

export default function ContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyContactValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const formId = useId();

  const fieldId = (name: keyof ContactValues) => `${formId}-${name}`;
  const errorId = (name: keyof ContactValues) => `${formId}-${name}-error`;

  function update(name: keyof ContactValues, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear the field's error as soon as the user edits it.
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    const validation = validateContact(values, practiceAreaOptions);
    setErrors(validation);

    const firstInvalid = FIELD_ORDER.find((name) => validation[name]);
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !data?.ok) {
        setStatus("error");
        setServerError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setValues(emptyContactValues);
      setErrors({});
    } catch {
      setStatus("error");
      setServerError("We could not reach the server. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-border bg-white p-10 text-center md:p-14"
      >
        <span aria-hidden="true" className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent text-accent">
          <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.25}>
            <path d="M3 8.5l3 3 7-7" />
          </svg>
        </span>
        <p className="mt-6 font-heading text-3xl text-primary">Message received</p>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">{contact.successMessage}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-10"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputBase =
    "mt-1 w-full rounded-card border-0 border-b bg-transparent px-0 py-3 text-lg text-ink transition-colors placeholder:text-muted/60 focus:border-accent focus:shadow-[0_1px_0_0_var(--brand-accent)] focus:outline-none focus-visible:outline-none";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="border border-border bg-white p-7 md:p-12"
      aria-describedby={`${formId}-disclaimer`}
    >
      {serverError && (
        <div
          role="alert"
          className="mb-8 border-l-2 border-danger bg-surface p-4 text-sm text-danger"
        >
          {serverError}
        </div>
      )}

      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        <Field
          label="Name"
          id={fieldId("name")}
          error={errors.name}
          errorId={errorId("name")}
          required
        >
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? errorId("name") : undefined}
            className={`${inputBase} ${errors.name ? "border-danger" : "border-border"}`}
          />
        </Field>

        <Field
          label="Email"
          id={fieldId("email")}
          error={errors.email}
          errorId={errorId("email")}
          required
        >
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? errorId("email") : undefined}
            className={`${inputBase} ${errors.email ? "border-danger" : "border-border"}`}
          />
        </Field>

        <Field
          label="Phone (optional)"
          id={fieldId("phone")}
          error={errors.phone}
          errorId={errorId("phone")}
        >
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? errorId("phone") : undefined}
            className={`${inputBase} ${errors.phone ? "border-danger" : "border-border"}`}
          />
        </Field>

        <Field
          label="Practice area"
          id={fieldId("practiceArea")}
          error={errors.practiceArea}
          errorId={errorId("practiceArea")}
          required
        >
          <select
            id={fieldId("practiceArea")}
            name="practiceArea"
            required
            value={values.practiceArea}
            onChange={(e) => update("practiceArea", e.target.value)}
            aria-invalid={Boolean(errors.practiceArea)}
            aria-describedby={errors.practiceArea ? errorId("practiceArea") : undefined}
            className={`${inputBase} ${errors.practiceArea ? "border-danger" : "border-border"}`}
          >
            <option value="">Select a practice area</option>
            {practiceAreaOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-8">
        <Field
          label="How can we help?"
          id={fieldId("message")}
          error={errors.message}
          errorId={errorId("message")}
          required
        >
          <textarea
            id={fieldId("message")}
            name="message"
            rows={5}
            required
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? errorId("message") : undefined}
            className={`${inputBase} resize-y ${errors.message ? "border-danger" : "border-border"}`}
          />
        </Field>
      </div>

      <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full shrink-0 disabled:cursor-not-allowed disabled:opacity-60 md:order-2 md:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <p id={`${formId}-disclaimer`} className="max-w-sm text-xs leading-relaxed text-muted md:order-1">
          {contact.disclaimer}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  errorId,
  required,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  errorId: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block text-muted">
        {label}
        {required && <span className="text-accent" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p id={errorId} className="mt-2 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
