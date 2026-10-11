import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ViewAll({ href, label }: { href: string; label: string }) {
  return (
    <div className="flex justify-center border-t border-solid border-[hsl(var(--border))] py-3">
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 rounded-md bg-[hsl(var(--muted))] px-3 py-1.5 text-sm font-medium text-[hsl(var(--foreground))] transition-colors duration-150 hover:bg-[hsl(var(--border))]"
      >
        {label}
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
