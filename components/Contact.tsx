import { CopyEmailLink } from "@/components/CopyEmailLink";
import { EmberText } from "@/components/EmberText";
import { MotionLink } from "@/components/motion/MotionLink";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export function Contact() {
  const { footer } = site;

  return (
    <section
      id="contact"
      aria-labelledby="contact-h"
      className="mx-auto max-w-[1120px] px-6 pt-8 pb-[clamp(64px,8vw,96px)]"
    >
      <RevealGroup className="flex flex-col items-start gap-6 rounded-[20px] bg-ember-deep p-8 text-snow shadow-inset sm:px-14 sm:py-[72px]">
        <RevealItem step={0} variant="label">
          <p className="m-0 font-mono text-xs leading-4 font-medium tracking-[0.6px]">
            <EmberText text={footer.label} />
          </p>
        </RevealItem>
        <RevealItem step={1}>
          <h2
            id="contact-h"
            className="m-0 font-display text-[clamp(40px,7vw,56px)] leading-[1.04] font-normal tracking-[-0.02em]"
          >
            <EmberText text={footer.title} />
          </h2>
        </RevealItem>
        <RevealItem step={2}>
          <p className="m-0 max-w-[560px] text-lg leading-7">
            <EmberText text={footer.text} />
          </p>
        </RevealItem>
        <RevealItem step={3} className="mt-4 flex flex-wrap gap-3">
          <CopyEmailLink email={footer.email} />
          {footer.links.map((link) => (
            <MotionLink key={link.label} href={link.href} className="btn btn-deep">
              {link.label}
            </MotionLink>
          ))}
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
