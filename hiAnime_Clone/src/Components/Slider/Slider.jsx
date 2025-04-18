import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGreaterThan,
  FaPlayCircle,
} from "react-icons/fa";
import Availability from "./subcomponents/availability";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const slides = [
    {
      spotlight: "#1 Spotlight",
      title: "My Hero Academia",
      date: "Apr 7, 2025",
      duration: "24m",
      desc: "Living in a superhuman society, it is hard to feel special...",
      image: "/src/images/image1.jpg",
      availability: <Availability subtitles={2} dub={2} />,
    },
    {
      spotlight: "#2 Spotlight",
      title: "One Piece",
      date: "Oct 20, 1999",
      duration: "24m",
      desc: "Gold Roger was known as the Pirate King...",
      image: "/src/images/image2.jpg",
      availability: <Availability subtitles={1125} dub={1122} />,
    },
    // Other slides truncated for brevity
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!transitioning) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [transitioning]);

  const nextSlide = () => {
    setTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setTransitioning(false), 800);
  };

  const prevSlide = () => {
    setTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setTransitioning(false), 800);
  };

  const { spotlight, title, date, duration, availability, desc, image } =
    slides[currentSlide];

  return (
    <div className="relative w-full flex items-center justify-start text-white overflow-hidden transition-all duration-700 ease-in-out h-[300px] sm:h-[450px] md:h-[600px]">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 
            `radial-gradient(circle at right center, transparent 10%, rgba(32, 31, 49, 80) 70%),
        linear-gradient(to bottom, transparent 60%, rgba(32, 31, 49, 80) 100%),
        linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent 20%),
            url(${image})`
          ,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        
      />

      <div className="relative z-10 ml-4 sm:ml-6 md:ml-10 max-w-xl space-y-3 sm:space-y-4 px-2 sm:px-0">
        <h3 className="text-xs sm:text-sm md:text-base text-pink-300">{spotlight}</h3>
        <h1 className="text-sm sm:text-xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs md:text-sm text-gray-300">
          <p className="flex items-center">
            <FaPlayCircle className="mr-1" /> TV
          </p>
          <p>
            {date} • {duration}
          </p>
          <p className="bg-pink-300 text-gray-900 px-2 font-semibold rounded text-[10px] sm:text-xs">
            HD
          </p>
          <div>{availability}</div>
        </div>

        <p className="text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4">
          <button className="flex items-center gap-1 h-8 sm:h-10 px-3 sm:px-5 py-1 bg-pink-300 text-gray-900 rounded-full text-xs sm:text-base font-semibold hover:bg-pink-400 transition-all focus:outline-none">
            <FaPlayCircle className="text-xs sm:text-base" /> Watch Now
          </button>

          <button className="flex items-center px-2.5 py-1.5 sm:px-4 sm:py-2 bg-[#3A3951] hover:bg-[#51506e] text-white rounded-full text-xs sm:text-sm">
            Details <FaGreaterThan className="ml-2 text-[10px]" />
          </button>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute right-4 bottom-20 sm:bottom-24 md:bottom-28 bg-gray-900 text-white opacity-80 p-2 sm:p-3 rounded-md hover:bg-pink-200 transition-colors shadow-md"
      >
        <FaChevronLeft className="text-sm sm:text-base md:text-xl" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 bottom-32 sm:bottom-36 md:bottom-40 bg-gray-900 text-white opacity-80 p-2 sm:p-3 rounded-md hover:bg-pink-200 transition-colors shadow-md"
      >
        <FaChevronRight className="text-sm sm:text-base md:text-xl" />
      </button>
    </div>
  );
};

export default Slider