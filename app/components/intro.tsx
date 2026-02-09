"use client";
import { motion } from "framer-motion";
import { socials } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { RiDownloadLine } from "react-icons/ri";
import Button from "./ui/button";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.75);

  const renderedSocials = socials.map(({ name, icon: Icon, href }) => {
    return (
      <a
        key={name}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 hover:text-teal hover:scale-110 transition-all duration-300"
      >
        <Icon className="text-2xl" />
      </a>
    );
  });

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-24 mb-24 min-h-[70vh] flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <p className="md:text-xl text-lg sm:mb-4 mb-2 font-body italic text-slate-400 tracking-wide">
          Welcome! I&apos;m
        </p>
        <div className="flex items-center gap-4 mb-8">
          <h1 className="md:text-7xl text-5xl font-display font-bold tracking-tight text-gradient">
            Samir Khanal
          </h1>
          <span className="flex items-center gap-3">{renderedSocials}</span>
        </div>
        <div className="mb-8">
          <h2 className="lg:text-3xl text-2xl font-display font-semibold text-slate-300">
            Software Developer @ <span className="text-teal">Nepal</span>
          </h2>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="w-fit"
      >
        <Button href="/Samir Khanal.pdf" className="md:text-lg group">
          Download Resume
          <RiDownloadLine className="transition-transform duration-300 group-hover:translate-y-1" />
        </Button>
      </motion.div>
    </section>
  );
}
