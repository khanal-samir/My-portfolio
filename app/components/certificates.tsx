"use client";
import Header from "./ui/header";
import { certificates } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  Calendar,
  Building2,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";

export default function Certificates() {
  const { ref } = useSectionInView("Certificates", 0.5);

  const renderedCertificates = certificates.map((cert, i) => {
    return (
      <motion.div
        key={cert.name}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: i * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="group"
      >
        <div className="h-full rounded-2xl bg-midnight-800/40 backdrop-blur-sm border border-slate-700/30 p-6 hover:border-teal/30 hover:bg-midnight-800/60 transition-all duration-300">
          {/* Header with Icon */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal/20 to-teal/5 border border-teal/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6 text-teal" />
            </div>

            {cert.link && (
              <Link
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-midnight-700/50 border border-slate-600/30 flex items-center justify-center text-slate-400 hover:text-teal hover:border-teal/50 hover:bg-teal/10 transition-all duration-300 opacity-0 group-hover:opacity-100"
                title="View Certificate"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
            )}
          </div>

          {/* Certificate Name */}
          <h3 className="text-lg font-display font-semibold text-slate-100 mb-3 group-hover:text-teal transition-colors duration-300 line-clamp-2">
            {cert.name}
          </h3>

          {/* Meta Info */}
          <div className="space-y-2 mb-5">
            <div className="flex items-center gap-2 text-slate-400">
              <Building2 className="w-4 h-4 text-slate-500" />
              <span className="text-sm">{cert.issuer}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Calendar className="w-4 h-4 text-slate-500" />
              <span className="text-sm">{cert.date}</span>
            </div>
          </div>

          {/* Skills */}
          <div className="pt-4 border-t border-slate-700/30">
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill, j) => (
                <span
                  key={j}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-midnight-900/60 border border-slate-700/30 text-xs text-slate-400"
                >
                  <BadgeCheck className="w-3 h-3 text-teal/60" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  });

  return (
    <section ref={ref} id="certificates" className="scroll-mt-24">
      <Header>Certificates & Certifications</Header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderedCertificates}
      </div>
    </section>
  );
}
