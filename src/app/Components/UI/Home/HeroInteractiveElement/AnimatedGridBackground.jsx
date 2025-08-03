'use client';
import React, { useRef, useEffect } from 'react';

const GRID_SIZE = 50;
const PULSE_SPEED_MIN = 0.02;
const PULSE_SPEED_RANGE = 0.03;
const OPACITY_MAX = 0.3;
const RANDOM_POINT_THRESHOLD = 0.7;

const AnimatedGridBackground = React.memo(() => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const gridRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initGrid = () => {
      gridRef.current = [];
      for (let x = 0; x < canvas.width; x += GRID_SIZE) {
        for (let y = 0; y < canvas.height; y += GRID_SIZE) {
          if (Math.random() > RANDOM_POINT_THRESHOLD) {
            gridRef.current.push({
              x,
              y,
              opacity: Math.random() * OPACITY_MAX,
              pulseSpeed: PULSE_SPEED_MIN + Math.random() * PULSE_SPEED_RANGE,
              phase: Math.random() * Math.PI * 2,
            });
          }
        }
      }
    };

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(234, 221, 143, 0.03)';
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      gridRef.current.forEach((point) => {
        const pulse = Math.sin(time * point.pulseSpeed + point.phase);
        const opacity = point.opacity + pulse * 0.2;

        ctx.beginPath();
        ctx.arc(point.x, point.y, 2 + pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234, 221, 143, ${Math.max(0, opacity)})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(point.x, point.y, 6 + pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234, 221, 143, ${Math.max(0, opacity * 0.1)})`;
        ctx.fill();
      });

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      initGrid();
    };

    resizeCanvas();
    initGrid();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />;
});

AnimatedGridBackground.displayName = 'AnimatedGridBackground';

export default AnimatedGridBackground;
