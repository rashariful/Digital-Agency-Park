import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import './styles.css';

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
const TestTwo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const banner = [
    {
      id: 1,
      title:
        "Innovate & Transform your business with Digital Agency Park Limited",
      description:
        "Get access to cutting-edge and advanced business solutions that can help you to stay ahead of the competition. At Digital Agency Park, we specialize in providing innovative solutions that drive growth and efficiency for your business.",
      imgUrl:
        "https://www.web24zone.com/wp-content/uploads/2022/10/46207-programmer-1.gif",
    },
    {
      id: 2,
      title:
        "Best Software Development Company To Architect The Dream For Next Generation",
      description:
        "Our team of experienced developers is dedicated to delivering high-quality software that meets your unique needs. We stay up-to-date with the latest technologies, ensuring that you have access to the advanced software solutions.",
      imgUrl:
        "https://media.istockphoto.com/id/1219473617/vector/young-male-character-writing-code-on-a-desktop-computer-working-from-home-millennials-at-work.jpg?s=612x612&w=0&k=20&c=9KrYfX8M5lFqpUN2y5Pklac_XebWqnI0bmDkMB6NLhU=",
    },
    {
      id: 3,
      title:
        "Best Software Development Company To Architect The Dream For Next Generation",

      description:
        "Get access to cutting-edge and advanced business solutions that can help you to stay ahead of the competition. At Digital Agency Park, we specialize in providing innovative solutions that drive growth and efficiency for your business.",
      imgUrl:
        "https://blog.imarticus.org/wp-content/uploads/2021/12/bwgg.gif",
    },
    {
      id: 4,
      title:
        "Best Software Development Company To Architect The Dream For Next Generation",

      description:
        "Get access to cutting-edge and advanced business solutions that can help you to stay ahead of the competition. At Digital Agency Park, we specialize in providing innovative solutions that drive growth and efficiency for your business.",
      imgUrl:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1670664007515/7nRHqrTst.gif",
    },
  ];
  return (
    <>
      <Swiper
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {banner.map((banner) => (
          <SwiperSlide>
            <section className="bg-white py-6 sm:py-8 lg:py-12">
              <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className=" md:flex  justify-between items-center w-full mx-auto h-[580px]">
                  {/* contant start here  */}
                  <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="md:w-1/2"
                  >
                    {/* <p className="text-xl leading-snug md:text-left text-center	font-semibold ">
                  Tasty Healthy{" "}
                </p> */}
                    <p className="text-3xl leading-normal text-gray-700 mb-5 font-bold md:text-left text-center ">
                      {banner.title}
                    </p>
                    <p className="md:text-start text-gray-500 text-center leading-relaxed		">
                      {banner.description}
                    </p>

                    <div className="md:text-start text-center mt-12">
                      {/* <button className="py-2 px-3 rounded-md bg-green-500 hover:bg-green-600 text-white">
                    Free consulta
                  </button> */}
                      <button className="inline-block uppercase text-center w-52 h-10 text-white font-semibold bg-gradient-to-r from-[#2B59FF] to-[#2bb8ff] items-center hover:from-[#1a43d6] hover:to-[#2251d3] border-0 focus:outline-none hover:bg-gray-200 rounded md:mt-0">
                        free consultant
                      </button>
                    </div>
                  </div>

                  {/* image div here  */}
                  <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className=""
                  >
                    <img 
                    className="rounded-md"
                    src={banner.imgUrl} 
                    alt="" />
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestTwo;
