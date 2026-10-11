// Handwritten label in the left gutter, pointing into the column. Wide screens only.
export default function HandNote({ children }: { children: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-full top-1/2 mr-5 hidden -translate-y-1/2 select-none items-center gap-1 whitespace-nowrap font-hand text-xl leading-none text-[hsl(var(--accent))]/80 xl:flex"
    >
      {children}
      <svg
        viewBox="0 0 40 40"
        className="size-8 shrink-0 rotate-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 10c12-4 24 2 30 16" />
        <path d="m27 23 7 4 1-8" />
      </svg>
    </div>
  );
}
