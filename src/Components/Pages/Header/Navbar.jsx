import React, { useState, useEffect } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const socialData = [
    {
      id: 1,
      title: "facebook",
      icon: <FaFacebookSquare />,
      link: "https://www.facebook.com/Digitalagencypark",
    },
    {
      id: 2,
      title: "linkedin",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/company/digitalagencypark",
    },
    {
      id: 3,
      title: "instagram",
      icon: <FaInstagramSquare />,
      link: "https://www.facebook.com/Digitalagencypark",
    },
  ];

  return (
    <nav className="sticky top-0 z-30">
      <div className=" bg-slate-800 py-3 px-6 overflow-x-hidden">
        <div className="flex flex-wrap flex-col gap-3 justify-between md:flex-row items-center">
          <div className="flex justify-between gap-5">
            <div className="flex items-center gap-3">
              <span className="text-slate-500 hover:text-primary transition-colors duration-300">
                <FaPhoneSquare size={18} />
              </span>

              <a className="text-slate-400" href="tel:+8801850273117">
                +8801850273117
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-slate-500 hover:text-primary transition-colors duration-300">
                <MdEmail size={18} />
              </span>

              <span className="">
                <span className="text-slate-400 font-extralight">
                  digitalagencypark@gmail.com
                </span>
              </span>
            </div>
          </div>

          {/* social media start */}
          <div className="flex items-center gap-3">
            {socialData.map((social, index) => (
              <div>
                <Link
                  to={social.link}
                  target="_blank"
                  className="text-slate-500 hover:text-primary transition-colors duration-300"
                >
                  <span className="text-lg">{social.icon}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
