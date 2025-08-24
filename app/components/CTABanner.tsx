"use client";
import React from "react";
import Button from "./ui/buttons/Button";

const CTABanner: React.FC = () => {
  return (
    <section className="relative w-full h-170 my-20">
      {/* Background video */}
      <video
        src="/cta-bg.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
        <h1 className="text-white text-4xl md:text-6xl font-mar font-medium mb-5">
          <i>From</i> Vision <br /> <i>to</i> Creation
        </h1>
        <p className="w-full lg:w-150 text-white font-sans text-[1rem] md:text-[1.1rem] mb-10 max-w-2xl font-thin">
          Our interiors and developments team work collaboratively to bring your
          vision to life. No detail is too small and we&apos;re on hand to
          ensure the design is executed fully and flawlessly.
        </p>
        <Button
          titleBtn="Start My Project"
          className="border text-sm px-6 py-3 text-white hover:bg-white hover:text-black transition"
        />
      </div>
    </section>
  );
};

export default CTABanner;
