import { footerSocials } from "../lib/data";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const email = "khanalsamirwork@gmail.com";

export default function Footer() {
  return (
    <footer className="border-t border-solid border-[hsl(var(--border))]">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))]">
          <span className="inline-block h-px w-6 bg-[hsl(var(--accent))]" />
          What&apos;s next
        </span>
        <h2 className="mt-2 font-heading text-4xl font-black uppercase tracking-tight text-[hsl(var(--foreground))] sm:text-5xl">
          Let&apos;s work{" "}
          <span className="bg-gradient-to-r from-[hsl(var(--accent))] to-sky-400 bg-clip-text text-transparent">
            together
          </span>
        </h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-[hsl(var(--muted-foreground))]">
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </p>
        <InteractiveHoverButton href={`mailto:${email}`} className="mt-6">
          {email}
        </InteractiveHoverButton>
      </div>

      <div className="border-t border-solid border-[hsl(var(--border))]">
        <div className="mx-auto flex max-w-3xl flex-col-reverse items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="text-xs text-[hsl(var(--muted-foreground))]">
            &copy; {new Date().getFullYear()} Samir Khanal
          </p>
          <div className="flex items-center gap-4">
            {footerSocials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted-foreground))] transition-colors duration-150 hover:text-[hsl(var(--accent))]"
                aria-label={name}
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
