"use client";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CyanuFooter from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import HeroSection from "./Components/UI/Hero";
import {SplineSceneBasic} from "./Components/UI/HeroInteractiveElement/Demo";
import NewsSection from "./Components/UI/NewsSection";
import ProjectsSection from "./Components/UI/RecentProjects";
import TestimonialsSection from "./Components/UI/testimonials";
import Highlights from "./Components/UI/WhyChooseUS";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Highlights />
      <ProjectsSection />
      <TestimonialsSection />
      <NewsSection />
      <CyanuFooter />
    </>
  );
}
