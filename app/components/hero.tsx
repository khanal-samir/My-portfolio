import Image from "next/image";
import Link from "next/link";
import { CodeXml, FileText, GraduationCap, Mail } from "lucide-react";
import { education, email, experiences, socials } from "../lib/data";
import HandNote from "./ui/hand-note";
import GithubGraph from "./github-graph";

const [current, previous] = experiences;

const strong = "font-medium text-[hsl(var(--foreground))]";
const link =
  "font-medium text-[hsl(var(--foreground))] underline decoration-[hsl(var(--border))] underline-offset-4 transition-colors hover:decoration-[hsl(var(--foreground))]";

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
        <h1 className="relative animate-fade-in font-script text-6xl font-normal text-[hsl(var(--foreground))] md:text-8xl">
          Samir Khanal
        </h1>
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
          <p className="px-4 font-heading text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl">
            Software Engineer
          </p>
          <p className="px-4 pb-3 pt-1 font-mono text-xs text-[hsl(var(--muted-foreground))] md:text-sm">
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
            className={`${iconBox} size-8 transition-colors duration-150 hover:text-[hsl(var(--foreground))]`}
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

      <GithubGraph />

      <div className="animate-fade-in px-4 py-6 opacity-0 [animation-delay:300ms]">
        <p className="font-hand text-3xl leading-none text-[hsl(var(--foreground))]">
          Hello there!
        </p>
        <ul className="mt-4 flex list-disc flex-col gap-2.5 pl-5 text-[15px] leading-7 text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--border))]">
          <li>
            I&apos;m <span className={strong}>Samir Khanal</span>, a full-stack
            software engineer who builds scalable web applications and real-time
            systems with clean, maintainable code.
          </li>
          <li>
            Currently an {current.role} at{" "}
            <a
              href={current.website}
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              Dohoro
            </a>
            , building ERP software across the frontend and backend with React,
            Express and Redux Toolkit.
          </li>
          <li>
            Before that at{" "}
            <a
              href={previous.website}
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              {previous.company}
            </a>
            : row virtualization for large tables, batched data updates,
            platform integrations through REST APIs and webhooks, and agentic AI
            workflows.
          </li>
          <li>
            I build things on the side, like{" "}
            <Link href="/projects/stallion" className={link}>
              Stallion
            </Link>{" "}
            (a TypeScript monorepo CRM) and{" "}
            <Link href="/projects/pnc-csit" className={link}>
              PNC CSIT
            </Link>{" "}
            (an event-driven school management platform), and I{" "}
            <Link href="/blog" className={link}>
              write
            </Link>{" "}
            about what I learn, like LLM prompt caching.
          </li>
          <li>
            Studying CSIT at <span className={strong}>{education.school}</span>.
          </li>
        </ul>
      </div>
    </section>
  );
}
