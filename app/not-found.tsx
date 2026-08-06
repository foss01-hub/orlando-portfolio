export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <section className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-blue">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-navy">
          Página no encontrada
        </h1>
        <p className="mt-4 text-muted-text">
          La página que buscas no está disponible.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-lg bg-primary-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy"
        >
          Volver al inicio
        </a>
      </section>
    </main>
  );
}
