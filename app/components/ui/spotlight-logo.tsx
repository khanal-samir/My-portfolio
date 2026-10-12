"use client";

// Adapted from Chánh Đại’s Spotlight Logo (MIT); see THIRD_PARTY_NOTICES.md.
// The custom SK paths replace the reference component’s personal logomark.
import { useId, useRef, type PointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

type Point = readonly [number, number];

// Keep both outlines in the same direction for the front-face edge rule.
const letters: readonly (readonly Point[])[] = [
  // S
  [
    [144, 0],
    [0, 0],
    [0, 106],
    [100, 106],
    [100, 144],
    [0, 144],
    [0, 180],
    [144, 180],
    [144, 70],
    [44, 70],
    [44, 36],
    [144, 36],
  ],
  // K
  [
    [188, 180],
    [232, 180],
    [232, 108],
    [290, 180],
    [346, 180],
    [272, 90],
    [342, 0],
    [288, 0],
    [232, 72],
    [232, 0],
    [188, 0],
  ],
];

function project([x, y]: Point, depth = 0): Point {
  // A shallow perspective keeps the K's diagonal arms distinct on screen.
  return [
    Number((x + y * 0.3 + 36).toFixed(2)),
    Number((y * 0.85 - x * 0.08 + 78 + depth).toFixed(2)),
  ];
}

function polygon(points: readonly Point[]) {
  return `M${points.map(([x, y]) => `${x},${y}`).join("L")}Z`;
}

function artwork(press: number) {
  const tops = letters.map((points) =>
    polygon(points.map((p) => project(p, press))),
  );
  const sides = letters.flatMap((points) =>
    points.flatMap((point, index) => {
      const next = points[(index + 1) % points.length];
      // Only the edges facing the viewer expose an extruded side.
      if (project(next)[0] <= project(point)[0]) return [];
      return [
        polygon([
          project(point, press),
          project(next, press),
          project(next, 24),
          project(point, 24),
        ]),
      ];
    }),
  );
  return {
    tops: tops.join(""),
    sides: sides.join(""),
    outline: [...tops, ...sides].join(""),
  };
}

const normal = artwork(0);
const pressed = artwork(12);
const spring = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
} as const;

export function SpotlightLogo() {
  const id = useId();
  const ref = useRef<SVGSVGElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(240);
  const pointerY = useMotionValue(152);
  const cx = useSpring(pointerX, { stiffness: 300, damping: 30, mass: 0.1 });
  const cy = useSpring(pointerY, { stiffness: 300, damping: 30, mass: 0.1 });
  const transition = reduceMotion ? { duration: 0 } : spring;

  function trackPointer(event: PointerEvent<SVGSVGElement>) {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 480);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 304);
  }

  return (
    <motion.svg
      ref={ref}
      aria-hidden="true"
      className="h-auto w-full touch-manipulation select-none"
      viewBox="0 0 480 304"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="normal"
      whileTap={reduceMotion ? undefined : "pressed"}
      onPointerMove={trackPointer}
      onPointerLeave={() => {
        pointerX.set(240);
        pointerY.set(152);
      }}
    >
      <defs>
        <pattern
          id={`${id}-hatch`}
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1L1 -1M0 8L8 0M7 9L9 7"
            stroke="hsl(var(--foreground) / 0.13)"
          />
        </pattern>
        <motion.path
          id={`${id}-face`}
          variants={{
            normal: { d: normal.tops },
            pressed: { d: pressed.tops },
          }}
          transition={transition}
        />
        <motion.path
          id={`${id}-outline`}
          variants={{
            normal: { d: normal.outline },
            pressed: { d: pressed.outline },
          }}
          transition={transition}
        />
        <motion.radialGradient
          id={`${id}-spotlight`}
          cx={reduceMotion ? 240 : cx}
          cy={reduceMotion ? 152 : cy}
          r="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="hsl(var(--foreground))" />
          <stop offset="0.5" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
          <stop offset="1" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </motion.radialGradient>
      </defs>

      <motion.path
        fill="hsl(var(--muted))"
        variants={{
          normal: { d: normal.sides },
          pressed: { d: pressed.sides },
        }}
        transition={transition}
      />
      <use href={`#${id}-face`} fill="hsl(var(--background))" />
      <use href={`#${id}-face`} fill={`url(#${id}-hatch)`} />
      <use
        href={`#${id}-outline`}
        stroke="hsl(var(--foreground) / 0.25)"
        strokeLinejoin="round"
      />
      <use
        href={`#${id}-outline`}
        stroke={`url(#${id}-spotlight)`}
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
