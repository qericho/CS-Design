"use client";
import MenuBtn from "./ui/buttons/MenuBtn";
import { useMenu } from "../context/MenuContext";
import Link from "next/link";

const MobileMenu: React.FC = () => {
  const { open, setOpen } = useMenu();

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full bg-black z-50 transition-opacity duration-500 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex h-full">
        {/* Left menu */}
        <div className="relative flex flex-col w-120 text-white">
          {/* Menu button */}
          <div className="px-6 lg:px-20 py-6 absolute top-0 left-0">
            <MenuBtn />
          </div>

          {/* Menu items */}
          <ul className="flex flex-col justify-center gap-4 py-40 px-6 lg:px-20 space-y-6">
            {[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Projects", href: "#projects" },
              { label: "Products", href: "#products" },
            ].map((item) => (
              <li
                key={item.label}
                className="cursor-pointer text-3xl font-mar transition-opacity duration-300 hover:opacity-70"
                onClick={() => setOpen(false)} // close menu when clicked
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* Contact at bottom */}
          <div className="mt-auto px-6 lg:px-20 pb-8 space-y-1">
            <p className="text-sm font-lato">Email: info@cs-design.com</p>
            <p className="text-sm font-lato">Phone: +63 912 345 6569</p>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 h-full relative md:flex hidden">
          <img
            src="/menu-img.jpg"
            alt="sample"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
