"use client";

import { useState } from "react";
import { education } from "../lib/data";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "./ui/section-heading";

export default function Education() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-14 border-t border-solid border-[hsl(var(--border))]">
      <SectionHeading eyebrow="Where I studied" title="Education" />
      <div className="mt-8">
        <div className="flex items-start gap-3">
          <div className="mt-2 size-2 shrink-0 rounded-full bg-[hsl(var(--accent))]" />
          <div className="flex-1">
            <h3 className="font-heading text-lg font-bold text-[hsl(var(--foreground))]">
              {education.degree}
            </h3>
            <p className="mt-0.5 text-sm text-[hsl(var(--muted-foreground))]">
              {education.school} · {education.duration}
            </p>
          </div>
        </div>
        <div className="ml-[13px] border-l border-solid border-[hsl(var(--border))] pl-6 mt-2">
          <p className="text-sm leading-7 text-[hsl(var(--muted-foreground))]">
            {expanded
              ? education.description
              : education.description.slice(0, 150) + "..."}
          </p>
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
        </div>
      </div>
    </section>
  );
}
