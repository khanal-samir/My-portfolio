"use client";

import { motion } from "framer-motion";
import { skillCategories } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import Header from "./ui/header";
import Image from "next/image";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.2);

  return (
    <section ref={ref} id="skills" className="scroll-mt-24">
      <Header>Skills</Header>

      <div className="space-y-6">
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.name}>
            <motion.h3
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: categoryIndex * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-wider text-zinc-600 font-medium mb-2"
            >
              {category.name}
            </motion.h3>
            <div className="flex flex-wrap gap-x-4 gap-y-3">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: categoryIndex * 0.1 + index * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-2"
                >
                  <div className="w-5 h-5 relative flex-shrink-0">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-150"
                    />
                  </div>
                  <span className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-150 font-body">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
