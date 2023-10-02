/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
// import "../../../../styles/ContactUsStyles.css";
import { Link } from "react-router-dom";
// import COLORS from "../../../../assets/COLORS/COLORS";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaMapMarkedAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white">
      <div className=" -z-50">
        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/14/02/55/path-1822448_1280.jpg"
            alt="Top "
            className="w-full object-cover h-96"
          />
          <h3 className="absolute font-myFont inset-0 flex items-center justify-center text-white font-bold text-4xl ">
            Contact us
          </h3>
          <div className="text-sm ml-32 absolute text-white bottom-5 breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        {/* contact info here */}
        <div className="contact-bg py-32">
            <div className="container mx-auto flex">
              <div className="left-con">
                <h2 className="text-4xl font-bold mb-10 leading-normal text-slate-700">
                  Need additional information?
                </h2>
                <p className="mb-10 w-1/2 text-gray-600">
                  A multifaceted professional skilled in multiple fields of
                  research, development as well as a learning specialist. Over 15
                  years of experience.
                </p>

                <span className="flex gap-3 mb-3">
                  <FaPhoneAlt size={19} color="#0067ED" />
                  <p className=" text-gray-600"> +8801850-273117</p>
                </span>
                <span className="flex gap-3 mb-3">
                  <FaEnvelope size={19} color="#0067ED" />
                  <p className=" text-gray-600">digitalagencypark@gmail.com</p>
                </span>
                <span className="flex gap-3 mb-3">
                  <FaMapMarkedAlt size={19} color="#0067ED" />
                  <p className=" text-gray-600">
                    Road # 03, House # 03, Nikunja 02, <br />{" "}
                    <span>Dhaka Bangladesh 1229</span>{" "}
                  </p>
                </span>
              </div>

              <div className="right-con">
                <form>
                  <label>
                    Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="border w-full p-2 border-slate-400 rounded-md outline-primary transition duration-75"
                    placeholder='EG: "Sam OJeyinka"'
                  />
                  <br />
                  <br />

                  <label>
                    Email <span className="text-rose-600">*</span>
                  </label>
                  <input
                    className="border w-full p-2 border-slate-400 rounded-md outline-primary transition duration-75"
                    type="email"
                    placeholder="youremail@example.com"
                  />
                  <br />
                  <br />
                  <label>
                    Message <span className="text-rose-600">*</span>
                  </label>

                  <textarea
                    className="border w-full p-2 border-slate-400 rounded-md outline-primary transition duration-75"
                    placeholder="Write here.."
                  ></textarea>
                  <button className="btn mt-5 text-slate-50 bg-primary border-none w-full hover:bg-[#0067ede6]">
                    <FaEnvelopeOpenText className="mr-5" /> Send message
                  </button>
                  {/* <PrimaryButton className="w-full bg-[#FF4C30]">
                <FaEnvelopeOpenText className="mr-5" /> Send message
                </PrimaryButton> */}
                </form>
              </div>
            </div>
        </div>
        {/* google map showing here */}
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8494274803556!2d90.4017109759672!3d23.859479984578797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5296cd5b469%3A0xd039083f8f190b62!2sDigital%20Agency%20Park!5e0!3m2!1sen!2sbd!4v1687232301111!5m2!1sen!2sbd"
            style={{ border: 0, height: "350px" }}
            className="w-full h-full"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
