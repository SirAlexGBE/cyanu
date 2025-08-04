import React from "react";

export default function Mission() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Our Mission, Vision & Values</h2>
          <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">At CyANU, we don’t just build systems — we engineer the future. Grounded in purpose, driven by precision.</p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#cabb67]">Our Mission</h3>
            <p className="text-[#b0b0b0] text-lg">To simplify technological complexity through intelligent, secure, and scalable engineering — making innovation accessible and impactful for all.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#cabb67]">Our Vision</h3>
            <p className="text-[#b0b0b0] text-lg">To become the world’s most trusted partner in AI-driven digital transformation — building adaptive, future-ready systems.</p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-[#cabb67] text-center md:text-left">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-[#b0b0b0] text-base">
            {[
              {title: "Innovation", desc: "Pushing boundaries to build intelligent, adaptive systems."},
              {title: "Integrity", desc: "Guided by ethics, transparency, and accountability in every action."},
              {title: "Security-First", desc: "Engineering with protection and trust at the core."},
              {title: "Client-Centric", desc: "Every solution is tailored to deliver real business value."},
              {title: "Transparency", desc: "Open processes, honest communication, no guesswork."},
              {title: "Continuous Learning", desc: "We evolve with the tech — always growing, always improving."},
            ].map(({title, desc}) => (
              <div key={title} className="bg-[#0d0d0d] p-6 rounded-xl border border-[#cabb67]">
                <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
