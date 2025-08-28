"use client";
import React, {useState} from "react";
import {motion} from "framer-motion";
import {Briefcase, MapPin, Clock, Send, CheckCircle, Sparkles} from "lucide-react";
import AnimatedGridBackground from "@/app/Components/UI/Home/HeroInteractiveElement/AnimatedGridBackground";

// Job openings (extend/replace with CMS/API as needed)
const openings = [
  {
    id: "swe-frontend",
    title: "Senior Frontend Engineer",
    location: "Remote / Hybrid",
    type: "Full-time",
    summary: "Own complex UI features in Next.js, drive performance and accessibility, and mentor teammates.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    responsibilities: [
      "Design and implement scalable frontend architectures in Next.js",
      "Optimize performance (LCP/CLS), accessibility, and SEO",
      "Collaborate with design to deliver pixel-perfect UI",
      "Mentor junior engineers and lead code reviews",
    ],
    requirements: [
      "5+ years building production React/Next.js apps",
      "Strong TypeScript and state management skills",
      "Tailwind or utility-first CSS experience",
      "Familiarity with SSR/ISR and API integration",
    ],
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    summary: "Build and deploy ML systems for real business impact across recommendation and NLP stacks.",
    tags: ["Python", "LLMs", "MLOps", "Vector DB"],
    responsibilities: [
      "Develop, train, and evaluate ML models (NLP/RecSys)",
      "Ship models to production with robust monitoring",
      "Collaborate with product and data teams on metrics",
      "Maintain feature pipelines and experiment tracking",
    ],
    requirements: [
      "3+ years in ML engineering (TensorFlow/PyTorch)",
      "Experience with data pipelines and MLOps tooling",
      "LLM fine-tuning/serving experience is a plus",
      "Comfort with cloud infra and containers",
    ],
  },
  {
    id: "pm",
    title: "Technical Product Manager",
    location: "Remote",
    type: "Contract / Full-time",
    summary: "Lead discovery, align stakeholders, and deliver outcomes with crisp roadmaps and metrics.",
    tags: ["Product", "Agile", "Stakeholder Mgmt"],
    responsibilities: [
      "Own the roadmap and delivery for tech initiatives",
      "Run discovery, define PRDs, and prioritize backlog",
      "Align engineering, design, and business stakeholders",
      "Track success metrics and iterate quickly",
    ],
    requirements: ["4+ years in product management for software", "Strong written communication and stakeholder mgmt", "Comfortable working with technical teams", "Data-driven decision making"],
  },
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState(null);

  const openRole = (role) => setSelectedRole(role);
  const closeRole = () => setSelectedRole(null);
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeRole();
  };

  return (
    <section className="bg-black text-white">
      <AnimatedGridBackground />

      {/* Custom scrollbar styles (matching Services modal) */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 12px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000000;
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cabb67;
          border-radius: 6px;
          border: 2px solid #000000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #b3a55e;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #cabb67 #000000;
        }
      `}</style>

      {/* Hero */}
      <div className="relative z-10 pt-20 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{duration: 0.6}} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Join the <span className="text-[#cabb67]">CyANU</span> Team
          </motion.h1>
          <motion.p initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{delay: 0.15, duration: 0.6}} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Build cutting-edge solutions, ship quality, and grow your career with a team that cares.
          </motion.p>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title: "Impactful Work", desc: "Solve real problems for ambitious clients across AI, cloud, and web."},
            {title: "Growth & Mentorship", desc: "Learn fast with code reviews, pairing, and dedicated growth plans."},
            {title: "Flexible Culture", desc: "Remote-friendly, async-first, and results-driven."},
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.2}}
              transition={{delay: 0.1 * idx, duration: 0.5}}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-[#cabb67] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-[#cabb67]" />
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Open Roles */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#cabb67]">Open Positions</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {openings.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{opacity: 0, x: index % 2 === 0 ? -30 : 30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true, amount: 0.2}}
              transition={{duration: 0.5}}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-[#cabb67] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{role.summary}</p>
                  <div className="flex flex-wrap items-center gap-3 text-gray-300 text-sm">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-[#cabb67]" /> {role.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-4 h-4 text-[#cabb67]" /> {role.type}
                    </span>
                  </div>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#cabb67] flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-black" />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {role.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-md border border-gray-700 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => openRole(role)}
                  className="bg-[#cabb67] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#b8a659] transition-all duration-200 inline-flex items-center gap-2"
                >
                  <Send className="w-4 h-4" /> View Details
                </button>
                <a
                  href={`/contact?role=${role.id}`}
                  className="border border-[#cabb67] text-[#cabb67] font-semibold px-4 py-2 rounded-lg hover:bg-[#cabb67] hover:text-black transition-all duration-200"
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedRole && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={handleBackdropClick}>
          <div className="bg-black rounded-lg max-w-3xl w-full mx-4 max-h-[80vh] overflow-y-auto border border-[#cabb67] custom-scrollbar relative" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-black border-b border-[#cabb67] flex items-center justify-between p-4 z-10">
              <h3 className="text-2xl font-bold text-[#cabb67]">{selectedRole.title}</h3>
              <button onClick={closeRole} className="text-[#cabb67] hover:text-[#b3a55e] transition-colors duration-200">
                ✕
              </button>
            </div>

            <div className="p-6 text-gray-300">
              <p className="mb-4">{selectedRole.summary}</p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#cabb67]" /> {selectedRole.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#cabb67]" /> {selectedRole.type}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedRole.tags?.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-md border border-gray-700 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[#cabb67] font-semibold mb-2">Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedRole.responsibilities?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#cabb67] font-semibold mb-2">Requirements</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedRole.requirements?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`/contact?role=${selectedRole.id}`} className="bg-[#cabb67] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#b8a659] transition-all duration-200">
                  Apply for this role
                </a>
                <button onClick={closeRole} className="border border-[#cabb67] text-[#cabb67] font-semibold px-4 py-2 rounded-lg hover:bg-[#cabb67] hover:text-black transition-all duration-200">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application CTA */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-[#cabb67] to-[#b8a659] rounded-2xl p-8 text-black">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <CheckCircle className="w-10 h-10" />
            <div className="flex-1">
              <h3 className="text-xl font-bold">Didn’t find a perfect match?</h3>
              <p className="opacity-90">We’re always meeting great talent. Send us your resume and a short note about what you’d love to work on.</p>
            </div>
            <a href="/contact?type=careers" className="bg-black text-white px-5 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Send Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
