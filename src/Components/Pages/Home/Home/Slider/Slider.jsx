import { useState, useEffect } from "react";
import { HiChevronRight,HiChevronLeft } from "react-icons/hi";
import img1 from "../../../../../Assets/sl-1.png";
import img2 from "../../../../../Assets/sl-2.png";
import img3 from "../../../../../Assets/sl-3.png";
import hero1 from "../../../../../Assets/hero-1.png";
import hero2 from "../../../../../Assets/hero-2.png";

const Slider = () => {
  const images = [
    {
      img: hero1,
      title:
        "Second Software Development Company To Architect The Dream For Next Generation",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum aliquid itaque reprehenderit architecto excepturi magnam sequi ab sapiente sint?",
    },
    {
      img: hero2,
      title:
        "Best Software Development Company To Architect The Dream For Next Generation",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum aliquid itaque reprehenderit architecto excepturi magnam sequi ab sapiente sint?",
    },

    // img1,
    // img2,
    // img3,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    // Auto slide every 3 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]); // Run only once on component mount

  return (
    <div className="relative bg-gradient-to-b from-slate-100 to-blue-100">
      <div className="container mx-auto">
        {images.map((img, index) => (
          <section
            key={index}
            className={`flex items-center transition-opacity duration-500 flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row ${
              index === activeIndex ? "block" : "hidden"
            }`}

            // className="flex items-center flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row"
          >
            <div className="flex max-w-xl flex-col pt-8 pb-16 lg:pt-32 lg:pb-48">
             
              <p className="text-4xl leading-normal font-bold text-slate-700 mb-8">
                {img.title}
              </p>
            
              <p className="leading-6 text-slate-500 text-md">{img.des}</p>

              <div className="flex w-full mt-6 gap-2.5">
                <button className="inline-block uppercase text-center w-52 h-10 text-white font-semibold bg-gradient-to-r from-[#2B59FF] to-[#2bb8ff] items-center hover:from-[#1a43d6] hover:to-[#2251d3] border-0 focus:outline-none hover:bg-gray-200 rounded md:mt-0">
                free consultant
                </button>
                <button className="inline-block uppercase text-center w-32 h-10 text-white font-semibold bg-gradient-to-r from-[#0a153e] to-[#235b77] items-center hover:from-[#04103a] hover:to-[#2251d3] border-0 focus:outline-none hover:bg-gray-200 rounded md:mt-0">
                  Live demo
                </button>
              </div>
            </div>
            <div>
              <img className="h-72" src={img.img} alt="" />
            </div>
          </section>
        ))}
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
          className="rounded bg-transparent border-blue-300 h-16 border-2 hover:bg-blue-500 text-blue-400 hover:text-white transition duration-500"
          onClick={prevSlide}
        >
         <HiChevronLeft size={24}/>
        </button>
        <button
          className="rounded bg-transparent border-blue-300 h-16 border-2 hover:bg-blue-500 text-blue-400 hover:text-white transition duration-500"
          onClick={nextSlide}
        >
          <HiChevronRight size={24}/>
        </button>
      </div>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center mt-5">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-8 rounded-full bg-blue-300 mx-2 ${
              index === activeIndex ? "bg-blue-800" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
