import ServiceTitle from "./ServiceTitle";
import Image from "next/image";

interface ServiceProps {
  reverse?: boolean;
  imgSrc: string;
  imgAlt: string;
  h2: string;
  p: string;
}

const Service: React.FC<ServiceProps> = ({
  reverse = false,
  imgSrc,
  imgAlt,
  h2,
  p,
}) => {
  return (
    <div
      className={`w-full h-full px-5 lg:px-20 flex flex-col lg:flex-row gap-y-5 gap-x-20 items-center justify-between ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Image */}
      <div>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={2000}
          height={500}
          className="object-cover"
        />
      </div>

      {/* Title + Text + Button */}
      <div className="w-full">
        <ServiceTitle h2={h2} p={p} />
      </div>
    </div>
  );
};

export default Service;
