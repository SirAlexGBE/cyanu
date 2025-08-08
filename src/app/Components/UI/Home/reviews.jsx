import React, {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {ArrowLeft, ArrowRight} from "lucide-react";

const testimonials = [
  {
    quote: "This platform revolutionized our data analysis process. The speed and accuracy are unparalleled. A must-have for any data-driven team.",
    name: "Priya Sharma",
    designation: "Data Scientist at QuantumLeap",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
  },
  {
    quote: "The user interface is incredibly intuitive, which made the onboarding process for my team a breeze. We were up and running in hours, not days.",
    name: "Marcus Johnson",
    designation: "Head of Operations at Synergy Corp",
    src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    quote: "Customer support is top-notch. They are responsive, knowledgeable, and genuinely invested in our success. It feels like a true partnership.",
    name: "Isabella Rossi",
    designation: "Client Success Manager at Horizon",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
  },
  {
    quote: "I'm impressed by the constant stream of updates and new features. The development team is clearly passionate and listens to user feedback.",
    name: "Kenji Tanaka",
    designation: "Software Engineer at CodeCrafters",
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop",
  },
  {
    quote: "The ROI was almost immediate. It streamlined our workflows so effectively that we cut project delivery times by nearly 30%.",
    name: "Fatima Al-Jamil",
    designation: "CFO at Apex Financial",
    src: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop",
  },
];

const AnimatedTestimonials = ({testimonials, autoplay = true}) => {
  const [active, setActive] = useState(0);

  const handleNext = React.useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const isActive = (index) => index === active;
  const randomRotate = () => `${Math.floor(Math.random() * 16) - 8}deg`;

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-20">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <div className="relative h-80 w-full max-w-xs">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{opacity: 0, scale: 0.9, y: 50, rotate: randomRotate()}}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.5,
                    scale: isActive(index) ? 1 : 0.9,
                    y: isActive(index) ? 0 : 20,
                    zIndex: isActive(index) ? testimonials.length : testimonials.length - Math.abs(index - active),
                    rotate: isActive(index) ? "0deg" : randomRotate(),
                  }}
                  exit={{opacity: 0, scale: 0.9, y: -50}}
                  transition={{duration: 0.5, ease: "easeInOut"}}
                  className="absolute inset-0 origin-bottom"
                  style={{perspective: "1000px"}}
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover border-4"
                    style={{borderColor: "#cabb67"}}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text and Controls */}
        <div className="flex flex-col justify-center py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -20}}
              transition={{duration: 0.3, ease: "easeInOut"}}
              className="flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold" style={{color: "#fff"}}>
                  {testimonials[active].name}
                </h3>
                <p className="text-sm" style={{color: "#cabb67"}}>
                  {testimonials[active].designation}
                </p>
                <motion.p className="mt-8 text-lg" style={{color: "#fff"}}>
                  "{testimonials[active].quote}"
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 pt-12">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
              style={{
                backgroundColor: "transparent",
                borderColor: "#cabb67",
              }}
            >
              <ArrowLeft className="h-5 w-5" style={{color: "#cabb67"}} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
              style={{
                backgroundColor: "transparent",
                borderColor: "#cabb67",
              }}
            >
              <ArrowRight className="h-5 w-5" style={{color: "#cabb67"}} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function AnimatedTestimonialsDemo() {
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export function Component() {
  return (
    <>
      <div className="relative flex bg-black w-full items-center justify-center overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

        <div className="z-10 w-full">
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-12 ml-3 border-l-4 border-[#cabb67] pl-4 text-left">What Our Clients Say</h2>
          <AnimatedTestimonialsDemo />
        </div>
      </div>
    </>
  );
}
