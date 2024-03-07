// CategoryCard.tsx

import React from "react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  thumbnail: string;
  to: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ thumbnail, to }) => {
  return (
    <Link
      className="flex flex-grow items-center justify-center m-2 border bg-transparent p-4 rounded-lg cursor-pointer hover:bg-[#050423] w-[220px] h-[140px] transition-all duration-300 ease-in-out w-full max-w-[220px] h-[140px]"
      to={to}
    >
      <div className="font-extrabold text-white">
        <img className="w-[200px]" src={thumbnail} />
      </div>
    </Link>
  );
};


export default CategoryCard;
