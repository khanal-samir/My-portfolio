import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { getProjectBySlug, getAllProjects } from "../../lib/mdx";
import { notFound } from "next/navigation";
import BackLink from "../../components/ui/back-link";
import PrevNext from "../../components/ui/prev-next";
import Stripe from "../../components/ui/stripe";
import Tag from "../../components/ui/tag";
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

  const all = getAllProjects();
  const i = all.findIndex((p) => p.slug === project.slug);
  const link = (p?: (typeof all)[number]) =>
    p ? { href: `/projects/${p.slug}`, title: p.title } : null;

  return (
    <article className="-mx-4">
      <BackLink href="/projects" label="All projects" />

      <header className="line-b px-4 pb-6 pt-4">
        <p className="font-mono text-xs text-[hsl(var(--muted-foreground))]">
          {String(i + 1).padStart(2, "0")} · {project.type}
        </p>
        <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-[15px] leading-7 text-[hsl(var(--muted-foreground))]">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {project.status && <Tag>{project.status}</Tag>}
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        {(project.github || project.live) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[hsl(var(--foreground))] px-3 py-1.5 text-sm font-medium text-[hsl(var(--background))] transition-opacity duration-150 hover:opacity-85"
              >
                <FaGithub className="size-4" />
                View source
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-solid border-[hsl(var(--border))] px-3 py-1.5 text-sm font-medium text-[hsl(var(--foreground))] transition-colors duration-150 hover:bg-[hsl(var(--muted))]"
              >
                <ArrowUpRight className="size-4" />
                Live demo
              </a>
            )}
          </div>
        )}
      </header>

      {project.image && (
        <div className="line-b p-3">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={630}
            className="w-full rounded-lg border border-solid border-[hsl(var(--border))] object-cover"
          />
        </div>
      )}

      <div className="flex flex-col gap-8 px-4 py-8">
        {project.sections.map((section, n) => (
          <section key={section.title} className="flex flex-col gap-2">
            <h2 className="flex items-baseline gap-3 font-heading text-xl font-semibold text-[hsl(var(--foreground))]">
              <span className="font-mono text-xs font-normal text-[hsl(var(--muted-foreground))]">
                {String(n + 1).padStart(2, "0")}
              </span>
              {section.title}
            </h2>
            <p className="text-[15px] leading-7 text-[hsl(var(--muted-foreground))]">
              {section.content}
            </p>
            {section.image && (
              <Image
                src={section.image}
                alt={`${project.title} - ${section.title}`}
                width={1200}
                height={675}
                className="mt-2 w-full rounded-lg border border-solid border-[hsl(var(--border))]"
              />
            )}
          </section>
        ))}
      </div>

      <PrevNext prev={link(all[i - 1])} next={link(all[i + 1])} />
      <Stripe />
    </article>
  );
}
