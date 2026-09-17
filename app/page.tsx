import type { Metadata } from "next";
import Link from "next/link";
import FloatingNav from "./FloatingNav";
import ProjectShowcase from "./ProjectShowcase";

export const metadata: Metadata = {
  title: "Studio Kasis",
  description:
    "We design the brand that matches where you want to take your company. Eight weeks, fixed scope, fixed price.",
};

// Same three case studies, same order, as the About page's client list.
const PROJECTS: { name: string; href: string }[] = [
  { name: "Payhawk", href: "/work/payhawk" },
  { name: "Bulgarian Design Council", href: "/work/bulgarian-design-council" },
  { name: "Bulgaria by Design", href: "/work/bulgaria-by-design" },
];

// Each `image` is the actual first/hero image from that case study page, not
// a generic placeholder. BDC's is a logo SVG on a dark background on its own
// page, so it gets the same dark backdrop + object-contain treatment here
// instead of being cover-cropped like a photo.
const FEATURED = [
  {
    title: "Bulgarian Design Council",
    subtitle: "Strategy, branding and web design",
    href: "/work/bulgarian-design-council",
    image: "/work/bulgarian-design-council/bdc-social-dark-1024.svg",
    imageAlt: "Bulgarian Design Council social media identity",
    imageBg: "bg-[#151515]",
    imageFit: "contain" as const,
  },
  {
    title: "Bulgaria by Design",
    subtitle: "Rebrand of the Bulgarian Government",
    href: "/work/bulgaria-by-design",
    image: "/work/bulgaria-by-design/01-new-symbol.jpg",
    imageAlt: "The redesigned Bulgarian coat of arms on a navy background",
    imageFit: "cover" as const,
  },
  {
    title: "Payhawk",
    subtitle: "Strategy, branding and web design",
    href: "/work/payhawk",
    image: "/work/payhawk/card.jpg",
    imageAlt:
      "A black Payhawk company Visa card, the wordmark and hawk symbol embossed on it, resting on a leather wallet.",
    imageFit: "cover" as const,
  },
];

const SERVICE_COLUMNS = [
  {
    title: "Strategy",
    items: [
      "Discovery",
      "Workshops",
      "Positioning",
      "Messaging",
      "Naming",
      "Competitive audit",
    ],
  },
  {
    title: "Brand",
    items: ["Web architecture", "Web design", "Copywriting", "Design system"],
  },
  {
    title: "Web",
    items: ["Web architecture", "Web design", "Copywriting", "Design system"],
  },
  {
    title: "Content",
    items: [
      "Photography",
      "Founder portraits",
      "Product & team shoots",
      "Illustrations",
      "Pitch decks",
      "Social media",
      "Media kit",
      "Product viuals",
      "Video",
      "Product video",
    ],
  },
];

function FeaturedCard({
  title,
  subtitle,
  href,
  image,
  imageAlt,
  imageBg = "",
  imageFit,
  className = "",
}: {
  title: string;
  subtitle: string;
  href: string;
  image: string;
  imageAlt: string;
  imageBg?: string;
  imageFit: "cover" | "contain";
  className?: string;
}) {
  return (
    <Link href={href} className={`group flex flex-col gap-4 ${className}`}>
      <div
        className={`relative aspect-[628/405] w-full overflow-hidden ${imageBg}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={imageAlt}
          className={`h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
            imageFit === "contain"
              ? "object-contain p-[8%]"
              : "object-cover"
          }`}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-tight text-[28px] leading-[1.2] lg:text-[40px]">
          {title}
        </h3>
        <p className="text-[13px] leading-[1.4] lg:text-[14px]">{subtitle}</p>
      </div>
    </Link>
  );
}

function ServiceCard({
  title,
  price,
  description,
  bullets,
}: {
  title: string;
  price: string;
  description: string;
  bullets: React.ReactNode;
}) {
  return (
    // Resting state, everything's visible and no motion (also the permanent
    // mobile behavior, since there's no hover to drive this on touch).
    // From lg up: the bullet detail collapses out of view, and hovering a
    // card reveals its own detail, scales the card up and lifts it above its
    // neighbours, which dim — so the hovered card reads as taking center
    // stage without actually relocating in the layout.
    <div className="group/card relative flex flex-col items-start gap-6 bg-about-pink px-8 py-10 text-left transition-all duration-500 ease-out lg:px-12 lg:py-12 lg:group-hover/row:opacity-60 lg:hover:z-10 lg:hover:scale-[1.05] lg:hover:!opacity-100">
      <h3 className="font-tight text-[32px] leading-[1.2] lg:text-[40px]">
        {title}
      </h3>
      <p className="text-[15px] leading-[1.4]">{price}</p>
      <p className="text-[18px] leading-[1.4] lg:text-[19px]">
        {description}
      </p>
      <div className="w-full text-left text-[14px] leading-[1.5] transition-all duration-500 ease-out lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:group-hover/card:max-h-[420px] lg:group-hover/card:opacity-100">
        {bullets}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-about-bg text-about-fg">
      {/* Navigation */}
      <header className="sticky top-0 z-50 flex justify-center bg-about-bg px-6 py-6">
        <Link href="/" aria-label="Studio Kasis home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/about/logo-nav.svg" alt="Studio Kasis" className="h-6 w-auto" />
        </Link>
      </header>

      <FloatingNav />

      {/* Hero — fills the viewport below the sticky logo bar */}
      <section className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden">
        <div className="absolute inset-y-0 right-0 hidden w-[49.2%] bg-about-pink lg:block" />
        <div className="relative mx-auto grid w-full max-w-[1512px] grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-x-16 lg:px-28">
          <div className="lg:col-span-6">
            <h1 className="font-tight text-[40px] leading-[1.2] lg:text-[64px]">
              Your ambition is bold.
              <br />
              Your brand isn&apos;t.
            </h1>
            <p className="mt-8 max-w-[523px] text-[16px] leading-[1.4] lg:mt-10">
              We design the brand that matches where you want to take your
              company. Eight weeks, fixed scope, fixed price.
            </p>
          </div>
          <div className="relative lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[533/299] w-full max-w-[533px] overflow-hidden lg:ml-auto">
              <ProjectShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Client logos marquee — equal padding above and below is the only
          gap between the hero and the projects list on either side of it. */}
      <div className="relative overflow-hidden py-16 lg:py-24">
        <div className="flex w-max animate-marquee items-center gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/homepage/logos-strip.png" alt="" aria-hidden="true" className="h-10 w-auto lg:h-12" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/homepage/logos-strip.png" alt="" aria-hidden="true" className="h-10 w-auto lg:h-12" />
        </div>
      </div>

      {/* Projects list */}
      <div className="border-t border-about-fg/10">
        {PROJECTS.map((project) => (
          <Link
            key={project.name}
            href={project.href}
            className="block border-b border-about-fg/10 py-10 text-center font-tight text-[36px] capitalize leading-[1.1] transition-opacity hover:opacity-70 lg:py-12 lg:text-[56px]"
          >
            {project.name}
          </Link>
        ))}
      </div>

      {/* We are Kasis */}
      <section className="relative mt-10 overflow-hidden lg:mt-16">
        <div className="relative px-6 pb-24 pt-20 sm:px-10 lg:px-28 lg:pb-32 lg:pt-28">
          {/* grid-cols-12 gap-4 matches app/grid-overlay.tsx exactly (same
              12 columns, same gutter, same lg:px-28 page padding), so the
              col-span-11 cell's right edge is the real column-11 boundary
              — not an approximation from centering text and hoping it lands
              close. */}
          <div className="relative mx-auto w-full max-w-[1512px] text-center lg:grid lg:grid-cols-12 lg:gap-4">
            <div className="lg:col-span-11 lg:text-right">
              {/* An inline-block so the subhead below can pin its right edge
                  to "Kasis."'s own right edge, which now sits exactly on
                  the column-11 boundary. */}
              <div className="lg:relative lg:inline-block">
                <h2 className="w-full font-extralight font-tight text-[56px] leading-[1.1] tracking-[-2px] sm:text-[100px] lg:w-auto lg:whitespace-nowrap lg:text-[180px]">
                  We are Kasis.
                </h2>
                <p className="mt-6 max-w-[380px] text-[20px] leading-[1.2] lg:absolute lg:right-0 lg:top-full lg:mt-6 lg:max-w-none lg:whitespace-nowrap lg:text-[32px]">
                  A strategic brand design studio.
                </p>
              </div>
            </div>
          </div>

          {/* Doodle overlay, arranged around the heading — positioned
              relative to this whole padded block (not just the heading's
              own box) so the percentages stay sane regardless of how tall
              the heading/subhead content itself is. */}
          <div className="pointer-events-none absolute inset-0 z-20 hidden overflow-visible lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/homepage/doodle-they-said-yes.svg"
              alt=""
              aria-hidden="true"
              style={{ left: "44%", top: "0%", width: "11%" }}
              className="absolute"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/homepage/doodle-underline-arrow.svg"
              alt=""
              aria-hidden="true"
              style={{ left: "27%", top: "66%", width: "18%" }}
              className="absolute"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/homepage/doodle-label-offering.svg"
              alt=""
              aria-hidden="true"
              style={{ left: "9%", top: "76%", width: "7%" }}
              className="absolute"
            />
          </div>
        </div>

        <div className="px-6 pb-20 pt-10 sm:px-10 lg:px-28 lg:pb-28 lg:pt-20">
          <div className="relative mx-auto aspect-[534/355] w-full max-w-[534px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/homepage/team-images.jpg"
              alt="The Studio Kasis team at work"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services (pricing cards) */}
      <section className="px-6 py-20 sm:px-10 lg:px-28 lg:py-32">
        <div className="group/row mx-auto grid max-w-[1288px] grid-cols-1 items-start gap-6 sm:grid-cols-3">
          <ServiceCard
            title="Positioning"
            price="€9,000 | 4 weeks"
            description="Find out what to say. One written story your marketing and fundraising can run on."
            bullets={
              <p>
                <span className="font-bold">Strategy:</span> positioning,
                messaging, the written document
              </p>
            }
          />
          <ServiceCard
            title="Identity"
            price="€20,000 | 8 weeks"
            description="Get the look that matches the ambition and a system your team runs without us."
            bullets={
              <>
                <p className="mb-2 font-medium">Everything in Positioning, plus:</p>
                <p className="mb-1">
                  <span className="font-bold">Visual identity:</span> logo,
                  typography, colour, visual language
                </p>
                <p className="mb-1">
                  <span className="font-bold">Applications:</span> website,
                  photography, social, campaign
                </p>
                <p>
                  <span className="font-bold">Handover:</span> brand manual,
                  design system, working session
                </p>
              </>
            }
          />
          <ServiceCard
            title="Partner"
            price="€20,000 | 8 weeks | retainer €3,000/m"
            description="Get a design team without hiring one. Three days a month, on whatever's next."
            bullets={
              <>
                <p className="mb-2">Everything in Identity, plus:</p>
                <p>
                  <span className="font-bold">Ongoing:</span> three design
                  days a month -launches, campaigns, social, decks.
                </p>
              </>
            }
          />
        </div>
      </section>

      {/* Featured work */}
      <section id="featured-work" className="relative scroll-mt-20 px-6 py-20 sm:px-10 lg:px-28 lg:py-32">
        <div className="mx-auto max-w-[1288px]">
          <div className="grid grid-cols-1 border-b border-black pb-8 lg:grid-cols-12">
            <h2 className="font-medium font-tight text-[32px] leading-[1.1] tracking-[-1px] lg:col-span-3 lg:text-[40px]">
              Featured work
            </h2>
          </div>
          {/* Each card gets an explicit row (not just a column), so the
              three always stack on three separate rows regardless of how
              the grid would otherwise auto-pack them. */}
          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-12 lg:gap-y-24">
            <FeaturedCard
              className="lg:col-start-1 lg:col-span-6 lg:row-start-1"
              title={FEATURED[0].title}
              subtitle={FEATURED[0].subtitle}
              href={FEATURED[0].href}
              image={FEATURED[0].image}
              imageAlt={FEATURED[0].imageAlt}
              imageBg={FEATURED[0].imageBg}
              imageFit={FEATURED[0].imageFit}
            />
            <FeaturedCard
              className="lg:col-start-7 lg:col-span-6 lg:row-start-2"
              title={FEATURED[1].title}
              subtitle={FEATURED[1].subtitle}
              href={FEATURED[1].href}
              image={FEATURED[1].image}
              imageAlt={FEATURED[1].imageAlt}
              imageFit={FEATURED[1].imageFit}
            />
            <FeaturedCard
              className="lg:col-start-1 lg:col-span-6 lg:row-start-3"
              title={FEATURED[2].title}
              subtitle={FEATURED[2].subtitle}
              href={FEATURED[2].href}
              image={FEATURED[2].image}
              imageAlt={FEATURED[2].imageAlt}
              imageFit={FEATURED[2].imageFit}
            />
          </div>
        </div>

        {/* Doodle overlay */}
        <div className="pointer-events-none absolute inset-0 z-20 hidden overflow-hidden lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/homepage/arrow-featured-curve.svg"
            alt=""
            aria-hidden="true"
            style={{ right: "4.9%", top: "0px", width: "4.6%" }}
            className="absolute"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/homepage/arrow-featured-tip.svg"
            alt=""
            aria-hidden="true"
            style={{ right: "8.9%", top: "61px", width: "1.1%" }}
            className="absolute"
          />
        </div>
      </section>

      {/* Services table */}
      <section className="px-6 py-20 sm:px-10 lg:px-28 lg:py-32">
        <div className="mx-auto max-w-[1288px]">
          <div className="grid grid-cols-1 border-b border-black pb-8 lg:grid-cols-12">
            <h2 className="font-medium font-tight text-[32px] leading-[1.1] tracking-[-1px] lg:col-span-3 lg:text-[40px]">
              Services
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:mt-12 lg:gap-x-20">
            {SERVICE_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-bold font-tight text-[20px] capitalize leading-[1.1] lg:text-[24px]">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2 text-[16px] leading-[1.4] lg:text-[18px]">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
