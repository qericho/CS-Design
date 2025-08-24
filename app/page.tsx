"use client";
import CTABanner from "./components/CTABanner";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import { MenuProvider } from "./context/MenuContext";

const page = () => {
  return (
    <div>
      <MenuProvider>
        <Nav />
        <Hero />
      </MenuProvider>
      <Services />
      <CTABanner />
      <WhyUs />
    </div>
  );
};

export default page;
