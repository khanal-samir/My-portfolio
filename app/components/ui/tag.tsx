export default function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-solid border-[hsl(var(--border))] bg-[hsl(var(--muted))]/50 px-1.5 py-0.5 font-mono text-xs text-[hsl(var(--muted-foreground))]">
      {children}
    </span>
  );
}
