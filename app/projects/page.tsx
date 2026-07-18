import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllProjects } from "../lib/mdx";
import SectionHeading from "../components/ui/section-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Samir Khanal",
  description:
    "Projects, prototypes, and ideas — everything I've built, tested, and shipped.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen py-14">
      <SectionHeading eyebrow="Selected work" title="Projects" />
      <p className="mt-4 max-w-xl text-sm leading-7 text-[hsl(var(--muted-foreground))]">
        Projects, prototypes, and ideas — everything I&apos;ve built, tested,
        and shipped.
      </p>

      <div className="mt-8 flex flex-col">
        {projects.length === 0 && (
          <p className="py-8 text-[hsl(var(--muted-foreground))]">
            No projects yet. Check back soon!
          </p>
        )}

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
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-5 h-56 w-full rounded-xl border border-solid border-[hsl(var(--border))] object-cover"
                />
              )}
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
    </div>
  );
}
