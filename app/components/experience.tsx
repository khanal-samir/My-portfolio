"use client";

import { motion } from "framer-motion";
import { experiences } from "../lib/data";
import { useSectionInView, useWindowSizeHook } from "../lib/hooks";
import Header from "./ui/header";
import { ExternalLink, MapPin, Clock } from "lucide-react";

export default function Experience() {
  const width = useWindowSizeHook();
  const { ref } = useSectionInView("Experience", width > 700 ? 0.3 : 0.15);

  return (
    <section id="experience" className="scroll-mt-24" ref={ref}>
      <Header>Experience</Header>

      <div className="relative">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-zinc-800" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-20"
            >
              <div className="absolute left-0 md:left-8 top-1 w-3 h-3 rounded-full bg-zinc-50 -translate-x-1/2" />

              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-heading font-semibold text-zinc-50">
                    {exp.role}
                  </h3>
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-200 transition-colors duration-150 flex items-center gap-1"
                  >
                    {exp.company}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                  <span className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-xs">
                    {exp.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
