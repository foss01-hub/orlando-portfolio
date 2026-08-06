import type { SkillGroup } from "@/lib/content";

type SkillsProps = {
  groups: SkillGroup[];
};

export default function Skills({ groups }: SkillsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <section
          key={group.category}
          aria-labelledby={`skill-${group.category.toLowerCase().replaceAll(" ", "-")}`}
          className="project-card rounded-2xl border border-navy/10 bg-white p-5 shadow-sm"
        >
          <h3
            id={`skill-${group.category.toLowerCase().replaceAll(" ", "-")}`}
            className="text-lg font-semibold text-navy"
          >
            {group.category}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="button-press rounded-full border border-navy/10 bg-light-bg px-3 py-1.5 text-sm text-muted-text hover:border-primary-blue/20 hover:bg-light-blue hover:text-main-text"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
