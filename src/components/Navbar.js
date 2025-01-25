import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header className="w-full">
      {/* Top Navbar */}
      <nav className="w-full bg-white  px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <img
              src={logo}
              alt="Design Crafters Logo"
              className="w-[172px] h-[72px] rounded-[45px]"
            />
          </div>

          {/* Page Title */}
          <div className="flex-2 text-center">
            <h2 className="font-baloo text-[38px] font-semibold text-[#185D56]">
              Design Crafters
            </h2>
          </div>

          <div className="flex-1"></div>
        </div>
      </nav>
      
      {/* Second Navbar */}
      <nav className="w-full bg-gradient-to-b from-[#1D9589] to-[#0B3531] py-2 px-6">
        <div className="max-w-7xl mx-auto">
          <ul className="flex justify-evenly  gap-15">
            <li>
              <a href="#designs" className="text-white font-average-sans text-[30px] hover:opacity-80 transition-opacity">
                Our Design
              </a>
            </li>
            <li>
              <a href="#services" className="text-white font-average-sans text-[30px] hover:opacity-80 transition-opacity">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="text-white font-average-sans text-[30px] hover:opacity-80 transition-opacity">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white font-average-sans text-[30px] hover:opacity-80 transition-opacity">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;