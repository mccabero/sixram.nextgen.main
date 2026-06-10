"use client";

import { Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

const inquiryTypes = [
  "Software Development Inquiry",
  "Band Studio Booking",
  "Business Partnership",
  "Wellness Spa Inquiry",
  "General Inquiry"
];

const initialState = {
  name: "",
  email: "",
  inquiryType: inquiryTypes[0],
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const emailIsValid = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    [form.email]
  );

  const canSubmit =
    form.name.trim().length > 1 &&
    emailIsValid &&
    form.message.trim().length > 10 &&
    form.inquiryType.length > 0;

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }

    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <form className="glass-panel rounded-2xl p-5 sm:p-6" onSubmit={submitForm}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Name
          <input
            className="rounded-lg border-white/10 bg-slate-950/70 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:ring-cyan-300"
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            placeholder="Your name"
            required
            value={form.name}
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Email
          <input
            className="rounded-lg border-white/10 bg-slate-950/70 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:ring-cyan-300"
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            placeholder="you@example.com"
            required
            type="email"
            value={form.email}
          />
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-medium text-slate-200">
        Inquiry type
        <select
          className="rounded-lg border-white/10 bg-slate-950/70 text-white focus:border-cyan-300 focus:ring-cyan-300"
          onChange={(event) =>
            setForm((current) => ({ ...current, inquiryType: event.target.value }))
          }
          value={form.inquiryType}
        >
          {inquiryTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>

      <label className="mt-5 grid gap-2 text-sm font-medium text-slate-200">
        Message
        <textarea
          className="min-h-36 rounded-lg border-white/10 bg-slate-950/70 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:ring-cyan-300"
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          placeholder="Tell me what you want to build, book, or discuss."
          required
          value={form.message}
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button disabled={!canSubmit} type="submit">
          <Send aria-hidden="true" size={17} />
          Send Inquiry
        </Button>
        <p className="text-sm text-slate-500">
          This first version validates locally and is ready for future email integration.
        </p>
      </div>

      {submitted ? (
        <p className="mt-5 rounded-lg border border-emerald-200/20 bg-emerald-200/10 px-4 py-3 text-sm font-medium text-emerald-100">
          Thanks. Your inquiry is ready for the next contact integration step.
        </p>
      ) : null}
    </form>
  );
}
