import Image from "next/image";
import { EmberText } from "@/components/EmberText";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export function About() {
  const { about } = site;
  const portrait = about.portrait;
  const [introLead] = about.intro.split(" — ");

  return (
    <section id="about" aria-labelledby="about-h" className="border-t border-line">
      <RevealGroup className="mx-auto max-w-[1120px] px-6 py-[clamp(104px,16vw,200px)]">
        <RevealItem step={0} variant="label">
          <div className="flex items-baseline gap-3.5 font-mono text-xs font-medium tracking-[0.12em] text-meta uppercase">
            <span>
              <EmberText text={about.number} />
            </span>
            <p className="m-0">
              <EmberText text={about.label} />
            </p>
          </div>
        </RevealItem>

        <div className="mt-[clamp(56px,8vw,104px)] grid grid-cols-1 items-start lg:grid-cols-[minmax(0,1.7fr)_minmax(260px,36%)] lg:gap-x-[clamp(40px,5vw,72px)]">
          <RevealItem step={1}>
            <h2
              id="about-h"
              className="m-0 max-w-[8ch] text-[clamp(42px,6vw,80px)] leading-[1.01] font-medium tracking-[-0.038em] whitespace-pre-line"
            >
              <EmberText text={about.title} />
            </h2>
          </RevealItem>

          {portrait?.src ? (
            <RevealItem
              step={3}
              variant="portrait"
              className="mt-[clamp(40px,7vw,64px)] lg:col-start-2 lg:row-span-2 lg:mt-[clamp(28px,4vw,56px)]"
            >
              <figure className="relative m-0 aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 36vw"
                  className="about-portrait object-cover object-[22%_36%]"
                />
              </figure>
            </RevealItem>
          ) : null}

          <RevealItem
            step={2}
            className="mt-[clamp(36px,5vw,56px)] max-w-[38ch] lg:mt-[clamp(80px,10vw,136px)]"
          >
            <p className="m-0 text-[18px] leading-[1.45] font-medium tracking-[-0.015em] text-snow">
              <EmberText text={introLead} />
            </p>

            <div className="mt-8 grid gap-6">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="m-0 text-[16px] leading-[1.72] text-pretty text-muted-soft"
                >
                  <EmberText text={paragraph} />
                </p>
              ))}
            </div>
          </RevealItem>
        </div>
      </RevealGroup>
    </section>
  );
}
