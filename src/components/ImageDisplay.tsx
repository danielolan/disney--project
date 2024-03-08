import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ImageDisplay = () => {
  const slideImages = [
    {
      url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C66445ECA9D730250BC306BA1F077BC2A519ECAA0C2A8663681FCAA99E1DF3B2/scale?width=1440&amp;aspectRatio=3.91&amp;format=jpeg",
      caption: "Slide 1",
    },
    {
      url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01181475A54B7BB417696B12EADEFF919357D0595B052E4739F06B370C9B7502/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim",
      caption: "Slide 2",
    },
    {
      url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DDF4ECC450C1F308A1E895F6E0771DA81362871F94A18125FCA552A3B8E55C59/scale?width=1440&aspectRatio=3.91&format=png",
      caption: "Slide 3",
    },
  ];

  return (
    <div>
      <Slide autoplay canSwipe pauseOnHover infinite transitionDuration={360}>
        {slideImages.map((slideImage, index) => (
          <div
            key={index}
            className="flex justify-center items-center overflow-x-auto w-full px-16 py-4
                  scrollbar-none scroll-smooth"
          >
            <img
              src={slideImage.url}
              className="w-full max-w-full object-cover object-center rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
              alt={slideImage.caption}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageDisplay;
