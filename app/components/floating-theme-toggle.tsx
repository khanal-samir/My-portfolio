"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

export default function FloatingThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  const toggleTheme = useCallback(() => {
    const button = buttonRef.current;
    if (!button) return;

    const { top, left, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const maxRadius = Math.hypot(
      Math.max(x, viewportWidth - x),
      Math.max(y, viewportHeight - y),
    );

    const newTheme = isDark ? "light" : "dark";

    if (typeof document.startViewTransition !== "function") {
      setTheme(newTheme);
      return;
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    });

    const ready = transition?.ready;
    if (ready && typeof ready.then === "function") {
      ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 400,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });
    }
  }, [isDark, setTheme]);

  if (!mounted) {
    return (
      <button
        type="button"
        className="fixed bottom-6 right-6 z-50 flex size-11 items-center justify-center rounded-full border border-solid border-[hsl(var(--border))] bg-[hsl(var(--background))] shadow-lg transition-transform duration-150 hover:scale-110 cursor-pointer"
      >
        <Sun className="size-5" />
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 flex size-11 items-center justify-center rounded-full border border-solid border-[hsl(var(--border))] bg-[hsl(var(--background))] shadow-lg transition-transform duration-150 hover:scale-110 cursor-pointer"
    >
      {isDark ? (
        <Sun className="size-5 text-[hsl(var(--foreground))]" />
      ) : (
        <Moon className="size-5 text-[hsl(var(--foreground))]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
