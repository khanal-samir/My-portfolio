"use client";

import { motion } from "framer-motion";
import { projects } from "../lib/data";
import { useSectionInView, useWindowSizeHook } from "../lib/hooks";
import Header from "./ui/header";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const width = useWindowSizeHook();
  const { ref } = useSectionInView("Projects", width > 700 ? 0.2 : 0.1);

  return (
    <section id="projects" className="scroll-mt-24" ref={ref}>
      <Header>Projects</Header>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <h3 className="text-lg font-heading font-semibold text-zinc-50">
                {project.name}
              </h3>
              <div className="flex items-center gap-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-600 hover:text-zinc-300 transition-colors duration-150"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-600 hover:text-zinc-300 transition-colors duration-150"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="text-sm text-zinc-500 mb-3 max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-xs text-zinc-500 bg-zinc-900/50 border border-zinc-800 rounded"
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    className="w-3 h-3 object-contain opacity-70"
                  />
                  {t.alt}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="https://github.com/khanal-samir"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 mt-8 text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-150"
      >
        <Github className="w-4 h-4" />
        View more on GitHub
        <span className="text-zinc-700">@khanal-samir</span>
      </motion.a>
    </section>
  );
}
