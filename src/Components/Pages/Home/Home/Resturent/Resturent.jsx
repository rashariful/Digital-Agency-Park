import React from 'react';

const Resturent = () => {
    return (
        <div>
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className="flex justify-between flex-row-reverse items-center gap-8 mb-4 sm:mb-8 md:mb-12">
              <div className="flex items-center gap-12">
                <p className="max-w-screen-sm hidden md:block">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <h2 className=" text-2xl lg:text-3xl font-bold">Trending</h2>
              </div>
            </div>
            

            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
              
              <a
                href="https://used-car-museum.web.app/"
                className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://cdn.dribbble.com/users/6641563/screenshots/18106656/media/6d1b401d2a87f15c76458d6864f2a537.jpg"
                  loading="lazy"
                  alt=" by Minh Pham"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />

                <div className="bg-gradient-to-t from-blue-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <div className="flex gap-5 text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                  <a href="https://used-car-museum.web.app/">
                    <button className="btn btn-sm btn-primary">
                      Live side
                    </button>
                  </a>
                  <a href="https://used-car-museum.web.app/">
                    <button className="btn btn-sm btn-warning">
                      Source code
                    </button>
                  </a>
                </div>
              </a>

              <a
                href="https://used-car-museum.web.app/"
                className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://cdn.dribbble.com/users/6175319/screenshots/17050514/media/381ee379009e5ce7fe598c8db195d8f5.png"
                  loading="lazy"
                  alt=" by Minh Pham"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />

                <div className="bg-gradient-to-t from-blue-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <div className="flex gap-5 text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                  <a href="https://used-car-museum.web.app/">
                    <button className="btn btn-sm btn-primary">
                      Live side
                    </button>
                  </a>
                  <a href="https://used-car-museum.web.app/">
                    <button className="btn btn-sm btn-warning">
                      Source code
                    </button>
                  </a>
                </div>
              </a>

              <a
                href="https://used-car-museum.web.app/"
                className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://cdn.dribbble.com/users/6175319/screenshots/17061500/media/e7787badeee890b25b4dd429a0fa124a.png"
                  loading="lazy"
                  alt=" by Minh Pham"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />

                <div className="bg-gradient-to-t from-blue-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <div className="flex gap-5 text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                  <a href="https://used-car-museum.web.app/">
                    <button className="btn btn-sm btn-primary">
                      Live side
                    </button>
                  </a>
                  <a href="https://used-car-museum.web.app/">
                    <button className="btn btn-sm btn-warning">
                      Source code
                    </button>
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Resturent;