"use client";

import React, { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import MenuBtn from "./ui/buttons/MenuBtn";
import Link from "next/link";

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItem = ({
    label,
    href,
    font = "",
  }: {
    label: string;
    href: string;
    font?: string;
  }) => (
    <li
      className={`relative inline-block cursor-pointer ${font}
        after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-[2px]
        after:h-[1px] after:bg-white after:origin-center after:scale-x-0
        after:transition-transform after:duration-300
        hover:after:scale-x-100`}
    >
      <a href={href}>{label}</a>
    </li>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-20 py-6">
        {/* Left: Hamburger/X Button */}
        <div className="flex items-center gap-x-5">
          <MenuBtn />
          <ul className="hidden lg:flex gap-x-5 text-white">
            <NavItem label="Products" href="#products" font="font-lato" />
            <NavItem label="Services" href="#services" font="font-lato" />
          </ul>
        </div>

        {/* Logo → Home */}
        <h1 className="font-mar text-white font-medium tracking-widest text-xl md:text-2xl lg:text-3xl">
          <Link href="/">CS-DESIGN</Link>
        </h1>

        {/* Right menu */}
        <ul className="hidden lg:flex gap-x-5 text-white">
          <NavItem label="Projects" href="#projects" font="font-mar" />
          <NavItem label="About" href="#about" font="font-lato" />
          <NavItem label="Contact" href="#contact" />
        </ul>

        {/* Phone icon */}
        <div className="flex lg:hidden text-white text-xl">
          <Link href="#contact">
            <FaPhone />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
