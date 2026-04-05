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
          className={`relative rounded-full outline-none transition-all duration-150 font-medium px-4 py-2 flex items-center text-sm cursor-pointer ${
            activeSection === label
              ? "text-zinc-50"
              : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
          }`}
        >
          {label}
          {label === activeSection && (
            <motion.span
              className="bg-zinc-800 rounded-full absolute inset-0 -z-10"
              layoutId="activeSection"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />
          )}
        </Link>
      </li>
    );
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="hidden md:flex fixed top-2 left-2 right-2 z-50 justify-center items-center"
    >
      <div className="w-full max-w-[600px] bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-full px-2 py-1.5">
        <ul
          id="links-container"
          className="flex overflow-x-auto scroll-hide items-center justify-center gap-0.5"
        >
          {renderedLinks}
        </ul>
      </div>
    </motion.nav>
  );
}
