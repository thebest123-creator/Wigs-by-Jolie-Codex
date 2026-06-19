"use client";

import { useRef } from "react";
import type { consultationSteps } from "@/lib/site-data";

type ProcessStep = (typeof consultationSteps)[number];

export function ProcessCarousel({ steps }: { steps: readonly ProcessStep[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollSlides(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: track.clientWidth * 0.78 * direction,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  return (
    <div className="process-carousel">
      <div
        ref={trackRef}
        className="process-carousel-track"
        aria-label="Consultation process"
      >
        {steps.map((step) => (
          <article className="process-slide" key={step.eyebrow}>
            <span>{step.eyebrow}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
      <div className="process-carousel-controls" aria-label="Process slide controls">
        <button
          className="process-arrow process-arrow-prev"
          type="button"
          aria-label="Show previous process step"
          onClick={() => scrollSlides(-1)}
        />
        <button
          className="process-arrow process-arrow-next"
          type="button"
          aria-label="Show next process step"
          onClick={() => scrollSlides(1)}
        />
      </div>
    </div>
  );
}
