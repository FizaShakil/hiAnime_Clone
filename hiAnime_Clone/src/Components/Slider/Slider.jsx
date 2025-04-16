import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const slides = [
    {
      title: "My Hero Academia",
      date: "Apr 7, 2025",
      duration: "24m",
      desc: "Living in a superhuman society, it is hard to feel special. Even more so when the spotlight only....",
      image: "/src/images/image1.jpg", // adjust if needed
    },
    {
      title: "One Piece",
      date: "Oct 20, 1999",
      duration: "24m",
      desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed......",
      image: "/src/images/image2.jpg",
    },
    {
      title: "Solo Leveling Season 2: Arise from the Shadwow",
      date: "Jan 5, 2025",
      duration: "25m",
      desc: "Sung jin-Woo dubbed the weakest hunter of all mankind,grows stronger day by day with the....",
      image: "/src/images/image3.jpg",
    },
    {
      title: "Wind Breaker Season 2",
      date: "Feb 2, 2025",
      duration: "25m",
      desc: "The Second season of WIND BREAKER. Welcome back to Furin High School,an institution....",
      image: "/src/images/image4.jpg",
    },
    {
      title: "Another Slide Title",
      date: "Feb 2, 2025",
      duration: "25m",
      desc: "Another slide description...",
      image: "/src/images/image2.jpg",
    },
    {
      title: "Another Slide Title",
      date: "Feb 2, 2025",
      duration: "25m",
      desc: "Another slide description...",
      image: "/src/images/image2.jpg",
    },
    {
      title: "Another Slide Title",
      date: "Feb 2, 2025",
      duration: "25m",
      desc: "Another slide description...",
      image: "/src/images/image2.jpg",
    },
    {
      title: "Another Slide Title",
      date: "Feb 2, 2025",
      duration: "25m",
      desc: "Another slide description...",
      image: "/src/images/image2.jpg",
    },
    // Add more slides here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!transitioning) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 3000); // Auto slide every 3 seconds

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

  const { title, date, duration, desc, image } = slides[currentSlide];

  return (
    <div
      className="relative h-[600px] w-full bg-cover bg-center flex items-center justify-start text-white transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0)), url(${image})`,
      }}
    >
      {/* Slide content */}
      <div className="ml-10 max-w-xl space-y-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-sm text-gray-300">{date} • {duration}</p>
        <p className="text-md">{desc}</p>
        <button className="mt-4 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg">
          Watch Now
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute bottom-4 right-4 bg-gray-900 text-white opacity-80 p-3 m-3 rounded-md hover:bg-pink-200 transition-colors shadow-md "
      >
        <FaChevronLeft className="text-xl" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute bottom-16 right-4 bg-gray-900 text-white opacity-80 p-3 m-3 rounded-md hover:bg-pink-200 transition-colors shadow-md"
      >
        <FaChevronRight className="text-xl" />
      </button>
    </div>
  );
};

export default Slider

