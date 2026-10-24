import { EmberText } from "@/components/EmberText";
import { SectionLabel } from "@/components/SectionLabel";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/lib/content";
import type { TechGroup } from "@/lib/types";

export function TechStack({ groups }: { groups: TechGroup[] }) {
  return (
    <section
      id="tools"
      aria-labelledby="tech-h"
      className="mx-auto max-w-[1120px] px-6 py-[clamp(64px,8vw,96px)]"
    >
      <RevealGroup>
        <RevealItem step={0} variant="label">
          <SectionLabel number={site.tech.number} label={site.tech.label} />
        </RevealItem>
        <RevealItem step={1}>
          <h2
            id="tech-h"
            className="mt-3 mb-0 font-display text-[clamp(32px,5vw,40px)] leading-[1.1] font-normal tracking-[-0.02em]"
          >
            <EmberText text={site.tech.title} />
          </h2>
        </RevealItem>
        <RevealItem step={2}>
          <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-4">
            {groups.map((group) => (
              <div
                key={group.title}
                className="flex flex-col gap-4 rounded-2xl bg-surface p-6 shadow-inset"
              >
                <h3 className="m-0 font-mono text-xs leading-4 font-medium tracking-[0.6px] text-meta">
                  <EmberText text={group.title} />
                </h3>
                <ul className="m-0 flex list-none flex-col gap-2 p-0 text-base leading-6">
                  {group.items.map((item) => (
                    <li key={item}>
                      <EmberText text={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
