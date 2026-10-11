import HandNote from "./hand-note";

export default function SectionHeading({
  eyebrow,
  title,
  count,
}: {
  eyebrow: string;
  title: string;
  count?: number;
}) {
  return (
    <div className="relative px-4 pb-1 pt-5">
      <HandNote>{eyebrow}</HandNote>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-[hsl(var(--foreground))]">
        {title}
        {count !== undefined && (
          <sup className="ml-1 font-mono text-sm font-normal text-[hsl(var(--muted-foreground))]">
            ({count})
          </sup>
        )}
      </h2>
    </div>
  );
}
