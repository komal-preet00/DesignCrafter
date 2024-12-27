import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import Phone from '../assets/Phone.png';

const Header = () => {
  return (
    <div className="container mx-auto px-3 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src={Phone} 
            alt="Header" 
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[528px] h-auto aspect-[528/546] object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start max-w-xl">
          <h1 className="text-[#185D56] font-poppins text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 text-center lg:text-left">
            Crafting Imagination
          </h1>
          <p className="font-poppins text-lg sm:text-xl lg:text-2xl mb-8 text-center lg:text-left">
            into stunning visuals and digital experiences that inspire and engage.
          </p>

          {/* Social Buttons Row */}
          <div className="flex gap-4 justify-center lg:justify-start">
            {/* Phone Button */}
            <button 
              className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] 
                         rounded-full bg-[#185D56] flex items-center justify-center 
                         hover:opacity-90 transition-all duration-300"
            >
              <FaPhone className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[30px] lg:h-[30px] text-white" />
            </button>
            
            {/* Email Button */}
            <button 
              className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] 
                         rounded-full bg-[#185D56] flex items-center justify-center 
                         hover:opacity-90 transition-all duration-300"
            >
              <FaEnvelope className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[30px] lg:h-[30px] text-white" />
            </button>
            
            {/* Instagram Button */}
            <button 
              className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] 
                         rounded-full bg-[#185D56] flex items-center justify-center 
                         hover:opacity-90 transition-all duration-300"
            >
              <FaInstagram className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[30px] lg:h-[30px] text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;