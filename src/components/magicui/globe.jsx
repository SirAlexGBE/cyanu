"use client";

import createGlobe from "cobe";
import {useMotionValue, useSpring} from "motion/react";
import {useEffect, useRef} from "react";

import {cn} from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 5,
  baseColor: [1, 2, 2],
  markerColor: [0.792, 0.733, 0.404],
  glowColor: [1, 1, 1],
  markers: [
    {location: [19.076, 72.8777], size: 0.05}, // India (Mumbai)
    {location: [23.8103, 90.4125], size: 0.05}, // Bangladesh (Dhaka)
    {location: [30.0444, 31.2357], size: 0.07}, // Egypt (Cairo)
    {location: [39.9042, 116.4074], size: 0.05}, // China (Beijing)
    {location: [-23.5505, -46.6333], size: 0.1}, // Brazil (São Paulo)
    {location: [19.4326, -99.1332], size: 0.1}, // Mexico (Mexico City)
    {location: [40.7128, -74.006], size: 0.1}, // USA (New York)
    {location: [41.0082, 28.9784], size: 0.06}, //
    {location: [51.5074, -0.1278], size: 0.05}, // UK (London)
    {location: [35.6895, 139.6917], size: 0.05}, // Tokyo
    {location: [37.4419, -122.143], size: 0.05}, // San Francisco
    {location: [38.8951, -77.0364], size: 0.05}, // Washington D.C.
    {location: [48.8566, 2.3522], size: 0.05}, // Paris
    {location: [40.7128, -74.006], size: 0.05}, // New York
    {location: [50.4501, 30.5234], size: 0.05}, // Kiev
    {location: [55.7558, 37.6173], size: 0.05}, // Moscow
    {location: [-25.2744, 133.7751], size: 0.05}, // Sydney
    {location: [-33.8688, 151.2093], size: 0.05}, // Melbourne
    {location: [-37.8136, 144.9631], size: 0.05}, // Brisbane
    {location: [-43.532, 172.636], size: 0.05}, // Auckland
    {location: [28.6139, 78.209], size: 0.05}, // India
    {location: [29.8139, 77.209], size: 0.05}, // India
    {location: [28.6139, 77.209], size: 0.05}, // India
    {location: [13.7563, 100.5018], size: 0.05}, // Thailand
    {location: [1.3521, 103.8198], size: 0.05}, // Singapore
    {location: [22.3193, 114.1694], size: 0.05}, // Hong Kong
    {location: [27.7172, 85.324], size: 0.05},
    {location: [-18.9167, 47.5333], size: 0.05}, // South Africa
    {location: [19.076, 72.8777], size: 0.05}, // India
    {location: [-15.834, -47.9292], size: 0.05}, // Brazil
    {location: [6.5244, 3.3792], size: 0.05}, // Nigeria
    {location: [-23.5505, -46.6333], size: 0.05}, // Brazil (São Paulo)
    {location: [-15.834, -47.9292], size: 0.05}, // Brazil
    {location: [-34.6037, -58.3816], size: 0.05}, // Buenos Aires
    {location: [-27.4698, 153.025], size: 0.05}, // Adelaide
  ],
};

export function Globe({className, config = GLOBE_CONFIG}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 50,
    stiffness: 100,
  });

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
      <canvas
        className={cn("size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]")}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
}
