import type { Metadata } from "next";
import Link from "next/link";
import ServicesFan from "./ServicesFan";
import HoverScrubPhoto from "./HoverScrubPhoto";

export const metadata: Metadata = {
  title: "About — Studio Kasis",
  description:
    "We're two designers who think alike enough to work as one, and differently enough that neither of us builds a brand alone in our heads.",
};

// href is set once a case study page exists; the rest stay as plain names.
const CLIENTS: { name: string; href?: string }[] = [
  { name: "Payhawk", href: "/work/payhawk" },
  { name: "Bulgarian Design Council", href: "/work/bulgarian-design-council" },
  { name: "Bulgaria by Design" },
];

/**
 * Every hand-drawn note/arrow below is positioned as a free-floating overlay,
 * percentage-anchored to its section (not the grid) — matching the Figma
 * source where these doodles sit on top of, and ignore, the auto-layout.
 * "Figma Hand" isn't a licensed webfont; Caveat stands in for it.
 */
export default function About() {
  return (
    <div className="bg-about-bg text-about-fg">
      {/* Navigation */}
      <header className="sticky top-0 z-50 flex justify-center bg-about-bg px-6 py-6">
        <Link href="/" aria-label="Studio Kasis home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/about/logo-nav.svg" alt="Studio Kasis" className="h-6 w-auto" />
        </Link>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 sm:px-10 lg:px-28 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-24">
          <h1 className="font-tight text-[40px] leading-[1.1] tracking-[-1px] lg:col-span-6 lg:row-start-1 lg:text-[64px]">
            We are Kasis.
            <br />
            A strategic brand design studio.
          </h1>
          <p className="text-[18px] leading-[1.5] lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:text-[24px]">
            We partner with good people who believe in good design to create
            brands, products and campaigns that set their business apart.
          </p>
        </div>
      </section>

      {/* Profiles */}
      <section className="relative bg-about-pink px-6 py-16 sm:px-10 lg:px-28 lg:py-32">
        <div className="relative mx-auto grid max-w-[1288px] grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-12">
          <figure className="relative aspect-[413/422] overflow-hidden lg:col-span-4 lg:col-start-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/about/stefan.jpg" alt="Stefan Vladimirov" className="h-full w-full object-cover" />
          </figure>
          <figure className="relative aspect-[413/422] overflow-hidden lg:col-span-4 lg:col-start-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/about/kalina.jpg" alt="Kalina Sodeva" className="h-full w-full object-cover" />
          </figure>
          <p className="font-tight text-[16px] tracking-[0.05em] lg:col-span-4 lg:col-start-3">
            Stefan Vladimirov
          </p>
          <p className="font-tight text-[16px] tracking-[0.05em] lg:col-span-4 lg:col-start-7">
            Kalina Sodeva
          </p>
        </div>

        {/* Doodle overlay */}
        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
          <p
            style={{ left: "7.41%", top: "17.14%", width: "10%" }}
            className="absolute -translate-y-1/2 -rotate-[13.65deg] font-hand text-[20px] uppercase tracking-tight text-about-accent"
          >
            We look so professional
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/about/union-profiles.svg"
            alt=""
            aria-hidden="true"
            style={{ left: "13.57%", top: "24.62%", width: "5.24%" }}
            className="absolute"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/about/vector-profiles.svg"
            alt=""
            aria-hidden="true"
            style={{ left: "77.58%", top: "78.93%", width: "17%" }}
            className="absolute"
          />
        </div>
      </section>

      {/* Why us */}
      <section className="relative px-6 py-16 sm:px-10 lg:px-28 lg:py-24">
        <div className="mx-auto grid max-w-[1288px] grid-cols-1 gap-x-6 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-6">
            <h2 className="font-tight text-[40px] leading-[1.1] tracking-[-1px] mb-10 lg:mb-20 lg:text-[64px]">
              Something about us
            </h2>
            <p className="max-w-[523px] text-[18px] leading-[1.5] mb-10 lg:text-[24px]">
              We&apos;re two designers who think alike enough to work as one,
              and differently enough that neither of us builds a brand alone
              in our heads. That combination is as much a part of the work as
              the final result.
            </p>
            <p className="max-w-[523px] text-[18px] leading-[1.5] lg:text-[24px]">
              We&apos;ve taken an identity from a single brief to a European
              stage, and built systems meant to hold across a whole
              country&apos;s design community. When a brand needs to work at
              that scale, we know what it takes.
            </p>
          </div>
        </div>

        {/* Doodle overlay */}
        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
          <p
            style={{ left: "57.74%", top: "31.31%", width: "15%" }}
            className="absolute -translate-y-1/2 -rotate-[6.36deg] font-hand text-[21px] uppercase tracking-tight text-about-accent"
          >
            We can talk a lot more, but we prefer it to be in person
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/about/doodle-yes.svg"
            alt=""
            aria-hidden="true"
            style={{ left: "72.88%", top: "59.32%", width: "9.94%" }}
            className="absolute"
          />
        </div>
      </section>

      <ServicesFan />

      {/* Team photo */}
      <section className="px-6 pb-16 pt-6 sm:px-10 sm:pb-20 sm:pt-8 lg:px-28 lg:pb-24 lg:pt-10">
        <div className="mx-auto grid max-w-[1288px] grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-4">
            <HoverScrubPhoto />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="relative px-6 pb-16 pt-32 sm:px-10 lg:px-0 lg:pb-24 lg:pt-32">
        {/* Doodle overlay */}
        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
          <p
            style={{ left: "10.19%", top: "9.6%", width: "13%" }}
            className="absolute -translate-y-1/2 -rotate-[9.45deg] font-hand text-[18px] uppercase tracking-tight text-about-accent"
          >
            Some of our work should go here
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/about/union-work.svg"
            alt=""
            aria-hidden="true"
            style={{ left: "26.32%", top: "9.61%", width: "13%" }}
            className="absolute"
          />
        </div>

        <div className="border-t border-about-fg/10">
          {CLIENTS.map((client) =>
            client.href ? (
              <Link
                key={client.name}
                href={client.href}
                className="block border-b border-about-fg/10 py-10 text-center font-tight text-[36px] capitalize leading-[1.1] transition-opacity hover:opacity-70 lg:py-12 lg:text-[56px]"
              >
                {client.name}
              </Link>
            ) : (
              <p
                key={client.name}
                className="border-b border-about-fg/10 py-10 text-center font-tight text-[36px] capitalize leading-[1.1] lg:py-12 lg:text-[56px]"
              >
                {client.name}
              </p>
            )
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-about-pink px-6 pb-10 pt-16 sm:px-10 lg:px-28 lg:pb-14 lg:pt-20">
        <div className="mx-auto max-w-[1288px]">
          <h2 className="font-tight text-[64px] leading-[1.1] tracking-[-1px] sm:text-[120px] lg:text-[203px] lg:tracking-[-3.18px]">
            Let&apos;s talk
          </h2>

          <a
            href="mailto:hello@studiokasis.com"
            className="mt-10 inline-flex items-center justify-center rounded-full border border-black px-8 py-3 text-[20px] text-black transition-opacity hover:opacity-70 lg:text-[26px]"
          >
            Book a call
          </a>

          <div className="mt-20 flex flex-wrap items-center justify-between gap-4 text-[20px] font-light lg:mt-32">
            <p>Studio Kasis 2026</p>
            <div className="flex items-center gap-8">
              <a
                href="https://www.instagram.com/studiokasis?igsi=ZzNtcGZ1cTNrbGlu"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                Instagram
              </a>
              <span aria-hidden="true">|</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/about/vector-footer-arrow.svg" alt="" aria-hidden="true" className="h-4 w-auto" />
            </div>
          </div>
        </div>

        {/* Doodle overlay */}
        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
          <p
            style={{ left: "75.13%", top: "29.35%", width: "16%" }}
            className="absolute -translate-y-1/2 font-hand text-[18px] uppercase tracking-tight text-about-accent"
          >
            I don&apos;t like footers, can you design this one?
          </p>
        </div>
      </footer>
    </div>
  );
}
