import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bulgaria by Design — Studio Kasis",
  description:
    "A new visual identity, proposed for Bulgaria: brand identity, visual system design, national initiative, in collaboration with the Bulgarian Design Council.",
};

const ASSET = "/work/bulgaria-by-design";

function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[11px] leading-normal text-about-fg/57 sm:text-[13px] lg:text-[15px] ${className}`}
    >
      {children}
    </p>
  );
}

function SectionText({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 py-10 sm:px-10 lg:px-28 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-start-4 lg:col-span-6">
          <h2 className="font-tight text-[28px] leading-[1.2] lg:text-[40px]">
            {heading}
          </h2>
          <div className="mt-8 text-[clamp(15px,14px_+_0.27vw,22px)] leading-normal text-about-fg lg:mt-10">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageCaption({
  src,
  alt,
  caption,
  aspect,
  objectPosition = "object-center",
  captionClassName = "mt-2 max-w-[595px] lg:mt-3",
}: {
  src: string;
  alt: string;
  caption: string;
  aspect: string;
  objectPosition?: string;
  captionClassName?: string;
}) {
  return (
    <section className="px-6 py-10 sm:px-10 lg:px-28 lg:py-16">
      <div className="mx-auto max-w-[1288px]">
        <div className={`relative w-full overflow-hidden ${aspect}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className={`h-full w-full object-contain ${objectPosition}`}
          />
        </div>
        <Eyebrow className={captionClassName}>{caption}</Eyebrow>
      </div>
    </section>
  );
}

export default function BulgariaByDesign() {
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
      <section className="px-6 py-10 sm:px-10 lg:px-28 lg:py-16">
        <div className="mx-auto max-w-[1288px]">
          <Eyebrow className="mb-4 lg:mb-6">BULGARIA BY DESIGN</Eyebrow>
          <h1 className="font-tight max-w-[620px] text-[32px] leading-[1.15] lg:text-[52px]">
            A new visual identity, proposed for Bulgaria
          </h1>
          <p className="mt-6 max-w-[524px] text-[16px] leading-[1.4] lg:mt-8">
            Brand identity, visual system design, national initiative
          </p>
          <div className="relative mt-10 flex w-full aspect-[1778/1001] items-center justify-center overflow-hidden bg-[#151515] lg:mt-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ASSET}/01-new-symbol.jpg`}
              alt="The redesigned Bulgarian coat of arms on a navy background"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <Eyebrow className="mx-auto mt-2 max-w-[1288px] lg:mt-3">
          THE NEW SYMBOL — REDESIGNED NATIONAL MARK
        </Eyebrow>
      </section>

      {/* Before */}
      <section className="px-6 py-10 sm:px-10 lg:px-28 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-6">
          <div className="text-[clamp(15px,14px_+_0.27vw,22px)] leading-[1.5] text-about-fg lg:col-start-4 lg:col-span-6">
            <p className="mb-6">
              Bulgaria by Design is an initiative by Studio Kasis and the
              Bulgarian Design Council, proposing a new visual identity for
              Bulgarian public institutions.
            </p>
            <p className="mb-6">
              <strong className="font-bold">
                Bulgaria has 19 ministries with 19 different faces.
              </strong>{" "}
              The only thing they share is a lack of common aesthetic and
              attention to detail, from the typeface on a government website
              to the sign at a municipal counter. Every touchpoint with the
              state is a message, and today that message is confusing.
            </p>
            <p>
              It isn&apos;t a question of budget or talent.{" "}
              <strong className="font-bold">
                It&apos;s a symptom of the belief that the visual doesn&apos;t
                matter
              </strong>
              , and chaos has a cost most people don&apos;t see: it feeds the
              sense that no one is in charge, that the state is a foreign
              body rather than a shared home.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-[1288px] lg:mt-32">
          <div className="relative flex w-full aspect-[1840/1035] items-center justify-center overflow-hidden bg-[#151515]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ASSET}/02-ministry-lockup.jpg`}
              alt="Ministry of Environment and Water lockup, applying the new visual system"
              className="h-full w-full object-contain"
            />
          </div>
          <Eyebrow className="mt-2 max-w-[595px] lg:mt-3">
            THE SYSTEM APPLIED — MINISTRY OF ENVIRONMENT AND WATER
          </Eyebrow>
        </div>
      </section>

      {/* What we decided */}
      <SectionText heading="What we decided">
        <p className="mb-6">
          {`There's precedent for this. At the end of the 19th century, when
          Sofia was still a small, muddy town, Bulgaria built monumental
          civic buildings, not as excess, but as proof the country belonged
          in Europe and had a future to build toward. `}
          <strong className="font-bold">
            Bulgaria by Design asks for that same act of faith at a different
            scale.
          </strong>
        </p>
        <p className="mb-6">
          {`We didn't want a single template forced onto every institution.
          Instead, we built shared principles that let ministries,
          municipalities, universities and public bodies keep their own
          character while speaking with a common voice: clarity,
          consistency, dignity and trust.`}
        </p>
        <p className="mb-6">The work runs across three connected areas:</p>
        <div className="space-y-4 border-l border-about-fg/40 pl-6">
          <p>
            Public services and interfaces, how people actually interact with
            the state.
          </p>
          <p>
            The visual and information environment, what the state looks
            like at every touchpoint.
          </p>
          <p>
            Design capability inside institutions, so the standard holds
            after the initial rollout.
          </p>
        </div>
      </SectionText>

      <ImageCaption
        src={`${ASSET}/03-ministries-grid.jpg`}
        alt="Grid of all 19 ministry lockups in the new visual system"
        caption="ALL 19 MINISTRIES, ONE VISUAL LANGUAGE"
        aspect="aspect-[1840/1035]"
      />

      <ImageCaption
        src={`${ASSET}/04-billboard-tourism.jpg`}
        alt="Outdoor billboard mockup for the Ministry of Tourism"
        caption="MOCKUP — OUTDOOR CAMPAIGN, MINISTRY OF TOURISM"
        aspect="aspect-[1840/1035]"
      />

      {/* What we built */}
      <SectionText heading="What we built">
        <p className="mb-6">A new logo for Bulgaria.</p>
        <p className="mb-6">
          A cohesive visual language for use across ministries, government
          services and public-facing institutions.
        </p>
        <p className="mb-6">
          A shared set of design principles built to scale across public
          services and interfaces, the visual and information environment,
          and design capability inside institutions.
        </p>
        <p>
          The manifesto itself, written and published to make the public
          case for the initiative.
        </p>
      </SectionText>

      {/* Campaign poster gallery */}
      <section className="px-6 py-10 sm:px-10 lg:px-28 lg:py-16">
        <div className="mx-auto grid max-w-[1288px] grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8 lg:col-start-1 lg:col-span-9 lg:row-start-1 lg:self-start">
            <div className="relative aspect-[924/977] w-full max-w-[640px] shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/05-poster-vitosha.svg`}
                alt="Campaign poster mockup at the Vitosha observation tower"
                className="h-full w-full object-contain object-left"
              />
            </div>
            <Eyebrow className="max-w-[280px] whitespace-pre-line sm:mt-2">
              {"MOCKUP — CAMPAIGN POSTER, VITOSHA NATURE PARK"}
            </Eyebrow>
          </div>
          <div className="lg:col-start-7 lg:col-span-6 lg:row-start-2 lg:self-start">
            <div className="ml-auto flex max-w-[620px] flex-col">
              <div className="relative aspect-[1052/1197] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${ASSET}/06-poster-finance-budget.jpg`}
                  alt="Campaign brochure mockup for the Ministry of Finance budget 2026"
                  className="h-full w-full object-contain"
                />
              </div>
              <Eyebrow className="mt-2 lg:mt-3">
                MOCKUP — CAMPAIGN BROCHURE, MINISTRY OF FINANCE BUDGET 2026
              </Eyebrow>
            </div>
          </div>
        </div>
      </section>

      {/* Website mockup */}
      <section className="px-6 py-10 sm:px-10 lg:px-28 lg:py-16">
        <div className="mx-auto max-w-[1288px]">
          <div className="relative aspect-[1840/1035] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ASSET}/07-website-mockup.jpg`}
              alt="Ministry of Environment and Water website mockup"
              className="h-full w-full object-contain"
            />
          </div>
          <Eyebrow className="mt-2 max-w-[718px] lg:mt-3">
            MOCKUP — MINISTRY OF ENVIRONMENT AND WATER WEBSITE
          </Eyebrow>
        </div>
      </section>

      {/* How it worked */}
      <SectionText heading="How it worked">
        <p className="mb-6">
          {`This wasn't a typical client brief, there was no single
          institution commissioning a fixed deliverable. We believed we
          could help change something, and set out to figure out what
          actually needed to change first. That meant looking honestly at
          what the state's visual language does to the people who have to
          live with it, before we tried to fix anything.`}
        </p>
        <p className="mb-6">
          {`What we found was a gap most countries don't have. Most nations
          carry both a coat of arms, the герб, and a separate state logo,
          something built to actually adapt across a website, a road sign, a
          government form. Bulgaria only had the former. Without a working
          visual system to sit alongside it, every institution was left to
          invent its own answer, which is exactly how you end up with 19
          ministries and no shared idea of what the state looks like.`}
        </p>
        <p>
          Once we had that foundation built, the Bulgarian Design Council
          took it on, and together we decided to push Bulgaria by Design
          forward as a public initiative.
        </p>
      </SectionText>

      <ImageCaption
        src={`${ASSET}/08-id-badge.jpg`}
        alt="Employee ID badge mockup using the new visual system"
        caption="MOCKUP — EMPLOYEE ID BADGE"
        aspect="aspect-[1831/1032]"
      />

      {/* Signage gallery */}
      <section className="px-6 py-10 sm:px-10 lg:px-28 lg:py-16">
        <div className="mx-auto grid max-w-[1288px] grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-24">
          <div className="relative aspect-[1193/737] w-full overflow-hidden lg:col-start-1 lg:col-span-8 lg:row-start-1 lg:self-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ASSET}/09-door-signage.jpg`}
              alt="Office door signage mockup"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="max-w-[400px] text-[15px] leading-normal text-about-fg/57 lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:self-start">
            MOCKUP — OFFICE DOOR SIGNAGE
          </p>
          <div className="lg:col-start-6 lg:col-span-7 lg:row-start-2 lg:self-start lg:justify-self-end">
            <div className="relative aspect-[1215/1054] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/10-street-column.jpg`}
                alt="Outdoor city column mockup showing the Ministry of Finance annual report"
                className="h-full w-full object-contain"
              />
            </div>
            <Eyebrow className="mt-2 lg:mt-3">
              MOCKUP — OUTDOOR CITY COLUMN, MINISTRY OF FINANCE ANNUAL REPORT
            </Eyebrow>
          </div>
        </div>
      </section>

      {/* What happened */}
      <SectionText heading="What happened">
        <p className="mb-6">
          <strong className="font-bold">
            Imagine filing your taxes through an interface so clear you feel
            proud of your contribution.
          </strong>{" "}
          A police website that carries real authority. A kindergarten
          registration process simple enough that knowing the right person
          stops being the only way in.
        </p>
        <p className="mb-6">
          {`That's the Bulgaria the manifesto asks people to imagine, and the
          reason Bulgaria by Design launched as a national initiative rather
          than a single design project. The Bulgarian Design Council is
          inviting ministries, municipalities, public organisations,
          universities and civic organisations to help build it out
          together, growing through partnerships and pilot projects with
          institutions willing to be first.`}
        </p>
        <p className="mb-6">
          We believe that Bulgaria has the talent, the knowledge and the will
          to give its state a dignified visual language. The only real
          question is what the country decides to build.
        </p>
        <p>
          The full manifesto lives at bulgariabydesign.com, signed by Stefan
          Vladimirov and Kalina Sodeva.
        </p>
      </SectionText>

      <ImageCaption
        src={`${ASSET}/11-manifesto-slide.jpg`}
        alt="Title slide of the Bulgaria by Design manifesto, 'Bulgaria through design'"
        caption="THE MANIFESTO, PRESENTED"
        aspect="aspect-[1727/973]"
      />

      <ImageCaption
        src={`${ASSET}/12-tedx-stage.jpg`}
        alt="Bulgaria by Design presented on stage at TEDxYouth@ACSofia"
        caption="BULGARIA BY DESIGN, PRESENTED PUBLICLY FOR THE FIRST TIME — TEDXYOUTH@AC SOFIA"
        aspect="aspect-[1720/908]"
        captionClassName="mt-2 max-w-[595px] lg:mt-3 lg:max-w-none lg:whitespace-nowrap"
      />

      {/* Footer CTA */}
      <footer className="mt-8 bg-about-pink px-6 py-16 sm:px-10 lg:mt-12 lg:px-28 lg:py-24">
        <div className="mx-auto grid max-w-[1288px] grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-4">
            <h2 className="font-tight text-[32px] leading-[1.1] tracking-[-1px] lg:text-[48px]">
              {"If your identity hasn't kept up with your ambition."}
            </h2>
            <p className="mt-8 max-w-[640px] text-[18px] leading-[1.6] lg:text-[20px]">
              {
                "We can help you fix that, and we take it off your plate: positioning, identity, site and photography, built to say where you're headed, not just where you've been."
              }
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
              Book a call
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
