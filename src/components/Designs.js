import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import your design images
import Design1 from '../assets/d1.png';
import Design2 from '../assets/d2.png';
import Design3 from '../assets/d3.png';
import Design4 from '../assets/d4.png';
import Design5 from '../assets/d5.png';
import Design6 from '../assets/d6.png';
import Design7 from '../assets/d7.png';
import Design8 from '../assets/d8.png';
import landscape1 from '../assets/c1.png';
import landscape2 from '../assets/c2.png';
import landscape3 from '../assets/c1.png';
import landscape4 from '../assets/c3.png';

const designs = [
  {
    img: Design1,
    link: 'https://www.behance.net/gallery/185999823/Branding-Design-for-Cafe',
    title: 'Cafe Branding'
  },
  {
    img: Design2,
    link: 'https://www.behance.net/gallery/185999055/Logo-Design-for-Restaurant',
    title: 'Restaurant Logo'
  },
  {
    img: Design3,
    link: 'https://www.behance.net/gallery/185998567/Website-Design-for-Tech-Company',
    title: 'Tech Website'
  },
  {
    img: Design4,
    link: 'https://www.behance.net/gallery/185997789/Mobile-App-UI-Design',
    title: 'Mobile App UI'
  },
  {
    img: Design5,
    link: 'https://www.behance.net/gallery/185997123/E-commerce-Website-Design',
    title: 'E-commerce Site'
  },
  {
    img: Design6,
    link: 'https://www.behance.net/gallery/185996445/Social-Media-Campaign',
    title: 'Social Media'
  },
  {
    img: Design7,
    link: 'https://www.behance.net/gallery/185995789/Product-Packaging-Design',
    title: 'Product Packaging'
  },
  {
    img: Design8,
    link: 'https://www.behance.net/gallery/185995123/Brand-Identity-Design',
    title: 'Brand Identity'
  }
];

const sliderImages = [
  { 
    image: landscape1,
    alt: "Landscape Image 1",
  },
  { 
    image: landscape2,
    alt: "Landscape Image 2",
  },
  { 
    image: landscape3,
    alt: "Landscape Image 3",
  },
  { 
    image: landscape4,
    alt: "Landscape Image 4",
  },
];

const Designs = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-8 sm:py-12 lg:py-16">
      {/* Heading Section */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-[#105750] font-poppins text-4xl sm:text-5xl lg:text-[60px] font-bold mb-4 sm:mb-6 lg:mb-8">
          Our Designs
        </h1>
        <p className="text-[#105750] font-poppins text-lg sm:text-xl lg:text-[22px] max-w-7xl mx-auto leading-tight px-2 sm:px-4">
          At Designer crafter, we craft innovative designs that elevate brands and inspire audiences. 
          Our team of experts blend creativity with technical expertise to deliver tailored solutions. 
          From concept to launch, we bring digital dreams to life with precision, passion, and creativity.
        </p>
      </div>

      {/* Sliding Cards Container */}
      <div className="relative px-4 sm:px-8 lg:px-12">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            480: { 
              slidesPerView: 1,
              spaceBetween: 20 
            },
            640: { 
              slidesPerView: 2,
              spaceBetween: 20 
            },
            768: { 
              slidesPerView: 2,
              spaceBetween: 25 
            },
            1024: { 
              slidesPerView: 3,
              spaceBetween: 25 
            },
            1280: { 
              slidesPerView: 4,
              spaceBetween: 20 
            }
          }}
          className="py-4"
        >
          {designs.map((design, index) => (
            <SwiperSlide key={index}>
              <div className="w-[240px] h-[360px] rounded-[21px] bg-[#105750] overflow-hidden shadow-lg mx-auto transform transition-transform duration-300 hover:scale-105">
                {/* Image Container (80%) */}
                <div className="h-[80%] w-full">
                  <img
                    src={design.img}
                    alt={design.title}
                    className="w-full h-full object-cover rounded-t-[21px]"
                    loading="lazy"
                  />
                </div>
                {/* Link Container (20%) */}
                <div className="h-[20%] flex items-center justify-center bg-[#105750]">
                  <a
                    href={design.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-poppins text-base sm:text-lg hover:underline transition-all duration-300 px-2 text-center"
                  >
                    {design.title}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Auto-playing Landscape Slider */}
      <div className="mt-16 flex justify-center">
        <div className="w-[1220px] h-[330px] bg-[#105750] rounded-[21px] shadow-lg overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="h-full"
          >
            {sliderImages.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Designs;