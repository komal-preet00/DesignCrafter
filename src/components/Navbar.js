import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false); // Controls the visibility of the hamburger
  const [menuOpen, setMenuOpen] = useState(false); // Controls the visibility of the menu dropdown

  // Handle scroll to show/hide hamburger
  useEffect(() => {
    const handleScroll = () => {
      const secondNavbar = document.querySelector(".second-navbar");
      if (secondNavbar) {
        const secondNavbarTop = secondNavbar.getBoundingClientRect().top;
        setShowHamburger(secondNavbarTop < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Top Navbar */}
      <nav className="w-full bg-white px-4 shadow-md fixed top-0 left-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex-1">
            <img
              src={logo}
              alt="Design Crafters Logo"
              className="w-[172px] h-[72px] rounded-[45px]"
            />
          </div>

          {/* Page Title - Always Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h2 className="font-baloo text-[38px] font-semibold text-[#185D56]">
              Design Crafters
            </h2>
          </div>

          {/* Hamburger Menu */}
          <div className="flex-1 text-right">
            {showHamburger && (
              <button
                className="text-[#185D56] p-2 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {/* Custom Hamburger Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </button>
            )}

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-4 top-16 bg-white shadow-md rounded-md w-[200px] z-50">
                <ul className="flex flex-col p-4 gap-2">
                  <li>
                    <a
                      href="#designs"
                      className="text-[#185D56] font-average-sans text-[18px] hover:opacity-80 transition-opacity"
                    >
                      Our Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-[#185D56] font-average-sans text-[18px] hover:opacity-80 transition-opacity"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-[#185D56] font-average-sans text-[18px] hover:opacity-80 transition-opacity"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-[#185D56] font-average-sans text-[18px] hover:opacity-80 transition-opacity"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Add padding to prevent content overlap */}
      <div className="h-[78px]"></div>

      {/* Second Navbar */}
      <nav className="second-navbar w-full py-2 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-b from-[#1D9589] to-[#0B3531] rounded-[40px] h-11">
            <ul className="flex justify-evenly gap-10 align-middle">
              <li>
                <a
                  href="#designs"
                  className="text-white font-average-sans text-[24px] hover:opacity-80 transition-opacity"
                >
                  Our Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white font-average-sans text-[24px] hover:opacity-80 transition-opacity"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white font-average-sans text-[24px] hover:opacity-80 transition-opacity"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white font-average-sans text-[24px] hover:opacity-80 transition-opacity"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
