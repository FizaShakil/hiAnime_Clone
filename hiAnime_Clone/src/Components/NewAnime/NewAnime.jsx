import React from 'react';
import { MdSubtitles } from "react-icons/md";
import { FaMicrophone } from 'react-icons/fa';

const NewAnime = () => {
  const animeList = [
    {
      id: 1,
      title: 'Lycoris Recoil Short Movie',
      type: 'ONA . 22m',
      image: '/imagesm/Lycorise_recoil.jpg',
      subtitles: true,
      microphone: false,
      episodes: 22,
      ageRestricted: true,
    },
    {
      id: 2,
      title: 'Ardiguma Calcal-dan',
      type: 'TV . 25m',
      image: '/imagesm/araiguma.jpg',
      subtitles: true,
      microphone: true,
      episodes: 0,
      ageRestricted: true,
    },
    {
      id: 3,
      title: 'Apocalypse Hotel',
      type: 'TV . 25m',
      image: '/imagesm/apocalypse.jpg',
      subtitles: true,
      microphone: true,
      episodes: 1,
      ageRestricted:false,
    },
    {
      id: 4,
      title: 'The Catcher in the Ballpark!',
      type: 'TV . 25m',
      image: '/imagesm/mononoke.jpg',
      subtitles: true,
      microphone: true,
      episodes: 1,
      ageRestricted: true,
    },
    {
      id: 5,
      title: 'Mobile Suit Gundam GQuuuuuuX',
      type: 'TV . 25m',
      image: '/imagesm/mobile_suit.jpg',
      subtitles: true,
      microphone: true,
      episodes: 1,
      ageRestricted: false,
    },
    {
      id: 6,
      title: 'Compass 2.0: Sentou Setsuri Kaiseki System',
      type: 'TV . 25m',
      image: '/imagesm/compass.jpg',
      subtitles: true,
      microphone: true,
      episodes: 1,
      ageRestricted: true,
    },
    {
      id: 7,
      title: 'The Children of Shiunji Family',
      type: 'TV . 25m',
      image: '/imagesm/children_sanji.jpg',
      subtitles: true,
      microphone: true,
      episodes: 1,ageRestricted: false,
    },
    {
      id: 8,
      title: 'Yakuza Fiancé: Raise wa Tanin ga Ii',
      type: 'TV . 25m',
      image: '/imagesm/yakza.jpg',
      subtitles: true,
      microphone: true,
      episodes: 1,
      ageRestricted: true,
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 text-white">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Anime Grid Section */}
        <div className="flex-1">
          <h1 className="text-1xl sm:text-2xl font-bold mb-6 text-pink-300">New On HiAnime</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {animeList.map((anime) => (
              <div key={anime.id} className="bg-[#201F31] overflow-hidden transition duration-300">

              {/* Image Section */}
              <div className="relative aspect-[3/4]">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
            
                {/* 18+ Tag */}
                {anime.ageRestricted && (
                  <div className="absolute top-2 bg-red-600 text-white text-xs ml-4 px-2 py-1 rounded font-bold z-10 shadow-md">
                    18+
                  </div>
                )}
            
             
    {/* Icons & Episode Count */}
    <div className="absolute left-2 z-10 flex gap-2 bottom-2 md:mt-64 md:bottom-auto">
  {anime.subtitles && (
    <div className="z-10 bg-green-300 px-2 py-1 rounded">
      <MdSubtitles className="text-gray-900" size={12} />
    </div>
  )}
  {anime.microphone && (
    <div className="z-10 bg-blue-300 px-2 py-1 rounded">
      <FaMicrophone className="text-gray-900" size={12} />
    </div>
  )}
  {anime.episodes > 0 && (
    <div className="z-10 bg-white bg-opacity-30 text-white text-xs px-1 rounded">
      Ep {anime.episodes}
    </div>
  )}
</div>

            
                {/* Shadow on Image */}
                <div className="absolute bottom-0 h-[40%] w-full bg-gradient-to-t from-[#201F31] via-[#201F31]/10 to-transparent"></div>
              </div>
            
              {/* 🟢 Text Comes After Image (Outside Relative Block) */}
              <div className="p-1">
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {anime.title}
                </h3>
                <p className=" pt-3 text-sm text-gray-400">{anime.type}</p>
              </div>
            </div>
            
            ))}
          </div>
        </div>

        {/* Comments Sidebar */}
        <div className="w-full lg:w-[300px] bg-[#2c2b3f] p-4 rounded-2xl h-fit">
          <h2 className="text-lg font-semibold mb-4">💬 Comments</h2>
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
            <div className="bg-gray-900 p-2 rounded text-sm">Great selection this week!</div>
            <div className="bg-gray-900 p-2 rounded text-sm">Excited for Lycoris Recoil 😍</div>
            <div className="bg-gray-900 p-2 rounded text-sm">Please add subtitles!</div>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Write a comment..."
              className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none text-sm"
            />
            <button className="mt-2 w-full bg-green-600 hover:bg-green-700 transition py-2 rounded font-semibold text-sm">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAnime
