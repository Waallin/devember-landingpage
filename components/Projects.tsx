import { EmberText } from "@/components/EmberText";
import { Project } from "@/components/Project";
import { Reveal } from "@/components/motion/Reveal";
import type { Project as ProjectData } from "@/lib/types";

export function Projects({ projects }: { projects: ProjectData[] }) {
  return (
    <section id="projects" aria-labelledby="projects-h" className="border-t border-line">
      <Reveal className="mx-auto max-w-[1120px] px-6 pt-[clamp(48px,6vw,80px)]" variant="label">
        <div className="flex items-baseline gap-3.5 font-mono text-xs font-medium tracking-[0.12em] text-meta uppercase">
          <span>
            <EmberText text="01" />
          </span>
          <h2 id="projects-h" className="m-0 [font:inherit]">
            <EmberText text="Projects" />
          </h2>
        </div>
      </Reveal>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
}
