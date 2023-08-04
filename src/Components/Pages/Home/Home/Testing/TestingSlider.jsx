import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper/modules";

export default function TestingSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 lg:divide-x">
          <SwiperSlide className="mb-16 flex ">
            <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
              <div className="text-gray-600 text-center">
                “This is a section of some simple filler text, <br /> also known
                as placeholder text.”
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt=" by Radu Florin"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">
                    John McCulling
                  </div>
                  <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                    CEO / Datadrift
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
              <div className="text-gray-600 text-center">
                “This is a section of some simple filler text,
                <br /> also known as placeholder text.”
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt=" by Radu Florin"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">
                    John McCulling
                  </div>
                  <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                    CEO / Datadrift
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
              <div className="text-gray-600 text-center">
                “This is a section of some simple filler text, <br /> also known
                as placeholder text.”
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt=" by Radu Florin"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">
                    John McCulling
                  </div>
                  <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                    CEO / Datadrift
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
              <div className="text-gray-600 text-center">
                “This is a section of some simple filler text,
                <br /> also known as placeholder text.”
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt=" by Radu Florin"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">
                    John McCulling
                  </div>
                  <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                    CEO / Datadrift
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
              <div className="text-gray-600 text-center">
                “This is a section of some simple filler text, <br /> also known
                as placeholder text.”
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt=" by Radu Florin"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">
                    John McCulling
                  </div>
                  <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                    CEO / Datadrift
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
              <div className="text-gray-600 text-center">
                “This is a section of some simple filler text,
                <br /> also known as placeholder text.”
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt=" by Radu Florin"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">
                    John McCulling
                  </div>
                  <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                    CEO / Datadrift
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
              <div className="text-gray-600 text-center">
                “This is a section of some simple filler text, also known as
                placeholder text.”
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt=" by christian ferrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">
                    Kate Berg
                  </div>
                  <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                    CFO / Dashdash
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
              <div className="text-gray-600 text-center">
                “This is a section of some simple filler text, also known as
                placeholder text.”
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"
                    loading="lazy"
                    alt="Photo by Ayo Ogunseinde"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">
                    Greg Jackson
                  </div>
                  <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                    CTO / Uptime
                  </p>
                </div>
              </div>
            </div> */}
        </div>
      </Swiper>
    </>
  );
}
