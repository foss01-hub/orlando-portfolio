import { contact } from "@/lib/content";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 bg-navy px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 id="contact-title" className="text-3xl font-semibold tracking-normal sm:text-4xl">
          Disponible para oportunidades de aprendizaje técnico
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/78">
          Me interesa aportar y aprender en entornos relacionados con
          automatización, electrónica, mantenimiento, datos, software o mejora
          de procesos.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={contact.emailHref}
            className="button-press inline-flex justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy shadow-sm hover:bg-light-blue"
          >
            Enviar correo
          </a>
          <a
            href={contact.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="button-press inline-flex justify-center rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Ver LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
