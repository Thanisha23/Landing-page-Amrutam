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
      <div className="flex justify-center items-center md:justify-between px-[123px] py-[29px]">
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
            Find Doctors
          </a>
          <a href="#" className="text-green-800 hover:text-green-600">
            About Us
          </a>
         
        </nav>
        <div className='hidden md:flex justify-center items-center gap-[16px]'>
          <div className='border border-[#3A643B] rounded-[11px] text-[#3A643B] w-[95px] h-[40px] flex justify-center items-center text-[14px] bg-[#FFF7E2] font-semibold'>Login</div>
          <div className=' rounded-[11px] text-[#FFF7E2] w-[95px] h-[40px] flex justify-center items-center text-[14px] bg-[#3A643B] font-semibold'>Sign-up</div>
        </div>
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