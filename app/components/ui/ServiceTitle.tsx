import Button from "../buttons/Button";

interface ServiceTitleProps {
  h2: string;
  p: string;
}

const ServiceTitle: React.FC<ServiceTitleProps> = ({ p, h2 }) => {
  return (
    <div className="w-full lg:w-100 h-full text-white text-start">
      <h2 className="text-[2rem] lg:text-[3.5rem] font-mar">{h2}</h2>
      <p className="font-lato">{p}</p>
      <div className="w-full flex items-center justify-start">
        <Button
          titleBtn="Learn More"
          className="border px-5 py-3 text-[0.8rem] w-full lg:w-40 hover:text-black hover:bg-white"
        />
      </div>
    </div>
  );
};

export default ServiceTitle;
