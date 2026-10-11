import { techStack } from "../lib/data";
import SectionHeading from "./ui/section-heading";

export default function TechStack() {
  return (
    <section>
      <SectionHeading
        eyebrow="my toolkit"
        title="Stack"
        count={techStack.length}
      />
      <div className="flex flex-wrap gap-1.5 px-4 py-4">
        {techStack.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-solid border-[hsl(var(--border))] bg-[hsl(var(--muted))]/50 px-2 py-1 font-mono text-xs text-[hsl(var(--foreground))] transition-colors duration-150 hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]"
          >
            <Icon className="size-3.5 shrink-0" />
            {name}
          </a>
        ))}
      </div>
    </section>
  );
}
