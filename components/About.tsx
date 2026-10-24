import Image from "next/image";
import { EmberText } from "@/components/EmberText";
import { SectionLabel } from "@/components/SectionLabel";
import { MotionLink } from "@/components/motion/MotionLink";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export function About() {
  const { about, footer } = site;
  const portrait = about.portrait;

  return (
    <section id="about" aria-labelledby="about-h" className="mx-auto max-w-[1120px] px-6 py-[clamp(64px,8vw,96px)]">
      <RevealGroup className="flex flex-wrap items-center gap-[clamp(32px,6vw,64px)]">
        {portrait?.src ? (
          <RevealItem
            step={0}
            variant="portrait"
            className="min-w-0 max-w-[440px] flex-[1_1_320px]"
          >
            <figure className="relative m-0 aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-field">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 440px"
                className="about-portrait object-cover object-[22%_36%]"
              />
            </figure>
          </RevealItem>
        ) : null}

        <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-5">
          <RevealItem step={1} variant="label">
            <SectionLabel number={about.number} label={about.label} />
          </RevealItem>
          <RevealItem step={2}>
            <h2
              id="about-h"
              className="m-0 font-display text-[clamp(32px,5vw,40px)] leading-[1.1] font-normal tracking-[-0.02em]"
            >
              <EmberText text={about.title} />
            </h2>
          </RevealItem>
          <RevealItem step={3} className="flex flex-col gap-5">
            <p className="m-0 max-w-[640px] text-lg leading-7 text-snow">
              <EmberText text={about.intro} />
            </p>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="m-0 max-w-[640px] text-base leading-6 text-muted">
                <EmberText text={paragraph} />
              </p>
            ))}
            {footer.links.map((link) => (
              <MotionLink
                key={link.label}
                href={link.href}
                className="inline-flex min-h-11 items-center gap-1.5 self-start text-base leading-5 font-semibold"
              >
                {link.label}
              </MotionLink>
            ))}
          </RevealItem>
        </div>
      </RevealGroup>
    </section>
  );
}
