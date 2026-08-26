import { useEffect } from 'react';

/**
 * Custom hook to trigger smooth entrance animations as elements scroll into the viewport.
 * Elements with class 'reveal-init' or '[data-reveal]' will receive 'reveal-visible' when visible.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Once revealed, keep it visible for smooth natural reading
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal-init, [data-reveal]');

    elements.forEach((el) => observer.observe(el));

    // Also observe dynamically loaded or re-rendered elements periodically
    const timeout = setTimeout(() => {
      const moreElements = document.querySelectorAll('.reveal-init:not(.reveal-visible)');
      moreElements.forEach((el) => observer.observe(el));
    }, 400);

    return () => {
      clearTimeout(timeout);
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}
