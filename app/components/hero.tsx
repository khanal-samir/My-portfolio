import Image from "next/image";
import { CodeXml, FileText, GraduationCap, Mail } from "lucide-react";
import { education, email, experiences, socials } from "../lib/data";
import HandNote from "./ui/hand-note";

const current = experiences[0];

const info = [
  { icon: CodeXml, label: `${current.role} @${current.company}`, href: current.website },
  { icon: GraduationCap, label: `CSIT @${education.school}` },
  { icon: Mail, label: email, href: `mailto:${email}` },
  { icon: FileText, label: "Resume", href: "/samir-khanal-resume.pdf" },
];

const iconBox =
  "flex size-7 shrink-0 items-center justify-center rounded-md border border-solid border-[hsl(var(--border))] bg-[hsl(var(--muted))]/60 text-[hsl(var(--muted-foreground))]";

export default function Hero() {
  return (
    <section>
      <div className="line-b relative flex h-44 items-center justify-center overflow-hidden md:h-60">
        <div aria-hidden className="grid-paper absolute inset-0" />
        <p
          aria-hidden
          className="relative animate-fade-in select-none font-script text-6xl text-[hsl(var(--foreground))] md:text-8xl"
        >
          Samir Khanal
        </p>
        <span className="absolute bottom-2 right-3 font-mono text-xs text-[hsl(var(--muted-foreground))]">
          Fig. 1.
        </span>
      </div>

      <div className="line-b grid animate-fade-in grid-cols-[auto_1fr] opacity-0 [animation-delay:100ms]">
        <div className="border-r border-solid border-[hsl(var(--border))] p-2">
          <Image
            src="/avatar.png"
            alt="Samir Khanal"
            width={160}
            height={160}
            className="size-24 rounded-full object-cover ring-1 ring-[hsl(var(--border))] ring-offset-2 ring-offset-[hsl(var(--background))] md:size-32"
            priority
          />
        </div>
        <div className="flex flex-col justify-end">
          <h1 className="border-b border-solid border-[hsl(var(--border))] px-4 pb-1 font-heading text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl">
            Samir Khanal
          </h1>
          <p className="px-4 py-2 font-mono text-xs text-[hsl(var(--muted-foreground))] md:text-sm">
            Software Engineer · Full-stack developer
          </p>
        </div>
      </div>

      <nav className="line-b relative flex animate-fade-in gap-2 px-4 py-3 opacity-0 [animation-delay:200ms]">
        <HandNote>follow me</HandNote>
        {socials.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`${iconBox} size-8 transition-colors duration-150 hover:text-[hsl(var(--foreground))]`}
          >
            <Icon className="size-4" />
          </a>
        ))}
      </nav>

      <ul className="line-b grid animate-fade-in gap-3 px-4 py-4 font-mono text-sm opacity-0 [animation-delay:250ms] md:grid-cols-2">
        {info.map(({ icon: Icon, label, href }) => (
          <li key={label} className="flex min-w-0 items-center gap-3 md:first:col-span-2">
            <span className={iconBox}>
              <Icon className="size-4" />
            </span>
            {href ? (
              <a
                href={href}
                target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="break-words text-[hsl(var(--foreground))] underline-offset-4 hover:underline"
              >
                {label}
              </a>
            ) : (
              <span className="text-[hsl(var(--foreground))]">{label}</span>
            )}
          </li>
        ))}
      </ul>

      <div className="line-b animate-fade-in px-4 py-6 opacity-0 [animation-delay:300ms]">
        <p className="font-hand text-3xl leading-none text-[hsl(var(--foreground))]">
          Hello there!
        </p>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[hsl(var(--muted-foreground))]">
          Hi, I&apos;m{" "}
          <span className="font-semibold text-[hsl(var(--foreground))]">Samir Khanal</span>, a
          full-stack developer crafting scalable web applications and real-time systems with
          clean, maintainable code.
        </p>
      </div>
    </section>
  );
}
