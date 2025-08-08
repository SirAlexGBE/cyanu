"use client";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import {blog1, blog2, blog3, blog4} from "@/assets/images/index";

export default function NewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1.1);
  const [isHovered, setIsHovered] = useState(false);

  const dummyPosts = [
    {
      title: "AI Revolutionizing the Enterprise Landscape",
      excerpt: "Discover how AI and ML are transforming business operations across industries with practical applications in automation, analytics, and customer service like never before.",
      date: "July 25, 2025",
      image: blog1,
      category: "Technology",
      readTime: "5 min read",
    },
    {
      title: "Blockchain Beyond Crypto",
      excerpt: "Explore innovative blockchain use-cases in supply chain, identity management, and decentralized security networks.",
      date: "July 15, 2025",
      image: blog2,
      category: "Innovation",
      readTime: "4 min read",
    },
    {
      title: "Web 3.0: What You Need to Know",
      excerpt: "An introduction to the next era of the internet and how it affects your business operations, data privacy, and digital ownership models.",
      date: "July 5, 2025",
      image: blog3,
      category: "Future Tech",
      readTime: "6 min read",
    },
    {
      title: "The Future of Work: How Virtual Reality and Augmented Reality Will Transform the Workplace",
      excerpt: "Learn about virtual reality's role in remote collaboration, training simulations, and immersive experiences for a more engaging workplace.",
      date: "June 25, 2025",
      image: blog4,
      category: "Workplace",
      readTime: "7 min read",
    },
  ];

  // Handle responsive slides per view
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3.2);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2.2);
      } else {
        setSlidesPerView(1.1);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => {
          const maxSlides = Math.ceil(dummyPosts.length - slidesPerView + 1);
          return prev >= maxSlides - 1 ? 0 : prev + 1;
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [slidesPerView, isHovered, dummyPosts.length]);

  const maxSlides = Math.ceil(dummyPosts.length - slidesPerView + 1);
  const totalDots = Math.max(1, maxSlides);

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlides - 1));
  };

  const slideWidth = 100 / slidesPerView;
  const translateX = -(currentSlide * slideWidth);

  return (
    <section className="relative bg-black text-white py-20 px-4 md:px-12 overflow-hidden">
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 border-l-4 border-[#cabb67] pl-4">
              Latest From <span className="text-[#cabb67]">CYANU</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex space-x-3" data-aos="fade-left" data-aos-duration="800">
            <button
              onClick={() => goToSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="group w-12 h-12 rounded-full bg-gradient-to-r from-[#cabb67]/20 to-[#cabb67]/10 border border-[#cabb67]/30 backdrop-blur-sm hover:from-[#cabb67]/30 hover:to-[#cabb67]/20 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
            >
              <svg className="w-5 h-5 text-[#cabb67] group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => goToSlide(Math.min(maxSlides - 1, currentSlide + 1))}
              disabled={currentSlide >= maxSlides - 1}
              className="group w-12 h-12 rounded-full bg-gradient-to-r from-[#cabb67]/20 to-[#cabb67]/10 border border-[#cabb67]/30 backdrop-blur-sm hover:from-[#cabb67]/30 hover:to-[#cabb67]/20 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
            >
              <svg className="w-5 h-5 text-[#cabb67] group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div>
          {/* Custom Carousel Container */}
          <div className="relative overflow-hidden pb-2">
            <div
              className="flex transition-all duration-700 ease-out"
              style={{
                transform: `translateX(${translateX}%)`,
                width: `${(dummyPosts.length / slidesPerView) * 100}%`,
              }}
            >
              {dummyPosts.map((post, index) => (
                <div key={index} className="flex-shrink-0 px-3" style={{width: `${slideWidth}%`}}>
                  <div
                    className="group relative bg-black hover:border-[#cabb67]/50 transition-all duration-500 ease-out h-[480px] w-full flex flex-col overflow-hidden transform  hover:shadow-2xl hover:shadow-[#cabb67]/10"
                    data-aos="slide-up"
                    data-aos-duration="600"
                    data-aos-delay={index * 100}
                  >
                    {/* Gradient Overlay */}

                    <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                      <Image src={post.image} alt={post.title} fill className="object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-[#cabb67] to-[#d4c570] text-black text-xs font-semibold rounded-full shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                          {post.category}
                        </span>
                      </div>

                      {/* Gradient Overlay on Image */}
                    </div>

                    <div className="relative p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                          <span className="text-[#cabb67]">{post.date}</span>
                          <span className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{post.readTime}</span>
                          </span>
                        </div>

                        <h3 className="text-xl font-bold mb-3 title-clamp leading-tight group-hover:text-[#cabb67] transition-colors duration-300">{post.title}</h3>

                        <p className="text-gray-300 text-sm excerpt-clamp leading-relaxed mb-4">{post.excerpt}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <Link href="/blog" className="group/link inline-flex items-center space-x-2 text-[#cabb67] hover:text-white transition-all duration-300 text-sm font-medium">
                          <span>Read More</span>
                          <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Pagination */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <div className="flex space-x-2">
              {Array.from({length: totalDots}).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative transition-all duration-500 ${
                    currentSlide === index ? "w-8 h-3 bg-gradient-to-r from-[#cabb67] to-[#d4c570] rounded-full shadow-lg shadow-[#cabb67]/30" : "w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full"
                  }`}
                >
                  {currentSlide === index && <div className="absolute inset-0 bg-gradient-to-r from-[#cabb67] to-[#d4c570] rounded-full animate-pulse"></div>}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <Link
            href="/blog"
            className="group relative overflow-hidden border-2 border-[#cabb67] text-[#cabb67] px-8 py-3 rounded-full hover:text-black transition-all duration-500 font-medium backdrop-blur-sm bg-[#cabb67]/5 hover:bg-[#cabb67] hover:shadow-lg hover:shadow-[#cabb67]/25 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Explore More</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#cabb67] to-[#d4c570] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </Link>
        </div>
      </div>

      {/* Enhanced CSS */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .excerpt-clamp,
        .title-clamp {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }

        .excerpt-clamp {
          -webkit-line-clamp: 3;
        }

        .title-clamp {
          -webkit-line-clamp: 2;
        }

        /* Custom scrollbar for future use */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cabb67;
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d4c570;
        }

        /* Smooth backdrop blur support */
        @supports (backdrop-filter: blur(10px)) {
          .backdrop-blur-xl {
            backdrop-filter: blur(16px);
          }
          .backdrop-blur-sm {
            backdrop-filter: blur(4px);
          }
        }
      `}</style>
    </section>
  );
}
