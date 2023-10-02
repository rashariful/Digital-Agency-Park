import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";


const Blog = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(()=>{
   fetch('./blog.json')
   .then(res => res.json())
   .then(data => setBlogs(data))
  },[])
  // useEffect(()=>{
  //   axios.get("https://dummyjson.com/products")
  //   .then(res => console.log(res))
  // },[])

  return (
    <div className=" bg-white ">
      <div className="relative mb-20">
        <img
          src="https://img.freepik.com/free-vector/abstract-digital-technology-background-with-network-connection-lines_1017-25552.jpg?w=1380&t=st=1696190778~exp=1696191378~hmac=1af9c299c8488fcb03b3207b509f849b3a3cadc36f7944e9c5764273d3c73b1d"
          alt="Top "
          className="w-full object-cover h-96"
        />
        <h3 className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl ">
          Blog
        </h3>
        <div className="text-sm ml-32 absolute text-white bottom-5 breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
         
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Blog
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
         

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {
              blogs.map(blog =>(

            <div key={blog.id} className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <Link
              to='/'
                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <img
                  src={blog.image}
                  loading="lazy"
                  alt={blog.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <Link
                   to='/'
                    className="transition duration-100 hover:text-blue-500 active:text-blue-600"
                  >
                   {blog.title}
                  </Link>
                </h2>

                <p className="mb-8 text-gray-500">
                {blog.sort_description}
                </p>
               

                {/* <div className="mt-auto flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by Brock Wegner"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <span className="block text-blue-500">Mike Lane</span>
                      <span className="block text-sm text-gray-400">
                        July 19, 2023
                      </span>
                    </div>
                  </div>

                  <span className="rounded border px-2 py-1 text-sm text-gray-500">
                    Article
                  </span>
                </div> */}
              </div>
              <Link to="/" className="text-primary p-3 hover:underline">
                Read more
                </Link>
            </div>
              ))
            }
           

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
