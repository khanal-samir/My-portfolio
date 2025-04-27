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
          className={`rounded-full outline-none relative transition-all text-gray-400 font-medium px-4 py-1.5 flex hover-lift ${
            activeSection == label
              ? "text-white font-medium"
              : "hover:bg-black/20 hover:text-white"
          }`}
        >
          {label}
          {label === activeSection && (
            <motion.span
              className="bg-white/10 rounded-full absolute inset-0 -z-10"
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
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="hidden md:flex fixed top-0 left-0 right-0 z-10 justify-center items-center p-2"
    >
      <div className="w-full max-w-[600px] bg-black/75 backdrop-blur-md border border-white/10 rounded-full p-1.5">
        <ul
          id="links-container"
          className="flex overflow-x-auto scroll-hide items-center justify-center gap-1.5"
        >
          {renderedLinks}
        </ul>
      </div>
    </motion.nav>
  );
}
