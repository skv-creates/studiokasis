import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-6 py-10 sm:px-10 lg:px-28 lg:py-14">
      {/* About */}
      <header className="flex max-w-[358px] flex-col items-start gap-7">
        <p className="text-base leading-[1.4]">
          We are Kasis. A brand design studio. We partner with good people who
          believe in good design to create brands, products and campaigns that
          set their business apart.
        </p>
        <a
          href="mailto:hello@studiokasis.com"
          className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-80"
        >
          Say hello
        </a>
      </header>

      {/* Portrait */}
      <div className="flex flex-1 items-center justify-center py-16">
        <figure className="relative aspect-[486/324] w-full max-w-[486px]">
          <Image
            src="/team.jpg"
            alt="Kalina and Stefan, the founders of Studio Kasis"
            fill
            priority
            sizes="(max-width: 486px) 100vw, 486px"
            className="object-cover"
          />
          <figcaption className="sr-only">Kalina and Stefan</figcaption>
          <span className="pointer-events-none absolute left-3 top-[55%] font-hand text-xs uppercase tracking-tight text-background">
            Kalina
          </span>
          <span className="pointer-events-none absolute right-3 top-[55%] font-hand text-xs uppercase tracking-tight text-background">
            Stefan
          </span>
        </figure>
      </div>

      {/* Wordmark */}
      <h1 className="whitespace-nowrap text-[17vw] font-bold leading-none tracking-[-0.07em]">
        Studio Kasis
      </h1>

      {/* Footer */}
      <footer className="mt-10 flex items-center justify-between text-xs font-medium">
        <p>© Studio Kasis 2026</p>
        <div className="flex items-center gap-10">
          <span>Amsterdam</span>
          <span>Sofia</span>
        </div>
      </footer>
    </main>
  );
}
