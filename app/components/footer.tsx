"use client";
import { footerLinks } from "../lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const renderedLinks = footerLinks.map(({ name, href, icon: Icon }) => {
    return (
      <Link
        key={name}
        href={href}
        target="_blank"
        className="w-12 h-12 rounded-full bg-midnight-800/50 border border-slate-700/30 flex items-center justify-center hover:border-teal/30 hover:bg-teal/10 hover:text-teal transition-all duration-300"
      >
        <Icon className="text-xl" />
      </Link>
    );
  });

  return (
    <footer className="py-16 border-t border-slate-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6"
      >
        <div className="flex gap-4 justify-center items-center">
          {renderedLinks}
        </div>
        <p className="text-slate-500 text-sm font-body">
          {new Date().getFullYear()} © Samir Khanal. Crafted with passion.
        </p>
      </motion.div>
    </footer>
  );
}
