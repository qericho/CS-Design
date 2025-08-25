"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import WhyUsCard from "./ui/card/WhyUsCard";

export const whyUsData = [
  {
    img: "/why-us-img-1.jpg",
    title: "Bespoke Design",
    description:
      "Every design is uniquely crafted to reflect your lifestyle, creating spaces that blend beauty with functionality.",
  },
  {
    img: "/why-us-img-2.jpg",
    title: "Sustainable Materials",
    description:
      "We use eco-friendly and sustainable materials to ensure that your space is both beautiful and environmentally responsible.",
  },
  {
    img: "/why-us-img-3.jpg",
    title: "Expert Craftsmanship",
    description:
      "Our team of experienced designers and craftsmen ensure every detail is executed to perfection.",
  },
  {
    img: "/why-us-img-4.jpg",
    title: "Innovative Solutions",
    description:
      "We bring innovative ideas and smart solutions to maximize the potential of every space.",
  },
];

const WhyUs: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <section className="bg-black w-full h-full pt-20">
      <h2 className="text-white text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center font-mar">
        Why <i>Choose</i> Us
      </h2>

      <div className="mt-8 px-2 md:px-10">
        {/* Grid for xl */}
        <div className="hidden xl:grid grid-cols-4 gap-8">
          {whyUsData.map((item, index) => (
            <WhyUsCard
              key={index}
              title={item.title}
              img={item.img}
              description={item.description}
            />
          ))}
        </div>

        {/* Draggable slider */}
        <motion.div
          ref={carouselRef}
          className="flex xl:hidden overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <motion.div
            className="flex gap-6"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {whyUsData.map((item, index) => (
              <motion.div
                key={index}
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px]"
              >
                <WhyUsCard
                  title={item.title}
                  img={item.img}
                  description={item.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
