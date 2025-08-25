"use client";
import Contact from "./components/Contact";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";

const page = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Services />
      <CTABanner />
      <WhyUs />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
