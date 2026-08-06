import type { Experience } from "@/lib/content";

type ExperienceItemProps = {
  item: Experience;
};

export default function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="project-card rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-navy">{item.organization}</h3>
          <p className="mt-1 text-sm font-semibold text-primary-blue">{item.role}</p>
        </div>
        <p className="text-sm font-medium text-muted-text">{item.dates}</p>
      </div>
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted-text">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-status-green" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
