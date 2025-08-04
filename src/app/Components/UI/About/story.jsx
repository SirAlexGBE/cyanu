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
          <p className="text-lg text-gray-400">
            Founded by a team of engineers and technologists, CyANU exists to create secure, scalable, and meaningful digital solutions. We approach problems atomically breaking them down to their
            core and reassembling them with cyber precision.
          </p>
          <p className="text-lg text-gray-500">From AI automation to enterprise systems, we design technology that empowers. At CyANU, we don’t just build we architect the future, atom by atom.</p>
        </div>

        <div className="flex-1 w-full pt-10 rounded-2xl">
          <Image src={story} alt="CyANU Story Illustration" width={600} height={800} className="w-full h-auto rounded-2xl object-contain" priority />
        </div>
      </div>
    </section>
  );
}
