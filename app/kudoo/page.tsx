import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import appMeal from "@/assets/kudoo/app-meal.png";
import appProgress from "@/assets/kudoo/app-progress.png";
import appScan from "@/assets/kudoo/app-scan.png";
import appToday from "@/assets/kudoo/app-today.png";
import mascotPhone from "@/assets/kudoo/mascot/phone-cheer.png";
import { Testimonials } from "./Testimonials";

const APP_STORE_URL = "https://apps.apple.com/se/app/kudoo-weight-loss/id6761327514";

const card = "rounded-3xl bg-white shadow-[0_2px_8px_rgba(33,33,33,0.10)]";
const h2 = "m-0 text-[32px] leading-[38px] font-bold tracking-[-0.5px] text-balance";
const lead = "m-0 text-lg leading-7 text-[#6B6880]";
const section = "mx-auto box-border w-full max-w-[1200px] px-6 py-16";
const linkGreen = "text-[#097A4D] hover:text-[#097A4D]";
const linkInk = "text-[#3B3551] hover:text-[#3B3551]";

const faqs = [
  {
    q: "How do Kudoo points work?",
    a: "Every food has a points value, and you get a daily points budget based on your goal. Log a meal and its points come off your budget. When the day ends, you start fresh.",
  },
  {
    q: "How does the photo scan work?",
    a: "Take a photo of your meal and Kudoo estimates what is on the plate and how many points it is. You can change the food or the portion before you save it. Good light and the whole plate in the picture help.",
  },
  {
    q: "How is my points budget decided?",
    a: "Your budget is based on your height, weight and sex, and on your steps, so it fits you and not an average person. Your steps are counted automatically, so there is nothing to log.",
  },
  {
    q: "Do I have to count calories?",
    a: "No. Points replace calorie counting. You never have to look up grams or add up numbers.",
  },
  {
    q: "What happens after the free trial?",
    a: "Your free trial lasts 30 days. After that you pay [PRICE] per [PERIOD], unless you cancel at least 24 hours before the trial ends.",
  },
  {
    q: "What if Kudoo doesn't help me?",
    a: "Then you get your money back. [REFUND TERMS: how long after the first payment, and how to request it.]",
  },
  {
    q: "How do I cancel?",
    a: "Your subscription runs through the App Store. Open Settings on your iPhone, tap your name, then Subscriptions, and choose Kudoo. Deleting the app does not cancel your subscription.",
  },
  {
    q: "I paid, but I still see the paywall.",
    a: "Tap Restore purchases on the paywall. Make sure you are signed in with the same Apple ID you paid with.",
  },
];

function Stars({ size }: { size: number }) {
  return (
    <svg width={size * 5 + 4 * 3} height={size} viewBox={`0 0 ${size * 5 + 12} ${size}`} aria-hidden="true">
      <defs>
        <linearGradient id="star-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFE680" />
          <stop offset="1" stopColor="#F2B01E" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          transform={`translate(${i * (size + 3)} 0) scale(${size / 24})`}
          d="M12 2.2l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17l-5.9 3.2 1.2-6.5L2.5 9.1l6.6-.9z"
          fill="url(#star-gold)"
          stroke="#D9961A"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

function Icon({ color, children }: { color: string; children: ReactNode }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function SectionIntro({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex max-w-[640px] flex-col gap-3">
      <h2 className={h2}>{title}</h2>
      <p className={lead}>{text}</p>
    </div>
  );
}

function FeatureCard({
  image,
  label,
  title,
  text,
}: {
  image: StaticImageData;
  label: string;
  title: string;
  text: string;
}) {
  return (
    <article className={`${card} flex flex-col gap-4 px-4 pt-4 pb-6`}>
      <div className="overflow-hidden rounded-[14px] bg-[#F6F6F5] ring-1 ring-[#EDECF5]">
        <Image
          src={image}
          alt={label}
          sizes="(min-width: 1200px) 270px, (min-width: 640px) 45vw, 90vw"
          className="block h-auto w-full"
        />
      </div>
      <div className="flex flex-col gap-1.5 px-2">
        <h3 className="m-0 text-xl leading-[26px] font-bold tracking-[-0.2px]">{title}</h3>
        <p className="m-0 text-base leading-[22px] text-[#6B6880]">{text}</p>
      </div>
    </article>
  );
}

function WhyCard({
  tint,
  title,
  text,
  children,
}: {
  tint: string;
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <div className={`${card} flex items-start gap-4 p-6`}>
      <div
        className="flex size-12 flex-none items-center justify-center rounded-full"
        style={{ background: tint }}
      >
        {children}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="m-0 text-xl leading-[26px] font-bold tracking-[-0.2px]">{title}</h3>
        <p className="m-0 text-base leading-[22px] text-[#6B6880]">{text}</p>
      </div>
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title} className="flex min-w-[140px] flex-col gap-1">
      <span className="pb-2 text-xs leading-4 font-semibold tracking-[0.2px] text-[#6B6880]">{title}</span>
      {links.map((l) => (
        <a key={l.label} href={l.href} className={`py-1.5 text-sm leading-5 ${linkInk}`}>
          {l.label}
        </a>
      ))}
    </nav>
  );
}

function PhoneMock() {
  return (
    <div className="mx-auto box-border h-[620px] w-[300px] flex-none rounded-[46px] bg-[#3B3551] p-2.5 shadow-[0_16px_48px_rgba(46,42,79,0.20)]">
      <div className="relative size-full overflow-hidden rounded-[36px] bg-[#F6F6F5]">
        <Image
          src={appToday}
          alt="Kudoo Today dashboard with goals, steps and logged meals"
          fill
          priority
          sizes="300px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

export default function KudooPage() {
  return (
    <div
      id="top"
      className="min-h-screen w-full overflow-x-hidden bg-[#F6F6F5] font-[family-name:var(--font-poppins),system-ui,sans-serif] text-base leading-[22px] text-[#3B3551]"
    >
      {/* NAV */}
      <header className="mx-auto box-border flex max-w-[1200px] items-center justify-between gap-4 px-6 py-5">
        <a href="#top" className={`text-[28px] leading-[34px] font-light ${linkInk}`}>
          Kudoo
        </a>
        <a
          href="#download"
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#0B8655] px-5 font-bold text-white transition-colors hover:bg-[#097A4D] hover:text-white"
        >
          Get Kudoo
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="mx-auto box-border flex max-w-[1200px] flex-wrap items-center justify-between gap-16 px-6 pt-12 pb-24">
          <div className="flex min-w-0 flex-[1_1_460px] flex-col items-start gap-6">
            <div
              role="group"
              aria-label="Rated 5 out of 5 on the App Store by over 3,000 users"
              className="inline-flex items-center gap-3 rounded-full bg-white py-2 pr-5 pl-4 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_0_0_1px_rgba(59,53,81,0.07),0_8px_24px_rgba(46,42,79,0.08)]"
            >
              <Stars size={18} />
              <span aria-hidden="true" className="h-4 w-px bg-[#3B3551]/15" />
              <span className="text-sm leading-5 font-semibold tracking-[0.1px]">
                from 3,000+ users
              </span>
            </div>
            <span className="inline-flex items-center rounded-full bg-[#E6F6EE] px-3.5 py-1.5 text-xs leading-4 font-semibold tracking-[0.2px] text-[#097A4D]">
              The only weight loss app that ends calorie counting
            </span>
            <h1 className="m-0 text-[clamp(34px,5vw,48px)] leading-[1.1] font-bold tracking-[-1px] text-balance">
              What if you could lose weight without counting calories or going to the gym?
            </h1>
            <p className={`${lead} max-w-[540px]`}>
              You can. Just snap a photo, we&apos;ll do the rest. Your steps count by themselves, and your daily budget is
              built for you.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#download"
                className="inline-flex min-h-14 items-center rounded-lg bg-[#0B8655] px-6 text-xl leading-[26px] font-bold tracking-[0.1px] text-white hover:bg-[#097A4D] hover:text-white"
              >
                Download for iPhone
              </a>
              <a
                href="#how"
                className={`inline-flex min-h-14 items-center rounded-lg bg-[#F0F4F6] px-6 text-xl leading-[26px] font-bold tracking-[0.1px] ${linkInk}`}
              >
                See how it works
              </a>
            </div>
          </div>
          <PhoneMock />
        </section>

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* WHAT'S INSIDE */}
        <section id="how" className={`${section} flex flex-col gap-8`}>
          <SectionIntro title="What does Kudoo include?" text="Four things, and nothing you have to look up." />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-4">
            <FeatureCard
              image={appScan}
              label="Kudoo camera framing a plate of burger and fries"
              title="Snap a photo"
              text="Point your camera at your meal. We'll turn it into points. Change the portion if it looks off."
            />
            <FeatureCard
              image={appMeal}
              label="Kudoo meal result: 9 points for this meal, 15 left today"
              title="One daily budget"
              text="Your daily points budget is built for you, from your height, weight, sex and steps. Spend it on whatever you like."
            />
            <FeatureCard
              image={appToday}
              label="Kudoo Today screen with the Eat smart and Move daily goals"
              title="Two simple goals"
              text="Eat smart and move daily. Reach both and the day is done."
            />
            <FeatureCard
              image={appProgress}
              label="Kudoo Progress screen with weight goal at 75 percent"
              title="Your progress"
              text="Watch your weeks fill up. A missed day is one square, not a reset."
            />
          </div>
        </section>

        {/* WHY */}
        <section className={`${section} flex flex-wrap items-start gap-12`}>
          <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-3">
            <span className="text-xs leading-4 font-semibold tracking-[0.2px] text-[#097A4D]">Why Kudoo</span>
            <h2 className={h2}>Tired of counting calories?</h2>
            <p className={`${lead} max-w-[440px]`}>Kudoo keeps the parts that work and drops the rest.</p>
          </div>
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-4">
            <WhyCard
              tint="#E6F6EE"
              title="Points, not calories"
              text="No grams, no macros, no spreadsheets. One number tells you where you are today."
            >
              <Icon color="#097A4D">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7.5V12l3 2" />
              </Icon>
            </WhyCard>
            <WhyCard
              tint="#EEEBFD"
              title="Move without a gym"
              text="Walks count. Stairs count. The Move daily goal is about showing up, not training."
            >
              <Icon color="#4B3FC4">
                <circle cx="13.5" cy="4.5" r="1.8" />
                <path d="M8 21l3-6 3 2v4M7 12l3-4 4 1 2 4 3 1M11 15l-1-4" />
              </Icon>
            </WhyCard>
            <WhyCard
              tint="#E6F6EE"
              title="Never start over"
              text="Over budget today. Fresh start tomorrow. Your progress stays, so there is no Monday restart."
            >
              <Icon color="#097A4D">
                <path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v4h4" />
              </Icon>
            </WhyCard>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={`${section} flex flex-wrap items-start gap-12`}>
          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3">
            <h2 className={h2}>Frequently asked questions</h2>
          </div>
          <div className="flex min-w-0 flex-[1_1_600px] flex-col gap-2">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="rounded-[14px] bg-white px-5 shadow-[0_2px_8px_rgba(33,33,33,0.10)]"
              >
                <summary className="cursor-pointer py-[18px] font-semibold">{f.q}</summary>
                <p className="m-0 pb-5 leading-6 text-[#6B6880]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="download" className="mx-auto box-border w-full max-w-[1200px] px-6 pt-16 pb-24">
          <div className="box-border flex flex-wrap items-center gap-12 rounded-[32px] bg-[#F5F5F3] py-16 text-[#3B3551]">
            <div className="flex min-w-0 flex-[1_1_420px] flex-col items-start gap-5">
              <span className="font-medium">Wish it was just... easier?</span>
              <h2 className="m-0 text-[clamp(32px,5vw,48px)] leading-[1.1] font-bold tracking-[-0.8px] text-balance">
                Try Kudoo free for 30 days.
              </h2>
              <p className="m-0 max-w-[480px] text-lg leading-7">
                Everyone gets 30 days free. And if Kudoo doesn&apos;t help you, you get your money back. We only want
                you here if it works.
              </p>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {["30 days free, for everyone", "Money back if you're not happy", "Cancel any time in your iPhone settings"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-base leading-[22px] font-medium">
                    <span className="flex size-6 flex-none items-center justify-center rounded-full bg-[#E6F6EE]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#097A4D" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={APP_STORE_URL}
                className="inline-flex min-h-14 items-center rounded-lg bg-[#0B8655] px-7 text-xl leading-[26px] font-bold tracking-[0.1px] text-white transition-colors hover:bg-[#097A4D] hover:text-white"
              >
                Start my 30 free days
              </a>
              <span className="text-sm leading-5">For iPhone. Download on the App Store.</span>
            </div>
            <div className="mx-auto min-w-[220px] flex-[0_1_380px]">
              <Image
                src={mascotPhone}
                alt="The Kudoo mascot cheering with a phone in hand"
                sizes="(min-width: 1024px) 380px, 90vw"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#EDECF5]">
        <div className="mx-auto box-border flex max-w-[1200px] flex-col gap-10 px-6 pt-12 pb-8">
          <div className="flex flex-wrap gap-x-16 gap-y-10">
            <div className="flex flex-[1_1_260px] flex-col gap-2">
              <span className="text-[28px] leading-[34px] font-light">Kudoo</span>
              <span className="text-sm leading-5 text-[#6B6880]">Weight loss without counting calories.</span>
            </div>
            <FooterColumn
              title="Product"
              links={[
                { label: "How it works", href: "#how" },
                { label: "FAQ", href: "#faq" },
              ]}
            />
            <FooterColumn
              title="Help"
              links={[
                { label: "Manage subscription", href: "#" },
                { label: "Contact", href: "#" },
              ]}
            />
            <FooterColumn
              title="Legal"
              links={[
                { label: "Privacy policy", href: "#" },
                { label: "Terms of use", href: "#" },
              ]}
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#EDECF5] pt-6">
            <span className="text-sm leading-5 text-[#6B6880]">© 2026 Kudoo</span>
            <div className="flex gap-6">
              <a href="#" className={`py-3 text-sm leading-5 font-semibold ${linkGreen}`}>Instagram</a>
              <a href="#" className={`py-3 text-sm leading-5 font-semibold ${linkGreen}`}>TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
