import { useState, useEffect } from 'react';
import img1 from '../../../../../Assets/sl-1.png'
import img2 from '../../../../../Assets/sl-2.png'
import img3 from '../../../../../Assets/sl-3.png'

const Slider = () => {
  const images = [
    img1,
    img2,
    img3,
  ];

  const [activeIndex, setActiveIndex] = useState(0);
 

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Auto slide every 3 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []); // Run only once on component mount

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <img src={images[activeIndex]} alt="Slider" className="w-full h-auto" />
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full bg-gray-300 ${index === activeIndex ? 'bg-rose-600' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div> */}

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-8">
        <button
          className=" w-10 h-10 rounded-full bg-transparent border text-white"
          onClick={prevSlide}
        >
          P
        </button>
        <button
          className="w-10 h-10 rounded-full bg-transparent border text-white"
          onClick={nextSlide}
        >
          N
        </button>
      </div>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center mt-5">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-8 rounded-full bg-gray-300 mx-1 ${index === activeIndex ? 'bg-rose-500' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
