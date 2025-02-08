import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4   text-[#c7c7c7]">
      <h1 className="text-[#00df9a] w-full text-3xl font-bold">SpectraGen™</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-[#00df9a]">Home</li>
        <li className="p-4 hover:text-[#00df9a]">Company</li>
        <li className="p-4 hover:text-[#00df9a]">Resources</li>
        <li className="p-4 hover:text-[#00df9a]">About</li>
        <li className="p-4 hover:text-[#00df9a]">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* MOBILE MENU  */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#1a1a1a] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          SpectraGen™
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-100 text-[#c7c7c7] hover:text-[#00df9a]">
            Home
          </li>
          <li className="p-4 border-b border-gray-100 text-[#c7c7c7] hover:text-[#00df9a]">
            Company
          </li>
          <li className="p-4 border-b border-gray-100 text-[#c7c7c7] hover:text-[#00df9a]">
            Resources
          </li>
          <li className="p-4 border-b border-gray-100 text-[#c7c7c7] hover:text-[#00df9a]">
            About
          </li>
          <li className="p-4 hover:text-[#00df9a]">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
