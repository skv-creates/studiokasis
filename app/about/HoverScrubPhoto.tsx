"use client";

import { useState } from "react";

// Same frame set and cursor-driven scrub mechanic as the homepage's portrait
// flipbook — reused here as a hover-vs-static test for this photo section.
const FRAMES = [
  "/loader/f1.jpg",
  "/loader/f2.jpg",
  "/loader/f3.jpg",
  "/loader/f4.jpg",
  "/loader/f5.jpg",
  "/loader/f6.jpg",
  "/loader/f7.jpg",
  "/loader/f8.jpg",
  "/loader/f9.jpg",
  "/team.jpg",
];

export default function HoverScrubPhoto() {
  const [scrubFrame, setScrubFrame] = useState<number | null>(null);
  const displayFrame = scrubFrame ?? FRAMES.length - 1;

  return (
    <div
      className="relative aspect-[613/376.584] w-full cursor-ew-resize overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const p = (e.clientX - rect.left) / rect.width;
        const clamped = Math.min(0.999, Math.max(0, p));
        setScrubFrame(Math.floor(clamped * FRAMES.length));
      }}
      onMouseLeave={() => setScrubFrame(null)}
    >
      {FRAMES.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={
            i === FRAMES.length - 1
              ? "Kalina and Stefan working together in the studio"
              : ""
          }
          aria-hidden={i !== FRAMES.length - 1}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: i === displayFrame ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
