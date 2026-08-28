"use client";

import { useEffect, useRef, useState } from "react";

const ASSET = "/work/bulgarian-design-council";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/**
 * Scroll-pinned reveal for "What we decided": the small icon next to the copy
 * grows into a full-bleed panel (staying white/black the whole time), flips
 * to the reversed black/white palette only in the last stretch of that
 * growth, then the wordmark lockup slides in from the right and pushes the
 * mark-alone panel off to the left — three states that used to be three
 * separate stacked blocks, now scrubbed by scroll position while the
 * viewport itself stays pinned (see Mammut's Eiger Extreme page for the
 * reference interaction).
 */
type Box = { left: number; top: number; width: number; height: number };

export default function DecidedReveal() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const restRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const [rects, setRects] = useState<{ from: Box; to: Box } | null>(null);
  const [raw, setRaw] = useState(0);

  useEffect(() => {
    let ticking = false;

    function update() {
      ticking = false;

      // Positions are measured relative to the sticky container itself, not the
      // viewport — once the track's scroll range is used up, the sticky element
      // unsticks and its own viewport position shifts, which would otherwise
      // throw off a plain getBoundingClientRect() reading.
      if (restRef.current && targetRef.current && stickyRef.current) {
        const stickyRect = stickyRef.current.getBoundingClientRect();
        const fromRect = restRef.current.getBoundingClientRect();
        const toRect = targetRef.current.getBoundingClientRect();
        setRects({
          from: {
            left: fromRect.left - stickyRect.left,
            top: fromRect.top - stickyRect.top,
            width: fromRect.width,
            height: fromRect.height,
          },
          to: {
            left: toRect.left - stickyRect.left,
            top: toRect.top - stickyRect.top,
            width: toRect.width,
            height: toRect.height,
          },
        });
      }

      const track = trackRef.current;
      if (!track) return;
      const trackRect = track.getBoundingClientRect();
      const scrollable = trackRect.height - window.innerHeight;
      setRaw(scrollable > 0 ? clamp01(-trackRect.top / scrollable) : 0);
    }

    function onScrollOrResize() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  // Phase 1 (0 → 0.4): grow, staying white/black the whole time.
  const sizeProgress = clamp01(raw / 0.4);
  // Phase 2 (0.3 → 0.4): flip to the reversed palette in the last stretch of the grow.
  const colorProgress = clamp01((raw - 0.3) / 0.1);
  // Phase 3 (0.5 → 0.8): the wordmark slides in from the right, pushing the mark away.
  const slideProgress = clamp01((raw - 0.5) / 0.3);
  const textOpacity = 1 - clamp01(raw / 0.25);

  const box = rects
    ? {
        left: lerp(rects.from.left, rects.to.left, sizeProgress),
        top: lerp(rects.from.top, rects.to.top, sizeProgress),
        width: lerp(rects.from.width, rects.to.width, sizeProgress),
        height: lerp(rects.from.height, rects.to.height, sizeProgress),
      }
    : null;

  return (
    <div ref={trackRef} className="relative" style={{ height: "280vh" }}>
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden bg-about-bg">
        <div className="px-6 py-16 sm:px-10 lg:px-28 lg:py-24">
          <div className="mx-auto grid max-w-[1288px] grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
            {/* Invisible placeholder: sized/positioned exactly like the real icon box, used only to measure the animation's start rect */}
            <div
              ref={restRef}
              aria-hidden="true"
              className="pointer-events-none flex items-center justify-center bg-white p-10 opacity-0 lg:col-span-3"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${ASSET}/decided-mark.svg`} alt="" className="w-full max-w-[240px]" />
            </div>
            <div style={{ opacity: textOpacity }} className="lg:col-span-7 lg:col-start-6">
              <h2 className="font-tight text-[40px] leading-[1.1] tracking-[-1px] lg:text-[64px]">
                What we decided
              </h2>
              <p className="mt-10 max-w-[741px] whitespace-pre-line text-[18px] leading-[1.5] lg:mt-16 lg:text-[22px]">
                {`We didn't want to just "modernise the logo." Instead, we decided to build a system that could stand both in a ministry meeting and a school lecture hall without changing its story.\n\nWe positioned the Council right in the middle of that gap, instead of choosing a side. The foundation is a clean, minimal system, the part that reads as credible in front of institutions and funders. Colour and a custom pattern system carry the other half, the warmth, the people, the education work, expressed visually rather than explained.`}
              </p>
            </div>
          </div>
        </div>

        {/* Invisible placeholder: sized/positioned exactly like the full-bleed target, used only to measure the animation's end rect */}
        <div
          ref={targetRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 aspect-[1512/831] w-full -translate-y-1/2 opacity-0"
        />

        {box && (
          <div
            className="absolute overflow-hidden"
            style={{ left: box.left, top: box.top, width: box.width, height: box.height }}
          >
            {/* Layer 1: the icon at rest, white bg — stays fully opaque until the color flip near the end of the grow */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-white p-10"
              style={{ opacity: 1 - colorProgress }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${ASSET}/decided-mark.svg`} alt="What we decided" className="w-full max-w-[240px]" />
            </div>
            {/* Layer 2: the reversed-palette mark alone, black bg — fades in for the flip, then slides out left, pushed by the wordmark */}
            <div
              className="absolute inset-0 bg-black"
              style={{ opacity: colorProgress, transform: `translateX(${-slideProgress * 100}%)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${ASSET}/bdc-mark-alone.jpg`} alt="The rebuilt shevitsa mark" className="h-full w-full object-cover" />
            </div>
            {/* Layer 3: the wordmark lockup, black bg — slides in from the right to take over as the final state */}
            <div
              className="absolute inset-0 bg-black"
              style={{ transform: `translateX(${(1 - slideProgress) * 100}%)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/bdc-wordmark-lockup.jpg`}
                alt="Bulgarian Design Council wordmark lockup"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
