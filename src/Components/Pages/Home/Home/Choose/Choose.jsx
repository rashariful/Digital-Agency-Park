import ProgressBar from "./ProgressBar";
import { HiArrowNarrowRight } from "react-icons/hi";
// eslint-disable-next-line no-unused-vars
import style from "./style.css";

const Choose = () => {
  return (
    <section className=" bg-white">
      <div className="container mx-auto px-8 py-32 ">
        {/* <div className="mb-10 md:mb-16">
            <h2 className="mb-4 capitalize text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
               what we do
            </h2>
  
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              We Provide Experts Create Great Value For Visa Categories.
            </p>
          </div> */}

        <div className=" flex gap-10 items-center">
          <div>
            <h3 className="text-primary font-semibold">WHY CHOOSE US</h3>
            <p className="text-slate-700 text-4xl leading-normal mb-8">
              Build or extend your Software_ development team
            </p>
            <p className="text-slate-500 leading-normal mb-8">
              We support companies that need agile teams of the best engineers.
              Build or extend your software development team with ease.
            </p>
            <div>
              <div className="relative pt-1">
                <div className="flex flex-col space-y-4">
                  <ProgressBar
                    initialValue={20}
                    increment={10}
                    endValue={80}
                    label="E-commerce"
                  />
                  <ProgressBar
                    initialValue={40}
                    increment={10}
                    endValue={90}
                    label="Business"
                  />
                  <ProgressBar
                    initialValue={10}
                    increment={10}
                    endValue={50}
                    label="Resturent"
                  />
                </div>
              </div>
            </div>
            <p className="text-slate-500 leading-normal mt-8 w-96">
              Scale your software operations through a custom engineering team.
              Meet the demand of your company’s operations with a
              high-performing nearshore team skilled in the technologies you
              need.

              
            </p>
            <div className="flex gap-3 items-center mt-2">

            <p className="text-primary hover:underline duration-300">Read more </p>
            <p className="text-primary"> <HiArrowNarrowRight size={20}/> </p>
            </div>
          </div>
          <div>
            <img
              className="cartoon"
              src="https://tripzia.cymolthemes.com/app-landing/wp-content/uploads/sites/6/2021/02/single-img1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
