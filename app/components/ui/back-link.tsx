import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <div className="px-4 pt-5">
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 font-mono text-xs text-[hsl(var(--muted-foreground))] transition-colors duration-150 hover:text-[hsl(var(--foreground))]"
      >
        <ArrowLeft className="size-3.5" />
        {label}
      </Link>
    </div>
  );
}
