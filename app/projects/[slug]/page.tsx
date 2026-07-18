import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { getProjectBySlug, getAllProjects } from "../../lib/mdx";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} | Samir Khanal`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <article className="min-h-screen py-14 max-w-2xl">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--accent))] transition-colors duration-150"
      >
        ← Back to projects
      </Link>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <h1 className="font-heading text-3xl font-black uppercase tracking-tight text-[hsl(var(--foreground))] md:text-4xl">
            {project.title}
          </h1>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex shrink-0 items-center gap-2 rounded-full border border-solid border-[hsl(var(--border))] px-4 py-2 text-sm font-medium text-[hsl(var(--foreground))] transition-colors duration-150 hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]"
            >
              <FaGithub className="size-4" />
              GitHub
            </a>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-solid border-[hsl(var(--border))] bg-[hsl(var(--muted))]/40 px-2.5 py-0.5 text-xs text-[hsl(var(--muted-foreground))]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="mt-8 w-full rounded-2xl border border-solid border-[hsl(var(--border))] object-cover"
        />
      )}

      <div className="flex flex-col gap-10 mt-8">
        <section className="flex flex-col gap-2">
          <p className="text-base leading-8 text-[hsl(var(--muted-foreground))]">
            {project.description}
          </p>
        </section>

        {project.sections.map((section, i) => (
          <section key={i} className="flex flex-col gap-3">
            <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-[hsl(var(--foreground))]">
              <span className="inline-block h-px w-5 bg-[hsl(var(--accent))]" />
              {section.title}
            </h2>
            <p className="text-sm leading-7 text-[hsl(var(--muted-foreground))]">
              {section.content}
            </p>
            {section.image && (
              <div className="w-full rounded-2xl overflow-hidden border border-solid border-[hsl(var(--border))]">
                <img
                  src={section.image}
                  alt={`${project.title} - ${section.title}`}
                  className="w-full"
                />
              </div>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
