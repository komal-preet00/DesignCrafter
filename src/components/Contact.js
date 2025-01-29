import React from 'react';
import ContactImage from '../assets/contact.jpg';
import Contactform from './Contactform';  

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

        {/* Right side - Contact Form (50%) */}
        <div className="w-full lg:w-1/2 h-full bg-white p-10 lg:pt-14 lg:p-16 flex flex-col">
          {/* Main Heading */}
          <h1 className="text-[#1D857B] font-poppins text-3xl sm:text-5xl lg:text-[38px] font-semibold mb-2">
            Get In Touch
          </h1>

          {/* Contact Form */}
          <Contactform />  {/* Replace the contact info with the ContactForm component */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
