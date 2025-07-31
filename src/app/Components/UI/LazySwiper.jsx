"use client";
import {useState, useEffect, useRef, memo} from "react";

function LazySwiper({children, threshold = 0.1, rootMargin = "50px"}) {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return <div ref={ref}>{inView ? children : <div className="h-[420px] bg-gray-900 animate-pulse rounded-xl" />}</div>;
}

export default memo(LazySwiper);
