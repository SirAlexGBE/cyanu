import Hero from "@/app/Components/UI/About/hero";
import Mission from "@/app/Components/UI/About/mission";
import CompanyStats from "@/app/Components/UI/About/stats";
import OurStory from "@/app/Components/UI/About/story";
import React from "react";

export default function About() {
  return (
    <>
      <Hero />
      <OurStory />
      <Mission />
      <CompanyStats />
    </>
  );
}
