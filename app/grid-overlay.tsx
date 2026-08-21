"use client";

import { useEffect, useState } from "react";

const COLUMNS = 12;

// Layout guide toggled with the "g" key. Columns line up with the page
// gutters in app/page.tsx, so the two must stay in sync.
export default function GridOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "g" && e.key !== "G") return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      // Don't hijack the key while someone is typing.
      const target = e.target as HTMLElement | null;
      if (
        target?.isContentEditable ||
        /^(input|textarea|select)$/i.test(target?.tagName ?? "")
      ) {
        return;
      }

      setVisible((v) => !v);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 px-6 py-8 sm:px-10 lg:px-28 lg:py-10"
    >
      <div className="grid h-full grid-cols-12 gap-4">
        {Array.from({ length: COLUMNS }, (_, i) => (
          <div key={i} className="h-full bg-foreground/10" />
        ))}
      </div>
      <span className="absolute bottom-2 right-3 text-[10px] font-medium uppercase tracking-wide text-foreground/40">
        {COLUMNS} cols · g
      </span>
    </div>
  );
}
