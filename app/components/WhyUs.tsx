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
  return (
    <section className="bg-black w-full h-full pt-0 md:pt-20">
      <h2 className=" text-white text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center font-mar">
        Design <i>with</i> Blenheim
      </h2>
      <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-8 px-2 md:px-10">
        {whyUsData.map((item, index) => (
          <WhyUsCard
            key={index}
            title={item.title}
            img={item.img}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
