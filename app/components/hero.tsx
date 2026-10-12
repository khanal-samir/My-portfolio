import Image from "next/image";
import Link from "next/link";
import { CodeXml, FileText, GraduationCap, Mail } from "lucide-react";
import { education, email, experiences, socials } from "../lib/data";
import HandNote from "./ui/hand-note";
import GithubGraph from "./github-graph";
import { SpotlightLogo } from "./ui/spotlight-logo";

const current = experiences[0];

const strong = "font-medium text-[hsl(var(--foreground))]";
const link =
  "font-medium text-[hsl(var(--foreground))] underline decoration-[hsl(var(--accent)/0.5)] underline-offset-4 transition-colors hover:text-[hsl(var(--accent))] hover:decoration-[hsl(var(--accent))]";

const info = [
  {
    icon: CodeXml,
    label: `${current.role} @${current.company}`,
    href: current.website,
  },
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
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-32 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--accent))]/15 blur-3xl"
        />
        <div className="relative w-64 animate-fade-in md:w-80">
          <SpotlightLogo />
        </div>
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
        <div className="flex min-w-0 flex-col justify-center px-3 py-3 sm:px-4">
          <h1 className="font-heading text-xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-2xl">
            Samir Khanal
          </h1>
          <p className="mt-1 font-heading text-xl font-medium tracking-tight text-[hsl(var(--foreground))] sm:text-2xl md:text-3xl">
            Software Engineer
          </p>
          <p className="pt-1 font-mono text-[10px] text-[hsl(var(--muted-foreground))] sm:text-xs md:text-sm">
            Full-stack · Real-time systems
          </p>
        </div>
      </div>

      <nav className="relative flex animate-fade-in gap-2 px-4 pt-4 opacity-0 [animation-delay:200ms]">
        <HandNote>follow me</HandNote>
        {socials.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`${iconBox} size-8 transition-colors duration-150 hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]`}
          >
            <Icon className="size-4" />
          </a>
        ))}
      </nav>

      <ul className="line-b grid animate-fade-in gap-3 px-4 py-4 font-mono text-sm opacity-0 [animation-delay:250ms] md:grid-cols-2">
        {info.map(({ icon: Icon, label, href }) => (
          <li
            key={label}
            className="flex min-w-0 items-center gap-3 md:first:col-span-2"
          >
            <span className={iconBox}>
              <Icon className="size-4" />
            </span>
            {href ? (
              <a
                href={href}
                target={
                  href.startsWith("http") || href.endsWith(".pdf")
                    ? "_blank"
                    : undefined
                }
                rel="noopener noreferrer"
                className="break-words text-[hsl(var(--foreground))] underline-offset-4 transition-colors hover:text-[hsl(var(--accent))] hover:underline"
              >
                {label}
              </a>
            ) : (
              <span className="text-[hsl(var(--foreground))]">{label}</span>
            )}
          </li>
        ))}
      </ul>

      <GithubGraph />

      <div className="animate-fade-in px-4 py-6 opacity-0 [animation-delay:300ms]">
        <p className="font-hand text-3xl leading-none text-[hsl(var(--foreground))]">
          Hello there!
        </p>
        <ul className="mt-4 flex list-disc flex-col gap-2.5 pl-5 text-[15px] leading-7 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--accent))]">
          <li>
            I&apos;m <span className={strong}>Samir</span>, a full-stack
            software engineer with{" "}
            <span className="font-semibold text-[hsl(var(--accent))]">
              2+ years
            </span>{" "}
            of professional experience shipping production web apps, from
            data-heavy dashboards to real-time systems.
          </li>
          <li>
            I care about the parts users never see: fast queries, clean APIs,
            and code the next developer can read. Lately I&apos;m exploring AI
            agents and LLM tooling.
          </li>
          <li>
            Outside work I build side projects and{" "}
            <Link href="/blog" className={link}>
              write
            </Link>{" "}
            about what I learn.
          </li>
        </ul>
      </div>
    </section>
  );
}
