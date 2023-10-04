import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import bg from "../../../../../Assets/headerPic/hr.png"; 
import bg1 from "../../../../../Assets/headerPic/hr2.png";
import bg2 from "../../../../../Assets/headerPic/hr3.png";
import bg3 from "../../../../../Assets/headerPic/hr2.png";

const TestSlider = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showThumbs={false}
      >
        <div className="bg-gray-50 md:flex justify-around items-center md:w-[1280px]  mx-auto h-full md:h-[580px]">
          <div
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
          </div>
          
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="mt-8 md:mt-0 p-4"
          >
            <img className="h-72 rounded-md imgbg" src={bg} alt="" />
          </div>
        </div>

        <div className="bg-slate-50 md:flex  justify-around items-center md:w-[1280px]  mx-auto h-[580px]">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="md:w-[520px] p-3"
          >
            <p className="text-xl leading-snug md:text-left text-center	font-semibold ">
              Tasty Healthy{" "}
            </p>
            <p className="text-5xl leading-snug	font-bold md:text-left text-center ">
              We sell <span className="text-green-500">what's Good</span> For
              you
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
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="mt-8 md:mt-0 p-4"
          >
            <img
              className="md:h-96 h-72 pb-10 rounded-md imgbg"
              src={bg1}
              alt=""
            />
          </div>
        </div>

        <div className="bg-slate-50 md:flex  justify-around items-center md:w-[1280px]  mx-auto h-[580px]">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="md:w-[520px] p-3"
          >
            <p className="text-xl leading-snug md:text-left text-center	font-semibold ">
              Tasty Healthy{" "}
            </p>
            <p className="text-5xl leading-snug	font-bold md:text-left text-center ">
              We sell <span className="text-green-500">what's Good</span> For
              you
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
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="mt-8 md:mt-0 p-4"
          >
            <img className="md:h-96 h-72 rounded-md imgbg" src={bg2} alt="" />
          </div>
        </div>

        <div className="bg-slate-50 md:flex  justify-around items-center md:w-[1280px]  mx-auto h-[580px]">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="md:w-[520px] p-3"
          >
            <p className="text-xl leading-snug md:text-left text-center	font-semibold ">
              Tasty Healthy{" "}
            </p>
            <p className="text-5xl leading-snug	font-bold md:text-left text-center ">
              We sell <span className="text-green-500">what's Good</span> For
              you
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
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="mt-8 md:mt-0 p-4"
          >
            <img className="md:h-96 h-72 rounded-md imgbg" src={bg3} alt="" />
          </div>
        </div>

      </Carousel>
    </div>
  );
};

export default TestSlider;
