"use client";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import {blog1, blog2, blog3, blog4} from "../../../Assets/images";

export default function NewsSection() {
  const dummyPosts = [
    {
      title: "AI Revolutionizing the Enterprise Landscape",
      excerpt: "Discover how AI and ML are transforming business operations across industries with practical applications in automation, analytics, and customer service like never before.",
      date: "July 25, 2025",
      image: blog1,
    },
    {
      title: "Blockchain Beyond Crypto",
      excerpt: "Explore innovative blockchain use-cases in supply chain, identity management, and decentralized security networks.",
      date: "July 15, 2025",
      image: blog2,
    },
    {
      title: "Web 3.0: What You Need to Know",
      excerpt: "An introduction to the next era of the internet and how it affects your business operations, data privacy, and digital ownership models.",
      date: "July 5, 2025",
      image: blog3,
    },
    {
      title: "The Future of Work: How Virtual Reality and Augmented Reality Will Transform the Workplace",
      excerpt: "Learn about virtual reality's role in remote collaboration, training simulations, and immersive experiences for a more engaging workplace.",
      date: "June 25, 2025",
      image: blog4,
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Latest News & Blogs</h2>
      </div>

      <Swiper
        spaceBetween={24}
        slidesPerView={1.1}
        breakpoints={{
          768: {slidesPerView: 2.2},
          1024: {slidesPerView: 3.2},
        }}
        pagination={{clickable: true}}
        modules={[Pagination]}
        className="pb-2"
      >
        {dummyPosts.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-[#111] rounded-xl border border-gray-800 hover:border-[#cabb67] transition-all duration-300 ease-in-out h-[420px] w-full flex flex-col overflow-hidden transform hover:scale-[1.02] hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover transform transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-sm text-[#cabb67] mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-2 title-clamp">{post.title}</h3>
                  <p className="text-gray-300 text-sm excerpt-clamp">{post.excerpt}</p>
                </div>
                <Link href="/blog" className="mt-4 inline-block text-[#cabb67] hover:underline text-sm">
                  Read More →
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end mt-2">
        <Link href="/blog" className="border border-[#cabb67] text-[#cabb67] px-4 py-2 rounded hover:bg-[#cabb67] hover:text-black transition duration-300">
          Explore More
        </Link>
      </div>

      {/* Custom Pagination & Clamp CSS */}
      <style jsx global>{`
        .swiper-pagination-bullets {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }
        .swiper-pagination-bullet {
          background: #555;
          opacity: 1;
          width: 10px;
          height: 10px;
          margin: 0 6px;
          transition: background 0.3s;
        }
        .swiper-pagination-bullet-active {
          background: #cabb67;
        }

        .excerpt-clamp,
        .title-clamp {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }

        .excerpt-clamp {
          -webkit-line-clamp: 4;
        }

        .title-clamp {
          -webkit-line-clamp: 2;
        }
      `}</style>
    </section>
  );
}
