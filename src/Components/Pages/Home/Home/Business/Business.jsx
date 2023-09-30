import React from 'react';
import src1 from "../../../../../Assets/ecmr/ecr.png"
import src2 from "../../../../../Assets/ecmr/ecr2.png"
import src3 from "../../../../../Assets/ecmr/ecr3.png"
import { Link } from 'react-router-dom';

const Business = () => {
    const srData = [
        {
            id: 1,
            title: "Business portfolio",
            des: "dec",
            img: src1,
            link: "https://www.sihmbd.com/"
        },
        {
            id: 2,
            title: "Digital agency park",
            des: "dec",
            img: src2,
            link: "https://digitalagencypark.com/"
        },
        {
            id: 1,
            title: "E-commerce",
            des: "dec",
            img: src3,
            link: "https://www.sihmbd.com/"
        },
    ]
    return (
        <section className=" py-32">
        <div className="container mx-auto text-center">
          
             
             <div className="px-32">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {srData.map((sr, index) => (
                 
                 <Link
                 to={sr.link}
                 target='_blank'
                 className="flex bg-white flex-col border p-5 rounded-3xl hover:border-primary  scroll-smooth gap-4 md:gap-6 sm:px-4 lg:px-8  hover:scale-105 duration-300 ease-in-out">
                      
                 <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                     <div className="">
                       <img
                         src={sr.img}
                         loading="lazy"
                         alt=" by Radu Florin"
                         className="w-full h-full object-cover rounded-md object-center"
                       />
                     </div>
  
                     <div>
                       <div className="text-blue-500 text-sm md:text-base font-bold text-center sm:text-left">
                        
                       </div>
                       <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                         {sr.subTitle}
                       </p>
                     </div>
                   </div>
                   <div className="text-gray-700 font-semibold text-center">
                   {sr.title}
                   </div>
  
                  
                 </Link>
                
                ))}
              </div>
             </div>
          
        </div>
      </section>
    );
};

export default Business;