import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getAllProjects } from "../lib/mdx";
import SectionHeading from "../components/ui/section-heading";
import Stripe from "../components/ui/stripe";
import Tag from "../components/ui/tag";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Samir Khanal",
  description:
    "Projects, prototypes, and ideas — everything I've built, tested, and shipped.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="-mx-4">
      <SectionHeading
        eyebrow="selected work"
        title="Projects"
        count={projects.length}
      />
      <p className="line-b px-4 pb-5 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
        Projects, prototypes, and ideas — everything I&apos;ve built, tested,
        and shipped.
      </p>

      {projects.length === 0 ? (
        <p className="px-4 py-8 text-sm text-[hsl(var(--muted-foreground))]">
          No projects yet. Check back soon!
        </p>
      ) : (
        <div className="grid gap-2 p-2 md:grid-cols-2">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col rounded-xl p-2 pb-3 transition-colors duration-150 hover:bg-[hsl(var(--muted))]/40"
            >
              <div className="relative flex aspect-[2/1] items-center justify-center overflow-hidden rounded-lg border border-solid border-[hsl(var(--border))]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <>
                    <div aria-hidden className="grid-paper absolute inset-0" />
                    <span className="relative font-heading text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] transition-transform duration-300 group-hover:scale-105">
                      {project.title.split(" — ")[0]}
                    </span>
                  </>
                )}
                <span className="absolute left-2 top-2 font-mono text-xs text-[hsl(var(--muted-foreground))]">
                  {String(i + 1).padStart(2, "0")} · {project.type}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-1 pt-3">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-heading text-lg font-semibold text-[hsl(var(--foreground))] transition-colors duration-150 group-hover:text-[hsl(var(--accent))]">
                    {project.title}
                  </h2>
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-[hsl(var(--muted-foreground))] transition-all duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(var(--accent))]" />
                </div>
                <p className="mt-1 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                  {project.status && <Tag>{project.status}</Tag>}
                  {project.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <Stripe />
    </div>
  );
}
