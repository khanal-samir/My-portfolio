import Header from "./ui/header";
import { projects } from "../lib/data";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import Project from "./ui/project";
import { useSectionInView, useWindowSizeHook } from "../lib/hooks";
import { motion } from "framer-motion";

export default function Projects() {
  const width = useWindowSizeHook();
  const { ref } = useSectionInView("Projects", width > 700 ? 0.4 : 0.15);

  const renderedProjects = projects.map((project, i) => {
    return (
      <motion.li
        key={project.name}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: i * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
      >
        <Project project={project} index={i} />
      </motion.li>
    );
  });

  return (
    <section id="projects" className="scroll-mt-24" ref={ref}>
      <Header>Featured Projects</Header>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {renderedProjects}

        {/* GitHub CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: projects.length * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
        >
          <Link
            href="https://github.com/khanal-samir/"
            target="_blank"
            className="group h-full min-h-[200px] rounded-xl border border-slate-700/40 bg-midnight-800/25 backdrop-blur-sm hover:border-teal/25 hover:bg-midnight-800/50 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center overflow-hidden relative"
          >
            <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-teal/0 group-hover:bg-teal/50 transition-all duration-500 rounded-l-xl" />
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/0 group-hover:via-teal/30 to-transparent transition-all duration-500" />
            <FaGithub className="text-2xl text-slate-500 group-hover:text-teal transition-colors duration-300 mb-3" />
            <h3 className="text-sm font-display font-semibold text-slate-400 group-hover:text-slate-100 mb-1 transition-colors">
              View More on GitHub
            </h3>
            <span className="inline-flex items-center gap-1 text-xs text-teal/60 group-hover:text-teal transition-colors font-medium">
              @khanal-samir
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
