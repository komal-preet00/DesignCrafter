import React, { useState } from 'react';
import { FaCode, FaPaintBrush, FaImage, FaPencilRuler } from 'react-icons/fa';

const WeDo = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <FaCode className="text-5xl mb-4" />,
      title: "Web Development",
      shortDesc: "Custom websites and web applications built with modern technologies.",
      longDesc: "Our web development services include full-stack development, responsive design, e-commerce solutions, CMS development, and web application maintenance. We use cutting-edge technologies like React, Node.js, and other modern frameworks to deliver high-performance websites."
    },
    {
      icon: <FaPaintBrush className="text-5xl mb-4" />,
      title: "UI/UX Designing",
      shortDesc: "Beautiful and intuitive user interfaces with exceptional user experience.",
      longDesc: "Our UI/UX design process focuses on creating user-centered designs that enhance user engagement and satisfaction. We provide wireframing, prototyping, user research, usability testing, and complete UI design solutions."
    },
    {
      icon: <FaImage className="text-5xl mb-4" />,
      title: "Logo Designing",
      shortDesc: "Professional and memorable logo designs that represent your brand.",
      longDesc: "We create unique and memorable logos that reflect your brand's identity and values. Our logo design process includes concept development, multiple iterations, and delivery in various formats suitable for all applications."
    },
    {
      icon: <FaPencilRuler className="text-5xl mb-4" />,
      title: "Graphics Designing",
      shortDesc: "Creative and eye-catching graphic designs for all your needs.",
      longDesc: "From social media graphics to marketing materials, our graphic design services cover all aspects of visual communication. We create engaging designs for print and digital media while maintaining brand consistency."
    }
  ];

  const Modal = ({ service, onClose }) => {
    if (!service) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <div className="text-gray-800">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#1D857B]">{service.title}</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 leading-relaxed">{service.longDesc}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full px-4 py-8">
      {/* Title Section */}
      <div className="flex justify-center mb-20">
        <span 
          className="text-[30px] font-semibold text-white px-8 py-3 rounded-[30px]"
          style={{
            background: 'linear-gradient(to bottom, #1D857B 15%, #071F1D 100%)'
          }}
        >
          What we do ?
        </span>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index}
            className="rounded-[20px] p-8 text-white transition-transform duration-300 hover:-translate-y-2 min-h-[300px] max-w-[280px] mx-auto w-full flex flex-col items-center justify-between text-center"
            style={{
              background: 'linear-gradient(to bottom, #1D857B 15%, #071F1D 100%)'
            }}
          >
            {service.icon}
            <h3 className="text-2xl font-semibold mb-4">
              {service.title}
            </h3>
            <p className="text-gray-200 leading-relaxed mb-6">
              {service.shortDesc}
            </p>
            <button
              onClick={() => {
                setSelectedService(service);
                setShowModal(true);
              }}
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <Modal 
          service={selectedService} 
          onClose={() => {
            setShowModal(false);
            setSelectedService(null);
          }}
        />
      )}
    </div>
  );
};

export default WeDo;