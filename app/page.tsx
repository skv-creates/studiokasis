"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Flipbook frames, in play order. The montage flashes through f1–f9 and
// settles on the hero portrait (the founders standing) as the final frame.
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

const DURATION = 2000; // ms for the whole sequence

export default function Home() {
  const [frame, setFrame] = useState(0);
  const [done, setDone] = useState(false);
  const [reduced, setReduced] = useState(false);
  // Frame chosen by the cursor while hovering; null when not scrubbing.
  const [scrubFrame, setScrubFrame] = useState<number | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
      setReduced(true);
      setFrame(FRAMES.length - 1);
      setDone(true);
      return;
    }

    let raf = 0;
    let cancelled = false;

    // Preload every frame so the flipbook never flashes a blank.
    Promise.all(
      FRAMES.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = src;
          })
      )
    ).then(() => {
      if (cancelled) return;
      const start = performance.now();
      const N = FRAMES.length;

      const tick = (now: number) => {
        const p = Math.min((now - start) / DURATION, 1);
        const eased = p * p; // ease-in: flips accelerate toward the end
        setFrame(Math.min(N - 1, Math.floor(eased * N)));
        if (p < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setFrame(N - 1);
          setDone(true);
        }
      };
      raf = requestAnimationFrame(tick);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, []);

  // While hovering, the cursor drives the frame; otherwise show the intro frame.
  const displayFrame = scrubFrame ?? frame;

  return (
    <main className="@container relative flex h-[100svh] flex-col overflow-hidden px-6 py-8 sm:px-10 lg:px-28 lg:py-10">
      {/* Logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/about/logo-nav.svg"
        alt="Studio Kasis"
        className={`pointer-events-none absolute right-6 top-8 h-6 w-auto transition-opacity duration-700 ease-out sm:right-10 lg:right-28 lg:top-10 ${
          done ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* About */}
      <header
        className={`flex max-w-[358px] shrink-0 flex-col items-start gap-6 transition-opacity duration-700 ease-out ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-base leading-[1.4]">
          We are Kasis. A brand design studio. We partner with good people who
          believe in good design to create brands, products and campaigns that
          set their business apart.
        </p>
        <a
          href="mailto:hello@studiokasis.com"
          className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-80"
        >
          Say hello
        </a>
      </header>

      {/* Portrait flipbook */}
      <div className="grid min-h-0 flex-1 grid-cols-12 items-center gap-4 py-6">
        <figure
          className="relative col-span-12 aspect-[486/324] h-full max-h-[324px] max-w-full cursor-ew-resize justify-self-center lg:col-span-4 lg:col-start-5 lg:h-auto lg:max-h-full lg:w-full lg:justify-self-stretch"
          onMouseMove={(e) => {
            // Only scrub once the intro has settled and motion is allowed.
            if (!done || reduced) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const p = (e.clientX - rect.left) / rect.width;
            const clamped = Math.min(0.999, Math.max(0, p));
            setScrubFrame(Math.floor(clamped * FRAMES.length));
          }}
          onMouseLeave={() => setScrubFrame(null)}
        >
          {FRAMES.map((src, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={src}
              src={src}
              alt={
                i === FRAMES.length - 1
                  ? "Kalina and Stefan, the founders of Studio Kasis"
                  : ""
              }
              aria-hidden={i !== FRAMES.length - 1}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ opacity: i === displayFrame ? 1 : 0 }}
            />
          ))}
          <span className="pointer-events-none absolute left-3 top-[55%] font-hand text-xs uppercase tracking-tight text-background transition-opacity ease-out"
            style={{
              opacity: scrubFrame !== null ? 0 : done ? 1 : 0,
              transitionDuration: scrubFrame !== null ? "120ms" : done ? "120ms" : "700ms",
            }}
          >
            Kalina
          </span>
          <span className="pointer-events-none absolute right-3 top-[55%] font-hand text-xs uppercase tracking-tight text-background transition-opacity ease-out"
            style={{
              opacity: scrubFrame !== null ? 0 : done ? 1 : 0,
              transitionDuration: scrubFrame !== null ? "120ms" : done ? "120ms" : "700ms",
            }}
          >
            Stefan
          </span>
        </figure>
      </div>

      {/* Wordmark, sized to sit flush inside the 12 columns the grid overlay
          draws. cqw measures against main's content box rather than the
          viewport, which is what kept the old vw value overflowing the gutters.
          Inter Bold at tracking -0.07em inks "Studio Kasis" 5.23866x its font
          size, so 100/5.23866 = 19.0888cqw fills the columns exactly; the
          negative margin cancels the S's 0.04135em left side bearing so the
          glyphs, not the text box, line up with the gutters. */}
      <h1
        className={`ml-[-0.04135em] shrink-0 whitespace-nowrap text-[19.0888cqw] font-bold leading-none tracking-[-0.07em] transition-opacity duration-700 ease-out ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        Studio Kasis
      </h1>

      {/* Footer */}
      <footer
        className={`mt-6 flex shrink-0 items-center justify-between text-xs font-medium transition-opacity duration-700 ease-out ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        <p>© Studio Kasis 2026</p>
        <div className="flex items-center gap-10">
          <Link href="/about" className="transition-opacity hover:opacity-70">
            About
          </Link>
          <span>Amsterdam</span>
          <span>Sofia</span>
        </div>
      </footer>
    </main>
  );
}
