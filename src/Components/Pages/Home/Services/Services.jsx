import React from "react";
import sv1 from "../../../../Assets/sv-2.png";
import sv2 from "../../../../Assets/sv-3.png";
import sv3 from "../../../../Assets/sv-4.png";
import sv4 from "../../../../Assets/sv-5.png";
import { Link } from "react-router-dom";
import bg from "../../../../Assets/bg.jpg"


const Services = () => {
  return (
    <section className="bg-white">
      <div className="relative">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
          <img
            src={bg}
            alt="Top "
            className="w-full object-cover h-96 bg-gradient-to-r from-cyan-500 to-blue-500"
          />
        </div>
        <h3 className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl ">
          Services
        </h3>
        <div className="text-sm ml-32 absolute text-white bottom-5 breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>services</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-8 py-32">
        <div className="flex flex-col sm:flex-row gap-10 items-center justify-between">
          <div className="grid sm:grid-cols-2 overflow-hidden lg:grid-cols-2 gap-6">
            <div className="border h-auto w-96 rounded-md shadow-lg p-5 hover:border-blue-500 transition-all duration-100">
              <img src={sv3} alt="" className="w-20 h-20" />
              <p className="text-lg font-bold text-gray-700 mt-5">
                Crafting Exceptional UI/UX Solutions
              </p>
              <p className="mt-3 text-gray-500">
                Simplify complexity and enhance user interactions with our
                innovative UI/UX solutions
              </p>
            </div>

            <div className="border h-auto w-96 rounded-md shadow-lg p-5 hover:border-blue-500 transition-all duration-100">
              <img src={sv4} alt="" className="w-20 h-20" />
              <p className="text-lg font-bold mt-5">
                Professional Web Development Services
              </p>
              <p className="mt-3 text-gray-500">
                we deliver professional web development services that empower
                businesses to establish a strong online presence.
              </p>
            </div>

            <div className="border h-auto w-96 rounded-md shadow-lg p-5 hover:border-blue-500 transition-all duration-100">
              <img src={sv2} alt="" className="w-20 h-20" />
              <p className="text-lg font-bold text-gray-700 mt-5">
                Unlocking Your Business's Online Potential
              </p>
              <p className="mt-3 text-gray-500">
                We specialize in unlocking your business's online potential
                through strategic digital marketing solutions.
              </p>
            </div>

            <div className="border h-auto w-96 rounded-md shadow-lg p-5 hover:border-blue-500 transition-all duration-100">
              <img src={sv1} alt="" className="w-20 h-20" />
              <p className="text-lg font-bold text-gray-700 mt-5">
                Effective SEO Strategies for Success
              </p>
              <p className="mt-3 text-gray-500">
                Drive organic traffic to your website with our proven SEO
                strategies. Enhance your visibility in search engines, attract
                qualified leads, and grow your online presence
              </p>
            </div>
          </div>
          {/* right side content */}
          <div className="flex-1 text-center">
            <h3 className="text-lg font-semibold">ONE-STOP SOLUTION</h3>
            <h3 className="text-4xl my-8 font-bold">
              Smart solutions, <br /> real-time results
            </h3>
            <p>
              Sodales tempor sapien quaerat ipsum and congue undo <br />
              laoreet turpis neque auctor turpis vitae dolor luctus placerat
              <br /> magna ligula and cursus vitae
            </p>
            <ul className="mt-5">
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

export default Services;
