import { site } from "@/lib/content";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-h"
      className="mx-auto max-w-[1120px] animate-rise-in px-6 pt-[clamp(56px,10vw,120px)] pb-[clamp(40px,6vw,64px)]"
    >
      <h1
        id="hero-h"
        className="m-0 text-[clamp(52px,10.5vw,136px)] leading-[0.9] font-medium tracking-[-0.04em] text-balance"
      >
        {site.hero.title}
      </h1>
      <p className="mt-[clamp(24px,3vw,36px)] mb-0 max-w-[44ch] text-[clamp(18px,1.6vw,22px)] leading-[1.5] font-normal tracking-[-0.005em] text-pretty text-muted">
        {site.hero.description}
      </p>
      <p className="mt-7 mb-0 flex flex-wrap gap-x-[18px] gap-y-2.5 font-mono text-[13px] tracking-[0.02em] text-meta">
        {site.hero.meta.map((item, index) => (
          <span key={item} className="contents">
            {index > 0 ? <span aria-hidden="true">·</span> : null}
            <span>{item}</span>
          </span>
        ))}
      </p>
    </section>
  );
}
