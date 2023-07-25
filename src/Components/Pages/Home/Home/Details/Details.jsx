import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { SiExpress, SiFirebase, SiTailwindcss } from "react-icons/si";
import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaChevronRight, FaGithub } from "react-icons/fa";

const Details = () => {
    // const [project, setProjects] = useState([]);
    const project = useLoaderData();
    console.log(project)

    // useEffect(() => {
    //   fetch(`https://portfolio-server-hazel.vercel.app/api/v1/project`)
    //     .then((res) => res.json())
    //     .then((data) => setProjects(data.data));
    // }, []);
  const { images } = project?.data;
  console.log(images, "linke 18");
  const [img, setImg] = useState(images[2]);

  const handleImageHover = (image) => {
    setImg(image);
  };

  return (
    <section className="text-gray-600 body-font">
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {project?.data?.images?.map((img) => (
          <SwiperSlide>
            <img className="w-[1020px] h-[600px]" src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper> */}

      {/* swiper end here */}
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-full overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={img}
            />
          </div>

          <div className="rounded-lg flex justify-center mb-24 mt-5 pb-3 drop-shadow-sm shadow-cyan-500 shadow-sm overflow-hidden">
            {images?.map((image, i) => (
              <div key={i} onClick={() => handleImageHover(image, i)}>
                <img
                  src={image}
                  loading="lazy"
                  alt="by Himanshu Dewangan"
                  className="w-40 h-32 m-3 rounded-md object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* end of image sliider */}
          <div className="bg-slate-800 py-6 rounded-b-md sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
              <div className=" py-6 sm:py-8 lg:py-12">
                <div className="flex flex-col justify-center w-full px-4 md:px-8 mx-auto">
                  <div className="mb-2 md:mb-3">
                    <h2 className="text-gray-100 capitalize text-2xl lg:text-3xl">
                      {project.data.title}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between sm:flex-row gap-6">
                <div className="bg-base-100 p-10 rounded-md">
                  <h1 className="flex justify-center capitalize text-blue-100">
                    Frontend development
                  </h1>
                  <div>
                    <div className="grid grid-cols-2 gap-10 mt-5 justify-items-start">
                      <div className="flex gap-3 items-center">
                        <p>
                          {" "}
                          <DiHtml5 size={24} color="#DF4E00" />{" "}
                        </p>
                        <p>html</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <p>
                          {" "}
                          <DiCss3 size={24} color="#1579B8" />{" "}
                        </p>

                        <p>css</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <p>
                          {" "}
                          <DiJavascript size={24} color="#FFD600" />{" "}
                        </p>

                        <p>javascript</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <p>
                          <SiTailwindcss size={24} color="#61dbfb" />
                        </p>

                        <p>tailiwind</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <p>
                          {" "}
                          <DiReact size={24} color="#61dbfb" />{" "}
                        </p>

                        <p>React js</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-base-100 p-10 rounded-md">
                  <h1 className="flex justify-center font-24 capitalize text-blue-100">
                    Backend development
                  </h1>
                  <div>
                    <div className="grid grid-cols-2 gap-10 mt-5 justify-items-start">
                      <div className="flex gap-3 items-center">
                        <p>
                          {" "}
                          <DiMongodb size={24} color="#3D9B35" />{" "}
                        </p>
                        <p>MongoDB</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <p>
                          {" "}
                          <SiExpress size={24} color="#1579B8" />{" "}
                        </p>

                        <p>Express</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <p>
                          {" "}
                          <DiNodejs size={24} color="#FFD600" />{" "}
                        </p>

                        <p>Node Js</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <p>
                          <SiFirebase size={24} color="#F7C62F" />
                        </p>

                        <p>firebase</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <p>
                          {" "}
                          <DiReact size={24} color="#61dbfb" />{" "}
                        </p>

                        <p>React js</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-semibold text-2xl text-gray-300 my-3 mt-16">
                Description
              </p>

              <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                <br />
                {project.data.description}
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-5 text-white pt-8 text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                <a href={project?.data?.liveLink}>
                  <button className="btn btn-sm btn-primary">
                    Live Demo
                    <FaChevronRight className="w-5 h-5 ml-3"></FaChevronRight>
                  </button>
                </a>
                <a href={project?.data?.serverLink}>
                  <button className="btn btn-outline btn-sm">
                    <FaGithub className="w-5 h-5 mr-3"></FaGithub>
                    server side
                  </button>
                </a>
                <a href={project?.data?.clientLink}>
                  <button className="btn btn-outline btn-sm">
                    <FaGithub className="w-5 h-5 mr-3"></FaGithub>
                    client side
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
