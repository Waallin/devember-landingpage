import { EmberText } from "@/components/EmberText";
import { HeroHeadline } from "@/components/HeroHeadline";
import { MotionLink } from "@/components/motion/MotionLink";
import { site } from "@/lib/content";

export function Hero() {
  const hero = site.hero;

  return (
    <section
      aria-labelledby="hero-h"
      className="animate-rise-in mx-auto max-w-[1120px] px-6 pt-[clamp(72px,10vw,128px)] pb-[clamp(64px,8vw,96px)]"
    >
      <p className="m-0 font-mono text-xs leading-4 font-medium tracking-[0.6px] text-meta uppercase">
        <EmberText text={hero.eyebrow} />
      </p>
      <h1
        id="hero-h"
        className="mt-6 mb-0 max-w-[900px] font-display text-[clamp(44px,11vw,56px)] leading-none font-normal tracking-[-0.025em] text-snow md:text-[80px]"
      >
        <HeroHeadline />
      </h1>
      <p className="mt-6 mb-0 max-w-[640px] text-lg leading-7 text-pretty text-muted">
        <EmberText text={hero.description} />
      </p>
      <div className="mt-12 flex flex-wrap gap-3">
        <MotionLink href={hero.primaryCta.href} className="btn btn-primary">
          {hero.primaryCta.label}
        </MotionLink>
        <MotionLink href={hero.secondaryCta.href} className="btn btn-secondary">
          {hero.secondaryCta.label}
        </MotionLink>
      </div>
    </section>
  );
}
