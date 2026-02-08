import { skills } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import Header from "./ui/header";
import IconCard from "./ui/icon-card";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.75);

  const renderedSkills = skills.map((skill, i) => {
    return (
      <motion.li
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: i * 0.03 + 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        key={skill.name}
        className="hover-lift"
      >
        <IconCard {...skill} />
      </motion.li>
    );
  });

  return (
    <section ref={ref} id="skills" className="scroll-mt-24">
      <Header>Top Skills</Header>
      <div className="bg-midnight-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
        <ul className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4">
          {renderedSkills}
        </ul>
      </div>
    </section>
  );
}
