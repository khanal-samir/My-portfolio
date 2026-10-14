import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllProjects } from "../lib/mdx";
import SectionHeading from "./ui/section-heading";
import Tag from "./ui/tag";
import ViewAll from "./ui/view-all";

export default function RecentProjects() {
  const all = getAllProjects();
  const projects = all.slice(0, 3);

  if (projects.length === 0) return null;

  return (
    <section>
      <SectionHeading
        eyebrow="selected work"
        title="Projects"
        count={all.length}
      />
      {projects.map((project, i) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="group flex gap-4 px-4 py-4 transition-colors duration-150 hover:bg-[hsl(var(--muted))]/40"
        >
          <span className="pt-1 font-mono text-xs text-[hsl(var(--muted-foreground))]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-heading text-lg font-semibold text-[hsl(var(--foreground))] transition-colors duration-150 group-hover:text-[hsl(var(--accent))]">
                {project.title}
              </h3>
              <ArrowUpRight className="mt-1 size-4 shrink-0 text-[hsl(var(--muted-foreground))] transition-all duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(var(--accent))]" />
            </div>
            <p className="mt-1 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.status && <Tag>{project.status}</Tag>}
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </Link>
      ))}
      <ViewAll href="/projects" label="All projects" />
    </section>
  );
}
