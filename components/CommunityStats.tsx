"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./FadeIn";

const stats = [
  { value: 50, suffix: "+", label: "Members attended" },
  { value: 10, suffix: "+", label: "Languages spoken" },
  { value: 10, suffix: "+", label: "Events hosted" },
];

function AnimatedNumber({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, value]);

  return (
    <span className="font-display text-5xl font-medium tabular-nums tracking-tight text-foreground sm:text-6xl">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function CommunityStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div ref={sectionRef} className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Community Statistics
            </p>
            <h2 className="font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              A growing community
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-3 sm:gap-12">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 100}>
              <div className="text-center">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  active={active}
                />
                <p className="mt-2 text-sm font-medium text-muted">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
