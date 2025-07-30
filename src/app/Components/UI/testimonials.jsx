// components/TestimonialsSection.tsx
"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import {Star} from "lucide-react";
import {person1, person2, person3, company1, company2, company3} from "@/Assets/Images/index.js";

const testimonials = [
  {
    name: "Bipin Kafle",
    title: "CTO, Finovate",
    photo: person1,
    companyLogo: company1,
    rating: 5,
    feedback: "CYANU helped us transform our legacy system using AI. Their team was responsive, professional, and incredibly skilled.",
  },
  {
    name: "Bipin Kafle",
    title: "CTO, Finovate",
    photo: person1,
    companyLogo: company1,
    rating: 5,
    feedback: "CYANU helped us transform our legacy system using AI. Their team was responsive, professional, and incredibly skilled.",
  },
  {
    name: "Rahul Sharma",
    title: "Product Manager, Healthify",
    photo: person2,
    companyLogo: company2,

    rating: 4,
    feedback: "Impressed with the fast delivery and quality of the mobile app they built. Highly recommend working with them!",
  },
  {
    name: "Emily Chen",
    title: "VP Engineering, CloudCore",
    photo: person3,
    companyLogo: company3,
    rating: 5,
    feedback: "CYANU's cloud migration strategy was spot on. Secure, scalable, and executed ahead of schedule.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-black py-8 px-4 md:px-8 lg:px-12 text-white">
      <div className=" mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-[#cabb67] pl-4">What Our Clients Say</h2>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {slidesPerView: 1, spaceBetween: 20},
            768: {slidesPerView: 2, spaceBetween: 24},
            1024: {slidesPerView: 2.5, spaceBetween: 28},
            1280: {slidesPerView: 3, spaceBetween: 32},
          }}
          autoplay={{delay: 5000, disableOnInteraction: false}}
          pagination={{clickable: true}}
          modules={[Pagination, Autoplay]}
          className="pb-20"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide className="z-10" key={index}>
              <div className="group h-[420px] flex flex-col rounded-3xl border border-[#cabb67]/20 hover:border-[#cabb67]/60 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-sm p-8 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#cabb67]/10">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#cabb67] to-[#f4e36b] rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="flex-1 ">
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-light italic">"{t.feedback}"</p>
                </div>

                {/* Bottom Section */}
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({length: t.rating}).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#cabb67] fill-[#cabb67]" />
                    ))}
                    {Array.from({length: 5 - t.rating}).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-white/20" />
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#cabb67]/30 group-hover:ring-[#cabb67]/60 transition-all duration-300">
                          <Image src={t.photo} alt={t.name} width={56} height={56} className="object-cover w-full h-full" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-black"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-[#cabb67] text-lg">{t.name}</p>
                        <p className="text-sm text-white/70 font-medium">{t.title}</p>
                      </div>
                    </div>

                    <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <div className="w-10 h-10 overflow-hidden rounded-lg">
                        <Image src={t.companyLogo} alt="Company Logo" width={40} height={40} className="object-contain w-full h-full   " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper pagination style override */}
        <style jsx global>{`
          .swiper-pagination {
            position: relative;
            margin-top: 32px;
            display: flex;
            justify-content: center;
            gap: 12px;
          }
          .swiper-pagination-bullet {
            background: linear-gradient(45deg, #cabb67, #f4e36b);
            opacity: 0.3;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            transition: all 0.4s ease;
            cursor: pointer;
            border: 2px solid transparent;
          }
          .swiper-pagination-bullet:hover {
            opacity: 0.7;
            transform: scale(1.1);
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            transform: scale(1.3);
            border-color: rgba(202, 187, 103, 0.3);
            box-shadow: 0 0 20px rgba(202, 187, 103, 0.4);
          }

          @media (max-width: 768px) {
            .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
            }
            .swiper-pagination-bullet-active {
              transform: scale(1.2);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
