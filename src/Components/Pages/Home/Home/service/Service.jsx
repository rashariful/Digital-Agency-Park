import React from "react";
import sv1 from "../../../../../Assets/sv-2.png";
import sv2 from "../../../../../Assets/sv-3.png";
import sv3 from "../../../../../Assets/sv-4.png";
import sv4 from "../../../../../Assets/sv-5.png";

const servicesData = [
  {
    id: 1,
    title: "Crafting Exceptional UI/UX Solutions",
    description: " Simplify complexity and enhance user interactions with our innovative UI/UX solutions",
    img: sv3,
  },
  {
    id: 2,
    title: "Professional Web Development Services",
    description:
      "we deliver professional web development services that empower businesses to establish a strong online presence.",
    img: sv4,
  },
  {
    id: 3,
    title: "Unlocking Your Business's Online Potential",
    description:
      "We specialize in unlocking your business's online potential through strategic digital marketing solutions.",
    img: sv2,
  },
  {
    id: 4,
    title: "Effective SEO Strategies for Success",
    description:
      "Drive organic traffic to your website with our proven SEO strategies. Enhance your visibility in search engines, attract qualified leads, and grow your online presence",
    img: sv1,
  },
];

const service = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-8 py-20">
        <div className="flex flex-col sm:flex-row gap-16 items-start justify-between">
          <div className="grid sm:grid-cols-2 overflow-hidden lg:grid-cols-2 gap-6">
            {servicesData.map((service, index) => (
              <div 
              key={index} 
              className="border h-auto rounded-md shadow-lg p-5 hover:border-blue-500 transition duration-500"
               >
                <img src={service.img} 
                alt={service.title}
                 className="w-20 h-20" 
                 />
                <p className="text-lg font-bold text-gray-700 mt-5">
                {service.title}
                </p>
                <p className="mt-3 text-gray-500">
                 {service.description}
                </p>
              </div>
            ))}
          </div>
          {/* right side content */}
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-700">
              ONE-STOP SOLUTION
            </h3>
            <h3 className="text-4xl my-8 font-bold text-slate-700">
              Smart solutions, <br /> real-time results
            </h3>
            <p className="text-gray-500">
              Sodales tempor sapien quaerat ipsum and congue undo <br />
              laoreet turpis neque auctor turpis vitae dolor luctus placerat
              <br /> magna ligula and cursus vitae
            </p>
            <ul className="mt-5 text-gray-500">
              <li>
                Tempor sapien quaerat undo ipsum laoreet diam purus sapien a
                dolor ociis ultrice ipsum aliquam congue a dolor cursus congue
                varius magnis
              </li>
              <br />
              <li>
                Cursus purus suscipit vitae cubilia magnis diam volute egestas
                sapien ultrice auctor
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default service;
