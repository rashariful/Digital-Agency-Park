import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            {/* <!-- logo - start --> */}
            <div className="mb-4 lg:-mt-2">
              <Link
                to="#"
                className="inline-flex items-center gap-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6C38F8] via-[#6C38F8] to-[#BB2BFF] md:text-2xl"
                aria-label="logo"
              >
                Digital Agency park
              </Link>
            </div>
            {/* <!-- logo - end --> */}

            <p className="mb-6 text-gray-400 sm:pr-8">
              We are a dynamic digital agency that helps businesses
              navigate the ever-changing digital landscape. Our team of
              experienced professionals specializes in crafting customized
              digital strategies that drive results.
            </p>
            <div className=" flex flex-col gap-3 mb-8">
              <div className="flex gap-3 items-center">
                <MdLocationOn color="#2D58FF" size={24} />
                <Link
                  to="#"
                  className=" text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  Road # 03, House # 03, Nikunja 02, <br /> Dhaka Bangladesh
                  1229
                </Link>
              </div>
              <div className="flex gap-3 items-center">
                <MdCall color="#2D58FF" size={24} />
                <Link
                  to="#"
                  className=" text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  +8801850-273117
                </Link>
              </div>
              <div className="flex gap-3 items-center">
                <MdEmail color="#2D58FF" size={24} />
                <Link
                  to="#"
                  className=" text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  digitalagencypark@gmail.com
                </Link>
              </div>
            </div>

            {/* <!-- social - start --> */}
            <div className="flex gap-4">
              <Link
                to="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <FaFacebookSquare size={22} />
              </Link>

              <Link
                to="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <FaLinkedin size={22} />
              </Link>

              <Link
                to="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <FaInstagramSquare size={22} />
              </Link>

              <Link
                to="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <FaYoutube size={22} />
              </Link>
            </div>
            {/* <!-- social - end --> */}
          </div>

          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
              Products
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  Overview
                </Link>
              </div>

              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  Solutions
                </Link>
              </div>

              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  Pricing
                </Link>
              </div>

              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  Customers
                </Link>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
              Company
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  About
                </Link>
              </div>

              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  Investor Relations
                </Link>
              </div>

              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  Jobs
                </Link>
              </div>

              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  Press
                </Link>
              </div>

              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  Blog
                </Link>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
              Support
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  Contact
                </Link>
              </div>

              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  Documentation
                </Link>
              </div>

              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  Chat
                </Link>
              </div>

              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  FAQ
                </Link>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
              LEGAL
            </div>

            <nav className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <Link
                  to="#"
                  className=" text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  Terms of Service
                </Link>
              </div>

              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </div>

              <div>
                <Link
                  to="#"
                  className="text-gray-400 transition duration-100 hover:text-blue-500 active:text-blue-600"
                >
                  Cookie settings
                </Link>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}
        </div>

        <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
          © 2023 - Present Digital agency park. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
