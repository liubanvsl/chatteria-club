const navLinks = [
  { label: "About us", href: "#about" },
  { label: "Our Events", href: "#events" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/8 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-surface blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="animate-fade-up mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Based in London · Connected worldwide
        </p>

        <h1 className="animate-fade-up animation-delay-100 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[1.05] tracking-tight text-foreground">
          Meet. Speak. Connect. Repeat.
        </h1>

        <p
          id="about"
          className="scroll-mt-24 animate-fade-up animation-delay-200 mt-6 max-w-xl text-lg leading-relaxed text-muted sm:mt-8 sm:text-xl"
        >
        Join London's language exchange and international community. Meet new people, practice languages, and discover cultural events in a welcoming social atmosphere.
        </p>

        <div className="animate-fade-up animation-delay-300 mt-10 flex flex-wrap gap-3 sm:mt-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex h-11 items-center rounded-full border border-border bg-surface-elevated px-5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/30 hover:bg-surface hover:shadow-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="animate-fade-in animation-delay-500 mt-16 flex items-center gap-6 border-t border-border-subtle pt-8 sm:mt-20">
          <div className="flex -space-x-2">
            {["ES", "EN","FR", "RU", "JP", "DE", "IT"].map((lang) => (
              <span
                key={lang}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-surface text-[10px] font-semibold text-muted"
              >
                {lang}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted">
            Expats, professionals, students &amp; locals — all welcome
          </p>
        </div>
      </div>
    </section>
  );
}
