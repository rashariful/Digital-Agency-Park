import { useState, useEffect } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import img1 from "../../../../../Assets/sl-1.png";
import img2 from "../../../../../Assets/sl-2.png";
import img3 from "../../../../../Assets/sl-3.png";
import hero1 from "../../../../../Assets/hero-1.png";
import hero2 from "../../../../../Assets/hero-2.png";
// import "aos/dist/aos.css";

const Slider = () => {
  const images = [
    {
      img: hero1,
      title:
        "Innovate & Transform your business with Digital Agency Park Limited",
      des: "Get access to cutting-edge and advanced business solutions that can help you to stay ahead of the competition. At iBOS Limited, we specialize in providing innovative solutions that drive growth and efficiency for your business.",
    },
    {
      img: hero2,
      title:
        "Best Software Development Company To Architect The Dream For Next Generation",
      des: "Our team of experienced developers is dedicated to delivering high-quality software that meets your unique needs. We stay up-to-date with the latest technologies, ensuring that you have access to the advanced software solutions.",
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
            {/* <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="md:w-[520px] p-3"
          >
            <p className="text-xl leading-snug md:text-left text-center	font-semibold ">
              Tasty Healthy{" "}
            </p>
            <p className="text-5xl leading-snug	font-bold md:text-left text-center ">
            Innovate & Transform your business with Digital Agency Park Limited
            </p>
            <p className="md:text-start text-center leading-relaxed		">
              website or create a mock-up, then you're no doubt aware that dummy
              text can be the difference between a lot{" "}
            </p>
            <p className="md:text-start mt-2 font-semibold text-center ">
              {" "}
              Aug 25% Off
            </p>
            <div className="md:text-start text-center mt-4">
              <button className="py-2 px-3 rounded-md bg-green-500 hover:bg-green-600 text-white">
                Get More
              </button>
            </div>
             </div> */}

            {/* <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="mt-8 md:mt-0 p-4"
          >
            <img className="h-72 rounded-md imgbg" src={bg} alt="" />
          </div> */}

            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              className="flex max-w-xl flex-col pt-8 pb-16 lg:pt-32 lg:pb-48"
            >
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

            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
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
          <HiChevronLeft size={24} />
        </button>
        <button
          className="rounded bg-transparent border-blue-300 h-16 border-2 hover:bg-blue-500 text-blue-400 hover:text-white transition duration-500"
          onClick={nextSlide}
        >
          <HiChevronRight size={24} />
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
