import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Autoplay, } from "swiper/modules";

export default function TestingSlider() {
  const testimonialData = [
    {
      id: 1,
      title: "Ernest Smith",
      subTitle: "Developer at Unixity",
      description: "Outstanding dedication to excellence, exceptional support received. Impressive service!",
      img: "https://preview.codeless.co/converta/default/wp-content/uploads/2023/02/avatar-3-150x150.png",
    },

    {
      id: 2,
      title: "Stella Smith",
      subTitle: "Engineer at Unify",
      description:"Expertise made all the difference, absolute pleasure to work with. Exceeded our expectations.",
      img: "https://preview.codeless.co/converta/default/wp-content/uploads/2023/02/avatar-2-150x150.png",
    },

    {
      id: 3,
      title: "Thomas Smith",
      subTitle: "Designer at Converta",
      description:"I highly recommend this agency. Testing for our project was done everything top-notch",
      img: "https://preview.codeless.co/converta/default/wp-content/uploads/2023/02/avatar-1-150x150.png",
    },
  ];
  return (
    <section className="bg-[#F8FAFC] py-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl mb-20 font-semibold text-gray-700">
        What our customers are saying
        </h2>
           
           <div className="px-32">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonialData.map((testimonial, index) => (
               
               <div className="flex bg-white flex-col border px-5 py-10 rounded-3xl gap-4 md:gap-6 sm:px-4 lg:px-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                    
               <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                   <div className="w-12 md:w-14 h-12 md:h-14 rounded-full overflow-hidden shadow-lg">
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
                 <div className="text-gray-500 text-left">
                   {testimonial.description}
                 </div>

                
               </div>
              
              ))}
            </div>
           </div>
        
      </div>
    </section>
  );
}
