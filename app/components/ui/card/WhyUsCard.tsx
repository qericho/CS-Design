import React from "react";
import Image from "next/image";

interface WhyUsCardProps {
  img: string;
  title: string;
  description: string;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({ img, title, description }) => {
  return (
    <div className="w-full lg:w-120 xl:w-80 h-full text-white p-4 flex flex-col items-center text-center">
      <div className="relative h-100 w-full">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="w-full text-start my-3">
        <h3 className="text-xl font-semibold mb-2 font-mar">{title}</h3>
        <p className="text-[1rem] font-lato">{description}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
