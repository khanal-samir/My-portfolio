export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))]">
        <span className="inline-block h-px w-6 bg-[hsl(var(--accent))]" />
        {eyebrow}
      </span>
      <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-[hsl(var(--foreground))] md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
