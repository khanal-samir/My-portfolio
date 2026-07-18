import { techStack } from "../lib/data";
import SectionHeading from "./ui/section-heading";

export default function TechStack() {
  return (
    <section className="border-t border-solid border-[hsl(var(--border))] py-14">
      <SectionHeading eyebrow="My toolkit" title="Tech Stack" />
      <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4">
        {techStack.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-solid border-[hsl(var(--border))] bg-[hsl(var(--muted))]/40 px-4 py-2.5 text-sm font-medium text-[hsl(var(--foreground))] transition-all duration-150 hover:-translate-y-0.5 hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] hover:shadow-md hover:shadow-[hsl(var(--accent))]/10"
          >
            <Icon className="size-4 shrink-0" />
            <span className="truncate">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
