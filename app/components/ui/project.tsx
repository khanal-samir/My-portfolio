import { ProjectType } from "@/app/lib/types";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { ArrowUpRight, Layers, Sparkles } from "lucide-react";

type ProjectProps = {
  project: ProjectType;
};

export default function Project({ project }: ProjectProps) {
  const { name, description, features, tech, link, code } = project;

  return (
    <div className="group relative rounded-2xl bg-midnight-800/40 backdrop-blur-sm border border-slate-700/30 p-8 hover:border-teal/30 hover:bg-midnight-800/60 transition-all duration-300 flex flex-col h-full">
      {/* Header: Icon + Title + Links */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal/20 to-teal/5 border border-teal/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Layers className="w-7 h-7 text-teal" />
          </div>
          <div>
            <h3 className="text-2xl font-display font-semibold text-slate-100 group-hover:text-teal transition-colors duration-300">
              {name}
            </h3>
          </div>
        </div>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg bg-midnight-700/50 border border-slate-600/30 flex items-center justify-center text-slate-400 hover:text-teal hover:border-teal/50 hover:bg-teal/10 transition-all duration-300"
              title="Live Demo"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-lg bg-midnight-700/50 border border-slate-600/30 flex items-center justify-center text-slate-400 hover:text-teal hover:border-teal/50 hover:bg-teal/10 transition-all duration-300"
            title="View Code"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="font-body text-slate-400 text-lg leading-relaxed mb-6">
        {description}
      </p>

      {/* Features List - HIGHLIGHTED */}
      <div className="mb-8 p-5 rounded-xl bg-gradient-to-br from-teal/10 to-transparent border border-teal/20">
        <div className="flex items-center gap-2 mb-4">
          <h4 className="text-sm font-semibold text-teal uppercase tracking-wider">
            Key Features
          </h4>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-sm text-slate-300"
            >
              <span className="w-2 h-2 rounded-full bg-teal flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack - ALL TOOLS SHOWN */}
      <div className="mt-auto pt-6 border-t border-slate-700/30">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
          Built With
        </h4>
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-midnight-900/60 border border-slate-700/30 hover:border-teal/30 hover:bg-midnight-900/80 transition-all duration-200"
            >
              <Image src={t.src} alt={t.alt} className="h-5 w-auto" />
              <span className="text-sm text-slate-400 font-medium">
                {t.alt}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Always visible links */}
      <div className="flex gap-3 mt-6 md:hidden">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-midnight-700/50 border border-slate-600/30 text-slate-300 font-medium hover:border-teal/50 hover:text-teal transition-all"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            Live Demo
          </a>
        )}
        <a
          href={code}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-midnight-700/50 border border-slate-600/30 text-slate-300 font-medium hover:border-teal/50 hover:text-teal transition-all"
        >
          <FaGithub className="w-4 h-4" />
          Code
        </a>
      </div>
    </div>
  );
}
