import React from 'react';
import ContactImage from '../assets/contact.jpg';
import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 my-16">
      <div className="w-full max-w-[1200px] h-[523px] mx-auto flex flex-col lg:flex-row shadow-lg rounded-[21px] border-2 border-black overflow-hidden">
        {/* Left side - Image (50%) */}
        <div className="w-full lg:w-1/2 h-full">
          <img 
            src={ContactImage} 
            alt="Contact" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Contact Info (50%) */}
        <div className="w-full lg:w-1/2 h-full bg-white p-8 lg:pt-16 lg:p-16 flex flex-col">
          {/* Main Heading */}
          <h1 className="text-[#1D857B] font-poppins text-4xl sm:text-5xl lg:text-[65px] font-bold mb-12">
            Contact Us
          </h1>

          {/* Contact Info Column */}
          <div className="flex flex-col gap-8 -mt-2">
            {/* Contact Button and Numbers */}
            <div className="flex flex-row gap-4">
              <button className="w-fit px-6 py-2 bg-[#1D857B] text-white rounded-lg font-poppins hover:bg-opacity-90 transition-all duration-300">
              <FaPhone className="text-xl" />  
              </button>
              <div className="flex flex-col gap-2 ml-4">
                <p className="font-poppins text-lg">+91 6280768524</p>
                <p className="font-poppins text-lg">+91 7015496924</p>
                <p className="font-poppins text-lg">+91 6280790732</p>
              </div>
            </div>

            {/* Email Button and Address */}
            <div className="flex flex-row gap-4">
              <button className="w-fit px-6 py-2 bg-[#1D857B] text-white rounded-lg font-poppins hover:bg-opacity-90 transition-all duration-300">
              <FaEnvelope className="text-xl" />
              </button>
              <p className="font-poppins text-lg ml-4">
                designcrafters@gmail.com
              </p>
            </div>

            {/* Instagram Button and Handle */}
            <div className="flex flex-row gap-4">
              <button className="w-fit px-6 py-2 bg-[#1D857B] text-white rounded-lg font-poppins hover:bg-opacity-90 transition-all duration-300">
              <FaInstagram className="text-xl" />
              </button>
              <p className="font-poppins text-lg ml-4">
                designn_crafters
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;