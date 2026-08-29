"use client";

import { useEffect, useState } from "react";

const ASSET = "/work/bulgarian-design-council";

const VARIANTS = [
  { pattern: "pattern-1.png", banner: "banner-1.png" },
  { pattern: "pattern-2.png", banner: "banner-2.png" },
  { pattern: "pattern-3.png", banner: "banner-3.png" },
] as const;

/**
 * The pattern tile and the NDK poster stay in the same frame, looping
 * through the 3 exported color variants together on a timer — a hard cut
 * each time, no crossfade.
 */
export default function PatternBannerCycle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % VARIANTS.length), 2200);
    return () => clearInterval(id);
  }, []);

  const variant = VARIANTS[index];

  return (
    <section className="flex items-center justify-center gap-10 px-6 py-16 sm:px-10 lg:justify-between lg:gap-6 lg:px-28 lg:py-24">
      <div className="aspect-[320/502] w-[25%] max-w-[320px] shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${ASSET}/${variant.pattern}`}
          alt="Instagram tile using the Council's pattern system"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="aspect-[651/807] w-[50%] max-w-[651px] shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${ASSET}/${variant.banner}`}
          alt="NDK Sofia event poster, 'Bulgaria chrez dizayn'"
          className="h-full w-full object-contain"
        />
      </div>
    </section>
  );
}
