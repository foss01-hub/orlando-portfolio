type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary-blue">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-normal text-main-text sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted-text">{description}</p>
      ) : null}
      <div className="mt-6 h-px w-24 bg-primary-blue/35" aria-hidden="true" />
    </div>
  );
}
