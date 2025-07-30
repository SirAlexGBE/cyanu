// components/VisualHighlights.tsx
"use client";
import {motion} from "framer-motion";
import Image from "next/image";
import {team, scale, security, delivery, innovation, satisfaction} from "@/Assets/Images/index.js";

const features = [
  {
    title: "Expert Team",
    description: "Top-tier engineers focused on real-world results",
    image: team,
  },
  {
    title: "Scalable Tech",
    description: "Built to grow with your business from day one",
    image: scale,
  },
  {
    title: "Security-First",
    description: "Enterprise-grade protection across all services",
    image: security,
  },
  {
    title: "Fast Delivery",
    description: "Agile delivery pipelines to get you live faster",
    image: delivery,
  },
  {
    title: "Innovation Focused",
    description: "Leveraging AI & automation for your advantage",
    image: innovation,
  },

  {
    title: "Customer-Centric",
    description: "Customer-centric approach for your success",
    image: satisfaction,
  },
];

export default function VisualHighlights() {
  return (
    <section className="w-full bg-black py-8 px-4 md:px-10 text-white">
      <motion.h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-[#cabb67] pl-4" initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}>
        What Sets <span className="text-[#cabb67]">CYANU</span> Apart
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({title, description, image}, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: index * 0.1}}
            viewport={{once: true}}
            className="group relative rounded-2xl overflow-hidden shadow-md border border-[#cabb67]/40 hover:border-[#cabb67] transition-all duration-300"
          >
            <div className="relative w-full h-60">
              <Image src={image} alt={title} fill className="object-fit group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#cabb67]">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{description}</p>
            </div>
            <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-[0_0_20px_#cabb67] transition-all duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
