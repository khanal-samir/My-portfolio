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
        <Project project={project} />
      </motion.li>
    );
  });

  return (
    <section id="projects" className="scroll-mt-24" ref={ref}>
      <Header>Featured Projects</Header>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
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
            className="group h-full min-h-[320px] rounded-2xl bg-gradient-to-br from-midnight-800/60 to-midnight-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-teal/30 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center hover-lift"
          >
            <div className="w-16 h-16 rounded-full bg-midnight-700/50 border border-slate-600/30 flex items-center justify-center mb-4 group-hover:bg-teal/10 group-hover:border-teal/30 group-hover:scale-110 transition-all duration-300">
              <FaGithub className="text-3xl text-slate-400 group-hover:text-teal transition-colors" />
            </div>
            <h3 className="text-xl font-display font-semibold text-slate-300 group-hover:text-slate-100 mb-2 transition-colors">
              View More Projects
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Explore additional work on GitHub
            </p>
            <span className="inline-flex items-center gap-1 text-teal text-sm font-medium">
              GitHub Profile
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
