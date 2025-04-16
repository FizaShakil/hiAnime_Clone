import React, { useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2d2b43] text-white px-4 py-2 shadow-md relative">
      {/* HEADER MAIN */}
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
          </button>
      <Logo/>
        </div>

        {/* DESKTOP Header Icons */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <div className="flex flex-col h-12 justify-end items-center gap-2">
            <i className="fas fa-broadcast-tower text-[#ffbade] text-base -mb-3"></i>
            <span>Watch2gether</span>
          </div>
          <div className="flex flex-col h-12 justify-end items-center gap-2">
            <i className="fas fa-random text-[#ffbade] text-base -mb-3"></i>
            <span>Random</span>
          </div>
          <div className="flex flex-col h-12 justify-end items-center gap-2">
            <div className='-mb-2'>
            <span className="bg-[#ffbade] text-black px-2 py-0.5 rounded text-xs font-bold">EN</span>
            <span className="bg-gray-700 px-2 py-0.5 rounded text-xs">JP</span>
            </div>
            <div>
              Anime Name
            </div>
          </div>
          <div className="flex flex-col h-12 justify-end items-center gap-2">
            <i className="fas fa-rss text-[#ffbade] text-base -mb-3"></i>
            <span>News</span>
          </div>
          <div className="flex flex-col h-12 justify-end items-center gap-2">
            <i className="fas fa-comment-dots text-[#ffbade] text-base -mb-3"></i>
            <span>Community</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button>
            <i className="fas fa-search text-lg"></i>
          </button>
          {/* <Link></Link> */}
          <button className="bg-[#ffbade] text-black font-bold px-4 py-2 rounded-lg">
            Login
          </button>
        </div>
      </div>

      {/* MOBILE + SIDEPANEL MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1f1b2e] z-50 p-5 overflow-y-auto transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo and Close */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">
            h<span className="text-[#ffbade]">!</span>anime
          </h2>
          <button onClick={() => setIsOpen(false)}>
            <i className="fas fa-times text-white text-lg"></i>
          </button>
        </div>

        {/* MOBILE VIEW (all header icons) */}
        <div className="mb-6 md:hidden flex flex-row justify-evenly text-sm">
          <div className="flex flex-col h-12 items-center gap-2">
            <i className="fas fa-broadcast-tower text-[#ffbade]"></i> W.2.G
          </div>
          <div className="flex flex-col h-12 justify-end items-center gap-2">
            <i className="fas fa-random text-[#ffbade]"></i> Random
          </div>
          <div className="flex flex-col h-12 justify-end items-center gap-2">
            <div>
            <span className="bg-[#ffbade] text-black px-2 py-0.5 rounded text-xs font-bold">EN</span>
            <span className="bg-gray-700 px-2 py-0.5 rounded text-xs">JP</span>
            </div>
            <div>
              Name
            </div>
          </div>
          <div className="flex flex-col h-12 justify-end items-center gap-2">
            <i className="fas fa-rss text-[#ffbade]"></i> News
          </div>
        </div>

        {/* SHARED VIEW: Menu Items */}
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-[#ffbade]">Browse</p>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Subbed Anime</li>
            <li>Dubbed Anime</li>
            <li>Most Popular</li>
            <li>Movies</li>
            <li>TV Series</li>
            <li>OVAs</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
