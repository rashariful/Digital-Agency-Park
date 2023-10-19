import React from "react";
import { Link } from "react-router-dom";
import Team from "../Team/Team";
import bg from "../../../../Assets/bg.jpg"

// import "../../../../styles/AboutCompStyles.css";
// import {car,carout,carshop,worker} from '../../../../assets/AboutCompImages';
// absolute top-96 left-0 right-0
const About = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          src={bg}
          alt="Top "
          className="w-full object-cover h-96"
        />
        <h3 className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl ">
          About US
        </h3>
        <div className="text-sm ml-32 absolute text-white bottom-5 breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl  px-4 md:px-8">
          <div className=" w-1/2 mx-auto ">
            <div className=""> <di className=" mx-auto overflow-hidden rounded-lg bg-rose-100 shadow-lg md:h-auto ">
                <img
                  src="https://legaldesk.com/wp-content/uploads/2016/02/Software-Development-Contract.jpg "
                  loading="lazy"
                  alt=" by Martin Sanchez"
                  className="h-full w-full mx-auto object-cover object-center "
                />
              </di>
            </div>

            <div className="md:pt-8">
              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md: md:text-left">
                Digital Agency Park: Revolutionizing
              </h1>
              <div>
                <p className="text-center text-lg font-bold md:text-left">
                  Introduction:
                </p>

                <p className=" text-gray-500 sm:text-lg md:mb-8">
                  At Digital Agency Park, we are more than just a software
                  company; we are your trusted partner in digital innovation.
                  Our journey began with a vision to reshape the digital
                  landscape, and today, we stand at the forefront of technology,
                  delivering cutting-edge solutions that drive businesses
                  forward.
                </p>
              </div>
              <div>
                <p className="text-center text-lg font-bold md:text-left">
                  Our Story:
                </p>

                <p className=" text-gray-500 sm:text-lg md:mb-8">
                  Established in 2020, Digital Agency Park was born out of a
                  passion for innovation and a desire to make a lasting impact
                  in the digital world. Over the years, we have evolved into a
                  dynamic team of creative minds, tech enthusiasts, and problem
                  solvers. Our commitment to excellence and a thirst for pushing
                  the boundaries of what's possible has become the driving force
                  behind every project we undertake.
                </p>
              </div>
              <p className="text-center text-lg font-bold md:text-left">
                Mission Statement:
              </p>

              <p className=" text-gray-500 sm:text-lg md:mb-8">
                Our mission is simple yet profound - to empower businesses with
                technology that transforms their visions into reality. We
                believe in the power of innovation to drive growth, enhance
                efficiency, and create memorable user experiences. Through our
                expertise, dedication, and collaborative approach, we strive to
                be the catalyst that propels your business to new heights.
              </p>
              {/* <div>
             <p className="text-center text-lg font-bold md:text-left">
                Vision:
              </p>

              <p className=" text-gray-500 sm:text-lg md:mb-8">
                Digital Agency Park envisions a future where transportation in
                Dhaka is no longer a challenge, but a hassle-free experience.
                The company aims to create a culture of accessibility and
                convenience by offering a wide range of vehicles for various
                needs and budgets. Through continuous innovation and
                technological advancements, Digital Agency Park seeks to become
                the preferred choice for locals and tourists alike, ensuring
                seamless mobility solutions throughout the city.
              </p>
             </div> */}
              <p className="text-center mb-5 text-lg font-bold md:text-left">
                What Sets Us Apart:
              </p>

              <div className="flex flex-col gap-4">
              <p>
                <span className="text-md font-semibold text-gray-500">1.</span>
                <span className="ml-2 font-bold text-black">Expertise: </span >
                 
                <span className="text-gray-500 ml-2">
                Our team comprises seasoned professionals who excel in their
                respective domains. From software development to digital
                marketing, we bring a wealth of knowledge and experience to the
                table.
                </span>
              </p>

              <p>
                <span className="text-md font-semibold text-gray-500">2.</span>
                <span className="ml-2 font-bold text-black">Innovation:</span>
                <span className="text-gray-500 ml-2">
                  We thrive on innovation. We don't just follow industry trends;
                  we set them. Our solutions are built with an eye on the
                  future, ensuring that your business remains competitive in the
                  ever-evolving digital landscape.
                </span>
              </p>

              <p>
                <span className="text-md font-semibold text-gray-500">3.</span>
                <span className="ml-2 font-bold text-black">
                  Client-Centric Approach:
                </span>
                <span className="text-gray-500 ml-2">
                  Your success is our success. We listen, understand, and tailor
                  our solutions to meet your unique needs. Your goals become our
                  goals, and we work tirelessly to achieve them.
                </span>
              </p>

              <p>
                <span className="text-md font-semibold text-gray-500">4.</span>
                <span className="ml-2 font-bold text-black">Quality:</span>
                <span className="text-gray-500 ml-2">
                  We have an unwavering commitment to delivering top-notch
                  quality. Our rigorous testing and quality assurance processes
                  ensure that every project we deliver is robust, reliable, and
                  ready to perform.
                </span>
              </p>

              <p>
                <span className="text-md font-semibold text-gray-500">5.</span>
                <span className="ml-2 font-bold text-black">Transparency:</span>
                <span className="text-gray-500 ml-2">
                  We believe in open and transparent communication. Throughout
                  the project lifecycle, you'll have full visibility into our
                  progress, ensuring that there are no surprises along the way.
                </span>
              </p>
              </div>

            

              <p className="text-center my-8 text-lg font-bold md:text-left">
                Our Services:
              </p>

             <div className="flex flex-col gap-4">
             <div>
                <p>
                  <span className="text-md font-semibold text-gray-500">
                    1.
                  </span>
                  <span className="ml-2 font-bold text-black">
                    Software Development:
                  </span>
                  <span className="text-gray-500 ml-2">
                    From custom web applications to mobile apps and everything
                    in between, we build software solutions that drive your
                    business forward.
                  </span>
                </p>
              </div>
              
              <div>
                <p>
                  <span className="text-md font-semibold text-gray-500">
                    2.
                  </span>
                  <span className="ml-2 font-bold text-black">
                    Digital Marketing:
                  </span>
                  <span className="text-gray-500 ml-2">
                    Our digital marketing experts harness the power of the
                    online world to boost your brand's visibility and
                    engagement.
                  </span>
                </p>
              </div>

              <div>
                <p>
                  <span className="text-md font-semibold text-gray-500">
                    3.
                  </span>
                  <span className="ml-2 font-bold text-black">
                    Web Design and Development:
                  </span>
                  <span className="text-gray-500 ml-2">
                    We create stunning, user-friendly websites that leave a
                    lasting impression and deliver exceptional user experiences.
                  </span>
                </p>
              </div>

              <div>
                <p>
                  <span className="text-md font-semibold text-gray-500">
                    4.
                  </span>
                  <span className="ml-2 font-bold text-black">
                    E-commerce Solutions:
                  </span>
                  <span className="text-gray-500 ml-2">
                    Take your online business to the next level with our
                    e-commerce expertise, from development to optimization.
                  </span>
                </p>
              </div>
              
              <div>
                <p>
                  <span className="text-md font-semibold text-gray-500">
                    5.
                  </span>
                  <span className="ml-2 font-bold text-black">Consulting</span>
                  <span className="text-gray-500 ml-2">
                    Our consulting services provide you with strategic insights
                    and guidance to make informed digital decisions.
                  </span>
                </p>
              </div>
             </div>

              <br />
              <div>
                <p className="text-center my-8 text-lg font-bold md:text-left">
                  Join Us on the Digital Journey:
                </p>

                <p className=" text-gray-500 sm:text-lg md:mb-8">
                  We invite you to join us on a digital journey where
                  possibilities are limitless. Whether you're a startup with a
                  groundbreaking idea or an established enterprise seeking
                  digital transformation, Digital Agency Park is here to turn
                  your aspirations into achievements. Let's innovate,
                  collaborate, and create success together. Welcome to Digital
                  Agency Park - Where Innovation Meets Excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Team /> */}
    </div>
  );
};

export default About;
