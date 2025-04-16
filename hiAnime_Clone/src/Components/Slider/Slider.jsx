import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaGreaterThan, FaPlayCircle } from "react-icons/fa";
import Availability from "./subcomponents/availability"; // Import the Availability component


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

const slides = [
  {
    spotlight: "#1 Spotlight",
    title: "My Hero Academia",
    date: "Apr 7, 2025",
    duration: "24m",
    desc: "Living in a superhuman society, it is hard to feel special. Even more so when the spotlight only shines on professional heros, those legally authorized to use their special powers known as Quirks in public for the...",
    image: "/src/images/image1.jpg", 
    availability:<Availability subtitles={2} dub={2} />,
  },
  {
    spotlight: "#2 Spotlight",
    title: "One Piece",
    date: "Oct 20, 1999",
    duration: "24m",
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Lien. The capture and execution of Roger by the World Goverment bought a change throughout the.... ",
    image: "/src/images/image2.jpg",
    availability:<Availability subtitles={1125} dub={1122} />,
  },
  {
    spotlight: "#3 Spotlight",
    title: "Solo Leveling Season 2: Arise from the Shadwow",
    date: "Jan 5, 2025",
    duration: "25m",
    desc: "Sung jin-Woo dubbed the weakest hunter of all mankind,grows stronger day by day with the supernatural powers he has gained Howerver, keeping his skills hidden becaomes more difficult as dugeon-related incident pil.....",
    image: "/src/images/image3.jpg",
    availability:<Availability subtitles={13} episodes={13} dub={13} />,
  },
  {
    spotlight: "#4 Spotlight",
    title: "Wind Breaker Season 2",
    date: "Feb 2, 2025",
    duration: "25m",
    desc: "The Second season of WIND BREAKER. Welcome back to Furin High School,an institution infamous for its population of browny brutes who solve every conflict with a show of strength. Some of the student even formed a.....",
    image: "/src/images/image4.jpg",
    availability:<Availability subtitles={2} />,
  },
  {
    spotlight: "#5 Spotlight",
    title: "Fire Force Season 3",
    date: "Apr 5, 2025",
    duration: "24m",
    desc: "Third season of.",
    image: "/src/images/image5.jpg",
    availability:<Availability subtitles={2} episodes={12} />,
  },
  {
    spotlight: "#6 Spotlight",
    title: "The Super Cube",
    date: "Mar 21, 2025",
    duration: "15m",
    desc: "In an accident, an ordinary boy, Wang Xiaoxui obtains a space system called Superpower Cube from a high cosmic civilization and gains extraordinary powers. When the Sschool belle, Shen Yoo, Wang...",
    image: "/src/images/image6.jpg",
    availability:<Availability subtitles={6} episodes={12} />,
  },
  {
    spotlight: "#7 Spotlight",
    title: "Devil may cry",
    date: "Apr 3, 2025",
    duration: "30m",
    desc: "When a mysterious villan threatens to open the gates of Hell, a devilishly handsome demon hunter could be the worlds best hope for salvation....",
    image: "/src/images/image7.jpg",
    availability: <Availability subtitles={8} episodes={8} dub={8} />,
  },
  {
    spotlight: "#8 Spotlight",
    title: "Bleach",
    date: "Oct 5, 2025",
    duration: "24m",
    desc: "Ichigo kurosaki is an ordinary high schooler until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is the that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while...",
    image: "/src/images/image8.jpg",
    availability: <Availability subtitles={2} episodes={12} />,
  },
    
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

  const { spotlight, title, date, duration, availability, desc, image } = slides[currentSlide];

  return (
   <div
  className="relative h-[300px] sm:h-[450px] md:h-[600px] w-full flex items-center justify-start text-white overflow-hidden transition-all duration-700 ease-in-out"
>
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage: `
        radial-gradient(circle at right center, transparent 10%, rgba(32, 31, 49, 80) 70%),
    linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 2) 90%),
    linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent 20%),
        url(${image})
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />

<div className="relative z-10 ml-4 sm:ml-6 md:ml-10 max-w-xl space-y-4 px-2 sm:px-0">
        <h3 className="text-xs sm:text-sm md:text-xl text-pink-300">{spotlight}</h3>
        <h1 className="text-sm sm:text-xl md:text-5xl font-bold">{title}</h1>

        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-md text-gray-300">
          <p className="flex items-center"><FaPlayCircle className="mr-1" /> TV</p>
          <p>{date} • {duration}</p>
          <p className="text-gray-900 px-2 font-semibold rounded bg-pink-300 text-xs">HD</p>
          <div>{availability}</div>
        </div>

        <div>
          <p className="text-xs sm:text-sm md:text-md max-w-sm">{desc}</p>
        </div>

        <div className="flex flex-wrap gap-3 mt-4 sm:mt-6">
        <button className="flex items-center gap-1 h-8 sm:h-10 px-3 sm:px-5 py-1 bg-pink-300 text-gray-900 rounded-full text-xs sm:text-base font-semibold hover:bg-pink-400 transition-all focus:outline-none">
  <FaPlayCircle className="text-xs sm:text-base" />
  Watch Now
</button>

          <button className="flex items-center px-2.5 py-1.5 sm:px-4 sm:py-2 bg-[#3A3951] hover:bg-[#51506e] text-white rounded-full text-xs sm:text-sm">
            Details <FaGreaterThan className="ml-2 text-[10px]" />
          </button>
        </div>
      </div>


      <button
  onClick={prevSlide}
  className="absolute right-4 bottom-20 sm:bottom-28 bg-gray-900 text-white opacity-80 p-2 sm:p-3 rounded-md hover:bg-pink-200 transition-colors shadow-md"
>
  <FaChevronLeft className="text-base sm:text-xl" />
</button>

<button
  onClick={nextSlide}
  className="absolute right-4 bottom-32 sm:bottom-40 bg-gray-900 text-white opacity-80 p-2 sm:p-3 rounded-md hover:bg-pink-200 transition-colors shadow-md"
>
  <FaChevronRight className="text-base sm:text-xl" />
</button>

    </div>
  );
};

export default Slider;

