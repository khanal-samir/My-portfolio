"use client";

import { motion } from "framer-motion";
import { socials } from "@/app/lib/data";
import { ArrowUpRight } from "lucide-react";

const codeLines = [
  { type: "prompt", content: "whoami" },
  { type: "output", content: "Samir Khanal" },
  { type: "prompt", content: "cat location.txt" },
  { type: "output", content: "Pokhara, Nepal" },
  { type: "prompt", content: "cat experience.txt" },
  {
    type: "output",
    content: "1+ year working professionally as a Full-Stack Developer",
  },
  { type: "prompt", content: "cat focus.txt" },
  {
    type: "output",
    content:
      "Seeking opportunities to contribute and grow as a Full-Stack Developer.",
  },
];

export default function TerminalHero() {
  return (
    <section id="home" className="pt-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-3"
        >
          <p className="text-zinc-600 text-sm font-mono">Hi, I&apos;m</p>
          <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-zinc-50">
            Samir Khanal
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-body">
            Full-Stack Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative max-w-2xl"
        >
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="text-xs text-zinc-600 ml-2 font-mono">
                portfolio
              </span>
            </div>
            <div className="p-5 font-mono text-sm leading-[1.8]">
              {codeLines.map((line, index) => (
                <div key={index} className="flex">
                  {line.type === "prompt" && (
                    <span className="text-zinc-600 mr-2 select-none">$</span>
                  )}
                  <span
                    className={
                      line.type === "output" ? "text-zinc-300" : "text-zinc-600"
                    }
                  >
                    {line.content}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-4 py-2 bg-zinc-50 text-zinc-950 font-medium rounded-lg hover:bg-zinc-200 transition-colors duration-150"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
          </a>
          <a
            href="/Samir Khanal.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-700 text-zinc-300 font-medium rounded-lg hover:border-zinc-500 hover:text-zinc-100 transition-all duration-150"
          >
            Download CV
          </a>
          <div className="flex items-center gap-1 ml-1">
            {socials.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-600 hover:text-zinc-200 transition-colors duration-150 p-2 hover:bg-zinc-800/50 rounded-lg"
                aria-label={name}
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
