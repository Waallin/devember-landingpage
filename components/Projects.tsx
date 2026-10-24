import { EmberText } from "@/components/EmberText";
import { ProjectCard, FeaturedProject } from "@/components/Project";
import { SectionLabel } from "@/components/SectionLabel";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/lib/content";
import type { Project as ProjectData } from "@/lib/types";

export function Projects({ projects }: { projects: ProjectData[] }) {
  const { projects: copy } = site;
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-h"
      className="mx-auto flex max-w-[1120px] flex-col gap-12 px-6 py-[clamp(64px,8vw,96px)]"
    >
      <RevealGroup>
        <RevealItem step={0} variant="label">
          <SectionLabel number={copy.number} label={copy.label} />
        </RevealItem>
        <RevealItem step={1}>
          <h2
            id="projects-h"
            className="mt-3 mb-0 font-display text-[clamp(32px,5vw,40px)] leading-[1.1] font-normal tracking-[-0.02em] text-balance"
          >
            <EmberText text={copy.title} />
          </h2>
        </RevealItem>
        <RevealItem step={2}>
          <p className="mt-4 mb-0 max-w-[640px] text-lg leading-7 text-muted">
            <EmberText text={copy.intro} />
          </p>
        </RevealItem>
      </RevealGroup>

      {featured ? <FeaturedProject project={featured} /> : null}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6">
        {others.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
