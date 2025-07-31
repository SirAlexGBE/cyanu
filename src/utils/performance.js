// Performance monitoring utilities
export const measurePerformance = (name, fn) => {
  return (...args) => {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();

    if (process.env.NODE_ENV === "development") {
      console.log(`${name} took ${end - start} milliseconds`);
    }

    return result;
  };
};

export const measureAsyncPerformance = (name, fn) => {
  return async (...args) => {
    const start = performance.now();
    const result = await fn(...args);
    const end = performance.now();

    if (process.env.NODE_ENV === "development") {
      console.log(`${name} took ${end - start} milliseconds`);
    }

    return result;
  };
};

// Web Vitals reporting
export const reportWebVitals = (metric) => {
  if (process.env.NODE_ENV === "production") {
    // Send to analytics service
    console.log(metric);
  }
};

// Preload critical resources
export const preloadResource = (href, as = "image", crossorigin = "anonymous") => {
  if (typeof window !== "undefined") {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = href;
    link.as = as;
    if (crossorigin) link.crossOrigin = crossorigin;
    document.head.appendChild(link);
  }
};

// Lazy load images with intersection observer
export const createImageObserver = (callback) => {
  if (typeof window === "undefined") return null;

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
        }
      });
    },
    {
      rootMargin: "50px",
      threshold: 0.1,
    }
  );
};
