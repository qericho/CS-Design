import Title from "./Title";
import Service from "./ui/Service";
const title = "Unlocking your possibilities";
const p1 =
  "Blending the finest aspects of architecture and interior design with the expertise and craftsmanship of our development team, we compose and build truly extraordinary homes.";
const p2 =
  "Whether you want to build a bespoke home, redesign an existing space, or develop a luxury property, we combine your vision with our skill to craft the home of your dreams.";

const Services: React.FC = () => {
  return (
    <section className="bg-black">
      <Title title={title} p1={p1} p2={p2} />
      <div className="space-y-10 lg:space-y-20">
        <Service
          imgSrc="/architecture-img.png"
          imgAlt="Architecture"
          h2="Architecture"
          p="In beginning with you – your tastes, interests and requirements – we design exquisite forever homes that exceed your expectations, morning, noon and night."
        />
        <Service
          reverse
          imgSrc="/interior-img.jpg"
          imgAlt="Interior Design"
          h2="Interior Design"
          p="When combined with elegant finishes, tailormade furnishings and timeless design, our attention to detail produces homes overflowing with style and sophistication."
        />
        <Service
          imgSrc="/planning-img.jpg"
          imgAlt="Planning Permission"
          h2="Planning Permission"
          p="With clarity, expertise and years of experience, we can guide you through the planning application process. Our dedicated in-house planning specialists can manage everything for you, liaising with the relevant contacts to secure permission.

."
        />
      </div>
    </section>
  );
};

export default Services;
