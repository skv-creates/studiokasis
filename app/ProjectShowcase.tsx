"use client";

import { useEffect, useState } from "react";

// Images featured across the three case-study pages, curated down to ones
// that are actually landscape and reasonably close to this slot's ~1.78:1
// frame — object-cover on a portrait or near-square source (a pattern card,
// a phone-shaped badge, the BDC wordmark's ~4:1 logo lockup) crops so hard it
// reads as badly zoomed-in rather than a clean crop, so those are left out.
// Videos (.mp4) are skipped too since this is a still-image loop, and so is
// web-design-photo-base.jpg — on its own case-study page a screen-recording
// video is composited on top of it, so shown alone here it's just an empty
// laptop screen.
const PAYHAWK = "/work/payhawk";
const BDC = "/work/bulgarian-design-council";
const BBD = "/work/bulgaria-by-design";

const SHOWCASE_IMAGES = [
  `${PAYHAWK}/card.jpg`,
  `${PAYHAWK}/deck-future-of-banking.jpg`,
  `${PAYHAWK}/glossary.jpg`,
  `${PAYHAWK}/illustration-flag.png`,

  `${BDC}/brand-photography-location.jpg`,
  `${BDC}/campaign-design-mockup.jpg`,
  `${BDC}/edf-stage.jpg`,
  `${BDC}/pechakucha-stage.jpg`,
  `${BDC}/print-material-flatlay.jpg`,
  `${BDC}/social-templates-mockup.jpg`,
  `${BDC}/team-photography.jpg`,
  `${BDC}/team-portraits.png`,

  `${BBD}/01-new-symbol.jpg`,
  `${BBD}/02-ministry-lockup.jpg`,
  `${BBD}/03-ministries-grid.jpg`,
  `${BBD}/04-billboard-tourism.jpg`,
  `${BBD}/07-website-mockup.jpg`,
  `${BBD}/08-id-badge.jpg`,
  `${BBD}/09-door-signage.jpg`,
  `${BBD}/11-manifesto-slide.jpg`,
  `${BBD}/12-tedx-stage.jpg`,
];

const INTERVAL_MS = 1700;
const FADE_MS = 500;

/** Shuffles everything after the first item, leaving index 0 untouched. This
 * keeps the very first frame identical between server and client render —
 * shuffling the whole array inside useState would use Math.random() during
 * SSR too, so the server and the client's pre-hydration render would pick
 * different first images and React would throw a hydration mismatch. */
function shuffleTail<T>(items: T[]): T[] {
  const [head, ...rest] = items;
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }
  return [head, ...rest];
}

/**
 * A little randomized, looping showcase of images pulled from across all
 * three case studies — not just each project's single hero shot. Images are
 * revealed one at a time (not all preloaded up front) so the loop doesn't
 * force the homepage to download 30+ images before it's usable; each next
 * image starts loading a beat before it's due, so the crossfade stays smooth.
 */
export default function ProjectShowcase() {
  const [order, setOrder] = useState(SHOWCASE_IMAGES);
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState<number[]>([0]);

  // Randomize the rest of the order only after mount (client-only) — this
  // is the standard hydration-safe pattern for client-only randomness (see
  // react.dev's hydrateRoot docs), which necessarily means calling setState
  // straight from an effect body.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOrder((prev) => shuffleTail(prev));
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const id = setInterval(() => {
      setIndex((current) => {
        const next = (current + 1) % order.length;
        setMounted((prev) => (prev.includes(next) ? prev : [...prev, next]));
        return next;
      });
    }, INTERVAL_MS);

    return () => clearInterval(id);
  }, [order]);

  return (
    <div className="relative h-full w-full" aria-hidden="true">
      {mounted.map((i) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          key={order[i]}
          src={order[i]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover ease-out"
          style={{
            opacity: i === index ? 1 : 0,
            transitionProperty: "opacity",
            transitionDuration: `${FADE_MS}ms`,
          }}
        />
      ))}
    </div>
  );
}
