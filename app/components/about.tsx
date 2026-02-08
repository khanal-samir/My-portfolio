import Header from "./ui/header";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <section id="about" ref={ref} className="scroll-mt-24">
      <Header>About Me</Header>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="bg-midnight-800/40 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8 md:p-12"
      >
        <p className="font-body text-slate-300 text-lg leading-relaxed mb-6">
          Full-stack developer based in{" "}
          <span className="text-slate-100 font-semibold">Pokhara, Nepal</span>,
          specializing in building scalable web applications with modern
          technologies.
        </p>

        <p className="font-body text-slate-300 text-lg leading-relaxed mb-6">
          Proficient in{" "}
          <span className="text-slate-100 font-semibold">
            TypeScript, React, Next.js, Node.js
          </span>{" "}
          and experienced with both SQL and NoSQL databases. I write clean,
          maintainable code with a focus on performance and user experience.
        </p>

        <p className="font-body text-slate-300 text-lg leading-relaxed mb-6">
          Currently expanding into{" "}
          <span className="text-slate-100 font-semibold">NestJS</span> for
          enterprise-grade backends,{" "}
          <span className="text-slate-100 font-semibold">Docker</span> for
          containerization, and{" "}
          <span className="text-slate-100 font-semibold">
            GitHub Actions CI/CD
          </span>{" "}
          for automated deployment pipelines.
        </p>

        <p className="font-body text-slate-300 text-lg leading-relaxed">
          Seeking{" "}
          <span className="text-teal font-semibold">
            Junior Developer roles
          </span>{" "}
          to contribute to impactful projects and grow with experienced teams.
        </p>
      </motion.div>
    </section>
  );
}
