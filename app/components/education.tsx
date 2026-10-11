"use client";

import { useState } from "react";
import { ChevronsDownUp, ChevronsUpDown, GraduationCap } from "lucide-react";
import { education } from "../lib/data";
import SectionHeading from "./ui/section-heading";

export default function Education() {
  const [expanded, setExpanded] = useState(false);
  const Chevron = expanded ? ChevronsDownUp : ChevronsUpDown;

  return (
    <section className="line-b">
      <SectionHeading eyebrow="where I studied" title="Education" />
      <div className="px-4 py-4">
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="group flex w-full cursor-pointer items-start gap-3 text-left"
        >
          <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-solid border-[hsl(var(--border))] bg-[hsl(var(--muted))]/60 text-[hsl(var(--muted-foreground))]">
            <GraduationCap className="size-3.5" />
          </span>
          <span className="flex-1">
            <span className="block font-medium text-[hsl(var(--foreground))]">
              {education.school}
            </span>
            <span className="mt-0.5 block font-mono text-xs text-[hsl(var(--muted-foreground))]">
              {education.duration} <span className="opacity-40">|</span> {education.degree}
            </span>
          </span>
          <Chevron className="mt-0.5 size-4 shrink-0 text-[hsl(var(--muted-foreground))] transition-colors group-hover:text-[hsl(var(--foreground))]" />
        </button>
        <div
          className={`grid pl-9 transition-all duration-300 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <p className="overflow-hidden text-sm leading-6 text-[hsl(var(--muted-foreground))]">
            <span className="mt-3 block">{education.description}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
