import Image from "next/image";
import { socials } from "../lib/data";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse gap-12 py-14 md:flex-row md:items-center md:justify-between md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 -z-10 size-[26rem] rounded-full bg-[hsl(var(--accent))]/10 blur-3xl"
      />

      <div className="flex-1">
        <h1 className="animate-fade-in font-heading text-5xl font-black uppercase leading-[0.95] tracking-tight text-[hsl(var(--foreground))] sm:text-6xl md:text-7xl">
          Software
          <br />
          <span className="bg-gradient-to-r from-[hsl(var(--accent))] to-sky-400 bg-clip-text text-transparent">
            Engineer
          </span>
        </h1>

        <p className="mt-6 max-w-xl animate-fade-in text-base leading-7 text-[hsl(var(--muted-foreground))] opacity-0 [animation-delay:100ms]">
          Hi, I&apos;m{" "}
          <span className="font-semibold text-[hsl(var(--foreground))]">
            Samir Khanal
          </span>
          , a full-stack developer crafting scalable web applications and
          real-time systems with clean, maintainable code.
        </p>

        <div className="mt-8 flex animate-fade-in flex-wrap items-center gap-3 opacity-0 [animation-delay:200ms]">
          <InteractiveHoverButton href="/projects">
            View Projects
          </InteractiveHoverButton>
          <InteractiveHoverButton href="/samir-khanal-resume.pdf">
            Resume
          </InteractiveHoverButton>
        </div>

        <nav className="mt-8 flex animate-fade-in items-center gap-4 opacity-0 [animation-delay:300ms]">
          {socials.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[hsl(var(--muted-foreground))] transition-all duration-150 hover:-translate-y-0.5 hover:text-[hsl(var(--accent))]"
            >
              <Icon className="size-4" />
              {name}
            </a>
          ))}
        </nav>
      </div>

      <div className="group relative w-fit shrink-0 animate-fade-in opacity-0 [animation-delay:150ms] md:mr-6">
        <div
          aria-hidden
          className="absolute inset-0 rotate-6 rounded-3xl border-2 border-solid border-[hsl(var(--accent))]/60 transition-transform duration-300 ease-out group-hover:rotate-3"
        />
        <div
          aria-hidden
          className="absolute -inset-3 -z-10 rounded-[2rem] bg-[hsl(var(--accent))]/15 blur-2xl"
        />
        <Image
          src="/avatar.png"
          alt="Samir Khanal"
          width={224}
          height={224}
          className="relative size-40 -rotate-3 rounded-3xl object-cover shadow-xl transition-transform duration-300 ease-out group-hover:rotate-0 group-hover:scale-[1.02] md:size-52"
          priority
        />
      </div>
    </section>
  );
}
