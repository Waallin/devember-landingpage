import Image from "next/image";
import { AppIcon } from "@/components/AppIcon";
import { EmberText } from "@/components/EmberText";
import { MotionLink } from "@/components/motion/MotionLink";
import { ParallaxShift } from "@/components/motion/ParallaxShift";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/lib/content";
import type { Project as ProjectData } from "@/lib/types";

const pill =
  "inline-flex items-center rounded-full px-2.5 py-1 text-[13px] leading-4 font-semibold tracking-[0.2px]";

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
      {items.map((item) => (
        <li key={item} className={`${pill} bg-field text-snow`}>
          <EmberText text={item} />
        </li>
      ))}
    </ul>
  );
}

function StoreLinks({ stores, className }: { stores: ProjectData["stores"]; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-x-6 ${className ?? ""}`}>
      {stores.map((store) => (
        <MotionLink
          key={store.label}
          href={store.href}
          className="inline-flex min-h-11 items-center gap-1.5 text-base leading-5 font-semibold"
        >
          {store.label}
        </MotionLink>
      ))}
    </div>
  );
}

function Shot({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  return (
    <div className="app-media-dim relative aspect-[9/19.5] min-w-0 flex-1 overflow-hidden rounded-[10px] bg-field sm:rounded-[14px]">
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
    </div>
  );
}

function MixpanelPanel() {
  const { panel } = site.analytics;

  return (
    <div className="flex flex-wrap items-center gap-6 rounded-2xl bg-page p-6">
      <div className="flex min-w-0 flex-[1_1_260px] flex-col gap-2">
        <span className="font-mono text-xs leading-4 font-medium tracking-[0.6px] text-meta">
          <EmberText text={panel.label} />
        </span>
        <p className="m-0 text-xl leading-[26px] font-semibold">
          <EmberText text={panel.title} />
        </p>
        <p className="m-0 text-sm leading-5 text-muted">
          <EmberText text={panel.text} />
        </p>
      </div>
      <div className="app-media-dim app-media-zoom-in relative aspect-[16/9] min-w-0 flex-[2_1_420px] overflow-hidden rounded-[14px] bg-field md:aspect-[16/6]">
        <ParallaxShift className="absolute inset-x-0 -inset-y-4" range={26}>
          <Image
            src={panel.screenshot.src}
            alt={panel.screenshot.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover object-left-top"
          />
        </ParallaxShift>
      </div>
    </div>
  );
}

export function FeaturedProject({ project }: { project: ProjectData }) {
  const headingId = `${project.id}-h`;

  return (
    <RevealGroup
      as="article"
      aria-labelledby={headingId}
      className="flex flex-col gap-8 rounded-[20px] bg-surface p-6 shadow-card sm:p-10"
    >
      <div className="flex flex-wrap items-center gap-10">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
          <RevealItem step={0} variant="label">
            <div className="flex gap-2">
              <span className={`${pill} bg-moss-soft text-moss`}>Live</span>
              <span className={`${pill} bg-ember-soft text-ember-ink`}>Featured case</span>
            </div>
          </RevealItem>
          <RevealItem step={1}>
            <div className="flex items-center gap-4">
              <AppIcon asset={project.icon} />
              <h3
                id={headingId}
                className="m-0 font-display text-[clamp(32px,5vw,40px)] leading-[1.1] font-normal tracking-[-0.02em]"
              >
                <EmberText text={project.name} />
              </h3>
            </div>
          </RevealItem>
          <RevealItem step={2} className="flex flex-col gap-5">
            <p className="m-0 max-w-[520px] text-base leading-6 text-muted">
              <EmberText text={project.description} />
            </p>
            {project.metric ? (
              <p className="m-0 flex items-baseline gap-3">
                <span className="font-display text-[56px] leading-[58px] tracking-[-0.02em] text-ember-ink">
                  <EmberText text={project.metric.value} />
                </span>
                <span className="text-sm leading-5 text-muted">
                  <EmberText text={project.metric.label} />
                </span>
              </p>
            ) : null}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs leading-4 font-medium tracking-[0.6px] text-meta">Stack</span>
              <Stack items={project.stack} />
            </div>
            <StoreLinks stores={project.stores} />
          </RevealItem>
        </div>
        <RevealItem step={3} className="min-w-0 flex-[1_1_420px]">
          <ParallaxShift>
            <div className="flex gap-3">
              {project.screenshots.map((shot) => (
                <Shot key={shot.src} src={shot.src} alt={shot.alt} sizes="(max-width: 768px) 30vw, 200px" />
              ))}
            </div>
          </ParallaxShift>
        </RevealItem>
      </div>
      <RevealItem step={4}>
        <MixpanelPanel />
      </RevealItem>
    </RevealGroup>
  );
}

export function ProjectCard({ project }: { project: ProjectData }) {
  const headingId = `${project.id}-h`;

  return (
    <RevealGroup
      as="article"
      aria-labelledby={headingId}
      className="flex flex-col gap-5 rounded-2xl bg-surface p-6 shadow-soft sm:p-8"
    >
      <RevealItem step={0}>
        <ParallaxShift>
          <div className="flex aspect-[4/3] gap-2 overflow-hidden rounded-[14px] bg-field p-3 [mask-image:linear-gradient(to_bottom,#000_88%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,#000_88%,transparent)]">
            {project.screenshots.map((shot) => (
              <Shot key={shot.src} src={shot.src} alt={shot.alt} sizes="(max-width: 768px) 30vw, 160px" />
            ))}
          </div>
        </ParallaxShift>
      </RevealItem>
      <RevealItem step={1}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <AppIcon asset={project.icon} />
          <h3
            id={headingId}
            className="m-0 font-display text-[28px] leading-[34px] font-normal tracking-[-0.015em]"
          >
            <EmberText text={project.name} />
          </h3>
          {project.badge ? (
            <span className={`${pill} bg-sand text-on-ember`}>{project.badge}</span>
          ) : null}
        </div>
      </RevealItem>
      <RevealItem step={2} className="flex flex-1 flex-col gap-5">
        <p className="m-0 text-base leading-6 text-muted">
          <EmberText text={project.description} />
        </p>
        <Stack items={project.stack} />
        <StoreLinks stores={project.stores} className="mt-auto" />
      </RevealItem>
    </RevealGroup>
  );
}
