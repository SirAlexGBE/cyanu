import React from "react";
import AnimatedGridBackground from "@/app/Components/UI/Home/HeroInteractiveElement/AnimatedGridBackground";

const LegalHeroSection = () => {
  return (
    <section className="bg-black text-white  ">
      <AnimatedGridBackground />
      <div className="container mx-auto px-4 text-center pt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Lets See the Lagal terms of <span className="text-[#cabb67]">CyANU</span>
        </h1>
        <p className="text-lg md:text-xl max-w-md mx-auto mb-8">
          Welcome to CyANU, a platform that connects users with various services and resources. By using our website or app, you agree to be bound by these Terms of Service.
        </p>
        <div className="mt-16">
          <span className="block w-16 h-1 bg-[#cabb67] mx-auto"></span>
        </div>
      </div>
    </section>
  );
};

export default LegalHeroSection;
