const navLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#"
          className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
        >
          Chatteria<span className="text-accent">.</span>club
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
