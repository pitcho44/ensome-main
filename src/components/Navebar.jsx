import React, { useState } from "react";

import Image from "next/image";
import Pick from "../image/logos.png";
import Page from "./Page";

const Navebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [home, setHome] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const homeDropdown = () => {
    setHome(!home);
  };

  return (
    <>
      <nav className="bg-white px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Image src={Pick} height={50} width={150} />
        </div>
        <div className="hidden sm:block sm:ml-6 w-96">
          <div className="flex space-x-4 ms-52">
            <button
              type="button"
              className="text-black px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
            >
              HOME
            </button>
            <button
              type="button"
              className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
            >
              Solution
            </button>
            <button
              type="button"
              className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
            >
              Page▽
            </button>
            <button
              type="button"
              className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
            >
              Elements
            </button>
            <button
              type="button"
              className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
            >
              Blog
            </button>
            <button
              type="button"
              className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
            >
              Contacts
            </button>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0">
        <button className="rounded-lg bg-blue-600 text-white p-2 md:ps-3 md:ms-2">
          <span className="rounded-full border-2 px-1 md:me-3 border-white">
            ▷
          </span>
          <span className="hidden md:inline-block">Watch the demo</span>
        </button>
      </div>
    </div>
  </div>
</nav>

      
    </>
  );
};

export default Navebar;
