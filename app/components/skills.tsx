import { skills } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import Header from "./ui/header";
import IconCard from "./ui/icon-card";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.75);

  // Calculate the number of columns based on screen size
  const getGridCols = () => {
    if (typeof window === "undefined") return "grid-cols-4";
    if (window.innerWidth >= 1024) return "grid-cols-5";
    if (window.innerWidth >= 768) return "grid-cols-4";
    return "grid-cols-3";
  };

  const renderedSkills = skills.map((skill, i) => {
    return (
      <motion.li
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.05 + 0.5 }}
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
      <div className="bg-black/20 rounded-xl p-6 border border-white/10">
        <ul className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4">
          {renderedSkills}
        </ul>
      </div>
    </section>
  );
}
