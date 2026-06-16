import type { Event } from "@/lib/content";

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface-elevated p-6 transition-all duration-300 hover:border-accent/25 hover:shadow-[0_8px_30px_rgba(30,27,22,0.06)] sm:p-7">
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-accent">
          {event.date}
        </span>
        <span className="text-sm text-muted">{event.time}</span>
      </div>
      <h3 className="font-display text-2xl font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
        {event.name}
      </h3>
      <p className="mt-3 flex items-center gap-2 text-sm text-muted">
        <LocationIcon />
        {event.location}
      </p>
      {event.languages && (
        <div className="mt-4 flex flex-wrap gap-2">
          {event.languages.map((lang) => (
            <span
              key={lang}
              className="rounded-full border border-border-subtle px-2.5 py-0.5 text-xs text-muted"
            >
              {lang}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

function LocationIcon() {
  return (
    <svg
      aria-hidden
      className="h-4 w-4 shrink-0 text-accent/70"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}
