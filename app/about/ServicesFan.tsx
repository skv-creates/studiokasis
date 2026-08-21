"use client";

import { useEffect, useRef } from "react";

const SERVICES = [
  { number: "01", label: <>Brand Strategy</>, rotate: 0 },
  { number: "02", label: <>Art<br />Direction</>, rotate: 5.36 },
  { number: "03", label: <>Creative<br />Direction</>, rotate: -0.17 },
  { number: "04", label: <>Web<br />Design</>, rotate: 4.29 },
];

function smoothstep(t: number) {
  const c = Math.min(1, Math.max(0, t));
  return c * c * (3 - 2 * c);
}

// Cards sit stacked at the row's center until this section nears the middle
// of the viewport, then fan out sideways into place — and fold back to the
// stack as it scrolls past, in either scroll direction, since the motion is
// driven by distance from viewport-center rather than scroll direction.
export default function ServicesFan() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const offsets = useRef<number[]>([]);

  useEffect(() => {
    const measure = () => {
      const row = rowRef.current;
      if (!row) return;
      const rowCenter = row.offsetWidth / 2;
      offsets.current = cardRefs.current.map((card) => {
        if (!card) return 0;
        return card.offsetLeft + card.offsetWidth / 2 - rowCenter;
      });
    };

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // Ramp over ~90% of a viewport height on the way in and the way out,
      // so the fan-out plays out gradually across the scroll instead of
      // snapping shut before the section is even fully in view.
      const transitionDistance = viewportH * 0.9;
      const tEnter = (viewportH - rect.top) / transitionDistance;
      const tExit = (rect.top + rect.height) / transitionDistance;
      const progress = smoothstep(Math.min(tEnter, tExit));

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const offset = offsets.current[i] ?? 0;
        const tx = -offset * (1 - progress);
        const rot = SERVICES[i].rotate * progress;
        const scale = 0.9 + 0.1 * progress;
        card.style.transform = `translateX(${tx}px) rotate(${rot}deg) scale(${scale})`;
      });
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-20 sm:px-10 sm:py-28 lg:px-[107px] lg:py-40"
    >
      <div
        ref={rowRef}
        className="mx-auto flex max-w-[1512px] flex-wrap items-start justify-center gap-6 lg:flex-nowrap lg:justify-start lg:gap-0"
      >
        {SERVICES.map((service, i) => (
          <div
            key={service.number}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="relative flex h-[280px] w-[320px] items-center justify-center bg-about-pink will-change-transform"
          >
            <span className="absolute left-9 top-8 font-mono-tight text-[24px] tracking-[-1px]">
              {service.number}
            </span>
            <span className="font-tight px-9 text-center text-[28px] leading-[1.2] lg:text-[33px]">
              {service.label}
            </span>
          </div>
        ))}
      </div>

      {/* Doodle overlay — placed loosely near the cards, not aligned to them */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <p
          style={{ left: "4%", top: "62%", width: "14%" }}
          className="absolute rotate-[3.5deg] font-hand text-[18px] uppercase tracking-tight text-about-accent"
        >
          A little section of what we offer?
        </p>
      </div>
    </section>
  );
}
