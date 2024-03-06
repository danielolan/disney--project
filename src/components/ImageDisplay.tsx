// ImageDisplay.tsx

import React from 'react';

interface ImageDisplayProps {
  imageUrl: string;
  altText: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, altText }) => {
  return (
    <div className="max-w-lg mx-auto">
      <img src={imageUrl} alt={altText} className="rounded shadow-lg" />
    </div>
  );
};

export default ImageDisplay;
