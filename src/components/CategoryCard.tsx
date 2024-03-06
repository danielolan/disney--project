// CategoryCard.tsx

import React from "react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  to: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, to }) => {
  return (
    <Link
      className="flex items-center justify-center m-2 border bg-transparent p-4 rounded-lg cursor-pointer hover:bg-[#050423] w-[220px] h-[140px]"
      to={to}
    >
      <div className="font-extrabold text-white">{title}</div>
    </Link>
  );
};

export default CategoryCard;
