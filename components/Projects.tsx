import { Project } from "@/components/Project";
import type { Project as ProjectData } from "@/lib/types";

export function Projects({ projects }: { projects: ProjectData[] }) {
  return (
    <section id="projects" aria-labelledby="projects-h" className="border-t border-line">
      <div className="mx-auto max-w-[1120px] px-6 pt-[clamp(48px,6vw,80px)]">
        <div className="flex items-baseline gap-3.5 font-mono text-xs font-medium tracking-[0.12em] text-meta uppercase">
          <span>01</span>
          <h2 id="projects-h" className="m-0 [font:inherit]">
            Projects
          </h2>
        </div>
      </div>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
}
