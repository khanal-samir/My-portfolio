import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export function InteractiveHoverButton({
  children,
  href,
  className,
}: InteractiveHoverButtonProps) {
  const classes = cn(
    "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-solid border-[hsl(var(--border))] bg-[hsl(var(--background))] px-6 py-3 text-center text-sm font-semibold text-[hsl(var(--foreground))] transition-colors duration-300 hover:border-[hsl(var(--accent))]",
    className,
  );

  const inner = (
    <>
      <span className="flex items-center gap-2">
        <span className="size-2 rounded-full bg-[hsl(var(--accent))] transition-transform duration-300 ease-out group-hover:scale-[200]" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </span>
      <span className="absolute inset-0 z-10 flex translate-x-12 items-center justify-center gap-2 text-[hsl(var(--accent-foreground))] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        {children}
        <ArrowRight className="size-4" />
      </span>
    </>
  );

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes}>
          {inner}
        </Link>
      );
    }
    const isMailto = href.startsWith("mailto:");
    return (
      <a
        href={href}
        className={classes}
        {...(!isMailto && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {inner}
    </button>
  );
}
