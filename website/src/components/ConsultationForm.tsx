"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  business,
  preferredTimeSlots,
  serviceInterests,
  type ServiceInterestId,
} from "@/lib/site-data";

type FormState = {
  interest: ServiceInterestId;
  name: string;
  phone: string;
  email: string;
  contactMethod: "phone" | "email" | "either";
  preferredDate: string;
  preferredTime: string;
  message: string;
};

const initialState: FormState = {
  interest: "not-sure",
  name: "",
  phone: "",
  email: "",
  contactMethod: "either",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ConsultationForm({
  initialInterest = "not-sure",
}: {
  initialInterest?: ServiceInterestId;
}) {
  const [form, setForm] = useState<FormState>({
    ...initialState,
    interest: initialInterest,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [prepared, setPrepared] = useState(false);

  useEffect(() => {
    (window as Window & { __WBJ_HYDRATED?: boolean }).__WBJ_HYDRATED = true;
  }, []);

  useEffect(() => {
    window.localStorage.setItem("wbj-consultation-draft", JSON.stringify(form));
  }, [form]);

  const selectedInterest = serviceInterests.find((item) => item.id === form.interest);

  const emailHref = useMemo(() => {
    const subject = encodeURIComponent("Private consultation request");
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Preferred contact: ${form.contactMethod}`,
        `Interest: ${selectedInterest?.label ?? "Help me choose"}`,
        `Preferred date: ${form.preferredDate || "Not selected"}`,
        `Preferred time: ${form.preferredTime || "Not selected"}`,
        "",
        "Message:",
        form.message,
      ].join("\n"),
    );

    return `${business.emailHref}?subject=${subject}&body=${body}`;
  }, [form, selectedInterest]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setPrepared(false);
    setForm((current) => ({ ...current, [key]: value }));
  }

  function validate() {
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) nextErrors.name = "Enter your name.";
    if (!form.phone.trim() && !form.email.trim()) {
      nextErrors.contact = "Enter a phone number or email so Jolie can respond.";
    }
    if (form.email.trim() && !isEmail(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setPrepared(true);
  }

  return (
    <form className="consultation-form" onSubmit={handleSubmit} noValidate>
      <div className="form-progress" aria-hidden="true">
        <span className="is-active" />
        <span className={form.name || form.phone || form.email ? "is-active" : ""} />
      </div>

      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={(event) => update("name", event.target.value)}
          />
          {errors.name ? <p id="name-error" className="form-error">{errors.name}</p> : null}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            aria-invalid={Boolean(errors.contact)}
            aria-describedby={errors.contact ? "contact-error" : undefined}
            onChange={(event) => update("phone", event.target.value)}
          />
        </div>
      </div>

      <div className="field-grid">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            value={form.email}
            aria-invalid={Boolean(errors.email || errors.contact)}
            aria-describedby={[errors.email ? "email-error" : "", errors.contact ? "contact-error" : ""]
              .filter(Boolean)
              .join(" ") || undefined}
            onChange={(event) => update("email", event.target.value)}
          />
          {errors.email ? <p id="email-error" className="form-error">{errors.email}</p> : null}
        </div>
        <div className="field">
          <label htmlFor="interest">I need help with</label>
          <select
            id="interest"
            value={form.interest}
            onChange={(event) =>
              update("interest", event.target.value as ServiceInterestId)
            }
          >
            {serviceInterests.map((interest) => (
              <option key={interest.id} value={interest.id}>
                {interest.label}
              </option>
            ))}
          </select>
          <p className="form-hint">{selectedInterest?.description}</p>
        </div>
      </div>
      {errors.contact ? <p id="contact-error" className="form-error">{errors.contact}</p> : null}

      <div className="field">
        <label htmlFor="contactMethod">Best way to reach me</label>
        <select
          id="contactMethod"
          value={form.contactMethod}
          onChange={(event) =>
            update("contactMethod", event.target.value as FormState["contactMethod"])
          }
        >
          <option value="either">Phone or email</option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
        </select>
      </div>

      <div className="field-grid scheduling-grid">
        <div className="field">
          <label htmlFor="preferredDate">Preferred Date</label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={(event) => update("preferredDate", event.target.value)}
          />
        </div>
        <fieldset className="time-slot-field">
          <legend>Preferred Time</legend>
          <div className="time-slot-grid" role="radiogroup" aria-label="Preferred time">
            {preferredTimeSlots.map((slot) => (
              <label className="time-slot" key={slot}>
                <input
                  type="radio"
                  name="preferredTime"
                  value={slot}
                  checked={form.preferredTime === slot}
                  onChange={() => update("preferredTime", slot)}
                />
                <span>{slot}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <p className="form-note">
        Preferred times are requests only. Jolie will confirm the final appointment time directly.
      </p>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(event) => update("message", event.target.value)}
        />
      </div>

      <p className="form-note">
        This request is not a confirmed appointment until Wigs by Jolie responds directly.
      </p>

      <div className="form-actions">
        <button className="button button-dark" type="submit">
          Email My Request
        </button>
        <a className="button button-outline" href={business.phoneHref}>
          Call Jolie
        </a>
      </div>

      <div className="form-status" aria-live="polite">
        {prepared ? (
          <div className="prepared-panel">
            <strong>Your request details are ready.</strong>
            <p>
              Send them by email or call Jolie directly. No appointment is confirmed until Wigs by
              Jolie replies.
            </p>
            <a className="button button-light" href={emailHref}>
              Open Email Draft
            </a>
          </div>
        ) : null}
      </div>
    </form>
  );
}
