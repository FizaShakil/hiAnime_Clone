

import React from 'react';
import { MdSubtitles } from "react-icons/md";
import { FaMicrophone } from 'react-icons/fa';

const Availability = ({ subtitles, episodes, dub }) => {
  return (
    <div className="flex justify-center items-center space-x-1">
      {subtitles > 0 && (
        <span className="flex items-center gap-1 text-gray-900 px-2 mx-1 font-semibold rounded-l-[4px] bg-green-300 text-xs">
          <MdSubtitles className="text-[14px]" />
          {subtitles}
        </span>
      )}
      {dub > 0 && (
        <span className="flex items-center gap-1 text-gray-900 px-2 font-semibold bg-blue-300 text-xs">
          <FaMicrophone className="text-[14px]" />
          {dub}
        </span>
      )}
      {episodes > 0 && (
        <span className="flex items-center gap-1 text-gray-900 px-2 mx-1 font-semibold rounded-r-[4px] bg-white opacity-50 text-xs">
          {episodes}
        </span>
      )}
    </div>
  );
};

export default Availability;
