import { site } from "@/lib/content";
import type { TechGroup } from "@/lib/types";

export function TechStack({ groups }: { groups: TechGroup[] }) {
  return (
    <section aria-labelledby="tech-h" className="border-t border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-[clamp(56px,7vw,104px)]">
        <div className="flex items-baseline gap-3.5 font-mono text-xs font-medium tracking-[0.12em] text-meta uppercase">
          <span>{site.tech.number}</span>
          <h2 id="tech-h" className="m-0 [font:inherit]">
            {site.tech.label}
          </h2>
        </div>
        <p className="mt-[22px] mb-0 max-w-[48ch] text-[17px] leading-[1.655] text-muted">
          {site.tech.intro}
        </p>
        <div className="mt-[clamp(32px,4vw,56px)] flex flex-wrap gap-[clamp(24px,3vw,40px)]">
          {groups.map((group) => (
            <div
              key={group.title}
              className="min-w-0 flex-[1_1_190px] border-t border-line pt-4"
            >
              <h3 className="mb-3.5 font-mono text-xs font-medium tracking-[0.1em] text-meta uppercase">
                {group.title}
              </h3>
              <ul className="m-0 grid list-none gap-2 p-0 text-base font-normal">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
