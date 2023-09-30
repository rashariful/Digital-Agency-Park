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
  const testimonialData = [
    {
      id: 1,
      title: "President of Operations,",
      subTitle: "Digital Marketing Company in Florida",
      description: "“I wanted to take a moment to thank you for the services your team has provided. Your team has been a pleasure to work with, professional and timely. The only delay in work that we have experienced has been due to our own lack of organization managing our projects, not yours. Job well done and I hope we can continue to grow together.”",
      img: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112",
    },
    
    {
      id: 2,
      title: "CMO",
      subTitle: "Leading Medical Care Company in Seattle, WA",
      description: "“We've been trying to put together a functional website since I began my practice in April of 2012. I am happy to say we finally hired the Flatworld team and they've worked closely with us throughout the process, staying on task, on target, and on budget. I also appreciate their quick and courteous responses. I highly recommend their service!”",
      img: "https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg",
    },
    {
      id: 3,
      title: "John McCulling",
      subTitle: "CEO / Datadrift",
      description: "“I wanted to take a moment to thank you for the services your team has provided. Your team has been a pleasure to work with, professional and timely. The only delay in work that we have experienced has been due to our own lack of organization managing our projects, not yours. Job well done and I hope we can continue to grow together.”",
      img: "https://img.freepik.com/premium-photo/find-something-you-like-it-shot-corporate-businesspeople-office_590464-34016.jpg?w=360",
    },
  ];
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
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <div>
          {testimonialData.map((testimonial, index) => (

           <SwiperSlide key={index} className="pb-12">
              <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
              <div className="text-gray-600 text-center w-1/2">
                {testimonial.description}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={testimonial.img}
                    loading="lazy"
                    alt=" by Radu Florin"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-blue-500 text-sm md:text-base font-bold text-center sm:text-left">
                    {testimonial.title}
                  </div>
                  <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                  {testimonial.subTitle}
                  </p>
                </div>
              </div>
            </div>
           </SwiperSlide>

            // <div>
            //   <SwiperSlide>
            //     <p>{testimonial.description}</p>
            //     <div>
            //       <p>{testimonial.title}</p>
            //       <p>{testimonial.subTitle}</p>
            //     </div>
            //   </SwiperSlide>
            // </div>
          ))}
        </div>
      </Swiper>
    </>
  );
}
