import Image from "next/image";
import { EmberText } from "@/components/EmberText";
import { ParallaxShift } from "@/components/motion/ParallaxShift";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export function ProductAnalytics() {
  const { analytics } = site;
  const [annotationLead, annotationTail] = analytics.annotation.split(" / ");

  return (
    <section
      aria-labelledby="measure-h"
      className="border-t border-line bg-raised"
    >
      <div className="mx-auto max-w-[1120px] px-6 py-[clamp(64px,8vw,120px)]">
        <RevealGroup>
          <RevealItem step={0} variant="label">
            <div className="flex items-baseline gap-3.5 font-mono text-xs font-medium tracking-[0.12em] text-meta uppercase">
              <span>
                <EmberText text={analytics.number} />
              </span>
              <p className="m-0">
                <EmberText text={analytics.label} />
              </p>
            </div>
          </RevealItem>

          <div className="relative mt-[clamp(48px,6vw,88px)] lg:grid">
            <div className="relative z-10 lg:col-start-1 lg:row-start-1">
              <RevealItem step={1}>
                <h2
                  id="measure-h"
                  className="m-0 max-w-[11ch] text-[clamp(40px,5.8vw,76px)] leading-[1.02] font-medium tracking-[-0.035em] whitespace-pre-line"
                >
                  <EmberText text={analytics.title} />
                </h2>
              </RevealItem>
              <RevealItem step={2}>
                <p className="mt-[clamp(44px,5.5vw,80px)] mb-0 max-w-[34ch] text-[16px] leading-[1.7] text-pretty text-muted-soft">
                  <EmberText text={analytics.paragraph} />
                </p>
                <p className="mt-10 mb-0 max-w-[28ch] text-[18px] leading-[1.45] font-medium tracking-[-0.015em] text-snow">
                  <EmberText text={analytics.statement} />
                </p>
              </RevealItem>
            </div>

            <RevealItem
              step={3}
              className="relative z-0 mt-[72px] max-lg:w-full lg:col-start-1 lg:row-start-1 lg:mt-[clamp(56px,6.2vw,92px)] lg:w-[65%] lg:justify-self-end"
            >
              <figure className="relative m-0 lg:translate-x-6">
                <p className="absolute top-[-1.35rem] right-0 m-0 font-mono text-[10px] tracking-[0.16em] text-meta uppercase">
                  <EmberText text={annotationLead} />{" "}
                  <span className="ember-word text-ember">/</span>{" "}
                  <EmberText text={annotationTail} />
                </p>
                <div className="app-media-dim app-media-zoom-in relative aspect-[1646/871] w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,#000_5%,#000_100%),linear-gradient(180deg,#000_0%,#000_94%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,#000_5%,#000_100%),linear-gradient(180deg,#000_0%,#000_94%,transparent_100%)] [mask-composite:intersect] [-webkit-mask-composite:source-in] lg:[mask-image:linear-gradient(90deg,transparent_0%,#000_12%,#000_100%),linear-gradient(180deg,#000_0%,#000_93%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(90deg,transparent_0%,#000_12%,#000_100%),linear-gradient(180deg,#000_0%,#000_93%,transparent_100%)]">
                  <ParallaxShift className="absolute inset-x-0 -inset-y-4" range={26}>
                    <Image
                      src={analytics.screenshot.src ?? ""}
                      alt={analytics.screenshot.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 70vw"
                      className="object-cover object-left-top"
                    />
                  </ParallaxShift>
                </div>
              </figure>
            </RevealItem>
          </div>
        </RevealGroup>

        <RevealGroup
          as="ol"
          stagger={85}
          className="mt-[clamp(36px,4.5vw,64px)] mb-0 flex list-none flex-wrap items-center gap-x-3.5 gap-y-2 p-0 font-mono text-[12px] font-medium tracking-[0.1em] uppercase"
        >
          {analytics.steps.map((step, index) => (
            <RevealItem
              key={step}
              as="li"
              step={index}
              className={`reveal-item-step flex items-center gap-3.5 ${
                step === "Measure" ? "text-ember" : "text-snow/50"
              }`}
            >
              {index > 0 ? (
                <span aria-hidden="true" className="ember-word text-meta">
                  →
                </span>
              ) : null}
              <EmberText text={step} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
