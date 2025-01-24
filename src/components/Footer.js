import React from 'react';
import logo from '../assets/logo.png';
import { FaInstagram } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#071F1D] via-[#146963] to-[#071F1D] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="ml-20">
            <img 
              src={logo} 
              alt="Design Crafters Logo" 
              className="h-32 mb-4 rounded-full ml-10"
            />
          </div>
          <div className="text-center">
            <h3 className="text-[45px] font-bold mt-0">Design Crafters</h3>
            <p className="text-[20px] text-gray-300 italic">We precisely design what you need</p>
          </div>
          <div className="flex flex-col items-center ml-12">
            <h3 className="text-3xl font-semibold mb-2 mt-4">Contact Us</h3>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="relative hover:bg-teal-400 rounded-full p-2 transition duration-300">
                <FaInstagram size={24} className="text-white" />
              </a>
              <a href="tel:+1234567890" className="relative hover:bg-teal-400 rounded-full p-2 transition duration-300">
                <BsTelephone size={24} className="text-white" />
              </a>
              <a href="mailto:contact@example.com" className="relative hover:bg-teal-400 rounded-full p-2 transition duration-300">
                <MdEmail size={24} className="text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-500 mt-4 pt-3 text-center text-sm text-white-200 mb-0">
          <p>&copy; {new Date().getFullYear()} Design Crafters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 