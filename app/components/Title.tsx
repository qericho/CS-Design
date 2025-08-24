import React from "react";
import Button from "./ui/buttons/Button";

interface TitleProps {
  title: string;
  p1: string;
  p2: string;
}

const Title: React.FC<TitleProps> = ({ title, p1, p2 }) => {
  return (
    <div className="h-full w-full bg-black text-white py-20 lg:py-30 font-lato">
      <div className="space-y-7 text-center">
        <h2 className="text-[#dddddd] mb-10 text-[0.8rem] md:text-[1.2rem] tracking-widest uppercase">
          {title}
        </h2>
        <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] w-full md:w-150 lg:w-180 mx-auto md:px-0 px-5 font-light">
          {p1}
        </p>
        <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] w-full md:w-150 lg:w-180 mx-auto md:px-0 px-5 font-light">
          {p2}
        </p>
        <Button
          titleBtn="Start My Project"
          className="border px-5 py-3 text-[0.8rem] w-60 hover:text-black hover:bg-white"
        />
      </div>
    </div>
  );
};

export default Title;
