import React, { useState } from "react";
import Portfolio from "../../Portfolio/Portfolio";
import Ecommerce from "../Ecommerce/Ecommerce";
import Resturent from "../Resturent/Resturent";
import Business from "../Business/Business";
import Hospitality from "../Hospitality/Hospitality";

const OurSolution = () => {
  const [activeTab, setActiveTab] = useState(0);
  const taps = [
    {
      id: 1,
      title: "E-commerce",
      content: <Ecommerce />,
    },
    {
      id: 2,
      title: "Business",
      content: <Business/>,
    },
    {
      id: 3,
      title: "Resturent",
      content: <Resturent />,
    },
    {
      id: 4,
      title: "Hospitality",
      content: "this is hospital realted web site our company profile",
    },
  ];
  const handleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <section className="bg-white">
      <div className="mx-auto  max-w-screen-2xl py-20">
        <h2 className="text-3xl font-bold text-center capitalize mb-8">
          Our Products
        </h2>
        <p className="text-center my-3 leading-6 text-gray-500">
          We provide a time-worthy business solution to every type of <br />{" "}
          business. Find out your one and level up your success stairs.
        </p>
        <div className="flex justify-center mt-16">
          {taps.map((tab, index) => (
            <div key={index} className={``} onClick={() => handleTab(index)}>
              <div className="">
                <ul className="mb-10">
                  <li
                    className={`cursor-pointer leading-normal py-2 px-3 ml-2  ${
                      activeTab === index
                        ? "bg-blue-500 rounded text-slate-50"
                        : "bg-blue-200 rounded text-blue-500"
                    }`}
                  >
                    {tab.title}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="">{taps[activeTab].content}</div>
      </div>
    </section>
  );
};

export default OurSolution;
