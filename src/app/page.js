"use client";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CyanuFooter from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import HeroSection from "./Components/UI/Home/Hero";
import {SplineSceneBasic} from "./Components/UI/HeroInteractiveElement/Demo";
import NewsSection from "./Components/UI/Home/NewsSection";
import ProjectsSection from "./Components/UI/Home/RecentProjects";
import TestimonialsSection from "./Components/UI/Home/testimonials";
import Highlights from "./Components/UI/Home/WhyChooseUS";

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
