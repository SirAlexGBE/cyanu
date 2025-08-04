// components/OurStory.jsx

import Image from "next/image";
import {story} from "@/assets/images";
export default function OurStory() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-8 lg:px-8">
      <div className=" mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 border-l-4 border-[#cabb67] pl-4" data-aos="fade-up" data-aos-duration="800">
            Our Story
          </h2>
          <p className="text-lg text-gray-300">
            <span className="font-semibold text-[#cabb67]">CyANU</span> is more than a name it's our philosophy. "<span className="italic">Cy</span>" stands for <strong>cyber</strong>, the digital
            realm we operate in. "<span className="italic">Anu</span>" means <strong>atom</strong> in Sanskrit the smallest building block of creation. Together, they reflect our mission: to build
            intelligent systems from the ground up, with precision and purpose.
          </p>
          <p className="text-lg justify-start text-gray-400">
            Founded by a team of engineers and technologists at 2019, CyANU exists to create secure, scalable, and meaningful digital solutions. We approach problems atomically breaking them down to
            their core and reassembling them with cyber precision.
            <br />
            Our journey began as a small startup but has grown into a global presence. Today, Cyanu is a powerhouse, serving clients across industries at 18 countries. With offices across continents,
            we’ve worked on projects ranging from cutting-edge research to complex enterprise deployments. Each project is an opportunity to apply our principles of atomic engineering, ensuring every
            solution is built with integrity and efficiency.
          </p>
        </div>

        <div className="flex-1 w-full pt-10 rounded-2xl">
          <Image src={story} alt="CyANU Story Illustration" width={600} height={800} className="w-full h-auto rounded-2xl object-contain" priority />
        </div>
      </div>
    </section>
  );
}
