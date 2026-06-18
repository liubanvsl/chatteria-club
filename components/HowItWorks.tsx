import { FadeIn } from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "Choose your languages",
    description:
      "Pick the flags of the languages you'd like to practice and start a conversation",
    icon: PeopleIcon,
  },
  {
    number: "02",
    title: "Move between tables",
    description:
      "Change tables throughout the evening, meet new people, and enjoy conversations in different languages and groups",
    icon: LanguageIcon,
  },
  {
    number: "03",
    title: "Relax and enjoy",
    description:
      "Feel free to take a break, grab a drink, and be kind and respectful to everyone. We're here to create a welcoming space for all!",
    icon: CultureIcon,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              How It Works
            </p>
            <h2 className="font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              Three simple steps
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 120}>
              <article className="relative rounded-2xl bg-background p-7 sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <step.icon />
                  <span className="font-display text-3xl font-light text-border">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PeopleIcon() {
  return (
    <svg
      aria-hidden
      className="h-7 w-7 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.21a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg
      aria-hidden
      className="h-7 w-7 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
      />
    </svg>
  );
}

function CultureIcon() {
  return (
    <svg
      aria-hidden
      className="h-7 w-7 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
}
