"use client";
import { useMenu } from "@/app/context/MenuContext";

const MenuBtn: React.FC = () => {
  const { open, setOpen } = useMenu();

  return (
    <button
      onClick={() => setOpen(!open)}
      className="cursor-pointer relative w-10 h-10 flex items-center justify-center"
      aria-label="Toggle menu"
    >
      <div className="relative w-8 h-6">
        <span
          className={`absolute left-0 w-6 h-[1px] bg-white rounded transition-all duration-300 ease-in-out origin-center
            ${open ? "rotate-45 top-1/2 -translate-y-1/2" : "top-2"}`}
        />
        <span
          className={`absolute left-0 w-6 h-[1px] bg-white rounded transition-all duration-300 ease-in-out origin-center
            ${open ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-2"}`}
        />
      </div>
    </button>
  );
};

export default MenuBtn;
