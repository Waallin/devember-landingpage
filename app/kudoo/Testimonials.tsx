import Image, { type StaticImageData } from "next/image";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

type Tone = "feature" | "white";

type Testimonial = {
  name: string;
  quote: string;
  before: string;
  now: string;
  tone: Tone;
  span: string;
  /** Swap in a real portrait (e.g. assets/kudoo/people/elise.jpg) when the real beta quotes arrive. */
  photo?: StaticImageData;
  avatar: { bg: string; fg: string };
};

// PLACEHOLDER COPY: fictional example quotes for the mockup. Replace every entry with a real,
// consented beta-tester quote (and a real portrait via `photo`) before publishing.
const testimonials: Testimonial[] = [
  {
    name: "Elise",
    quote:
      "I used to dread logging lunch. Now I take one photo at my desk and it’s done before my coffee gets cold.",
    before: "Dreading every log",
    now: "One photo, done",
    tone: "feature",
    span: "md:col-span-4",
    avatar: { bg: "#CFF5E5", fg: "#097A4D" },
  },
  {
    name: "Noah",
    quote: "I went over on Saturday and waited for the guilt. It never showed up. Sunday just started fresh.",
    before: "Waiting for the guilt",
    now: "Fresh start",
    tone: "white",
    span: "md:col-span-2",
    avatar: { bg: "#EEEBFD", fg: "#4B3FC4" },
  },
  {
    name: "Olivia",
    quote: "Funny thing is, I stopped doing maths. One number and I know how my day is going.",
    before: "Spreadsheet brain",
    now: "One number",
    tone: "white",
    span: "md:col-span-2",
    avatar: { bg: "#FFF6CC", fg: "#8F5400" },
  },
  {
    name: "William",
    quote: "My steps count by themselves. I caught myself taking the long way home just to close the ring.",
    before: "Skipping the walk",
    now: "Taking the long way",
    tone: "white",
    span: "md:col-span-2",
    avatar: { bg: "#EEEBFD", fg: "#4B3FC4" },
  },
  {
    name: "Emma",
    quote: "Weighing in once a week sounds small. It’s the first time a number hasn’t ruined my day.",
    before: "Daily scale dread",
    now: "Once a week, calm",
    tone: "white",
    span: "md:col-span-2",
    avatar: { bg: "#E6F6EE", fg: "#097A4D" },
  },
  {
    name: "Leo",
    quote:
      "Burger and fries, a few points, and I still had my evening. First app that didn’t make me feel bad about a Tuesday.",
    before: "Food guilt",
    now: "Just the next meal",
    tone: "white",
    span: "md:col-span-6",
    avatar: { bg: "#FFF6CC", fg: "#8F5400" },
  },
];

const toneClass: Record<Tone, { card: string; quote: string; meta: string; chip: string; arrow: string }> = {
  feature: {
    card: "bg-[#0B8655] text-white",
    quote: "text-white",
    meta: "text-white/85",
    chip: "bg-white/15 text-white",
    arrow: "text-white",
  },
  white: {
    card: "bg-white text-[#3B3551]",
    quote: "text-[#3B3551]",
    meta: "text-[#6B6880]",
    chip: "bg-[#F0F4F6] text-[#3B3551]",
    arrow: "text-[#097A4D]",
  },
};

function Avatar({ t, size }: { t: Testimonial; size: number }) {
  const common =
    "relative flex flex-none items-center justify-center overflow-hidden rounded-full ring-2 ring-white/70 transition-transform duration-300 ease-out group-hover:scale-105";
  if (t.photo) {
    return (
      <div className={common} style={{ width: size, height: size }}>
        <Image src={t.photo} alt={`Portrait of ${t.name}`} fill sizes={`${size}px`} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      className={`${common} font-semibold`}
      style={{ width: size, height: size, background: t.avatar.bg, color: t.avatar.fg, fontSize: size * 0.4 }}
      aria-hidden="true"
    >
      {t.name[0]}
    </div>
  );
}

function Shift({ t }: { t: Testimonial }) {
  const c = toneClass[t.tone];
  return (
    <div className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full px-3.5 py-2 text-xs leading-4 font-semibold ${c.chip}`}>
      <span className="opacity-70 line-through decoration-1">{t.before}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={`transition-transform duration-300 ease-out group-hover:translate-x-1 ${c.arrow}`}
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
      <span>{t.now}</span>
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  const c = toneClass[t.tone];
  const featured = t.tone === "feature";
  const wide = t.span === "md:col-span-6";
  return (
    <figure
      className={`group relative m-0 box-border flex h-full flex-col gap-6 overflow-hidden rounded-[28px] p-7 shadow-[0_2px_8px_rgba(33,33,33,0.10)] transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(46,42,79,0.16)] ${c.card} ${
        featured ? "md:p-10" : ""
      } ${wide ? "md:flex-row md:items-center md:justify-between md:gap-12 md:px-10 md:py-9" : ""}`}
    >
      {featured && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 right-6 select-none text-[220px] leading-none font-bold text-white/10"
        >
          “
        </span>
      )}
      <blockquote
        className={`relative m-0 font-medium tracking-[-0.3px] text-pretty ${c.quote} ${
          featured
            ? "text-[26px] leading-[34px] md:text-[34px] md:leading-[44px]"
            : wide
              ? "max-w-[620px] text-[22px] leading-[30px] md:text-[26px] md:leading-[34px]"
              : "text-[19px] leading-[28px]"
        }`}
      >
        “{t.quote}”
      </blockquote>
      <figcaption className={`relative mt-auto flex flex-col gap-4 ${wide ? "md:mt-0 md:flex-none md:items-end" : ""}`}>
        <Shift t={t} />
        <div className="flex items-center gap-3">
          <Avatar t={t} size={featured ? 52 : 44} />
          <div className="flex flex-col">
            <span className="text-base leading-5 font-semibold">{t.name}</span>
            <span className={`text-xs leading-4 ${c.meta}`}>Kudoo Beta User</span>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="stories" className="mx-auto box-border w-full max-w-[1200px] px-6 py-16">
      <div className="flex flex-col gap-10">
        <div className="flex max-w-[720px] flex-col gap-3">
          <span className="text-xs leading-4 font-semibold tracking-[0.2px] text-[#097A4D]">Early Kudoo stories</span>
          <h2 className="m-0 text-[clamp(32px,4.6vw,44px)] leading-[1.1] font-bold tracking-[-0.8px] text-balance">
            Everyone keeps asking what changed.
          </h2>
          <p className="m-0 text-lg leading-7 text-[#6B6880]">
            Small moments from people trying Kudoo before launch. Lunch, a Saturday, a walk home.
          </p>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-4 md:grid-cols-6" stagger={90}>
          {testimonials.map((t, i) => (
            <RevealItem key={t.name} step={i} className={t.span}>
              <Card t={t} />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <p className="m-0 max-w-[560px] text-sm leading-5 text-[#6B6880]">
            Fictional example quotes and placeholder portraits for this mockup. They will be replaced with real beta
            testers, with their permission, before launch.
          </p>
          <a
            href="#download"
            className="inline-flex min-h-14 items-center rounded-lg bg-[#0B8655] px-6 text-xl leading-[26px] font-bold tracking-[0.1px] text-white transition-colors hover:bg-[#097A4D] hover:text-white"
          >
            Start my own story
          </a>
        </div>
      </div>
    </section>
  );
}
