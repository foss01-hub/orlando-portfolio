import ContactCTA from "@/components/ContactCTA";
import ExperienceItem from "@/components/ExperienceItem";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Skills from "@/components/Skills";
import {
  contact,
  education,
  experience,
  languages,
  projects,
  skillGroups,
} from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Orlando Jordán Núñez",
  email: contact.email,
  sameAs: [contact.linkedIn],
  homeLocation: {
    "@type": "Place",
    name: "Panamá",
  },
  jobTitle:
    "Estudiante de Ingeniería Mecatrónica | Automatización | Software | Proyectos técnicos",
  affiliation: {
    "@type": "EducationalOrganization",
    name: "Universidad Latina de Panamá",
  },
  knowsAbout: [
    "Automatización",
    "Electrónica",
    "Arduino",
    "Sensores",
    "Programación",
    "Análisis de datos",
    "Documentación técnica",
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      <section
        id="about"
        aria-labelledby="about-title"
        className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
      >
        <Reveal className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary-blue">
              Perfil
            </p>
            <h2
              id="about-title"
              className="text-3xl font-semibold tracking-normal text-main-text sm:text-4xl"
            >
              Formación técnica con enfoque en automatización y aprendizaje aplicado
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-text">
              Soy estudiante de Ingeniería Mecatrónica en la Universidad Latina
              de Panamá. Me interesan la automatización, la electrónica aplicada,
              Arduino, sensores, programación y el análisis de datos. En mis
              proyectos busco entender el problema, definir reglas claras,
              probar soluciones, validar resultados y documentar el proceso de
              forma ordenada.
            </p>
          </div>
          <aside className="project-card rounded-2xl border border-primary-blue/15 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-blue">
              Objetivo actual
            </p>
            <p className="mt-4 text-lg font-semibold leading-7 text-navy">
              Fortalecer mi formación técnica y aportar en entornos donde pueda
              aprender sobre automatización, mantenimiento, electrónica,
              programación y procesos industriales.
            </p>
          </aside>
        </Reveal>
      </section>

      <section
        id="projects"
        aria-labelledby="projects-title"
        className="technical-grid scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="Proyectos"
              title="Evidencia de automatización, programación y resolución de problemas"
              description="Estos proyectos muestran práctica técnica, análisis de procesos, documentación, validación de información y desarrollo de soluciones sin presentar prototipos como productos terminados."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 90}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        aria-labelledby="experience-title"
        className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading eyebrow="Experiencia" title="Práctica y proyectos relevantes" />
          </Reveal>
          <div className="mt-10 grid gap-5">
            {experience.map((item, index) => (
              <Reveal key={`${item.organization}-${item.dates}`} delay={index * 90}>
                <ExperienceItem item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        aria-labelledby="skills-title"
        className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="Habilidades"
              title="Capacidades técnicas y de aprendizaje"
            />
          </Reveal>
          <Reveal className="mt-10" delay={90}>
            <Skills groups={skillGroups} />
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="education-title"
        className="px-4 py-16 sm:px-6 lg:px-8"
      >
        <Reveal className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <SectionHeading eyebrow="Educación" title="Formación académica" />
            <div className="project-card mt-8 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-navy">
                {education.institution}
              </h3>
              <p className="mt-1 text-sm font-semibold text-primary-blue">
                {education.program}
              </p>
              <p className="mt-2 text-sm text-muted-text">{education.dates}</p>
              <h4 className="mt-6 text-sm font-semibold text-main-text">
                Cursos relevantes
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <li
                    key={course}
                    className="rounded-full border border-navy/10 bg-light-bg px-3 py-1.5 text-sm text-muted-text"
                  >
                    {course}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-text">
                {education.secondary}
              </p>
            </div>
          </div>

          <aside className="project-card rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-navy">Idiomas</h3>
            <ul className="mt-4 grid gap-3 text-sm text-muted-text">
              {languages.map((language) => (
                <li key={language} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-blue" />
                  <span>{language}</span>
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-6xl flex-col gap-4 rounded-2xl border border-navy/10 bg-light-bg p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-navy">
              Proyectos independientes de IA, software y automatización
            </h2>
            <p className="mt-1 text-sm leading-6 text-muted-text">
              Complementan mi formación técnica al practicar análisis de
              problemas, integración de herramientas, documentación y validación
              de resultados.
            </p>
          </div>
          <a
            href={contact.pdfHref}
            download
            className="button-press inline-flex justify-center rounded-lg border border-navy/15 bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-sm hover:bg-light-blue"
          >
            Descargar CV
          </a>
        </Reveal>
      </section>

      <ContactCTA />
    </main>
  );
}
