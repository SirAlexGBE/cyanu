import CyanuFooter from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import HeroSection from "./Components/UI/Hero";
import NewsSection from "./Components/UI/NewsSection";
import ProjectsSection from "./Components/UI/RecentProjects";
import TestimonialsSection from "./Components/UI/testimonials";
import Highlights from "./Components/UI/WhyChooseUS";

export default function Home() {
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
