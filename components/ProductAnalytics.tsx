import { EmberText } from "@/components/EmberText";
import { SectionLabel } from "@/components/SectionLabel";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export function ProductAnalytics() {
  const { analytics } = site;
  const lastIndex = analytics.steps.length - 1;

  return (
    <section
      id="process"
      aria-labelledby="measure-h"
      className="mx-auto max-w-[1120px] px-6 py-[clamp(64px,8vw,96px)]"
    >
      <RevealGroup>
        <RevealItem step={0} variant="label">
          <SectionLabel number={analytics.number} label={analytics.label} />
        </RevealItem>
        <RevealItem step={1}>
          <h2
            id="measure-h"
            className="mt-3 mb-0 font-display text-[clamp(32px,5vw,40px)] leading-[1.1] font-normal tracking-[-0.02em]"
          >
            <EmberText text={analytics.title} />
          </h2>
        </RevealItem>
        <RevealItem step={2}>
          <p className="mt-4 mb-0 max-w-[640px] text-lg leading-7 text-muted">
            <EmberText text={analytics.paragraph} />
          </p>
        </RevealItem>
      </RevealGroup>

      <RevealGroup
        as="ol"
        stagger={85}
        className="mt-12 mb-0 flex list-none flex-wrap gap-3 p-0"
      >
        {analytics.steps.map((step, index) => {
          const last = index === lastIndex;

          return (
            <RevealItem
              key={step.label}
              as="li"
              step={index}
              className={`reveal-item-step flex min-w-0 flex-[1_1_180px] flex-col gap-2 rounded-2xl p-6 shadow-inset ${
                last ? "bg-ember-soft" : "bg-surface"
              }`}
            >
              <span
                className={`font-mono text-xs leading-4 font-medium tracking-[0.6px] ${
                  last ? "text-ember-ink" : "text-meta"
                }`}
              >
                {last ? `${String(index + 1).padStart(2, "0")} → 01` : String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xl leading-[26px] font-semibold">
                <EmberText text={step.label} />
              </span>
              <span className="text-sm leading-5 text-muted">
                <EmberText text={step.text} />
              </span>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <RevealGroup>
        <RevealItem step={0}>
          <p className="mt-12 mb-0 font-display text-[28px] leading-[34px] tracking-[-0.015em] text-ember-ink">
            <EmberText text={analytics.statement} />
          </p>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
