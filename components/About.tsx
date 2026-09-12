import { site } from "@/lib/content";

export function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="border-t border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-[clamp(56px,7vw,104px)]">
        <div className="flex items-baseline gap-3.5 font-mono text-xs font-medium tracking-[0.12em] text-meta uppercase">
          <span>{site.about.number}</span>
          <p className="m-0">{site.about.label}</p>
        </div>
        <div className="mt-[clamp(28px,3vw,44px)] flex flex-wrap gap-[clamp(28px,4vw,64px)]">
          <h2
            id="about-h"
            className="m-0 min-w-0 flex-[1_1_320px] text-[clamp(30px,4.2vw,52px)] leading-[1.04] font-medium tracking-[-0.03em] whitespace-pre-line"
          >
            {site.about.title}
          </h2>
          <p className="m-0 min-w-0 max-w-[48ch] flex-[1_1_340px] text-[17px] leading-[1.65] text-pretty text-muted-soft">
            {site.about.description}
          </p>
        </div>
      </div>
    </section>
  );
}
