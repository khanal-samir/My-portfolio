"use client";

import { useState } from "react";
import { experiences } from "../lib/data";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "./ui/section-heading";

export default function Experience() {
  return (
    <section className="py-14 border-t border-solid border-[hsl(var(--border))]">
      <SectionHeading eyebrow="Where I've worked" title="Experience" />
      <div className="mt-8 flex flex-col gap-8">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} {...exp} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({
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

  return (
    <div className="group">
      <div className="flex items-start gap-3">
        <div className="mt-2 size-2 shrink-0 rounded-full bg-[hsl(var(--accent))]" />
        <div className="flex-1">
          <h3 className="font-heading text-lg font-bold text-[hsl(var(--foreground))]">
            {role}{" "}
            <span className="text-[hsl(var(--muted-foreground))] font-normal">
              @{" "}
            </span>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(var(--accent))] hover:text-[hsl(var(--foreground))] transition-colors duration-150"
            >
              {company}
            </a>
          </h3>
          <p className="mt-0.5 text-sm text-[hsl(var(--muted-foreground))]">
            {duration} · {type}
          </p>
        </div>
      </div>
      <div className="ml-[13px] border-l border-solid border-[hsl(var(--border))] pl-6 mt-2">
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          {description}
        </p>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? "mt-2 max-h-96" : "max-h-0"
          }`}
        >
          <ul className="mt-2 flex flex-col gap-1.5">
            {bullets.map((bullet, i) => (
              <li
                key={i}
                className="text-sm leading-6 text-[hsl(var(--muted-foreground))]"
              >
                • {bullet}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 flex cursor-pointer items-center gap-1 text-xs font-medium text-[hsl(var(--accent))] hover:underline focus:outline-none"
        >
          {expanded ? (
            <>
              Show less <ChevronUp className="size-3" />
            </>
          ) : (
            <>
              Show more <ChevronDown className="size-3" />
            </>
          )}
        </button>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-solid border-[hsl(var(--border))] bg-[hsl(var(--muted))]/40 px-2.5 py-0.5 text-xs text-[hsl(var(--muted-foreground))]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
