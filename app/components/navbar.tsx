"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../lib/data";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--background))]/80">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="font-heading text-lg font-bold tracking-tight text-[hsl(var(--foreground))]"
        >
          <span className="hidden md:inline">Samir Khanal</span>
          <span className="inline md:hidden">S.K</span>
        </Link>
        <div className="flex items-center gap-5">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? "text-[hsl(var(--accent))]"
                    : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="/samir-khanal-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-150"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
