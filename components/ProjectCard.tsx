import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
};

function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "arduino") {
    return (
      <div className="grid h-full grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2" aria-hidden="true">
        <div className="project-visual-node rounded-lg border border-primary-blue/18 bg-white p-2 shadow-sm">
          <div className="mx-auto mb-2 h-6 w-10 rounded bg-primary-blue/25" />
          <div className="h-1.5 rounded-full bg-navy/12" />
        </div>
        <div className="h-px w-5 bg-primary-blue/35" />
        <div className="project-visual-node rounded-lg border border-primary-blue/18 bg-light-blue p-2 shadow-sm">
          <div className="mx-auto mb-1 h-8 w-8 rounded-full border-4 border-status-green/35" />
          <div className="h-1.5 rounded-full bg-primary-blue/35" />
        </div>
        <div className="h-px w-5 bg-primary-blue/35" />
        <div className="project-visual-node rounded-lg border border-status-green/20 bg-white p-2 shadow-sm">
          <div className="mx-auto h-8 w-8 rounded-full bg-status-green/30 shadow-[0_0_18px_rgba(20,125,100,0.24)]" />
          <div className="mt-2 h-1.5 rounded-full bg-status-green/55" />
        </div>
      </div>
    );
  }

  if (type === "legal") {
    return (
      <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-3" aria-hidden="true">
        <div className="project-visual-node h-full rounded-lg border border-navy/10 bg-white p-3 shadow-sm">
          <div className="mb-3 h-2 w-16 rounded-full bg-primary-blue/35" />
          <div className="mb-2 h-2 rounded-full bg-navy/15" />
          <div className="mb-2 h-2 rounded-full bg-navy/10" />
          <div className="h-2 w-2/3 rounded-full bg-status-green/25" />
        </div>
        <div className="h-px w-6 bg-primary-blue/35" />
        <div className="project-visual-node rounded-lg border border-status-green/20 bg-white p-3 shadow-sm">
          <div className="mx-auto mb-2 h-8 w-8 rounded-full border-4 border-primary-blue/35" />
          <div className="mx-auto h-1.5 w-12 rounded-full bg-status-green/45" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-full grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2" aria-hidden="true">
      <div className="project-visual-node rounded-lg border border-primary-blue/18 bg-white p-2 shadow-sm">
        <div className="h-2 rounded-full bg-primary-blue/30" />
        <div className="mt-2 grid grid-cols-3 gap-1">
          <div className="h-6 rounded bg-navy/10" />
          <div className="h-9 rounded bg-primary-blue/25" />
          <div className="h-7 rounded bg-status-green/25" />
        </div>
      </div>
      <div className="h-px w-5 bg-primary-blue/35" />
      <div className="project-visual-node rounded-lg border border-primary-blue/18 bg-light-blue p-2 shadow-sm">
        <div className="mb-1 h-1.5 rounded-full bg-navy/15" />
        <div className="mb-1 h-1.5 rounded-full bg-primary-blue/40" />
        <div className="h-1.5 w-2/3 rounded-full bg-status-green/40" />
      </div>
      <div className="h-px w-5 bg-primary-blue/35" />
      <div className="project-visual-node rounded-lg border border-status-green/20 bg-white p-2 shadow-sm">
        <div className="mx-auto h-8 w-8 rounded-full border-4 border-status-green/35" />
        <div className="mt-2 h-1.5 rounded-full bg-primary-blue/35" />
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
      <div className="technical-grid mb-5 h-32 rounded-xl border border-navy/10 bg-light-bg p-4">
        <ProjectVisual type={project.visual} />
      </div>

      <div className="mb-4">
        <span className="inline-flex rounded-full border border-status-green/25 bg-status-green/10 px-3 py-1 text-xs font-semibold text-status-green">
          {project.status}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-navy">{project.title}</h3>
      <p className="mt-1 text-sm font-medium text-primary-blue">{project.subtitle}</p>
      <p className="mt-4 text-sm leading-6 text-muted-text">{project.description}</p>

      <div className="mt-5">
        <h4 className="text-sm font-semibold text-main-text">Tecnologías</h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-navy/10 bg-light-bg px-3 py-1 text-xs font-medium text-muted-text"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <h4 className="text-sm font-semibold text-main-text">
          Capacidades demostradas
        </h4>
        <ul className="mt-3 grid gap-2 text-sm text-muted-text">
          {project.capabilities.map((capability) => (
            <li key={capability} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-blue" />
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
