// CategoryCard.tsx

import React from "react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  thumbnail: string;
  to: string;
  gifs: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ thumbnail, to, gifs }) => {
  return (
    <Link
      className="flex flex-grow items-center justify-center m-2  p-4 rounded-lg cursor-pointer  w-[220px] h-[140px] transition-all duration-300 ease-in-out w-full max-w-[220px] h-[140px]"
      to={to}
    >
      <div
        className="rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800 bg-slate-500"
      >
        <video
          src={gifs}
          autoPlay
          loop
          playsInline
          muted
          className="absolute z-0  top-0 rounded-md 
              opacity-0 hover:opacity-70"
        />
        <img className="w-[200px] " src={thumbnail} />
      </div>
    </Link>
  );
};

export default CategoryCard;
