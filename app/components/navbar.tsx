"use client";
import { links } from "../lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "../context/section-context";
import { useEffect } from "react";
import { useWindowSizeHook } from "../lib/hooks";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const width = useWindowSizeHook();

  useEffect(() => {
    const linksContainer = document.getElementById("links-container");
    const activeLink = document.getElementById(activeSection);
    if (linksContainer && activeLink && width < 700) {
      setTimeout(() => {
        linksContainer.scrollTo({
          left: activeLink.offsetLeft - linksContainer.offsetWidth / 2,
          behavior: "smooth",
        });
      }, 750);
    }
  }, [activeSection, width]);

  const renderedLinks = links.map(({ hash, label }) => {
    return (
      <li key={hash}>
        <Link
          href={hash}
          id={label}
          onClick={() => {
            setActiveSection(label);
            setTimeOfLastClick(Date.now());
          }}
          className={`rounded-full outline-none relative transition-all duration-300 font-medium px-5 py-2 flex items-center ${
            activeSection == label
              ? "text-slate-100"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
          }`}
        >
          {label}
          {label === activeSection && (
            <motion.span
              className="bg-teal/10 rounded-full absolute inset-0 -z-10 border border-teal/20"
              layoutId="activeSection"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            ></motion.span>
          )}
        </Link>
      </li>
    );
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="hidden md:flex fixed top-4 left-0 right-0 z-50 justify-center items-center p-2"
    >
      <div className="w-full max-w-[650px] bg-midnight-800/70 backdrop-blur-xl border border-slate-700/30 rounded-full px-2 py-1.5 shadow-lg shadow-black/20">
        <ul
          id="links-container"
          className="flex overflow-x-auto scroll-hide items-center justify-center gap-1"
        >
          {renderedLinks}
        </ul>
      </div>
    </motion.nav>
  );
}
