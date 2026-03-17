import { ProjectType } from "@/app/lib/types";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

type ProjectProps = {
  project: ProjectType;
  index: number;
};

export default function Project({ project, index }: ProjectProps) {
  const { name, description, features, tech, link, code } = project;
  const num = String(index + 1).padStart(2, "0");
  const isFeatured = index === 0;

  return (
    <div className="group relative flex flex-col h-full rounded-xl border border-slate-700/40 bg-midnight-800/25 backdrop-blur-sm hover:border-teal/25 hover:bg-midnight-800/50 transition-all duration-300 overflow-hidden">
      {/* Left accent bar — grows in on hover */}
      <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-teal/0 group-hover:bg-teal/50 transition-all duration-500 rounded-l-xl" />

      {/* Subtle top glow on hover */}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/0 group-hover:via-teal/30 to-transparent transition-all duration-500" />

      <div className="flex flex-col h-full p-6 pl-7">
        {/* ── Header row: index + links ── */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] text-teal/50 tracking-widest tabular-nums">
              {num}
            </span>
            {isFeatured && (
              <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal/10 text-teal border border-teal/20">
                Featured
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-teal transition-colors duration-200"
              >
                <ArrowUpRight className="w-3 h-3" />
                Live
              </a>
            )}
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-teal transition-colors duration-200"
            >
              <FaGithub className="w-3 h-3" />
              Code
            </a>
          </div>
        </div>

        {/* ── Title ── */}
        <h3 className="text-lg font-display font-semibold text-slate-100 leading-snug mb-2 group-hover:text-teal/90 transition-colors duration-300">
          {name}
        </h3>

        {/* ── Description ── */}
        <p className="text-sm text-slate-400 leading-relaxed mb-5 font-body">
          {description}
        </p>

        {/* ── Features ── */}
        <div className="mb-5 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600 mb-3">
            Features
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2">
            {features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-slate-400 leading-snug"
              >
                <span className="mt-[5px] w-1 h-1 rounded-full bg-teal/50 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Tech icons ── */}
        <div className="pt-4 border-t border-slate-700/30">
          <div className="flex flex-wrap gap-1.5">
            {tech.map((t, i) => (
              <div
                key={i}
                title={t.alt}
                className="w-7 h-7 rounded-lg bg-midnight-900/60 border border-slate-700/30 flex items-center justify-center hover:border-teal/30 hover:bg-midnight-800 transition-all duration-200 cursor-default"
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  className="w-[15px] h-[15px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
