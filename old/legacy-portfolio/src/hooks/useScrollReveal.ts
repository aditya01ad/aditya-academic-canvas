import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref. When the element
 * enters the viewport the "reveal-visible" class is added so the CSS
 * transition plays. The observer disconnects after the first reveal.
 */

/** Fraction of the element that must be visible before triggering the reveal. */
const REVEAL_THRESHOLD = 0.08;

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          observer.unobserve(el);
        }
      },
      { threshold: REVEAL_THRESHOLD },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
