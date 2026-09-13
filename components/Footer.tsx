import { CopyEmailLink } from "@/components/CopyEmailLink";
import { EmberText } from "@/components/EmberText";
import { MotionLink } from "@/components/motion/MotionLink";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer id="contact" aria-labelledby="contact-h" className="border-t border-line bg-raised">
      <RevealGroup className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-[clamp(32px,4vw,64px)] px-6 pt-[clamp(56px,7vw,104px)] pb-[clamp(36px,4vw,56px)]">
        <RevealItem step={0}>
          <h2
            id="contact-h"
            className="m-0 text-[clamp(34px,5vw,64px)] leading-none font-medium tracking-[-0.032em]"
          >
            <EmberText text={site.footer.title} />
          </h2>
        </RevealItem>
        <RevealItem step={1}>
          <nav
            aria-label="Contact"
            className="grid gap-3 font-mono text-sm tracking-[0.03em]"
          >
            <CopyEmailLink email={site.footer.email} />
            {site.footer.links.map((link) => (
              <MotionLink
                key={link.label}
                href={link.href}
                className="border-b border-november pb-1.5 hover:border-ember"
              >
                {link.label}
              </MotionLink>
            ))}
          </nav>
        </RevealItem>
      </RevealGroup>
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-x-6 gap-y-2.5 px-6 pb-[clamp(40px,5vw,64px)] font-mono text-xs text-meta">
        <p className="m-0">
          <EmberText text={site.footer.legal} />
        </p>
        <p className="m-0">
          <EmberText text={site.footer.copyright} />
        </p>
      </div>
    </footer>
  );
}
