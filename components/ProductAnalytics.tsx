import { MediaFrame } from "@/components/MediaFrame";
import { site } from "@/lib/content";

export function ProductAnalytics() {
  const { analytics } = site;

  return (
    <section
      aria-labelledby="measure-h"
      className="border-t border-line bg-raised"
    >
      <div className="mx-auto max-w-[1120px] px-6 py-[clamp(56px,7vw,104px)]">
        <div className="flex items-baseline gap-3.5 font-mono text-xs font-medium tracking-[0.12em] text-meta uppercase">
          <span>{analytics.number}</span>
          <p className="m-0">{analytics.label}</p>
        </div>
        <div className="mt-[clamp(28px,3vw,44px)] flex flex-wrap gap-[clamp(32px,4vw,64px)]">
          <div className="min-w-0 flex-[1_1_340px]">
            <h2
              id="measure-h"
              className="m-0 text-[clamp(32px,4.6vw,56px)] leading-[1.02] font-medium tracking-[-0.03em]"
            >
              {analytics.title}
            </h2>
            {analytics.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`${index === 0 ? "mt-6" : "mt-[18px]"} mb-0 max-w-[46ch] text-[17px] leading-[1.65] text-pretty text-muted-soft`}
              >
                {paragraph}
              </p>
            ))}
            <ol className="mt-8 mb-0 flex list-none flex-wrap items-center gap-x-3.5 gap-y-2 p-0 font-mono text-[13px] font-medium tracking-[0.09em] uppercase">
              {analytics.steps.flatMap((step, index) => [
                index > 0 ? (
                  <li key={`${step}-sep`} aria-hidden="true" className="text-frost">
                    →
                  </li>
                ) : null,
                <li key={step}>{step}</li>,
              ])}
            </ol>
          </div>
          <figure className="m-0 min-w-0 flex-[1_1_420px]">
            <MediaFrame asset={analytics.screenshot} variant="dashboard" />
            <figcaption className="mt-3 font-mono text-[11.5px] tracking-[0.02em] text-meta">
              {analytics.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
