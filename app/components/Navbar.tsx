"use client"
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#FFF7E2] relative w-[100%]">
      <div className="flex justify-center items-center px-[123px] py-[29px]">
      <RxHamburgerMenu
          className="md:hidden cursor-pointer absolute left-[2rem]"
          color="text-green-800"
          size={25}
          onClick={toggleMenu}
        />
        <Image src="/amrutam.png" height={24} width={122} alt="logo" />
      
        <nav className="hidden md:flex space-x-8">
          {/* Add your desktop menu items here */}
          <a href="#" className="text-green-800 hover:text-green-600">
            Home
          </a>
          <a href="#" className="text-green-800 hover:text-green-600">
            About
          </a>
          <a href="#" className="text-green-800 hover:text-green-600">
            Services
          </a>
          <a href="#" className="text-green-800 hover:text-green-600">
            Contact
          </a>
        </nav>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FFF7E2] absolute left-0 right-0 z-10 transition-all duration-300 ease-in-out">
          <nav className="flex flex-col space-y-4 py-4">
            <a href="#" className="text-green-800 hover:text-green-600 px-4">
              Home
            </a>
            <a href="#" className="text-green-800 hover:text-green-600 px-4">
              About
            </a>
            <a href="#" className="text-green-800 hover:text-green-600 px-4">
              Services
            </a>
            <a href="#" className="text-green-800 hover:text-green-600 px-4">
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;