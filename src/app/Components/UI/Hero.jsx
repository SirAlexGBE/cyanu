"use client";
import React, {useState, useEffect, useRef} from "react";
import {ArrowRight, Sparkles, Zap, Code2, Brain, Shield, Cloud, Smartphone, Monitor, Network} from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const gridRef = useRef([]);

  const services = [
    {icon: Brain, label: "AI & ML", description: "Intelligent automation solutions"},
    {icon: Code2, label: "Web Development", description: "Modern web solutions"},
    {icon: Smartphone, label: "Mobile Apps", description: "Cross-platform mobile applications"},
    {icon: Monitor, label: "Windows Apps", description: "Desktop solutions for Windows"},
    {icon: Shield, label: "Security", description: "Cyber protection services"},
    {icon: Network, label: "Network", description: "Infrastructure design and management"},
    {icon: Cloud, label: "Cloud Services", description: "Scalable cloud solutions for your business"},
    {icon: Zap, label: "Data Analytics", description: "Insight-driven decision making"},
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const gridSize = 50;
    const initGrid = () => {
      gridRef.current = [];
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          if (Math.random() > 0.7) {
            gridRef.current.push({
              x,
              y,
              opacity: Math.random() * 0.3,
              pulseSpeed: 0.02 + Math.random() * 0.03,
              phase: Math.random() * Math.PI * 2,
            });
          }
        }
      }
    };

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(234, 221, 143, 0.03)";
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
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

    initGrid();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initGrid();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let timeout;
    const handleMouseMove = (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      }, 10);
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative bg-black">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}} />
        <div
          className="absolute inset-0 opacity-60 z-2"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(234, 221, 143, 0.15) 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10 p-4">
          <div className="mx-auto w-full text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-5 h-5 text-[#EADD8F] mr-2 animate-pulse" />
              <span className="text-[#EADD8F] text-sm sm:text-base font-medium tracking-wider uppercase">Next-Generation Software Solutions</span>
              <Sparkles className="w-5 h-5 text-[#EADD8F] ml-2 animate-pulse" />
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-8 leading-none">
              <span className="block relative">
                BUILD
                <div className="absolute -inset-1 bg-gradient-to-r from-[#EADD8F] to-yellow-300 rounded-lg blur opacity-20" />
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EADD8F] via-yellow-300 to-[#EADD8F] animate-pulse">THE FUTURE</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              We craft revolutionary AI-powered solutions, cutting-edge web applications, and enterprise-grade software that transforms how businesses operate in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-16">
            {services.map(({icon: Icon, label, description}, index) => (
              <div key={label} className="group relative">
                <div className="relative p-2 flex items-center justify-center text-center flex-col backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-[#EADD8F]/50 transition-all duration-500 hover:transform hover:scale-105 h-48">
                  <div className="absolute inset-0 bg-transparent  transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
                    <Icon className="w-8 h-8 text-[#EADD8F] group-hover:rotate-12 transition-transform duration-500" aria-label={label} />
                    <h3 className="text-white font-bold text-xl">{label}</h3>
                    <p className="text-gray-300 text-sm">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a href="/contact" className="fixed bottom-6 sm:bottom-12 right-6 z-50 bg-[#EADD8F] text-black px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition">
          Let's Talk
        </a>
      </div>
    </>
  );
};

export default HeroSection;
