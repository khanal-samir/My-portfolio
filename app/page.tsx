"use client";

import { Fragment } from "react";
import TerminalHero from "./components/hero/terminal-hero";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Projects from "./components/projects";

import Contact from "./components/contact";

export default function Home() {
  return (
    <Fragment>
      <TerminalHero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Fragment>
  );
}
