import Image from "next/image";
import { EmberText } from "@/components/EmberText";
import { MediaFrame } from "@/components/MediaFrame";
import { MotionLink } from "@/components/motion/MotionLink";
import { ParallaxShift } from "@/components/motion/ParallaxShift";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import type { MediaAsset, Project as ProjectData } from "@/lib/types";

function ProjectCopy({
  project,
  headingId,
}: {
  project: ProjectData;
  headingId: string;
}) {
  const compact = project.layout === "compact";

  const title = (
    <h3
      id={headingId}
      className={`${compact ? "mt-0" : "mt-[22px]"} text-[clamp(28px,3.4vw,40px)] leading-[1.05] font-[550] tracking-[-0.025em]`}
    >
      <EmberText text={project.name} />
    </h3>
  );

  const description = (
    <p
      className={`mt-3.5 mb-0 text-[17px] leading-[1.655] text-pretty text-muted ${compact ? "max-w-[40ch]" : "max-w-[42ch]"}`}
    >
      <EmberText text={project.description} />
    </p>
  );

  const extras = (
    <>
      {project.metric ? (
        <p className="mt-[18px] mb-0 font-mono text-[12.5px] font-medium tracking-[0.09em] text-ember uppercase">
          <EmberText text={project.metric} />
        </p>
      ) : null}
      {project.stores?.length ? (
        <div className="mt-6 flex flex-wrap gap-2.5">
          {project.stores.map((store) => (
            <MotionLink
              key={store.label}
              href={store.href}
              className="rounded border border-november px-[15px] py-2.5 font-mono text-[12.5px] font-medium tracking-[0.04em] hover:border-ember"
            >
              {store.label}
            </MotionLink>
          ))}
        </div>
      ) : null}
      {project.stack?.length ? (
        <ul className="mt-[26px] mb-0 flex list-none flex-wrap gap-x-2.5 gap-y-2 p-0 font-mono text-xs tracking-[0.07em] text-meta uppercase">
          {project.stack.flatMap((item, index) => [
            index > 0 ? (
              <li key={`${item}-sep`} aria-hidden="true">
                <span className="ember-word">/</span>
              </li>
            ) : null,
            <li key={item}>
              <EmberText text={item} />
            </li>,
          ])}
        </ul>
      ) : null}
    </>
  );

  return (
    <div className="min-w-0 flex-[1_1_330px]">
      {compact ? (
        <>
          {project.eyebrow ? (
            <RevealItem step={0} variant="label">
              <p className="mb-[18px] font-mono text-xs font-medium tracking-[0.12em] text-ember uppercase">
                <EmberText text={project.eyebrow} />
              </p>
            </RevealItem>
          ) : null}
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <MediaFrame asset={project.icon} variant="icon" interactiveDim />
            </div>
            <div className="min-w-0">
              <RevealItem step={1}>{title}</RevealItem>
              <RevealItem step={2}>{description}</RevealItem>
            </div>
          </div>
          <RevealItem step={2}>{extras}</RevealItem>
        </>
      ) : (
        <>
          <RevealItem step={0} variant="label">
            {project.eyebrow ? (
              <p className="mb-[18px] font-mono text-xs font-medium tracking-[0.12em] text-ember uppercase">
                <EmberText text={project.eyebrow} />
              </p>
            ) : (
              <MediaFrame asset={project.icon} variant="icon" interactiveDim />
            )}
          </RevealItem>
          <RevealItem step={1}>{title}</RevealItem>
          <RevealItem step={2}>
            {description}
            {extras}
          </RevealItem>
        </>
      )}
    </div>
  );
}

function ShowcaseShot({
  asset,
  sizes,
}: {
  asset: MediaAsset;
  sizes: string;
}) {
  if (!asset.src) {
    return <MediaFrame asset={asset} variant="phone" />;
  }

  return (
    <div className="app-media-dim relative aspect-[9/19.5] w-[200px] shrink-0">
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        className="object-contain"
      />
    </div>
  );
}

function ScreenshotRow({ project }: { project: ProjectData }) {
  const shotSizes = "(max-width: 768px) 220px, 200px";
  const quiz = project.id === "quiz-game";

  return (
    <RevealItem step={3} className="min-w-0 flex-[1_1_560px]">
      <ParallaxShift>
        <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-md:-mx-6 max-md:px-6">
          <div
            className={`flex w-max gap-3 ${
              quiz
                ? "[mask-image:linear-gradient(to_bottom,#000_90%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,#000_90%,transparent)]"
                : ""
            }`}
          >
            {project.screenshots.map((shot) => (
              <ShowcaseShot key={shot.label} asset={shot} sizes={shotSizes} />
            ))}
          </div>
        </div>
      </ParallaxShift>
    </RevealItem>
  );
}

const articleClass: Record<ProjectData["layout"], string> = {
  textMedia:
    "mx-auto flex max-w-[1120px] flex-wrap gap-[clamp(32px,4vw,56px)] px-6 pt-[clamp(40px,5vw,64px)] pb-[clamp(48px,6vw,72px)]",
  mediaText:
    "mx-auto flex max-w-[1120px] flex-wrap-reverse gap-[clamp(32px,4vw,56px)] border-t border-line px-6 py-[clamp(48px,6vw,72px)]",
  compact:
    "mx-auto flex max-w-[1120px] flex-wrap items-center gap-[clamp(32px,4vw,56px)] border-t border-line px-6 pt-[clamp(48px,6vw,72px)] pb-[clamp(56px,7vw,96px)]",
};

export function Project({ project }: { project: ProjectData }) {
  const headingId = `${project.id}-h`;
  const copy = <ProjectCopy project={project} headingId={headingId} />;
  const media = <ScreenshotRow project={project} />;

  return (
    <RevealGroup as="article" aria-labelledby={headingId} className={articleClass[project.layout]}>
      {project.layout === "mediaText" ? (
        <>
          {media}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {media}
        </>
      )}
    </RevealGroup>
  );
}
