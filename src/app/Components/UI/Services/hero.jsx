import React from "react";
import AnimatedGridBackground from "@/app/Components/UI/Home/HeroInteractiveElement/AnimatedGridBackground";

const HeroSection = () => {
  return (
    <section className="bg-black text-white  ">
      <AnimatedGridBackground />
      <div className="container mx-auto px-4 text-center pt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Transform Your Business with <span className="text-[#cabb67]">CyANU</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Empower your business with cutting-edge AI, ML, and bespoke software solutions tailored to your needs.</p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="px-6 py-3 bg-transparent border border-[#cabb67] text-[#cabb67] rounded-md hover:bg-[#cabb67] hover:text-black transition duration-300">
            Get Started
          </a>
          <a href="#services" className="px-6 py-3 bg-[#cabb67] text-black rounded-md hover:bg-[#b3a55e] transition duration-300">
            Explore Services
          </a>
        </div>
        <div className="mt-16">
          <span className="block w-16 h-1 bg-[#cabb67] mx-auto"></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
