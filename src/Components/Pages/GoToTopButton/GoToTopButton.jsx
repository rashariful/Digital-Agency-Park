import React, { useState } from 'react';
import { HiOutlineArrowSmUp } from "react-icons/hi";
const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Check the scroll position to show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add a scroll event listener
  window.addEventListener('scroll', handleScroll);

  return (
    <div className={`fixed right-8 bottom-8 ${isVisible ? 'block' : 'hidden'}`}>
      <button
        onClick={scrollToTop}
        className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition-all duration-300"
      >
       <HiOutlineArrowSmUp size={20}/>
      </button>
    </div>
  );
};

export default GoToTopButton;
