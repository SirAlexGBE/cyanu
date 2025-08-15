"use client";

import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {ArrowLeft, Clock, MapPin, Building2, Calendar, TrendingUp, CheckCircle, ArrowRight, ExternalLink} from "lucide-react";
import {useEffect, useState} from "react";

// Dummy data for case studies with Unsplash images
const caseStudies = [
  {
    id: 1,
    title: "Revolutionizing Retail Inventory with AI-Powered Predictive Analytics",
    shortDescription:
      "CyANU partnered with a leading retail chain to develop an AI-driven inventory management system that reduced stockouts by 40% and optimized supply chain efficiency using machine learning algorithms for real-time forecasting.",
    overviewImage: "https://images.unsplash.com/photo-1516321318427-8f6f49924107?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    service: "AI & Machine Learning Solutions",
    tags: ["AI/ML", "Predictive Analytics", "Inventory Management", "Real-time Processing"],
    clientDetails: {
      companyName: "RetailTech Inc.",
      shortDetail: "A major e-commerce and brick-and-mortar retail company specializing in consumer electronics and apparel.",
      location: "New York, NY, USA",
      industry: "Retail & E-Commerce",
      projectDuration: "6 months (January 2025 - June 2025)",
      teamSize: "8 specialists",
      budget: "$250K - $500K",
    },
    challenge: {
      description: "RetailTech Inc. faced significant operational hurdles in managing their vast inventory across multiple locations. Key challenges included:",
      list: [
        "Inaccurate demand forecasting leading to frequent stockouts and overstocking.",
        "Manual inventory tracking processes that were time-consuming and prone to human error.",
        "Lack of integration between online and offline sales data, resulting in siloed insights.",
        "Rising costs from inefficient supply chain logistics and wasted resources.",
      ],
    },
    solution: {
      description:
        "CyANU designed and implemented a comprehensive AI & Machine Learning platform tailored to RetailTech's needs. The solution leveraged advanced neural networks for predictive modeling, integrated with their existing ERP systems via custom APIs. This enabled real-time data analysis, automated alerts for low stock, and dynamic pricing recommendations based on market trends.",
      images: [
        {src: "https://images.unsplash.com/photo-1551288049-b1f3a00051ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80", alt: "Solution Architecture Diagram"},
        {src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80", alt: "Mobile App Integration"},
      ],
      technologies: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    },
    additionalFeatures: {
      list: [
        "Customizable Dashboards: User-friendly interfaces with drag-and-drop widgets for personalized analytics views.",
        "Anomaly Detection: AI algorithms to flag unusual patterns, such as sudden demand spikes or supply disruptions.",
        "Integration with IoT Devices: Support for warehouse sensors to automate stock level updates in real-time.",
        "Sustainability Analytics: Tools to minimize waste by optimizing reorder points based on environmental impact data.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1534670007418-fbb7f6a44161?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        alt: "Additional Features Screenshot",
      },
    },
    businessValue: {
      before: [
        "Stockout rate: 25% during peak seasons.",
        "Inventory holding costs: $1.2 million annually due to overstocking.",
        "Manual processing time: 40 hours per week per store.",
        "Forecast accuracy: 65% based on historical data alone.",
      ],
      after: [
        "Stockout rate: Reduced to 10%, improving customer satisfaction.",
        "Inventory holding costs: Cut by 35% ($420,000 savings annually).",
        "Manual processing time: Automated to under 5 hours per week, freeing staff for strategic tasks.",
        "Forecast accuracy: Boosted to 92% with AI-driven insights.",
      ],
    },
    testimonial: {
      quote: "The AI-powered inventory system has transformed our operations. We've seen remarkable improvements in efficiency and cost savings that exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, RetailTech Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    },
  },
];

// Animation variants
const fadeInUp = {
  initial: {opacity: 0, y: 60},
  animate: {opacity: 1, y: 0},
  transition: {duration: 0.6, ease: "easeOut"},
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: {opacity: 0, scale: 0.8},
  animate: {opacity: 1, scale: 1},
  transition: {duration: 0.5, ease: "easeOut"},
};

// Progress indicator component
const ProgressIndicator = () => {
  const {scrollYProgress} = useScroll();

  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#cabb67] to-[#d4c574] origin-left z-50" style={{scaleX: scrollYProgress}} />;
};

// Section navigation component
const SectionNav = ({sections, activeSection}) => {
  return (
    <motion.div initial={{opacity: 0, x: 50}} animate={{opacity: 1, x: 0}} className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-full p-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => document.getElementById(section.id)?.scrollIntoView({behavior: "smooth"})}
            className={`block w-3 h-3 rounded-full mb-3 last:mb-0 transition-all duration-300 ${activeSection === section.id ? "bg-[#cabb67] scale-125" : "bg-white/30 hover:bg-white/50"}`}
            title={section.label}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function CaseStudies() {
  const [activeSection, setActiveSection] = useState("overview");
  const {scrollY} = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  const sections = [
    {id: "overview", label: "Overview"},
    {id: "client", label: "Client"},
    {id: "challenge", label: "Challenge"},
    {id: "solution", label: "Solution"},
    {id: "features", label: "Features"},
    {id: "results", label: "Results"},
    {id: "testimonial", label: "Testimonial"},
  ];

  // Track active section
  useEffect(() => {
    const observers = sections.map((section) => {
      const element = document.getElementById(section.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        {threshold: 0.3}
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <ProgressIndicator />
      <SectionNav sections={sections} activeSection={activeSection} />

      {/* Animated background elements */}
      <motion.div style={{y: backgroundY}} className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#cabb67] rounded-full blur-3xl" />
        <div className="absolute top-96 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
      </motion.div>

      {/* Enhanced Header */}
      <motion.div initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}} className="relative py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.6, delay: 0.2}}
            className="inline-flex items-center gap-2 bg-[#cabb67]/10 border border-[#cabb67]/20 rounded-full px-4 py-2 mb-8"
          >
            <TrendingUp className="w-4 h-4 text-[#cabb67]" />
            <span className="text-[#cabb67] text-sm font-medium">Success Stories</span>
          </motion.div>

          <motion.h1
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.3}}
            className="text-6xl md:text-7xl font-light mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Case Studies
          </motion.h1>

          <motion.p initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.4}} className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover how we transform businesses through innovative technology solutions and strategic partnerships
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20 relative">
        {caseStudies.map((study, index) => (
          <motion.div key={index} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8, delay: 0.2}} className="space-y-32">
            {/* Overview Section */}
            <section id="overview" className="scroll-mt-20">
              <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{once: true, margin: "-100px"}} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div variants={fadeInUp} className="space-y-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-[#cabb67]/10 border border-[#cabb67]/20 rounded-full text-[#cabb67] text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <span className="text-[#cabb67] text-sm font-semibold uppercase tracking-wider">{study.service}</span>
                    <h2 className="text-4xl md:text-5xl font-light mt-4 mb-8 leading-tight">{study.title}</h2>
                    <p className="text-gray-300 text-xl leading-relaxed">{study.shortDescription}</p>
                  </div>

                  <div className="flex items-center gap-6 pt-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{study.clientDetails.projectDuration.split("(")[0]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm">{study.clientDetails.industry}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={scaleIn} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#cabb67]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Image src={study.overviewImage} alt="Overview" width={700} height={500} className="relative w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500" />
                </motion.div>
              </motion.div>
            </section>

            {/* Client Info Section */}
            <section id="client" className="scroll-mt-20">
              <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.6}}>
                <h3 className="text-[#cabb67] text-sm font-semibold uppercase tracking-wider mb-12 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Client Overview
                </h3>

                <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    <motion.div whileHover={{scale: 1.05}} className="bg-black/30 rounded-2xl p-6 border border-white/5">
                      <Building2 className="w-8 h-8 text-[#cabb67] mb-4" />
                      <p className="text-gray-400 text-sm mb-2">Company</p>
                      <p className="text-white font-semibold text-lg">{study.clientDetails.companyName}</p>
                    </motion.div>

                    <motion.div whileHover={{scale: 1.05}} className="bg-black/30 rounded-2xl p-6 border border-white/5">
                      <MapPin className="w-8 h-8 text-[#cabb67] mb-4" />
                      <p className="text-gray-400 text-sm mb-2">Location</p>
                      <p className="text-white font-semibold text-lg">{study.clientDetails.location}</p>
                    </motion.div>

                    <motion.div whileHover={{scale: 1.05}} className="bg-black/30 rounded-2xl p-6 border border-white/5">
                      <Calendar className="w-8 h-8 text-[#cabb67] mb-4" />
                      <p className="text-gray-400 text-sm mb-2">Duration</p>
                      <p className="text-white font-semibold text-lg">{study.clientDetails.projectDuration.split("(")[0]}</p>
                    </motion.div>
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <p className="text-gray-400 text-sm mb-4">About the Client</p>
                    <p className="text-white text-lg leading-relaxed max-w-4xl">{study.clientDetails.shortDetail}</p>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Challenge Section */}
            <section id="challenge" className="scroll-mt-20">
              <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.6}} className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                <div className="lg:col-span-2">
                  <h3 className="text-[#cabb67] text-sm font-semibold uppercase tracking-wider mb-6">The Challenge</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{study.challenge.description}</p>
                </div>

                <div className="lg:col-span-3">
                  <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{once: true}} className="space-y-6">
                    {study.challenge.list.map((item, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInUp}
                        whileHover={{x: 10}}
                        className="flex gap-6 p-6 bg-gradient-to-r from-red-500/5 to-transparent border border-red-500/10 rounded-2xl group hover:border-red-500/20 transition-all duration-300"
                      >
                        <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                        </div>
                        <p className="text-white leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </section>

            {/* Solution Section */}
            <section id="solution" className="scroll-mt-20">
              <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.6}}>
                <h3 className="text-[#cabb67] text-sm font-semibold uppercase tracking-wider mb-12">Our Solution</h3>

                <div className="bg-gradient-to-br from-[#cabb67]/5 to-transparent border border-[#cabb67]/10 rounded-3xl p-8 md:p-12 mb-16">
                  <p className="text-white text-xl leading-relaxed mb-8 max-w-5xl">{study.solution.description}</p>

                  <div className="flex flex-wrap gap-3">
                    <span className="text-gray-400 text-sm mr-4">Technologies:</span>
                    {study.solution.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white text-sm hover:bg-white/10 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{once: true}} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {study.solution.images.map((img, i) => (
                    <motion.div key={i} variants={scaleIn} whileHover={{scale: 1.05}} className="relative group overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <Image src={img.src} alt={img.alt} width={500} height={350} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute bottom-4 left-4 z-20">
                        <p className="text-white font-medium">{img.alt}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </section>

            {/* Features Section */}
            <section id="features" className="scroll-mt-20">
              <motion.div
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
              >
                <div>
                  <h3 className="text-[#cabb67] text-sm font-semibold uppercase tracking-wider mb-12">Key Features</h3>

                  <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{once: true}} className="space-y-8">
                    {study.additionalFeatures.list.map((feature, i) => {
                      const [title, description] = feature.split(": ");
                      return (
                        <motion.div
                          key={i}
                          variants={fadeInUp}
                          whileHover={{x: 10}}
                          className="p-6 bg-gradient-to-r from-[#cabb67]/5 to-transparent border border-[#cabb67]/10 rounded-2xl group hover:border-[#cabb67]/20 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <CheckCircle className="w-6 h-6 text-[#cabb67] flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="text-white font-semibold text-lg mb-3 group-hover:text-[#cabb67] transition-colors">{title}</h4>
                              <p className="text-gray-400 leading-relaxed">{description}</p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>

                <motion.div initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{duration: 0.6}} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#cabb67]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Image
                    src={study.additionalFeatures.image.src}
                    alt={study.additionalFeatures.image.alt}
                    width={600}
                    height={500}
                    className="relative w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </motion.div>
            </section>

            {/* Results Section */}
            <section id="results" className="scroll-mt-20">
              <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.6}}>
                <h3 className="text-[#cabb67] text-sm font-semibold uppercase tracking-wider mb-12 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Results & Impact
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <motion.div
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/10 rounded-3xl p-8"
                  >
                    <h4 className="text-red-400 text-lg font-semibold mb-8 flex items-center gap-2">Before Implementation</h4>
                    <div className="space-y-6">
                      {study.businessValue.before.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{opacity: 0, y: 20}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 0.4, delay: i * 0.1}}
                          className="flex items-start gap-4 p-4 bg-black/20 rounded-xl"
                        >
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0" />
                          <p className="text-white leading-relaxed">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="bg-gradient-to-br from-[#cabb67]/5 to-transparent border border-[#cabb67]/10 rounded-3xl p-8"
                  >
                    <h4 className="text-[#cabb67] text-lg font-semibold mb-8 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      After Implementation
                    </h4>
                    <div className="space-y-6">
                      {study.businessValue.after.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{opacity: 0, y: 20}}
                          whileInView={{opacity: 1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 0.4, delay: i * 0.1}}
                          className="flex items-start gap-4 p-4 bg-black/20 rounded-xl hover:bg-[#cabb67]/5 transition-colors"
                        >
                          <CheckCircle className="w-5 h-5 text-[#cabb67] flex-shrink-0 mt-1" />
                          <p className="text-white leading-relaxed">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </section>

            {/* Testimonial Section */}
            <section id="testimonial" className="scroll-mt-20">
              <motion.div
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="bg-gradient-to-br from-[#cabb67]/10 to-transparent border border-[#cabb67]/20 rounded-3xl p-12 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#cabb67]/5 via-transparent to-[#cabb67]/5" />
                <div className="relative z-10">
                  <motion.div
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="w-20 h-20 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[#cabb67]/30"
                  >
                    <Image src={study.testimonial.avatar} alt={study.testimonial.author} width={80} height={80} className="w-full h-full object-cover" />
                  </motion.div>

                  <motion.blockquote
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.3}}
                    className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed max-w-4xl mx-auto"
                  >
                    "{study.testimonial.quote}"
                  </motion.blockquote>

                  <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.6, delay: 0.4}}>
                    <p className="text-[#cabb67] font-semibold text-lg">{study.testimonial.author}</p>
                    <p className="text-gray-400 mt-2">{study.testimonial.position}</p>
                  </motion.div>
                </div>
              </motion.div>
            </section>
          </motion.div>
        ))}

        {/* Enhanced Contact Section */}
        <motion.div
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mt-32 bg-gradient-to-br from-[#cabb67]/5 to-transparent border border-[#cabb67]/10 rounded-3xl p-16"
        >
          <h3 className="text-3xl font-light mb-6 text-white">Ready to Transform Your Business?</h3>
          <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">Let's discuss how we can help you achieve similar results with innovative technology solutions tailored to your needs.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:hello@cyanu.com"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#cabb67] text-black font-semibold rounded-full hover:bg-[#d4c574] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="/services"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#cabb67] text-[#cabb67] rounded-full hover:bg-[#cabb67] hover:text-black transition-all duration-300"
            >
              View Our Services
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
