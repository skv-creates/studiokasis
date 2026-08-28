import type { Metadata } from "next";
import Link from "next/link";
import ColumnCycle from "./ColumnCycle";

export const metadata: Metadata = {
  title: "Bulgarian Design Council — Studio Kasis",
  description:
    "A new identity for the first Bulgarian Design Council: branding, strategy and positioning, creative direction, website design, photography.",
};

/**
 * Single-viewport page, no scrolling (Figma: case-study-desktop-bdc-01,
 * node 4333:943) — three columns cycling through the same shared frame
 * index every 5s with a short crossfade between frames.
 */
export default function BulgarianDesignCouncil() {
  return (
    <div className="flex flex-col bg-about-bg text-about-fg lg:h-screen">
      <header className="flex shrink-0 justify-center px-6 py-6">
        <Link href="/" aria-label="Studio Kasis home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/about/logo-nav.svg" alt="Studio Kasis" className="h-6 w-auto" />
        </Link>
      </header>

      <div className="flex flex-col justify-center lg:flex-1">
        <ColumnCycle />
      </div>

      <div className="flex shrink-0 flex-col gap-3 px-6 py-8 sm:px-10 lg:px-11">
        <h1 className="font-tight text-[28px] leading-[1.2] lg:text-[36px]">
          Bulgarian Design Council
        </h1>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[631px] text-[16px] leading-[1.4]">
            Branding, strategy and positioning, creative direction, website
            design, photography
          </p>
          {/* Not yet a link — destination page doesn't exist yet */}
          <p className="text-[16px] leading-[1.4] sm:text-right">About the project</p>
        </div>
      </div>
    </div>
  );
}
