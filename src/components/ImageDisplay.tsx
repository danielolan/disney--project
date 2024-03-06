// ImageDisplay.tsx

import { Slide } from "react-slideshow-image";

const slideImages = [
  {
    url: "https://cnbl-cdn.bamgrid.com/assets/46d9544d6eac513598ff76480a516348bbf4125f002f343535726002a0ab1e17/original",
    caption: "Slide 1",
  },
  {
    url: "https://cnbl-cdn.bamgrid.com/assets/6e48853a58227279563d08c04444fdd909194a80bc9469c88b4a6f15a0a75741/original",
    caption: "Slide 2",
  },
  {
    url: "https://cnbl-cdn.bamgrid.com/assets/e686146169abd19aa8f64e5425ff7cfb5675b1010dcb3541262678eb3787b181/original",
    caption: "Slide 3",
  },
];

const ImageDisplay = () => {
  return (
    <div className="w-[100%]">
      <Slide autoplay canSwipe pauseOnHover infinite transitionDuration={360}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="h-[400px]">
           <img src={slideImage.url} className="w-[100%] h-[100%]"  alt="" />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageDisplay;
