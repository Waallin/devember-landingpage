"use client";

import { useState, type FormEvent } from "react";
import { submitApplication } from "./submit";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "box-border min-h-12 w-full rounded-lg border-2 border-[#3B3551]/15 bg-white px-4 py-3 text-base leading-[22px] text-[#3B3551] outline-none transition-colors placeholder:text-[#6B6880]/70 focus:border-[#0B8655]";
const label = "text-sm leading-5 font-semibold";

function track(event: string, props: Record<string, unknown> = {}) {
  window.mixpanel?.track(event, props);
}

export function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [started, setStarted] = useState(false);

  const onFocus = () => {
    if (started) return;
    setStarted(true);
    track("Ambassador Form Started");
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const form = new FormData(e.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "").trim();
    const app = {
      handle: get("handle").replace(/^@+/, ""),
      email: get("email"),
      country: get("country"),
      followers: get("followers"),
      journey: get("journey"),
      consent: form.get("consent") === "on",
    };
    setStatus("sending");
    try {
      await submitApplication(app, get("botcheck"));
      // No handle or email in analytics, only the coarse answers.
      track("Ambassador Application Submitted", { country: app.country, followers: app.followers || "not given" });
      setStatus("sent");
    } catch {
      track("Ambassador Application Failed");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 py-6">
        <span className="flex size-14 items-center justify-center rounded-full bg-[#E6F6EE]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#097A4D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h3 className="m-0 text-2xl leading-[30px] font-bold tracking-[-0.3px]">Thanks, we got your application!</h3>
        <p className="m-0 text-base leading-6 text-[#6B6880]">
          We&apos;ll watch a few of your videos and get back to you by email or on TikTok. Keep an eye on your inbox and
          your DMs.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} onFocus={onFocus} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="handle" className={label}>
          TikTok handle <span className="text-[#097A4D]">*</span>
        </label>
        <div className="relative">
          <span aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#6B6880]">
            @
          </span>
          <input
            id="handle"
            name="handle"
            required
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            placeholder="yourname"
            pattern="@?[A-Za-z0-9._]{2,24}"
            title="Your TikTok username: letters, numbers, dots and underscores"
            className={`${field} pl-9`}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={label}>
          Email <span className="text-[#097A4D]">*</span>
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={field} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="country" className={label}>
            Where do you live?
          </label>
          <select id="country" name="country" defaultValue="United Kingdom" className={`${field} cursor-pointer`}>
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="followers" className={label}>
            Followers, roughly
          </label>
          <select id="followers" name="followers" defaultValue="" className={`${field} cursor-pointer`}>
            <option value="">Choose one</option>
            <option>Under 1k</option>
            <option>1k–10k</option>
            <option>10k–50k</option>
            <option>50k–100k</option>
            <option>100k+</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="journey" className={label}>
          Tell us about your journey
        </label>
        <textarea
          id="journey"
          name="journey"
          rows={4}
          maxLength={1000}
          placeholder="What do you post about, and where are you on your journey?"
          className={`${field} resize-y`}
        />
      </div>

      {/* Honeypot: hidden from people, filled in by bots. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <label className="flex cursor-pointer items-start gap-3 text-sm leading-5">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 size-5 flex-none cursor-pointer accent-[#0B8655]"
        />
        <span>
          Kudoo (Devember AB) may contact me by email or on TikTok about the ambassador programme.{" "}
          <span className="text-[#097A4D]">*</span>
        </span>
      </label>

      {status === "error" && (
        <p role="alert" className="m-0 rounded-lg bg-[#FDECEC] px-4 py-3 text-sm leading-5 text-[#A12A2A]">
          Something went wrong and your application wasn&apos;t sent. Please try again, or DM us on TikTok.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-14 cursor-pointer items-center justify-center rounded-lg border-0 bg-[#0B8655] px-7 text-xl leading-[26px] font-bold tracking-[0.1px] text-white transition-colors hover:bg-[#097A4D] disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send my application"}
      </button>
      <p className="m-0 text-xs leading-4 text-[#6B6880]">
        We only use your details to review your application and get in touch with you.
      </p>
    </form>
  );
}
