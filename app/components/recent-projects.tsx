import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllProjects } from "../lib/mdx";
import SectionHeading from "./ui/section-heading";

export default function RecentProjects() {
  const projects = getAllProjects().slice(0, 3);

  if (projects.length === 0) return null;

  return (
    <section className="border-t border-solid border-[hsl(var(--border))] py-14">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading eyebrow="Selected work" title="Recent Projects" />
        <Link
          href="/projects"
          className="hidden shrink-0 items-center gap-1 text-sm font-medium text-[hsl(var(--muted-foreground))] transition-colors duration-150 hover:text-[hsl(var(--accent))] sm:inline-flex"
        >
          View all
          <ArrowUpRight className="size-4" />
        </Link>
      </div>

      <div className="mt-6 flex flex-col">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group -mx-4 flex gap-5 rounded-2xl border-t border-solid border-[hsl(var(--border))] px-4 py-7 transition-colors duration-200 first:border-t-0 hover:bg-[hsl(var(--muted))]/50"
          >
            <span className="pt-1 font-mono text-sm text-[hsl(var(--muted-foreground))]/50">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-xl font-bold text-[hsl(var(--foreground))] transition-colors duration-200 group-hover:text-[hsl(var(--accent))]">
                  {project.title}
                </h3>
                <ArrowUpRight className="mt-1 size-5 shrink-0 text-[hsl(var(--muted-foreground))] opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(var(--accent))] group-hover:opacity-100" />
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                {project.description}
              </p>
              <p className="mt-3 font-mono text-xs text-[hsl(var(--muted-foreground))]/80">
                {project.tech.join(" · ")}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/projects"
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--muted-foreground))] transition-colors duration-150 hover:text-[hsl(var(--accent))] sm:hidden"
      >
        View all projects
        <ArrowUpRight className="size-4" />
      </Link>
    </section>
  );
}
