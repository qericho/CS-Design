"use client";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";
import { MenuProvider } from "./context/MenuContext";

const page = () => {
  return (
    <div>
      <MenuProvider>
        <Nav />
        <Hero />
        <Services />
      </MenuProvider>
    </div>
  );
};

export default page;
