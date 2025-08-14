"use client";
import Image from "next/image";
import Link from "next/link";
import {healthapp, chatbot, webapp} from "@/assets/images/index";

const projects = [
  {
    title: "AI Chat Assistant",
    type: "AI & ML",
    image: chatbot,
  },
  {
    title: "Enterprise Web App",
    type: "Web Development",
    image: webapp,
  },
  {
    title: "Mobile Health Tracker",
    type: "Mobile App",
    image: healthapp,
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full bg-black py-8 px-4 md:px-10 text-white">
      <div className=" mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-[#cabb67] pl-4">Our Recent Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl border border-[#cabb67]/30 hover:border-[#cabb67] transition-all duration-100">
              <div className="relative w-full h-64">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10"></div>
              <div className="p-6">
                <p className="text-sm text-[#cabb67]">{project.type}</p>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-right m-4">
        <Link href="/projects">
          <button className="px-6 py-3 border border-[#cabb67] text-[#cabb67] rounded-xl hover:bg-[#cabb67] hover:text-black transition-all duration-300">See All Projects</button>
        </Link>
      </div>
    </section>
  );
}
