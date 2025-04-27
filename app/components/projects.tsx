import Header from "./ui/header";
import { projects } from "../lib/data";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import Project from "./ui/project";
import { useSectionInView, useWindowSizeHook } from "../lib/hooks";
import { motion } from "framer-motion";
import { Fragment } from "react";

export default function Projects() {
  const width = useWindowSizeHook();
  const { ref } = useSectionInView("Projects", width > 700 ? 0.4 : 0.15);

  const renderedProjects = projects.map((project, i) => {
    return (
      <Fragment key={project.name}>
        <motion.li
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.32,
            delay: i * 0.06,
            type: "spring",
            stiffness: 120,
          }}
          viewport={{ once: true }}
          className="md:block hidden hover-lift"
        >
          <Project project={project} />
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.32,
            delay: i * 0.06,
            type: "spring",
            stiffness: 120,
          }}
          viewport={{ once: true }}
          className="md:hidden block hover-lift"
        >
          <Project project={project} />
        </motion.li>
      </Fragment>
    );
  });

  return (
    <section id="projects" className="scroll-mt-24" ref={ref}>
      <Header>Projects</Header>
      <div className="bg-black/20 rounded-xl p-6 border border-white/10">
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-6 md:auto-rows-fr">
          {renderedProjects}
          {projects.length % 2 !== 0 && (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.32,
                delay: projects.length * 0.06,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
              className="flex flex-col hover-lift"
            >
              <Link
                href={"https://github.com/khanal-samir/"}
                className="h-full bg-black/40 border border-white/20 font-extrabold text-lg text-white hover:bg-white/10 transition-all rounded-lg md:flex hidden flex-col items-center justify-center p-6"
              >
                <h2 className="flex items-center gap-2 text-gradient">
                  AND MORE ON GITHUB! <FaGithub className="animate-pulse" />
                </h2>
              </Link>
            </motion.div>
          )}
        </ul>
      </div>
    </section>
  );
}
