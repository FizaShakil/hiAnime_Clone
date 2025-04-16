import React from 'react';

const NewAnime = () => {
  // Anime data array
  const animeList = [
    {
      id: 1,
      title: 'Lycoris Recoil Short Movie',
      type: 'ONA (6 eps)',
      date: 'Apr 16, 2025',
      duration: '19m',
      image: '/imagesm/Lycorise_recoil.jpg'  
    },
    {
      id: 2,
      title: 'Ardiguma Calcal-dan',
      type: 'TV',
      date: '',
      duration: '26m',
      image: '/imagesm/araiguma.jpg' // Replace with actual image name
    },
    {
      id: 3,
      title: 'Apocalypse Hotel',
      type: 'TV',
      date: '',
      duration: '24m',
      image: '/imagesm/apocalypse.jpg' // Replace with actual image name
    },
    {
      id: 4,
      title: 'The Catcher in the Ballpark!',
      type: 'TV',
      date: '',
      duration: '23m',
      image: '/imagesm/mononoke.jpg' // Replace with actual image name
    },
    {
        id: 5,
        title: ' Mobile Suit Gundam GQuuuuuuX  ',
        type: 'TV',
        date: '',
        duration: '16m',
        image: '/imagesm/mobile_suit.jpg' // Replace with actual image name
      },
      {
        id: 6,
        title: 'Compass 2.0: Sentou Setsuri Kaiseki System',
        type: 'TV',
        date: '',
        duration: '25m',
        image: '/imagesm/compass.jpg' // Replace with actual image name
      },
      {
        id: 7,
        title: 'The Children of Shiunji Family',
        type: 'TV',
        date: '',
        duration: '24m',
        image: '/imagesm/children_sanji.jpg' // Replace with actual image name
      },
      {
        id: 8,
        title: 'Yakuza Fiancé: Raise wa Tanin ga Ii',
        type: 'TV',
        date: '',
        duration: '20m',
        image: '/imagesm/yakza.jpg' // Replace with actual image name
      }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">New On HiAnime</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {animeList.map((anime) => (
          <div key={anime.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={anime.image} 
                alt={anime.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {anime.duration && (
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {anime.duration}
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 text-gray-800 line-clamp-2">{anime.title}</h3>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{anime.type}</span>
                {anime.date && <span>{anime.date}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewAnime;