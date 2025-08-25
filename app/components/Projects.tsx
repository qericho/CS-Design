"use client";

import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Interior Design",
    location: "Pila Laguna",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eligendi sed laudantium illo blanditiis atque quasi.",
    image: "/pila-project.jpg",
  },
  {
    id: 2,
    title: "Modern Kitchen",
    location: "Santa Rosa",
    description:
      "Repellat nam totam sed, dolores perferendis modi libero suscipit magnam. Architecto vero perferendis eius soluta.",
    image: "/starosa-project.jpg",
  },
  {
    id: 3,
    title: "Dining Area ",
    location: "San Pablo",
    description:
      "Quisquam aliquid, laborum mollitia maiores doloribus placeat exercitationem. Nobis doloremque voluptate, deleniti explicabo.",
    image: "/sanpablo-project.jpg",
  },
];

const Projects: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const prevProject = () => {
    setDirection("left");
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setDirection("right");
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[current];

  return (
    <section
      id="projects"
      className="text-white bg-black w-full h-full px-6 xl:px-20 py-20 overflow-hidden"
    >
      <div className="xl:flex-row flex-col items-center flex gap-10">
        {/* Image */}
        <div className="w-full xl:w-150 h-120 relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={project.id}
              custom={direction}
              initial={{ x: direction === "right" ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === "right" ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text content */}
        <div className="font-lato mx-auto w-full xl:w-120 flex flex-col items-start justify-center md:gap-10 gap-5">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={project.id + "-text"}
              custom={direction}
              initial={{ x: direction === "right" ? 50 : -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === "right" ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="space-y-[-15px]">
                <p className="text-[1.2rem]">{project.location}</p>
                <h2 className="text-[3rem] font-mar">{project.title}</h2>
              </div>

              <div className="space-y-5 xl:space-y-20 relative mt-6">
                <p className="text-[1rem]">{project.description}</p>

                <button className="border-b border-white cursor-pointer">
                  View All
                </button>

                {/* Arrows */}
                <div className="w-50 bottom-[-60px] xl:bottom-[-20px] left-0 absolute flex gap-2 text-white text-[2.1rem]">
                  <button
                    onClick={prevProject}
                    className="border px-2 py-1 cursor-pointer hover:bg-white hover:text-black"
                  >
                    <MdKeyboardArrowLeft />
                  </button>
                  <button
                    onClick={nextProject}
                    className="border px-2 py-1 cursor-pointer hover:bg-white hover:text-black"
                  >
                    <MdKeyboardArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
