import Image from "next/image";
import { contact } from "@/lib/content";
import ParticleField from "@/components/ParticleField";

const chips = [
  "Automatización",
  "Arduino y sensores",
  "Programación",
  "Análisis de datos",
  "Documentación técnica",
] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-navy/10 bg-white"
      aria-labelledby="hero-title"
    >
      <ParticleField />
      <div className="technical-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-18 md:grid-cols-[1.05fr_0.95fr] md:py-22 lg:px-8">
        <div className="order-2 md:order-1">
          <p className="mb-5 inline-flex rounded-full border border-primary-blue/20 bg-light-blue px-3 py-1 text-sm font-medium text-primary-blue">
            Panamá - Portafolio complementario para postulación técnica
          </p>
          <h1
            id="hero-title"
            className="text-5xl font-semibold tracking-normal text-navy sm:text-6xl lg:text-7xl"
          >
            Orlando Jordán Núñez
          </h1>
          <p className="mt-4 text-xl font-semibold text-main-text sm:text-2xl">
            Estudiante de Ingeniería Mecatrónica | Automatización | Software | Proyectos técnicos
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-text sm:text-lg">
            Estudiante de Ingeniería Mecatrónica en la Universidad Latina de
            Panamá, con interés en automatización, electrónica, programación,
            sensores y análisis de datos. Este portafolio reúne proyectos
            técnicos y de software que muestran capacidad de aprendizaje,
            documentación, validación de información y resolución de problemas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="button-press inline-flex justify-center rounded-lg bg-primary-blue px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(30,102,245,0.22)] hover:bg-navy"
            >
              Ver proyectos
            </a>
            <a
              href={contact.pdfHref}
              download
              className="button-press inline-flex justify-center rounded-lg border border-navy/15 bg-white/90 px-5 py-3 text-sm font-semibold text-navy shadow-sm hover:bg-light-bg"
            >
              Descargar CV
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Portfolio focus areas">
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-navy/10 bg-light-bg px-3 py-1.5 text-sm text-muted-text"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 md:order-2">
          <div className="portrait-frame mx-auto max-w-sm rounded-[28px] border border-navy/10 bg-white/78 p-3 shadow-[0_28px_70px_rgba(11,31,58,0.16)] backdrop-blur sm:max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white">
              <Image
                src="/orlando-jordan.jpg"
                alt="Professional portrait of Orlando Jordan"
                fill
                priority
                sizes="(min-width: 768px) 420px, 88vw"
                className="object-cover object-center"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2" aria-hidden="true">
              <div className="h-1.5 rounded-full bg-primary-blue/70" />
              <div className="h-1.5 rounded-full bg-status-green/70" />
              <div className="h-1.5 rounded-full bg-navy/25" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
