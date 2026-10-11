"use client";

import { useState } from "react";
import { ChevronsDownUp, ChevronsUpDown, CodeXml } from "lucide-react";
import { experiences } from "../lib/data";
import SectionHeading from "./ui/section-heading";

export default function Experience() {
  return (
    <section className="line-b">
      <SectionHeading eyebrow="where I've worked" title="Experience" count={experiences.length} />
      {experiences.map((exp) => (
        <ExperienceItem key={exp.company} {...exp} />
      ))}
    </section>
  );
}

function ExperienceItem({
  role,
  company,
  duration,
  type,
  website,
  description,
  bullets,
  tech,
}: (typeof experiences)[number]) {
  const [expanded, setExpanded] = useState(false);
  const Chevron = expanded ? ChevronsDownUp : ChevronsUpDown;

  return (
    <div className="border-b border-solid border-[hsl(var(--border))] px-4 py-4 last:border-b-0">
      <div className="flex items-center gap-3">
        <span className="flex size-6 shrink-0 items-center justify-center rounded bg-[hsl(var(--foreground))] font-heading text-xs font-bold text-[hsl(var(--background))]">
          {company[0]}
        </span>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading text-lg font-semibold text-[hsl(var(--foreground))] underline-offset-4 hover:underline"
        >
          {company}
        </a>
      </div>

      <div className="relative mt-3 pl-9 before:absolute before:bottom-0 before:left-3 before:top-8 before:w-px before:bg-[hsl(var(--border))]">
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="group -ml-9 flex w-[calc(100%+2.25rem)] cursor-pointer items-start gap-3 text-left"
        >
          <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-solid border-[hsl(var(--border))] bg-[hsl(var(--muted))]/60 text-[hsl(var(--muted-foreground))]">
            <CodeXml className="size-3.5" />
          </span>
          <span className="flex-1">
            <span className="block font-medium text-[hsl(var(--foreground))]">{role}</span>
            <span className="mt-0.5 block font-mono text-xs text-[hsl(var(--muted-foreground))]">
              {type} <span className="opacity-40">|</span> {duration}
            </span>
          </span>
          <Chevron className="mt-0.5 size-4 shrink-0 text-[hsl(var(--muted-foreground))] transition-colors group-hover:text-[hsl(var(--foreground))]" />
        </button>

        <p className="mt-3 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{description}</p>
        <div
          className={`grid transition-all duration-300 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <ul className="flex list-disc flex-col gap-1.5 overflow-hidden pl-4 marker:text-[hsl(var(--border))]">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="text-sm leading-6 text-[hsl(var(--muted-foreground))] first:mt-2"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-solid border-[hsl(var(--border))] bg-[hsl(var(--muted))]/50 px-1.5 py-0.5 font-mono text-xs text-[hsl(var(--muted-foreground))]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
