"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone } from "react-icons/fa";

const Footer: React.FC = () => {
  const FooterItem = ({
    label,
    font = "",
  }: {
    label: string;
    font?: string;
  }) => (
    <li
      className={`relative inline-block cursor-pointer ${font}
        after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-[2px]
        after:h-[1px] after:bg-white after:origin-center after:scale-x-0
        after:transition-transform after:duration-300
        hover:after:scale-x-100`}
    >
      {label}
    </li>
  );

  return (
    <footer className="bg-black text-white px-6 lg:px-20 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Logo */}
        <h1 className="font-mar font-medium tracking-widest text-xl md:text-2xl lg:text-3xl">
          CSDESIGN
        </h1>

        {/* Footer Nav */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm">
          <FooterItem label="Products" font="font-lato" />
          <FooterItem label="Services" font="font-lato" />
          <FooterItem label="Projects" font="font-mar" />
          <FooterItem label="About us" font="font-lato" />
          <FooterItem label="Contact" />
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 text-lg">
          <a href="#" className="hover:text-gray-400 transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <FaInstagram />
          </a>
          <a
            href="tel:+1234567890"
            className="hover:text-gray-400 transition-colors"
          >
            <FaPhone />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} CSDESIGN. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
