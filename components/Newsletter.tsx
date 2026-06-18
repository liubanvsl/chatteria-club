"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "./FadeIn";

const faqs = [
  {
    question: "Do I need to be fluent?",
    answer:
      "Not at all. All levels are welcome — from complete beginners to native speakers.",
  },
  {
    question: "Are events free to attend?",
    answer:
      "Yes! Attendance is free. We simply ask guests to support the venue by ordering a drink, helping us maintain our partnership with the spaces that host our events.",
  },
  {
    question: "How do I find out about new events?",
    answer:
      "Subscribe to our newsletter or follow us on social media for weekly updates.",
  },
];

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div id="faq" className="mb-16 scroll-mt-24 sm:mb-20">
          <FadeIn>
            <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              FAQ
            </p>
          </FadeIn>
          <div className="mx-auto grid max-w-3xl gap-4">
            {faqs.map((faq, index) => (
              <FadeIn key={faq.question} delay={index * 80}>
                <details className="group rounded-2xl border border-border bg-background px-6 py-5 transition-colors open:border-accent/20">
                  <summary className="cursor-pointer list-none text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="text-accent transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn>
          <div className="mx-auto max-w-xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Newsletter
            </p>
            <h2 className="font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              Stay in the loop
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Get weekly updates on upcoming events, language tips, and
              community highlights — delivered to your inbox.
            </p>

            {submitted ? (
              <p className="animate-fade-up mt-8 rounded-full bg-background px-6 py-4 text-sm font-medium text-accent">
                Thank you! You&apos;re on the list.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="h-12 flex-1 rounded-full border border-border bg-background px-5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent/40"
                />
                <button
                  type="submit"
                  className="h-12 shrink-0 rounded-full bg-accent px-7 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
