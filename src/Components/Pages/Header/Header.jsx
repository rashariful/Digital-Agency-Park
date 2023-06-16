import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setNavbarVisible(!isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = (
    <React.Fragment>
      <li className="hover:text-indigo-500 active:text-indigo-700">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-indigo-500 active:text-indigo-700">
        <Link to="">services</Link>
      </li>
      <li className="hover:text-indigo-500 active:text-indigo-700">
        <Link to="/about-us">About</Link>
      </li>
      <li className="hover:text-indigo-500 active:text-indigo-700">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="hover:text-indigo-500 active:text-indigo-700">
        <Link to="/contact-us">Contact</Link>
      </li>

      <li></li>
    </React.Fragment>
  );

  return (
    <header 
    className={`w-full z-50 sticky top-8 transition-all duration-300 ease-in-out ${
      isNavbarVisible
        ? " bg-white"
        : "bg-white drop-shadow-md"
    }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

        <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* <span className="ml-3 text-xl">Digital Agency Park</span> */}
        
          <Link
                to="#"
                className="inline-flex items-center gap-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6C38F8] via-[#6C38F8] to-[#BB2BFF] md:text-2xl"
                aria-label="logo"
              >
                Digital Agency park
              </Link>
        </p>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-between ml-5 mr-5">
         
         <ul className="flex gap-8 capitalize text-gray-600 mr-3 text-lg font-semibold transition duration-100">
         {menuItems}
          </ul> 
        </nav>
         <div className="">
            <button className="uppercase text-center py-4 px-12 text-white font-semibold bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] items-center hover:from-[#1a43d6] hover:to-[#9b22d3] border-0 focus:outline-none hover:bg-gray-200 rounded md:mt-0">
            Get a quote
            </button>
           
          </div>
      </div>
    </header>
  );
};

export default Header;
