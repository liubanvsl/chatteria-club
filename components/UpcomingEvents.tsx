import { FadeIn } from "./FadeIn";
import { EventCard } from "./EventCard";
import { events } from "@/lib/content";

export function UpcomingEvents() {
  return (
    <section
      id="events"
      className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Upcoming Events
              </p>
              <h2 className="font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
                Summer in London
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Casual, welcoming gatherings across the city — no experience
              required.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {events.map((event, index) => (
            <FadeIn key={event.name} delay={index * 100}>
              <EventCard event={event} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
