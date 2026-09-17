import Link from "next/link";

/**
 * Persistent floating pill nav — fixed to the same spot on screen at all
 * times, on every page (not just the homepage). "Projects" always lands on
 * the homepage's Featured work section, even from another page.
 */
export default function FloatingNav() {
  return (
    <div className="fixed inset-x-0 bottom-8 z-40 flex justify-center px-6 lg:bottom-12">
      <nav className="flex items-center gap-1 rounded-full border border-about-fg/20 bg-white px-4 py-2 text-sm font-medium shadow-sm">
        <Link href="/#featured-work" className="px-1 transition-colors hover:text-about-accent">
          Projects
        </Link>
        <Link href="/about" className="px-1 transition-colors hover:text-about-accent">
          About us
        </Link>
        {/* Plain <a>, not next/link: /call is a Cloudflare redirect served
            from public/_redirects, not a Next.js route. */}
        <a href="/call" className="px-1 transition-colors hover:text-about-accent">
          Book a call
        </a>
      </nav>
    </div>
  );
}
