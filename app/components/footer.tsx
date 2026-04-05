"use client";

import { footerLinks } from "../lib/data";
import Link from "next/link";

export default function Footer() {
  const renderedLinks = footerLinks.map(({ name, href, icon: Icon }) => {
    return (
      <Link
        key={name}
        href={href}
        target="_blank"
        className="text-zinc-600 hover:text-zinc-300 transition-colors duration-150"
        aria-label={name}
      >
        <Icon className="text-lg" />
      </Link>
    );
  });

  return (
    <footer className="py-8 border-t border-zinc-900">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4 justify-center items-center">
          {renderedLinks}
        </div>
        <p className="text-zinc-600 text-sm font-body">
          {new Date().getFullYear()} © Samir Khanal
        </p>
      </div>
    </footer>
  );
}
