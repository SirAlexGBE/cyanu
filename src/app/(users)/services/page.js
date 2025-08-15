import Projects from "@/app/Components/UI/Services/Casestudeis";
import CaseStudies from "@/app/Components/UI/Services/Casestudeis";
import HeroSection from "@/app/Components/UI/Services/hero";
import ServiceCards from "@/app/Components/UI/Services/Services";
import React from "react";

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <ServiceCards />
      <Projects />
    </>
  );
}
