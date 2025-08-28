import CookiePolicy from "@/app/Components/UI/Legal/cookie";
import LegalHeroSection from "@/app/Components/UI/Legal/legalhero";
import Privacypolicy from "@/app/Components/UI/Legal/privacypolicy";
import Tos from "@/app/Components/UI/Legal/tos";
import React from "react";

export default function Legal() {
  return (
    <>
      <LegalHeroSection />
      <CookiePolicy />
      <Privacypolicy />
      <Tos />
    </>
  );
}
