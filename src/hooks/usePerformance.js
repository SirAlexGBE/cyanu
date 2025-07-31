"use client";

import {useEffect, useRef} from "react";

export function usePerformanceMonitor(componentName) {
  const renderStart = useRef(performance.now());
  const mountTime = useRef(null);

  useEffect(() => {
    mountTime.current = performance.now();
    const renderTime = mountTime.current - renderStart.current;

    if (process.env.NODE_ENV === "development") {
      console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
    }

    return () => {
      if (process.env.NODE_ENV === "development") {
        const unmountTime = performance.now();
        const totalLifetime = unmountTime - mountTime.current;
        console.log(`${componentName} lifetime: ${totalLifetime.toFixed(2)}ms`);
      }
    };
  }, [componentName]);
}

export function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            options.onIntersect?.(entry);
          } else {
            options.onLeave?.(entry);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "50px",
      }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options.threshold, options.rootMargin]);

  return elementRef;
}

export function useImagePreloader(imageSources) {
  useEffect(() => {
    const preloadImages = imageSources.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    });

    Promise.allSettled(preloadImages).then((results) => {
      const loaded = results.filter((result) => result.status === "fulfilled").length;
      const failed = results.filter((result) => result.status === "rejected").length;

      if (process.env.NODE_ENV === "development") {
        console.log(`Images preloaded: ${loaded} successful, ${failed} failed`);
      }
    });
  }, [imageSources]);
}
