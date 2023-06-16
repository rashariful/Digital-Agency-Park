import React from "react";

const Services = () => {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Our Impressive Portfolio
            </h2>

            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              Crasex odio, luctus vel rhoncus quis, pellentesque a urna.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div>
              <a
                href="#"
                class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative"
              >
                <img
                  src="https://www.cloudways.com/blog/wp-content/uploads/20-Best-Web-Design-Tools-for-Design-Agencies.jpg"
                  loading="lazy"
                  alt="Photo by Nick Karvounis"
                  class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4">
                <div class="flex flex-col">
                  <a
                    href="#"
                    class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100"
                  >
                    Cool Outfit
                  </a>
                  <span class="text-gray-500 text-sm lg:text-base">
                    by Cool Brand
                  </span>
                </div>

                <div class="flex flex-col items-end">
                  <span class="text-gray-600 lg:text-lg font-bold">$29.99</span>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative"
              >
                <img
                  src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/what-is-a-web-developer.jpg"
                  loading="lazy"
                  alt="Photo by Nick Karvounis"
                  class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4">
                <div class="flex flex-col">
                  <a
                    href="#"
                    class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100"
                  >
                    Cool Outfit
                  </a>
                  <span class="text-gray-500 text-sm lg:text-base">
                    by Cool Brand
                  </span>
                </div>

                <div class="flex flex-col items-end">
                  <span class="text-gray-600 lg:text-lg font-bold">$29.99</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative"
              >
                <img
                  src="https://www.oberlo.com/media/1603954182-seo-article-header.png?fit=max&fm=jpg&w=1824"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4">
                <div class="flex flex-col">
                  <a
                    href="#"
                    class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100"
                  >
                    Nice Outfit
                  </a>
                  <span class="text-gray-500 text-sm lg:text-base">
                    by Nice Brand
                  </span>
                </div>

                <div class="flex flex-col items-end">
                  <span class="text-gray-600 lg:text-lg font-bold">$35.00</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative"
              >
                <img
                  src="https://assets.entrepreneur.com/content/3x2/2000/1635968078-GettyImages-913248994.jpg"
                  loading="lazy"
                  alt="Photo by Vladimir Fedotov"
                  class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4">
                <div class="flex flex-col">
                  <a
                    href="#"
                    class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100"
                  >
                    Lavish Outfit
                  </a>
                  <span class="text-gray-500 text-sm lg:text-base">
                    by Lavish Brand
                  </span>
                </div>

                <div class="flex flex-col items-end">
                  <span class="text-gray-600 lg:text-lg font-bold">$49.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
