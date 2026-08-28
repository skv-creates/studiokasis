"use client";

import { useEffect, useState } from "react";

const ASSET = "/work/bulgarian-design-council/hero-cycle";
const FRAME_COUNT = 4;
const INTERVAL_MS = 5000;
const FADE_MS = 600;

const COLUMNS = [
  { key: "a", frames: ["section-A1.jpg", "section-A2.jpg", "section-A3.jpg", "section-A4.jpg"] },
  { key: "b", frames: ["section-B1.jpg", "section-B2.jpg", "section-B3.jpg", "section-B4.jpg"] },
  { key: "c", frames: ["section-C1.jpg", "section-C2.jpg", "section-C3.jpg", "section-C4.jpg"] },
] as const;

export default function ColumnCycle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % FRAME_COUNT), INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-3 sm:gap-6 sm:px-10 lg:px-11">
      {COLUMNS.map((col) => (
        <div key={col.key} className="relative aspect-[459/574] w-full">
          {col.frames.map((frame, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={frame}
              src={`${ASSET}/${frame}`}
              alt=""
              className="absolute inset-0 h-full w-full object-contain transition-opacity ease-in-out"
              style={{ opacity: i === index ? 1 : 0, transitionDuration: `${FADE_MS}ms` }}
            />
          ))}
          <div className="absolute inset-x-3 bottom-3 flex gap-1.5">
            {col.frames.map((frame, i) => (
              <div
                key={frame}
                className={`h-[3px] flex-1 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
