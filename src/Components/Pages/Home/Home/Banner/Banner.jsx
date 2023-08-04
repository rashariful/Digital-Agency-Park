import React from "react";
import hero from "../../../../../Assets/hero-1.png";
import hero2 from "../../../../../Assets/hero-2.png";
import {  AiFillRightCircle } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="bg-slate-50">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <section className="flex items-center flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <div className="flex max-w-xl flex-col pt-8 pb-16 lg:pt-32 lg:pb-48">
          {/* <h1 className="text-slate-700 leading-10 capitalize  mb-8 text-2xl font-normal sm:text-4xl">
          Best <span className="text-transparent leading-10 bg-clip-text bg-gradient-to-r from-[#6C38F8] via-[#6C38F8] to-[#BB2BFF] font-bold">Software Development Company</span> To Architect The Dream For Next Generation
          
          </h1> */}
          <p className="text-4xl leading-normal font-bold text-slate-600 mb-8">Best Software Development Company To Architect The Dream For Next Generation</p>
          {/* <p className="mb-10 leading-normal text-slate-600 md:mb-6 md:text-lg">
          Digital agency park, Inc. has a global reputation for up to scratch customer experience which marks us as one of the best software development companies in the world.
          </p> */}
          <p className="leading-6 text-slate-500 text-md">Digital agency park, Inc. has a global reputation for up to scratch customer experience which marks us as one of the best software development companies in the world.</p>

          <div className="flex w-full mt-6 gap-2.5">
            <button className="inline-block uppercase text-center w-32 h-10 text-white font-semibold bg-gradient-to-r from-[#2B59FF] to-[#2bb8ff] items-center hover:from-[#1a43d6] hover:to-[#2251d3] border-0 focus:outline-none hover:bg-gray-200 rounded md:mt-0">
            Call now
            </button>
            <button className="inline-block uppercase text-center w-32 h-10 text-white font-semibold bg-gradient-to-r from-[#0a153e] to-[#235b77] items-center hover:from-[#04103a] hover:to-[#2251d3] border-0 focus:outline-none hover:bg-gray-200 rounded md:mt-0">
            Live demo
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
