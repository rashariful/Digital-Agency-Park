import React from "react";
import hero from "../../../../../Assets/hero-1.png";
import hero2 from "../../../../../Assets/hero-2.png";
import {  AiFillRightCircle } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="bg-gradient-to-tl from-[#002] via-[#000] to-[#150024] pb-6 sm:pb-8 lg:pb-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <section className="flex items-center flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <div className="flex max-w-xl flex-col pt-8 pb-16 lg:pt-32 lg:pb-48">
          <h1 className="text-slate-50 leading-2 capitalize  mb-8 text-2xl font-bold sm:text-4xl md:mb-12">
          Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C38F8] via-[#6C38F8] to-[#BB2BFF]">Software Development Company</span> To Architect The Dream For Next Generation
          
          </h1>
          <p className="mb-10 text-slate-400 md:mb-6 md:text-lg xl:text-xl">
          Digital agency park, Inc. has a global reputation for up to scratch customer experience which marks us as one of the best software development companies in the world.
          </p>

          <div className="flex w-full mt-6 gap-2.5">
            <button className="inline-block uppercase text-center py-4 px-16 text-white font-semibold bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] items-center hover:from-[#1a43d6] hover:to-[#9b22d3] border-0 focus:outline-none hover:bg-gray-200 rounded md:mt-0">
            Get a quote
            </button>
           
          </div>
        </div>
        <div>
          <img src={hero2} alt="" />
        </div>
      </section>
    </div>
  </div>
  );
};

export default Banner;
