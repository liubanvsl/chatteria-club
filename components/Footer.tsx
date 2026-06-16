const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FacebookIcon,
  },
  {
    label: "Meetup",
    href: "https://meetup.com",
    icon: MeetupIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: LinkedInIcon,
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-border-subtle px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a
              href="#"
              className="font-display text-2xl font-semibold tracking-tight text-foreground"
            >
              Chatteria<span className="text-accent">.</span>club
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              London&apos;s community for language exchange and cultural
              events. Meet people from every corner of the world.
            </p>
            <a
              href="mailto:hello@chatteria.club"
              className="mt-4 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              hello@chatteria.club
            </a>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              Follow us
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-elevated text-muted transition-all duration-300 hover:border-accent/30 hover:text-accent"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border-subtle pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Chatteria.club. All rights
            reserved.
          </p>
          <p>Made with care in London</p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function MeetupIcon() {
  return (
    <svg aria-hidden className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.247 8.025c.674 0 1.222-.548 1.222-1.222s-.548-1.222-1.222-1.222-1.222.548-1.222 1.222.548 1.222 1.222 1.222zm-14.494 0c.674 0 1.222-.548 1.222-1.222S5.427 5.581 4.753 5.581s-1.222.548-1.222 1.222.548 1.222 1.222 1.222zm14.494 3.666c.674 0 1.222-.548 1.222-1.222s-.548-1.222-1.222-1.222-1.222.548-1.222 1.222.548 1.222 1.222 1.222zm-14.494 0c.674 0 1.222-.548 1.222-1.222s-.548-1.222-1.222-1.222-1.222.548-1.222 1.222.548 1.222 1.222 1.222zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2.444c5.278 0 9.556-4.278 9.556-9.556S17.278 2.444 12 2.444 2.444 6.722 2.444 12 6.722 21.556 12 21.556z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 4.126 0 2.063 2.063 0 0 1-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
