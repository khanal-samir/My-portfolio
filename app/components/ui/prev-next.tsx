import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Item = { href: string; title: string } | null;

export default function PrevNext({ prev, next }: { prev: Item; next: Item }) {
  if (!prev && !next) return null;
  const cell =
    "group flex flex-col gap-1 px-4 py-4 transition-colors duration-150 hover:bg-[hsl(var(--muted))]/40";
  const label =
    "inline-flex items-center gap-1 font-mono text-xs text-[hsl(var(--muted-foreground))]";
  return (
    <nav className="grid grid-cols-2 border-t border-solid border-[hsl(var(--border))]">
      {prev ? (
        <Link
          href={prev.href}
          className={`${cell} border-r border-solid border-[hsl(var(--border))]`}
        >
          <span className={label}>
            <ArrowLeft className="size-3.5" /> Previous
          </span>
          <span className="font-medium text-[hsl(var(--foreground))]">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span className="border-r border-solid border-[hsl(var(--border))]" />
      )}
      {next ? (
        <Link href={next.href} className={`${cell} items-end text-right`}>
          <span className={label}>
            Next <ArrowRight className="size-3.5" />
          </span>
          <span className="font-medium text-[hsl(var(--foreground))]">
            {next.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
