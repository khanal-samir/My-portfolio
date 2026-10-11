"use client";

import { useEffect, useRef, useState } from "react";

// ms; the exit curtain in globals.css (.intro-out) runs for the gap between these
const LEAVE_AT = 2200;
const REMOVE_AT = 2900;

// ponytail: outline-draw on a script font, not a real signature path.
// For a true pen stroke, trace the signature in Figma and animate that <path>.
export default function Intro() {
  const [phase, setPhase] = useState<"idle" | "in" | "out" | "gone">("idle");
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("gone");
      return;
    }
    // Start CSS and counter together, after hydration, so they stay in sync
    setPhase("in");
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / (LEAVE_AT - 300), 1);
      if (countRef.current)
        countRef.current.textContent = String(Math.round(p * 100)).padStart(3, "0");
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
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(var(--background))] text-[hsl(var(--foreground))] ${phase === "in" ? "intro-play" : ""} ${phase === "out" ? "intro-play intro-out" : ""}`}
    >
      <svg viewBox="0 0 900 220" className="w-[min(90vw,52rem)] overflow-visible">
        <defs>
          <mask id="intro-mask">
            <rect className="intro-wipe" x="-20" y="0" width="940" height="220" fill="#fff" />
          </mask>
        </defs>
        <text
          x="450"
          y="140"
          textAnchor="middle"
          mask="url(#intro-mask)"
          className="intro-name font-script"
        >
          Samir Khanal
        </text>
      </svg>
      <span
        ref={countRef}
        className="absolute bottom-6 right-6 font-mono text-xs tabular-nums text-[hsl(var(--muted-foreground))]"
      >
        000
      </span>
    </div>
  );
}
