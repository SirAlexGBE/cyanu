// app/case-studies/page.js
import Image from "next/image";

// Dummy data for case studies with Unsplash images
const caseStudies = [
  {
    title: "Revolutionizing Retail Inventory with AI-Powered Predictive Analytics",
    shortDescription:
      "CyANU partnered with a leading retail chain to develop an AI-driven inventory management system that reduced stockouts by 40% and optimized supply chain efficiency using machine learning algorithms for real-time forecasting.",
    overviewImage: "https://images.unsplash.com/photo-1516321318427-8f6f49924107?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    service: "AI & Machine Learning Solutions",
    clientDetails: {
      companyName: "RetailTech Inc.",
      shortDetail: "A major e-commerce and brick-and-mortar retail company specializing in consumer electronics and apparel.",
      location: "New York, NY, USA",
      industry: "Retail & E-Commerce",
      projectDuration: "6 months (January 2025 - June 2025)",
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
  },
];

export default function CaseStudies() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 text-sm font-medium bg-[#cabb67]/20 text-[#cabb67] rounded-full border border-[#cabb67]/30">Success Stories</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#cabb67] to-[#d4c775] bg-clip-text text-transparent">Case Studies</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Discover how CyANU&apos;s innovative solutions have transformed businesses across industries</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Dynamic Case Study Rendering */}
        {caseStudies.map((study, index) => (
          <div key={index} className="mt-16">
            {/* Case Study Card Container */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden backdrop-blur-sm">
              {/* Overview Section */}
              <section className="p-8 sm:p-12 border-b border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#cabb67] to-[#d4c775] rounded-full"></div>
                  <h2 className="text-2xl font-bold text-[#cabb67] tracking-wide">OVERVIEW</h2>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{study.title}</h3>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl">{study.shortDescription}</p>

                <div className="relative mb-8 group">
                  <Image src={study.overviewImage} alt="Overview Image" width={800} height={400} className="w-full rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#cabb67]/10 border border-[#cabb67]/30 rounded-full">
                  <div className="w-2 h-2 bg-[#cabb67] rounded-full"></div>
                  <span className="text-[#cabb67] font-medium">{study.service}</span>
                </div>
              </section>

              {/* Client Details Section */}
              <section className="p-8 sm:p-12 border-b border-gray-800">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#cabb67] to-[#d4c775] rounded-full"></div>
                  <h2 className="text-2xl font-bold text-[#cabb67] tracking-wide">CLIENT DETAILS</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <span className="text-[#cabb67] font-semibold text-sm uppercase tracking-wide">Company</span>
                      <p className="text-white text-lg mt-1">{study.clientDetails.companyName}</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <span className="text-[#cabb67] font-semibold text-sm uppercase tracking-wide">Location</span>
                      <p className="text-white text-lg mt-1">{study.clientDetails.location}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <span className="text-[#cabb67] font-semibold text-sm uppercase tracking-wide">Industry</span>
                      <p className="text-white text-lg mt-1">{study.clientDetails.industry}</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <span className="text-[#cabb67] font-semibold text-sm uppercase tracking-wide">Duration</span>
                      <p className="text-white text-lg mt-1">{study.clientDetails.projectDuration}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-gradient-to-r from-gray-800/30 to-gray-700/20 rounded-xl border border-gray-700">
                  <span className="text-[#cabb67] font-semibold text-sm uppercase tracking-wide">About</span>
                  <p className="text-gray-300 text-lg mt-2 leading-relaxed">{study.clientDetails.shortDetail}</p>
                </div>
              </section>

              {/* Business Challenge Section */}
              <section className="p-8 sm:p-12 border-b border-gray-800">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#cabb67] to-[#d4c775] rounded-full"></div>
                  <h2 className="text-2xl font-bold text-[#cabb67] tracking-wide">BUSINESS CHALLENGE</h2>
                </div>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">{study.challenge.description}</p>

                <div className="grid gap-4">
                  {study.challenge.list.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-red-900/10 border border-red-800/30 rounded-xl">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Our Solution Section */}
              <section className="p-8 sm:p-12 border-b border-gray-800">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#cabb67] to-[#d4c775] rounded-full"></div>
                  <h2 className="text-2xl font-bold text-[#cabb67] tracking-wide">OUR SOLUTION</h2>
                </div>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">{study.solution.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {study.solution.images.map((img, i) => (
                    <div key={i} className="group relative">
                      <Image src={img.src} alt={img.alt} width={600} height={300} className="w-full rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-[1.05]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-medium text-sm bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg">{img.alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Additional Features Section */}
              <section className="p-8 sm:p-12 border-b border-gray-800">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#cabb67] to-[#d4c775] rounded-full"></div>
                  <h2 className="text-2xl font-bold text-[#cabb67] tracking-wide">ADDITIONAL FEATURES</h2>
                </div>

                <div className="grid gap-6 mb-8">
                  {study.additionalFeatures.list.map((feature, i) => {
                    const [title, description] = feature.split(": ");
                    return (
                      <div key={i} className="p-6 bg-gradient-to-r from-[#cabb67]/5 to-transparent border border-[#cabb67]/20 rounded-xl">
                        <h3 className="text-[#cabb67] font-bold text-lg mb-2">{title}</h3>
                        <p className="text-gray-300 leading-relaxed">{description}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="relative group">
                  <Image
                    src={study.additionalFeatures.image.src}
                    alt={study.additionalFeatures.image.alt}
                    width={800}
                    height={400}
                    className="w-full rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </section>

              {/* Business Value Section */}
              <section className="p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#cabb67] to-[#d4c775] rounded-full"></div>
                  <h2 className="text-2xl font-bold text-[#cabb67] tracking-wide">BUSINESS VALUE</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-6 bg-red-900/10 border border-red-800/30 rounded-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <h3 className="text-xl font-bold text-red-400">BEFORE</h3>
                    </div>
                    <div className="space-y-4">
                      {study.businessValue.before.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-red-400/60 rounded-full mt-2.5 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-green-900/10 border border-green-800/30 rounded-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <h3 className="text-xl font-bold text-green-400">AFTER</h3>
                    </div>
                    <div className="space-y-4">
                      {study.businessValue.after.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-green-400/60 rounded-full mt-2.5 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ))}

        {/* Contact CTA */}
        <div className="text-center mt-20">
          <div className="inline-block p-1 bg-gradient-to-r from-[#cabb67] to-[#d4c775] rounded-2xl">
            <a href="mailto:hello@cyanu.com" className="block px-8 py-4 bg-black text-[#cabb67] font-bold text-lg rounded-xl hover:bg-gray-900 transition-all duration-300 hover:scale-105">
              Ready to Transform Your Business?
            </a>
          </div>
          <p className="text-gray-400 mt-4">Get in touch to discuss your next project</p>
        </div>
      </div>
    </div>
  );
}
