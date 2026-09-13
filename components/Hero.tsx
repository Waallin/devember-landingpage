import { EmberText } from "@/components/EmberText";
import { HeroHeadline } from "@/components/HeroHeadline";
import { MotionLink } from "@/components/motion/MotionLink";
import { site } from "@/lib/content";

export function Hero() {
  const hero = site.hero;

  return (
    <section
      aria-labelledby="hero-h"
      className="mx-auto flex min-h-[calc(100svh-4.75rem)] max-w-[1120px] flex-col px-6 max-md:min-h-0"
    >
      <div className="animate-rise-in flex flex-1 flex-col items-center justify-center py-[clamp(48px,8vw,96px)] text-center max-md:py-14">
        <p className="m-0 font-mono text-[11px] font-medium tracking-[0.2em] text-ember uppercase">
          <EmberText text={hero.eyebrow} />
        </p>
        <h1
          id="hero-h"
          className="mt-[clamp(18px,2.4vw,28px)] mb-0 text-[clamp(3.5rem,8vw,8rem)] leading-[1.02] font-medium tracking-[-0.04em]"
        >
          <HeroHeadline />
        </h1>
        <p className="mt-[clamp(22px,3vw,32px)] mb-0 max-w-[36ch] whitespace-pre-line text-[clamp(16px,1.5vw,18px)] leading-[1.55] text-pretty text-muted">
          <EmberText text={hero.description} />
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <MotionLink
            href={hero.primaryCta.href}
            className="hero-cta-primary inline-flex min-h-11 items-center rounded-full px-5 text-sm tracking-[-0.01em]"
          >
            {hero.primaryCta.label}
          </MotionLink>
          <MotionLink
            href={hero.secondaryCta.href}
            className="hero-cta-secondary inline-flex min-h-11 items-center rounded-full px-5 text-sm tracking-[-0.01em]"
          >
            {hero.secondaryCta.label}
          </MotionLink>
        </div>
      </div>
      <a
        href="#projects"
        className="hero-scroll mx-auto mb-6 flex flex-col items-center gap-1.5 font-mono text-[10px] tracking-[0.22em] uppercase max-md:mb-8"
      >
        <span>
          <EmberText text={hero.scrollLabel} />
        </span>
        <span aria-hidden="true">|</span>
      </a>
    </section>
  );
}
