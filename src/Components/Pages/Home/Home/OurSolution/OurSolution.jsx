import React, { useState } from "react";
import Portfolio from "../../Portfolio/Portfolio";
import Ecommerce from "../Ecommerce/Ecommerce";
import Resturent from "../Resturent/Resturent";

const OurSolution = () => {
  const [activeTab, setActiveTab] = useState(0);
  const taps = [
    {
        id: 1,
        title: "E-commerce",
        content: <Ecommerce/>,
      },
    {
      id: 2,
      title: "Business",
      content: "Business description",
    },
    {
      id: 3,
      title: "Resturent",
      content: <Resturent/>,
    },
    {
      id: 4,
      title: "Hospitality",
      content: "Hospitality description",
    },
   
  ];
  const handleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="mx-auto max-w-screen-2xl">
      <h2 className="text-center mt-20 font-bold text-2xl uppercase">
        Our Products
      </h2>
      <p className="text-center my-3 leading-6 text-gray-500">
      We provide a time-worthy business solution to every type of <br /> business. Find out your one and level up your success stairs.
      </p>
      <div className="flex justify-center mt-16">
        {taps.map((tab, index) => (
          <div
            key={index}
            className={``}
            onClick={() => handleTab(index)}
          >
            <div className="">
              <ul className="mb-10">
                <li className={`cursor-pointer leading-normal py-2 px-3 ml-2  ${
              activeTab === index
                ? "bg-rose-500 rounded text-slate-50"
                : "bg-rose-200 rounded text-rose-500"
            }`}>{tab.title}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-20">{taps[activeTab].content}</div>
    </div>
  );
};

export default OurSolution;
