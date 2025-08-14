"use client";
import React from "react";
import Link from "next/link";
import {Sparkles, Brain, Code2, Smartphone, Monitor, Shield, Network, Cloud, Zap} from "lucide-react";
import {SplineScene} from "@/app/Components/UI/Home/HeroInteractiveElement/Splite";
import {useMousePosition} from "@/lib/hooks/useMousePosition";
import AnimatedGridBackground from "@/app/Components/UI/Home/HeroInteractiveElement/AnimatedGridBackground";
import ServiceCard from "@/app/Components/UI/Home/HeroInteractiveElement/ServiceCard";
import FloatingActionButton from "@/app/Components/Layout/FloatingActionButton";

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

const HeroSection = () => {
  const mousePosition = useMousePosition();

  return (
    <>
      <div className="relative bg-black">
        <AnimatedGridBackground />
        <div
          className="absolute inset-0 opacity-60 z-2"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(234, 221, 143, 0.15) 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10 p-4">
          <div className="mx-auto w-full text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-5 h-5 text-[#bcb584] mr-2 animate-pulse" />
              <span className="text-[#EADD8F] text-sm sm:text-base font-medium tracking-wider uppercase">Next-Generation Software Solutions</span>
              <Sparkles className="w-5 h-5 text-[#EADD8F] ml-2 animate-pulse" />
            </div>

            <div className="flex h-full">
              <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-none">
                  <span className="block relative">BUILD</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EADD8F] via-yellow-300 to-[#EADD8F] animate-pulse">THE FUTURE</span>
                </h1>
              </div>
              <div className="flex-1 relative">
                <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
              </div>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              We craft revolutionary AI-powered solutions, cutting-edge web applications, and enterprise-grade software that transforms how businesses operate in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-16">
            {services.map((service) => (
              <ServiceCard key={service.label} {...service} />
            ))}
          </div>
        </div>

        <FloatingActionButton />
      </div>
    </>
  );
};

export default HeroSection;
