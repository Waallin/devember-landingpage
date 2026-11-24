import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import appMeal from "@/assets/kudoo/app-meal.png";
import { ApplyForm } from "./ApplyForm";

export const metadata: Metadata = {
  title: "Become a Kudoo ambassador",
  description:
    "Share your journey on TikTok, give your followers 2 weeks of Kudoo for free with your own code, and get paid for every free trial it starts.",
};

const card = "rounded-3xl bg-white shadow-[0_2px_8px_rgba(33,33,33,0.10)]";
const h2 = "m-0 text-[32px] leading-[38px] font-bold tracking-[-0.5px] text-balance";
const lead = "m-0 text-lg leading-7 text-[#6B6880]";
const section = "mx-auto box-border w-full max-w-[1200px] px-6 py-16";
const linkInk = "text-[#3B3551] hover:text-[#3B3551]";
const cta =
  "inline-flex min-h-14 items-center rounded-lg bg-[#0B8655] px-6 text-xl leading-[26px] font-bold tracking-[0.1px] text-white transition-colors hover:bg-[#097A4D] hover:text-white";

function Icon({ color, children }: { color: string; children: ReactNode }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function Check() {
  return (
    <span className="flex size-6 flex-none items-center justify-center rounded-full bg-[#E6F6EE]">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#097A4D" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}

function PerkCard({ tint, title, text, children }: { tint: string; title: string; text: string; children: ReactNode }) {
  return (
    <div className={`${card} flex flex-col gap-4 p-6`}>
      <div className="flex size-12 flex-none items-center justify-center rounded-full" style={{ background: tint }}>
        {children}
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="m-0 text-xl leading-[26px] font-bold tracking-[-0.2px]">{title}</h3>
        <p className="m-0 text-base leading-[22px] text-[#6B6880]">{text}</p>
      </div>
    </div>
  );
}

/** A mock of the code card the creator shares. "YOURNAME" is a placeholder, not a real code. */
function CodeCard() {
  return (
    <div className="mx-auto w-full max-w-[400px] flex-none">
      <div className={`${card} flex flex-col gap-5 p-7`}>
        <span className="text-xs leading-4 font-semibold tracking-[0.2px] text-[#097A4D]">Your own code</span>
        <div className="flex items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-[#0B8655]/40 bg-[#E6F6EE] px-5 py-4">
          <span className="font-mono text-[28px] leading-[34px] font-bold tracking-[3px] text-[#097A4D]">YOURNAME</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#097A4D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="8" y="8" width="12" height="12" rx="2.5" />
            <path d="M16 8V6.5A2.5 2.5 0 0 0 13.5 4h-7A2.5 2.5 0 0 0 4 6.5v7A2.5 2.5 0 0 0 6.5 16H8" />
          </svg>
        </div>
        <ul className="m-0 flex list-none flex-col gap-3 p-0">
          {["Your followers get 2 weeks free", "You earn for every free trial started", "Redeemed straight in the App Store"].map((t) => (
            <li key={t} className="flex items-center gap-3 font-medium">
              <Check />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const steps = [
  { title: "Apply", text: "Fill in the form below. It takes two minutes." },
  { title: "We say hi", text: "We look at your videos and reach out by email or DM." },
  { title: "Get your code", text: "You get your own code, for example your name, and a short guide to get started." },
  { title: "Post and earn", text: "Share Kudoo your way. Every free trial started with your code earns you money." },
];

export default function AmbassadorsPage() {
  return (
    <div
      id="top"
      className="min-h-screen w-full overflow-x-hidden bg-[#F6F6F5] font-[family-name:var(--font-poppins),system-ui,sans-serif] text-base leading-[22px] text-[#3B3551]"
    >
      {/* NAV */}
      <header className="mx-auto box-border flex max-w-[1200px] items-center justify-between gap-4 px-6 py-5">
        <a href="/kudoo" className={`text-[28px] leading-[34px] font-light ${linkInk}`}>
          Kudoo
        </a>
        <a
          href="#apply"
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#0B8655] px-5 font-bold text-white transition-colors hover:bg-[#097A4D] hover:text-white"
        >
          Apply now
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="mx-auto box-border flex max-w-[1200px] flex-wrap items-center justify-between gap-16 px-6 pt-12 pb-24">
          <div className="flex min-w-0 flex-[1_1_460px] flex-col items-start gap-6">
            <span className="inline-flex items-center rounded-full bg-[#E6F6EE] px-3.5 py-1.5 text-xs leading-4 font-semibold tracking-[0.2px] text-[#097A4D]">
              For TikTok creators in the UK and US
            </span>
            <h1 className="m-0 text-[clamp(34px,5vw,48px)] leading-[1.1] font-bold tracking-[-1px] text-balance">
              Become a Kudoo ambassador
            </h1>
            <p className={`${lead} max-w-[540px]`}>
              Share your journey, give your followers 2 weeks of Kudoo for free with your own code, and get paid for
              every free trial it starts.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#apply" className={cta}>
                Apply now
              </a>
              <a
                href="#perks"
                className={`inline-flex min-h-14 items-center rounded-lg bg-[#F0F4F6] px-6 text-xl leading-[26px] font-bold tracking-[0.1px] ${linkInk}`}
              >
                What you get
              </a>
            </div>
            <span className="text-sm leading-5 text-[#6B6880]">Free to join. No contract. Stop whenever you like.</span>
          </div>
          <CodeCard />
        </section>

        {/* ABOUT KUDOO */}
        <section className={`${section} flex flex-wrap items-center gap-12`}>
          <div className="mx-auto w-full max-w-[300px] flex-none overflow-hidden rounded-[28px] bg-white ring-1 ring-[#EDECF5] shadow-[0_16px_48px_rgba(46,42,79,0.12)]">
            <Image
              src={appMeal}
              alt="Kudoo meal result showing the points for a meal and the points left today"
              sizes="300px"
              className="block h-auto w-full"
            />
          </div>
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-3">
            <span className="text-xs leading-4 font-semibold tracking-[0.2px] text-[#097A4D]">What is Kudoo?</span>
            <h2 className={h2}>A weight loss app without calorie counting</h2>
            <p className={`${lead} max-w-[560px]`}>
              Kudoo is an iPhone app for losing weight. Instead of counting calories, you snap a photo of your meal
              and get points. You get one daily points budget and two simple goals: eat smart and move daily.
            </p>
            <a href="/kudoo" className="w-fit py-2 font-semibold text-[#097A4D] hover:text-[#097A4D]">
              See how Kudoo works →
            </a>
          </div>
        </section>

        {/* PERKS */}
        <section id="perks" className={`${section} flex flex-col gap-8`}>
          <div className="flex max-w-[640px] flex-col gap-3">
            <h2 className={h2}>What you get</h2>
            <p className={lead}>Everything you need to share Kudoo, and to grow while you do it.</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-4">
            <PerkCard tint="#E6F6EE" title="Your own code" text="Your followers get 2 weeks of Kudoo for free when they use your code in the App Store.">
              <Icon color="#097A4D">
                <path d="M20 12v8H4v-8M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" />
              </Icon>
            </PerkCard>
            <PerkCard tint="#EEEBFD" title="Paid per free trial" text="You earn money for every free trial started with your code. We'll go through the details when we talk.">
              <Icon color="#4B3FC4">
                <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
                <circle cx="12" cy="12" r="2.5" />
                <path d="M6 9.5v5M18 9.5v5" />
              </Icon>
            </PerkCard>
            <PerkCard tint="#E6F6EE" title="Help to grow" text="We help you with hooks and formats that work, so your account grows along with your code.">
              <Icon color="#097A4D">
                <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />
              </Icon>
            </PerkCard>
            <PerkCard tint="#EEEBFD" title="We boost your best videos" text="When one of your Kudoo videos does well, we can run it as an ad so even more people see it.">
              <Icon color="#4B3FC4">
                <path d="M3 10v4a1 1 0 0 0 1 1h3l5 4V5L7 9H4a1 1 0 0 0-1 1zM16 8.5a5 5 0 0 1 0 7M19 5.5a9 9 0 0 1 0 13" />
              </Icon>
            </PerkCard>
          </div>
          <ul className="m-0 flex list-none flex-wrap gap-x-8 gap-y-3 p-0">
            {["Costs nothing", "No contract", "Stop whenever you like"].map((t) => (
              <li key={t} className="flex items-center gap-3 font-medium">
                <Check />
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* WHO */}
        <section className={`${section} flex flex-wrap items-start gap-12`}>
          <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-3">
            <span className="text-xs leading-4 font-semibold tracking-[0.2px] text-[#097A4D]">Who we&apos;re looking for</span>
            <h2 className={h2}>Real people sharing their own journey</h2>
            <p className={`${lead} max-w-[440px]`}>
              You don&apos;t need a big account. What matters is that you post honestly about your own life.
            </p>
          </div>
          <div className={`${card} flex min-w-0 flex-[1_1_520px] flex-col gap-4 p-7`}>
            <p className="m-0 font-semibold">You post things like:</p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {["Your own weight loss journey", "What I eat in a day", "Weigh-ins and check-ins", "Recipes and meal ideas"].map((t) => (
                <li key={t} className="flex items-center gap-3 font-medium">
                  <Check />
                  {t}
                </li>
              ))}
            </ul>
            <p className="m-0 border-t border-[#EDECF5] pt-4 text-[#6B6880]">
              And you live in the <span className="font-semibold text-[#3B3551]">UK or the US</span>.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className={`${section} flex flex-col gap-8`}>
          <h2 className={h2}>How it works</h2>
          <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(230px,100%),1fr))] gap-4 p-0">
            {steps.map((s, i) => (
              <li key={s.title} className={`${card} flex flex-col gap-3 p-6`}>
                <span className="flex size-10 items-center justify-center rounded-full bg-[#0B8655] text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="m-0 text-xl leading-[26px] font-bold tracking-[-0.2px]">{s.title}</h3>
                <p className="m-0 text-base leading-[22px] text-[#6B6880]">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* APPLY */}
        <section id="apply" className="mx-auto box-border w-full max-w-[1200px] scroll-mt-4 px-6 pt-16 pb-24">
          <div className="box-border flex flex-wrap items-start gap-12 rounded-[32px] bg-white px-6 py-10 shadow-[0_2px_8px_rgba(33,33,33,0.10)] sm:px-12 sm:py-14">
            <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-4">
              <h2 className="m-0 text-[clamp(32px,5vw,44px)] leading-[1.1] font-bold tracking-[-0.8px] text-balance">
                Apply to become an ambassador
              </h2>
              <p className={`${lead} max-w-[420px]`}>
                Tell us who you are and where to find you. We read every application.
              </p>
            </div>
            <div className="min-w-0 flex-[1_1_460px]">
              <ApplyForm />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#EDECF5]">
        <div className="mx-auto box-border flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-8">
          <a href="/kudoo" className={`text-[28px] leading-[34px] font-light ${linkInk}`}>
            Kudoo
          </a>
          <span className="text-sm leading-5 text-[#6B6880]">© 2026 Kudoo · Devember AB</span>
        </div>
      </footer>
    </div>
  );
}
