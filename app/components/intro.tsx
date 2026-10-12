"use client";

import { useEffect, useRef, useState } from "react";
import { AppleHelloEffectNepali } from "./ui/apple-hello-effect-nepali";

// ms; the exit curtain in globals.css (.intro-out) runs for the gap between these
const LEAVE_AT = 2200;
const REMOVE_AT = 2900;

export default function Intro() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("gone");
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / (LEAVE_AT - 300), 1);
      if (countRef.current)
        countRef.current.textContent = String(Math.round(p * 100)).padStart(
          3,
          "0",
        );
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const leave = setTimeout(() => setPhase("out"), LEAVE_AT);
    const remove = setTimeout(() => setPhase("gone"), REMOVE_AT);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(leave);
      clearTimeout(remove);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      id="intro"
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(var(--background))] text-[hsl(var(--foreground))] ${phase === "out" ? "intro-out" : ""}`}
    >
      <AppleHelloEffectNepali
        lang="ne"
        // Finish the 5.4-second pen sequence before the curtain lifts at 2.2s.
        durationScale={0.34}
        className="h-auto w-[min(76vw,28rem)]"
      />
      <span
        ref={countRef}
        className="absolute bottom-6 right-6 font-mono text-xs tabular-nums text-[hsl(var(--muted-foreground))]"
      >
        000
      </span>
    </div>
  );
}
