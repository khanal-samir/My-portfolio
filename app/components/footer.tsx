import { email, footerSocials } from "../lib/data";
import HandNote from "./ui/hand-note";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-3xl border-x border-solid border-[hsl(var(--border))] px-4 py-12">
        <HandNote>say hi</HandNote>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-[hsl(var(--foreground))]">
          Let&apos;s work together
        </h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-[hsl(var(--muted-foreground))]">
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </p>
        <InteractiveHoverButton href={`mailto:${email}`} className="mt-6">
          {email}
        </InteractiveHoverButton>
      </div>

      <div>
        <div className="mx-auto flex max-w-3xl border-x border-t border-solid border-[hsl(var(--border))] flex-col-reverse items-center justify-between gap-4 px-4 py-6 sm:flex-row">
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
