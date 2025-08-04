"use client";

import React from "react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import dynamic from "next/dynamic";

// Dynamically load the Globe component (avoid SSR and load when needed)
const Globe = dynamic(() => import("@/components/magicui/globe").then((mod) => mod.Globe), {ssr: false});

export default function AboutHero() {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative bg-[#0d0d0d] text-white  flex flex-col lg:flex-row items-center p-10 justify-between ">
      {/* Text Content */}
      <div className="relative z-10 flex-1 w-full max-w-2xl text-center lg:text-left space-y-8">
        <motion.h1 initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7, ease: "easeOut"}} className="text-4xl md:text-6xl font-bold leading-tight">
          Crafting the Future
          <br />
          with <span className="text-[#cabb67]">Scalable</span>, <span className="text-[#cabb67]">Intelligent</span> Technology
        </motion.h1>

        <motion.p
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.2, duration: 0.7, ease: "easeOut"}}
          className="text-[#a1a1aa] text-lg md:text-xl max-w-xl mx-auto lg:mx-0"
        >
          We are a team of passionate engineers delivering secure, smart, and scalable solutions. <br />
          From AI automation to full-stack digital systems.
        </motion.p>
      </div>

      {/* Globe */}
      <div ref={ref} className="relative flex-1 w-full flex items-center justify-center mt-12 lg:mt-0 px-4">
        {inView && (
          <div className="w-full max-w-[500px] aspect-[1/1]">
            <Globe className="w-full h-full relative z-0" />
          </div>
        )}
      </div>
    </section>
  );
}
