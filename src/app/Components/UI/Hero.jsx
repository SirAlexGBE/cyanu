"use client";
import React, {useState, useEffect, useRef} from "react";
import {ArrowRight, Sparkles, Zap, Code2, Brain, Shield, Cloud, Smartphone, Monitor, Network} from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const gridRef = useRef([]);

  // Service data
  const services = [
    {icon: Brain, label: "AI & ML", description: "Intelligent automation"},
    {icon: Code2, label: "Web Development", description: "Modern web solutions"},
    {icon: Smartphone, label: "Mobile Apps", description: "Cross-platform mobile"},
    {icon: Monitor, label: "Windows Apps", description: "Desktop solutions"},
    {icon: Shield, label: "Security", description: "Cyber protection"},
    {icon: Network, label: "Network", description: "Infrastructure design"},
    {icon: Cloud, label: "Cloud Services", description: "Scalable cloud solutions"},
  ];

  // Animated grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Initialize grid
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

      // Draw grid pattern
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

      // Animate grid points
      gridRef.current.forEach((point) => {
        const pulse = Math.sin(time * point.pulseSpeed + point.phase);
        const opacity = point.opacity + pulse * 0.2;

        ctx.beginPath();
        ctx.arc(point.x, point.y, 2 + pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234, 221, 143, ${Math.max(0, opacity)})`;
        ctx.fill();

        // Add glow effect
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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative  bg-black ">
        {/* Animated Grid Background */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{zIndex: 1}} />

        {/* Dynamic Gradient Overlay */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(234, 221, 143, 0.15) 0%, transparent 50%)`,
            zIndex: 2,
          }}
        />

        {/* Main Content Container */}

        <div className="relative z-10 m-10" style={{height: "calc(100vh - 10vh)"}}>
          <div className=" mx-auto w-full">
            {/* Hero Text Section */}
            <div className="text-center mb-16">
              {/* Subtitle with sparkle effect */}
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-5 h-5 text-[#EADD8F] mr-2 animate-pulse" />
                <span className="text-[#EADD8F] text-sm sm:text-base font-medium tracking-wider uppercase">Next-Generation Software Solutions</span>
                <Sparkles className="w-5 h-5 text-[#EADD8F] ml-2 animate-pulse" />
              </div>

              {/* Main Heading - Grok Style */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-8 leading-none">
                <span className="block relative">
                  BUILD
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#EADD8F] to-yellow-300 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EADD8F] via-yellow-300 to-[#EADD8F] animate-pulse">THE FUTURE</span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                We craft revolutionary AI-powered solutions, cutting-edge web applications, and enterprise-grade software that transforms how businesses operate in the digital age.
              </p>
            </div>

            {/* Service Grid - Grok Inspired */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                    style={{
                      animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-[#EADD8F]/50 transition-all duration-500 hover:transform hover:scale-105 hover:bg-gray-900/80">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#EADD8F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                      <div className="relative z-10">
                        <Icon className="w-8 h-8 text-[#EADD8F] mb-3 group-hover:rotate-12 transition-transform duration-500" />
                        <h3 className="text-white font-bold text-sm mb-1">{service.label}</h3>
                        <p className="text-gray-400 text-xs">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              {/* Bottom Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="group cursor-pointer">
                  <div className="text-4xl sm:text-5xl font-black text-[#EADD8F] mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-gray-400 font-medium">Projects Delivered</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-4xl sm:text-5xl font-black text-[#EADD8F] mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-gray-400 font-medium">Expert Support</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-4xl sm:text-5xl font-black text-[#EADD8F] mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                  <div className="text-gray-400 font-medium">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default HeroSection;
