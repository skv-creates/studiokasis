import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payhawk — Studio Kasis",
  description:
    "The brand identity, website and design system Payhawk raised on, built between the seed and the Series A. Sofia, 2020.",
};

/**
 * First case study page. Styling follows the v2 system introduced on /about:
 * about-bg ground, Inter Tight headings, the pink block for the closing CTA.
 *
 * Layout rule: prose sits in columns 4-10, figures break wider (full 12, or 8
 * centred for the portrait crops) so the work reads as the argument and the
 * text as the caption around it.
 *
 * Every number here is public record or comes from the project logs. Do not
 * add one that isn't.
 */

/** Prose column — everything reads inside the same 7-column measure. */
function Prose({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-6 sm:px-10 lg:px-28">
      <div className="mx-auto grid max-w-[1288px] grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col gap-6 py-8 text-[18px] leading-[1.6] lg:col-span-7 lg:col-start-4 lg:py-10 lg:text-[20px]">
          {children}
        </div>
      </div>
    </section>
  );
}

/** Figure band. `narrow` pulls the image back to 8 columns for portrait crops. */
function Figure({
  src,
  alt,
  caption,
  narrow = false,
}: {
  src: string;
  alt: string;
  caption: string;
  narrow?: boolean;
}) {
  return (
    <section className="px-6 py-8 sm:px-10 lg:px-28 lg:py-12">
      <div className="mx-auto grid max-w-[1288px] grid-cols-1 lg:grid-cols-12">
        <figure
          className={narrow ? "lg:col-span-8 lg:col-start-3" : "lg:col-span-12"}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="w-full" />
          <figcaption className="mt-3 font-tight text-[14px] uppercase tracking-[0.05em] opacity-50">
            {caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default function Payhawk() {
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
      <section className="px-6 pb-8 pt-16 sm:px-10 lg:px-28 lg:pb-12 lg:pt-24">
        <div className="mx-auto grid max-w-[1288px] grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="font-tight text-[16px] uppercase tracking-[0.05em] opacity-60">
              Payhawk
            </p>
            <h1 className="mt-4 font-tight text-[40px] leading-[1.1] tracking-[-1px] lg:text-[64px]">
              The brand they raised on
            </h1>
            <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] opacity-70 lg:text-[20px]">
              Brand identity, website and design system, built between the seed
              and the Series A. Sofia, 2020.
            </p>
          </div>
        </div>
      </section>

      <Figure
        src="/work/payhawk/card.jpg"
        alt="A black Payhawk company Visa card, the wordmark and hawk symbol embossed on it, resting on a leather wallet."
        caption="The company card — product photography, shot in-house"
      />

      <Prose>
        <p>
          <strong className="font-semibold">
            In January 2020, Payhawk had a working product, real customers, and
            an ambition they were completely clear about.
          </strong>{" "}
          My notes from the first discovery session record it in one line:
          &ldquo;They want to be a billion dollar company.&rdquo;
        </p>
        <p>
          The website said something else. A blue button, a white page, floating
          product screenshots, and a headline about simplifying expense
          management. Competent — and interchangeable with every other company
          in the category. Nothing about it suggested a company that intended to
          lead one.
        </p>
        <p>
          That gap costs nothing most of the time. It costs a great deal at
          exactly one moment: when you are raising, and the people reading you
          have never heard of Bulgarian fintech.
        </p>
      </Prose>

      <Figure
        src="/work/payhawk/deck-future-of-banking.jpg"
        alt="A Payhawk slide: a tower photographed from below under a grey sky, with the headline The future of banking and the line Our aspiration is to become the world's biggest bank without holding a single dollar."
        caption="The ambition, stated in the company's own words"
      />

      <Prose>
        <h2 className="font-tight text-[28px] leading-[1.2] tracking-[-0.5px] lg:text-[36px]">
          What we decided
        </h2>
        <p>
          Not &ldquo;look better.&rdquo;{" "}
          <strong className="font-semibold">
            Look like the company you intend to be in three years — to people
            meeting you for the first time.
          </strong>
        </p>
        <p>
          The positioning that came out of it, and that still governs the work:
        </p>
        <blockquote className="border-l-2 border-about-fg/20 pl-6">
          <p className="mb-4">
            Premium, but not exclusive. This is a serious product for finance
            professionals, but it isn&apos;t about status.
          </p>
          <p className="mb-4">
            Cutting edge, but friendly. Complex technology that never behaves
            like a toy, and never behaves like a fortress.
          </p>
          <p>
            Nothing ornamental. Everything in the visual language is there with
            a purpose.
          </p>
        </blockquote>
      </Prose>

      <Figure
        src="/work/payhawk/website-pricing.png"
        alt="The Payhawk pricing page: three plan cards — Pro at €10, Premium at €15 and a custom Enterprise tier — on a pale green ground, under the headline Simplify spending and grow your business."
        caption="The website — one of ten page types, desktop and mobile"
      />

      <Prose>
        <h2 className="font-tight text-[28px] leading-[1.2] tracking-[-0.5px] lg:text-[36px]">
          What we built
        </h2>
        <ul className="flex flex-col gap-3">
          <li>Positioning and visual language</li>
          <li>The full website — ten page types, desktop and mobile</li>
          <li>A design system, including Cyrillic type styles</li>
          <li>
            Illustration direction, briefed and art-directed with an external
            illustrator
          </li>
          <li>
            A PR kit: founder portraits and product photography, shot in-house
          </li>
          <li>
            Team and workplace photography, used across recruitment and company
            branding
          </li>
          <li>
            Campaign assets: animated display banners in four formats, localised
            for DE
          </li>
          <li>
            A 38-page brand manual, so the team could run the brand without us
          </li>
        </ul>
      </Prose>

      {/* Applications — the range, in one band */}
      <section className="px-6 py-8 sm:px-10 lg:px-28 lg:py-12">
        <div className="mx-auto grid max-w-[1288px] grid-cols-1 gap-6 lg:grid-cols-12">
          <figure className="lg:col-span-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/work/payhawk/glossary.jpg"
              alt="A hardback book on a grey surface, The Ultimate Fintech Glossary set large across the cover, with the Payhawk wordmark on the spine and a green block at the corner."
              className="w-full"
            />
            <figcaption className="mt-3 font-tight text-[14px] uppercase tracking-[0.05em] opacity-50">
              Content marketing, in the same system
            </figcaption>
          </figure>
          <figure className="lg:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/work/payhawk/webinar-badge.jpg"
              alt="An event lanyard badge reading Webinar Series, talking to leaders in the Fintech world, with a green diagonal band and the tag Disrupt the Status Quo."
              className="w-full"
            />
            <figcaption className="mt-3 font-tight text-[14px] uppercase tracking-[0.05em] opacity-50">
              Event and campaign assets
            </figcaption>
          </figure>
        </div>
      </section>

      <Figure
        src="/work/payhawk/illustration-flag.png"
        alt="A Payhawk illustration: a green flag on a pole, drawn in flat colour with a black outline, on a pale grey ground."
        caption="Illustration direction — briefed and art-directed, drawn externally"
      />

      <Prose>
        <h2 className="font-tight text-[28px] leading-[1.2] tracking-[-0.5px] lg:text-[36px]">
          How it worked
        </h2>
        <p>
          One workshop, then three review sessions with the CEO at the points
          where a decision was actually needed. Everything between those
          sessions was ours to drive. Fixed scope, fixed timeline, ten weeks
          from first workshop to handover.
        </p>
        <p>
          The manual exists because the goal was never to be needed afterwards.
        </p>
      </Prose>

      <Figure
        src="/work/payhawk/founders.jpg"
        alt="Payhawk's two founders in dark suits, leaning on a glass balustrade inside an industrial hall with exposed steel trusses."
        caption="Founder portraits from the PR kit — shot in-house"
      />

      <Prose>
        <h2 className="font-tight text-[28px] leading-[1.2] tracking-[-0.5px] lg:text-[36px]">
          What happened
        </h2>
        <p>The identity went live in spring 2020 and ran until the Series A.</p>
        <p>
          In that window Payhawk raised a{" "}
          <strong className="font-semibold">
            $3.3M seed led by Bek Ventures
          </strong>{" "}
          (March 2020) and a{" "}
          <strong className="font-semibold">
            $20M Series A led by QED Investors and Hedosophia
          </strong>{" "}
          (April 2021) — <strong className="font-semibold">$23.3M</strong>. The
          company passed a $1B valuation in March 2022 and rebranded after the
          Series A, as companies at that scale do.
        </p>
        <p>
          It was also what the company looked like to the people it was trying
          to hire. The same photography ran through recruitment and employer
          branding — because the month you raise is the month you start hiring,
          and both audiences are reading the same thing.
        </p>
        <p>
          A brand doesn&apos;t raise money. But for eighteen months and two
          rounds, this is what Payhawk looked like to everyone deciding whether
          to take them seriously.
        </p>
      </Prose>

      {/* CTA */}
      <footer className="mt-8 bg-about-pink px-6 py-16 sm:px-10 lg:mt-12 lg:px-28 lg:py-24">
        <div className="mx-auto grid max-w-[1288px] grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-4">
            <h2 className="font-tight text-[32px] leading-[1.1] tracking-[-1px] lg:text-[48px]">
              If you&apos;re raising in the next six months
            </h2>
            <p className="mt-8 max-w-[640px] text-[18px] leading-[1.6] lg:text-[20px]">
              That&apos;s the moment this work is worth the most, and the moment
              it&apos;s hardest to find time for. We take it off your desk:
              positioning, identity, site and system, delivered against a fixed
              budget and timeline.
            </p>
            <p className="mt-6 text-[18px] leading-[1.6] lg:text-[20px]">
              Projects start at €20,000.
            </p>
            {/* Plain <a>: /call is a Cloudflare redirect from public/_redirects,
                not a Next route, so it needs a real request. */}
            <a
              href="/call"
              className="mt-10 inline-flex items-center justify-center rounded-full border border-black px-8 py-3 text-[20px] text-black transition-opacity hover:opacity-70 lg:text-[26px]"
            >
              Talk to us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
