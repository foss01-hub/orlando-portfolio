import { contact } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 text-sm text-muted-text sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="font-medium text-main-text">
          Orlando Jordán Núñez - Estudiante de Ingeniería Mecatrónica | Automatización | Software | Proyectos técnicos
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="hover:text-primary-blue" href={contact.emailHref}>
            {contact.email}
          </a>
          <a
            className="hover:text-primary-blue"
            href={contact.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
