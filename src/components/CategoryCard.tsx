// CategoryCard.tsx

import React from 'react';

interface CategoryCardProps {
  title: string;
   // Pass icon components like from react-icons
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title,  onClick }) => {
  return (
    <div
      className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200"
      onClick={onClick}
    >
      
      <div className="font-medium">{title}</div>
    </div>
  );
};

export default CategoryCard;
