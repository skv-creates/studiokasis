import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bulgarian Design Council — Studio Kasis",
  description:
    "A new identity for the first Bulgarian Design Council: branding, strategy and positioning, creative direction, website design, photography.",
};

const ASSET = "/work/bulgarian-design-council";

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
}: {
  src: string;
  alt: string;
  caption: string;
  aspect: string;
  objectPosition?: string;
}) {
  return (
    <section className="px-6 py-10 sm:px-10 lg:px-28 lg:py-16">
      <div className="mx-auto max-w-[1288px]">
        <div className={`relative w-full overflow-hidden ${aspect}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className={`h-full w-full object-cover ${objectPosition}`}
          />
        </div>
        <Eyebrow className="mt-2 max-w-[595px] lg:mt-3">{caption}</Eyebrow>
      </div>
    </section>
  );
}

export default function BulgarianDesignCouncil() {
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
          <Eyebrow className="mb-4 lg:mb-6">BULGARIAN DESIGN COUNCIL</Eyebrow>
          <h1 className="font-tight max-w-[620px] text-[32px] leading-[1.15] lg:text-[52px]">
            A new identity for the first Bulgarian Design Council
          </h1>
          <p className="mt-6 max-w-[524px] text-[16px] leading-[1.4] lg:mt-8">
            Branding, strategy and positioning, creative direction, website
            design, photography
          </p>
          <div className="relative mt-10 flex h-[300px] w-full items-center justify-center overflow-hidden bg-[#151515] sm:h-[460px] lg:mt-14 lg:h-[831px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ASSET}/bdc-social-dark-1024.svg`}
              alt="Bulgarian Design Council social media identity"
              className="w-[84.3%]"
            />
          </div>
        </div>
        <Eyebrow className="mx-auto mt-2 max-w-[1288px] lg:mt-3">
          THE LOGO - NEW SYMBOL AND WORDMARK
        </Eyebrow>
      </section>

      {/* Before */}
      <section className="px-6 py-10 sm:px-10 lg:px-28 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-6">
          <div className="text-[clamp(15px,14px_+_0.27vw,22px)] leading-[1.5] text-about-fg lg:col-start-4 lg:col-span-6">
            <p className="mb-6">
              The team of the Bulgarian Design Council came to us with a
              request to help them built their visual identity. That much was
              clear from the start.
            </p>
            <p className="mb-6">
              <strong className="font-bold">
                BDC had a big mission and a clear vision for what they wanted
                to become
              </strong>
              , but no visual system to show that to the people they were
              trying to attract.
            </p>
            <p>
              Their visual foundation at the time was inspired by an old
              Bulgarian symbol, a nod to a rich history, and a good instinct
              on its own.{" "}
              <strong className="font-bold">
                But it had nothing to say about who they were now, or where
                they were headed.
              </strong>
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-[1288px] lg:mt-32">
          <div className="flex flex-col items-center justify-center gap-6 bg-[#151515] px-6 py-16 sm:flex-row sm:gap-6 sm:py-24 lg:gap-8 lg:py-32">
            {[1, 2, 3].map((n) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={n}
                src={`${ASSET}/pattern-card-${n}.jpg`}
                alt="Social media post mockup showing the BDC pattern system"
                className="aspect-[516/639] w-full max-w-[240px] object-cover sm:max-w-[300px]"
              />
            ))}
          </div>
          <Eyebrow className="mt-2 max-w-[595px] lg:mt-3">
            THE PATTERN SYSTEM - BUILT TO FLEX ACROSS CONTENT
          </Eyebrow>
        </div>
      </section>

      {/* What we decided */}
      <SectionText heading="What we decided">
        <p className="mb-6">
          {`We didn't want to just "modernise the logo." Instead, we decided to
          build a system that could stand both in a ministry meeting and a
          school lecture hall without changing its story.`}
        </p>
        <p>
          We positioned the Council right in the middle of that gap, instead
          of choosing a side. The foundation is a clean, minimal system, the
          part that reads as credible in front of institutions and funders.
          Colour and a custom pattern system carry the other half, the
          warmth, the people, the education work, expressed visually rather
          than explained.
        </p>
      </SectionText>

      <ImageCaption
        src={`${ASSET}/team-photography.jpg`}
        alt="Bulgarian Design Council team photography"
        caption="TEAM PHOTOGRAPHY - ART DIRECTED AND SHOT FOR THE BRAND"
        aspect="aspect-[16/10]"
      />

      <ImageCaption
        src={`${ASSET}/campaign-design-mockup.jpg`}
        alt="BDC campaign design mockup"
        caption="BDC CAMPAIGN DESIGN - MOCKUP"
        aspect="aspect-[16/10]"
      />

      {/* What we built */}
      <SectionText heading="What we built">
        <p className="mb-6">Strategy and positioning.</p>
        <p className="mb-6">
          {`Logo and identity system. We rebuilt the шевица, the traditional
          Bulgarian embroidery motif, into a contemporary form, and used it
          to tell a new story: a country with a rich design history, making
          a stand in Europe's modern design scene.`}
        </p>
        <p className="mb-6">
          {`A colour and pattern system carrying the brand's warmth across
          every touchpoint.`}
        </p>
        <p className="mb-6">
          {`A photoshoot, planning the Council's aesthetic beyond the brand
          itself, for people and moments, not just the mark.`}
        </p>
        <p className="mb-6">
          {`Website, bulgariandesigncouncil.org, built to actually showcase
          the Council's work.`}
        </p>
        <p>
          Print materials for the European Design Festival 2026: postcards,
          pens and other gift bag items.
        </p>
      </SectionText>

      {/* Print material gallery */}
      <section className="px-6 py-10 sm:px-10 lg:px-28 lg:py-16">
        <div className="mx-auto grid max-w-[1288px] grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-24">
          <Eyebrow className="max-w-[321px] whitespace-pre-line lg:col-start-10 lg:col-span-3 lg:row-start-1 lg:self-start">
            {"PRINT MATERIAL - ONE OF THREE DESIGNS FOR THE EUROPEAN DESIGN FESTIVAL 2026 GIFT BAGS"}
          </Eyebrow>
          <div className="relative aspect-[966/597] w-full overflow-hidden lg:col-start-1 lg:col-span-9 lg:row-start-1 lg:self-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ASSET}/print-material-flatlay.jpg`}
              alt="Bulgarian Design Council print materials flatlay"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="lg:col-start-7 lg:col-span-6 lg:row-start-2 lg:self-start">
            <div className="relative aspect-[612/771] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/print-material-detail.jpg`}
                alt="Bulgarian Design Council print material detail"
                className="h-full w-full object-cover object-bottom"
              />
            </div>
            <Eyebrow className="mt-2 lg:mt-3">PRINT MATERIALS</Eyebrow>
          </div>
        </div>
      </section>

      {/* Complete web design */}
      <section className="px-6 py-10 sm:px-10 lg:px-28 lg:py-16">
        <div className="mx-auto max-w-[1288px]">
          <div className="relative aspect-[2500/1667] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ASSET}/web-design-photo-base.jpg`}
              alt="Complete web design for the Bulgarian Design Council"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute bg-[#d6ddf9]"
              style={{ left: "26.29%", top: "28.09%", width: "47.26%", height: "44.39%" }}
            />
            <div
              className="absolute overflow-hidden rounded-[0.7%]"
              style={{ left: "27.45%", top: "29.25%", width: "45.18%", height: "41.62%" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <video
                className="block h-full w-full object-cover"
                style={{ transform: "scale(1.14)", transformOrigin: "50% 40%" }}
                src={`${ASSET}/screen-recording.mp4`}
                poster={`${ASSET}/screen-recording-poster.jpg`}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
          <Eyebrow className="mt-2 max-w-[718px] lg:mt-3">
            {"COMPLETE WEB DESIGN - SHOWCASING THE COUNCIL'S MISSION, TEAM AND GOALS"}
          </Eyebrow>
        </div>
      </section>

      {/* How it worked */}
      <SectionText heading="How it worked">
        <p className="mb-6">
          {`The positioning didn't come from a mood board, it came from a
          series of workshops with the Council's own team. We mapped every
          stakeholder they answer to, government, educators, the wider
          design community, on a power-interest matrix, so the strategy was
          built around who actually needed convincing and why.`}
        </p>
        <p>
          {`From there, a "why, how, what" session pushed the conversation
          past "what we do" and into the reasoning underneath it, the part
          that later became the positioning itself.`}
        </p>
      </SectionText>

      <ImageCaption
        src={`${ASSET}/brand-photography-location.jpg`}
        alt="Bulgarian Design Council brand photography shot on location"
        caption="BRAND PHOTOGRAPHY - SHOT ON LOCATION"
        aspect="aspect-[16/10]"
      />

      {/* Team portraits + social templates gallery */}
      <section className="px-6 py-10 sm:px-10 lg:px-28 lg:py-16">
        <div className="mx-auto grid max-w-[1288px] grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-24">
          <div className="relative aspect-[858/410] w-full overflow-hidden lg:col-start-1 lg:col-span-8 lg:row-start-1 lg:self-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ASSET}/team-portraits.png`}
              alt="Bulgarian Design Council team portraits"
              className="h-full w-full object-contain object-top"
            />
          </div>
          <p className="max-w-[400px] text-[15px] leading-normal text-about-fg/57 lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:self-start">
            SOCIAL TEMPLATES FROM THE BRAND IDENTITY — SCREEN MOCKUP
          </p>
          <div className="lg:col-start-6 lg:col-span-7 lg:row-start-2 lg:self-start lg:justify-self-end">
            <div className="relative aspect-[741/656] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/social-templates-mockup.jpg`}
                alt="BDC social templates screen mockup"
                className="h-full w-full object-cover"
              />
            </div>
            <Eyebrow className="mt-2 lg:mt-3">
              TEAM PORTRAITS - ART DIRECTED AND SHOT FOR THE BRAND
            </Eyebrow>
          </div>
        </div>
      </section>

      {/* What happened */}
      <SectionText heading="What happened">
        <p className="mb-6">
          <strong className="font-bold">
            The identity had its first real outing at the European Design
            Festival 2026
          </strong>
          {
            ", where the Council was invited by the festival's organisers to present their message and vision on stage."
          }
        </p>
        <p className="mb-6">
          <strong className="font-bold">
            People heard their story, most of them for the first time.
          </strong>{" "}
          Which gave the Council a strong opening in their search for more
          members and volunteers, and put them in front of a European
          audience for the first time.
        </p>
        <p>
          <strong className="font-bold">
            It was also what the Council looked like to the people they were
            trying to bring in.
          </strong>{" "}
          The print materials went out in every guest&apos;s gift bag, the
          same visual language that now sits on their website and represents
          them in every room they walk into.
        </p>
      </SectionText>

      <ImageCaption
        src={`${ASSET}/pechakucha-stage.jpg`}
        alt="BDC's team on stage at PechaKucha Night, Sofia"
        caption="BDC'S TEAM ON STAGE AT PETCHAKUTCH NIGHT, SOFIA, JUNE 2026"
        aspect="aspect-[16/10]"
      />

      <ImageCaption
        src={`${ASSET}/edf-stage.jpg`}
        alt="BDC's team on stage at the European Design Festival 2026"
        caption="BDC'S TEAM ON STAGE AT THE EUROPEAN DESIGN FESTIVAL 2026"
        aspect="aspect-[16/10]"
      />

      {/* Footer CTA */}
      <section className="bg-about-pink px-6 py-10 sm:px-10 lg:px-28 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-start-4 lg:col-span-6">
            <h2 className="font-tight text-[28px] leading-[1.2] lg:text-[36px]">
              {"If your identity hasn't kept up with your ambition."}
            </h2>
            <p className="mt-6 text-[16px] leading-[1.4] lg:mt-8">
              {
                "We can help you fix that, and we take it off your plate: positioning, identity, site and photography, built to say where you're headed, not just where you've been."
              }
            </p>
            <p className="mt-6 text-[16px] leading-[1.4] lg:mt-8">
              Projects start at €20,000
            </p>
            <Link
              href="/call"
              className="mt-6 inline-flex h-[31px] items-center justify-center rounded-full border border-black px-4 py-1 text-[15px] text-black transition-opacity hover:opacity-70 lg:mt-8 lg:text-[17px]"
            >
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
