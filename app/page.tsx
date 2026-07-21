"use client";

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

const DURATION = 400; // ms for the whole sequence

export default function Home() {
  const [frame, setFrame] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
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

  return (
    <main className="flex min-h-screen flex-col px-6 py-10 sm:px-10 lg:px-28 lg:py-14">
      {/* About */}
      <header
        className={`flex max-w-[358px] flex-col items-start gap-7 transition-opacity duration-700 ease-out ${
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
      <div className="flex flex-1 items-center justify-center py-16">
        <figure className="relative aspect-[486/324] w-full max-w-[486px]">
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
              style={{ opacity: i === frame ? 1 : 0 }}
            />
          ))}
          <span className="pointer-events-none absolute left-3 top-[55%] font-hand text-xs uppercase tracking-tight text-background transition-opacity duration-700 ease-out"
            style={{ opacity: done ? 1 : 0 }}
          >
            Kalina
          </span>
          <span className="pointer-events-none absolute right-3 top-[55%] font-hand text-xs uppercase tracking-tight text-background transition-opacity duration-700 ease-out"
            style={{ opacity: done ? 1 : 0 }}
          >
            Stefan
          </span>
        </figure>
      </div>

      {/* Wordmark */}
      <h1
        className={`whitespace-nowrap text-[17vw] font-bold leading-none tracking-[-0.07em] transition-opacity duration-700 ease-out ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        Studio Kasis
      </h1>

      {/* Footer */}
      <footer
        className={`mt-10 flex items-center justify-between text-xs font-medium transition-opacity duration-700 ease-out ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        <p>© Studio Kasis 2026</p>
        <div className="flex items-center gap-10">
          <span>Amsterdam</span>
          <span>Sofia</span>
        </div>
      </footer>
    </main>
  );
}
