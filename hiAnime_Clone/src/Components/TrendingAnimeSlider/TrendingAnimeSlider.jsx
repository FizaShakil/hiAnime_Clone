
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";




const trending = [
    {
        id: 1,
        title: 'One Piece',
        image: '/imagesm/trending-01.jpg',
    },
      {
        id: 2,
        title: 'Wind Breaker Seas..',
        image: '/imagesm/trending-02.jpg',
      },
      {
        id: 3,
        title: 'Sword of the demon',
        image: '/imagesm/trending-03.jpg',
      },
      {
        id: 4,
        title: 'The Beginning After..',
        image: '/imagesm/trending-04.jpg',
      },
      {
        id: 5,
        title: 'To Be Hero X',
        image: '/imagesm/trending-05.jpg',
      },
      {
        id: 6,
        title: 'The Unaware Atelier',
        image: '/imagesm/trending-06.jpg',
      },
      {
        id: 7,
        title: 'Solo Leveling Seas..',
        image: '/imagesm/trending-07.jpg',
      },
      {
        id: 8,
        title: 'The Brilliant Healer',
        image: '/imagesm/trending-08.jpg',
      },
      {
        id: 9,
        title: 'The Apothecary Diar..',
        image: '/imagesm/trending-09.jpg',
      },
      {
        id: 10,
        title: 'Lazarus',
        image: '/imagesm/trending-10.jpg',
      }
];

const TrendingAnimeSlider = ({ animeList }) => {
    const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="bg-[#201F31] py-2 px-4">
      <h2 className="text-pink-300 font-bold text-2xl mb-4">Trending</h2>

      <div className="relative mt-10">

        {/* Anime List */}
        <div
          ref={scrollRef}
          className="flex overflow-hidden scrollbar-hide scroll-smooth"
        >
         {trending.map((anime) => (
       <div key={anime.id} className="flex flex-row items-center mx-4 min-w-[180px] relative">
       {/* Rotated Title and ID */}
       <div className="w-[30px] h-[170px] flex flex-col items-center justify-center absolute gap-12 mt-28  left-0">
         <p className="text-white font-semibold text-md rotate-[-90deg] whitespace-nowrap  origin-center">
           {anime.title}
         </p>
         {/* ID Below Rotated Title */}
         <p className="text-pink-300 text-xl font-bold mt-[20px] ">{String(anime.id).padStart(2, "0")}</p>
       </div>
       
       {/* Image shifted slightly right to allow rotated title space */}
       <div className="ml-[35px] w-[400px] h-[230px] relative">
         <img
           src={anime.image}
           alt={anime.title}
           className="w-full h-full object-cover"
         />
       </div>
     </div>
))}


        </div>
      <div>
        
      </div>
        {/* Right Button */}
        <div className="absolute top-0 right-0 w-14 h-60 bg-[#201F31]">
  <button
    onClick={scrollLeft}
    className="absolute right-1 bottom-20 sm:bottom-24 md:bottom-[130px] bg-gray-900 text-white opacity-80 p-2 sm:p-3 h-28 rounded-md hover:bg-pink-200 hover:text-gray-900  transition-colors shadow-md"
  >
    <FaChevronLeft className="text-sm sm:text-base md:text-xl" />
  </button>

  <button
    onClick={scrollRight}
    className="absolute right-1 bottom-32 sm:bottom-36 md:bottom-2 bg-gray-900 text-white opacity-80 p-2 sm:p-3 h-28 rounded-md hover:bg-pink-200 hover:text-gray-900 transition-colors shadow-md"
  >
    <FaChevronRight className="text-sm sm:text-base md:text-xl" />
  </button>
</div>

      
      </div>
    </div>
  );
};

export default TrendingAnimeSlider;
