import React from "react";
import Newsletter from "../Newsletter/Newsletter";
import OurClient from "../OurClient/OurClient";
import Portfolio from "../Portfolio/Portfolio";
import Team from "../Team/Team";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";
import Slider from "./Slider/Slider";
import Sdlc from "./Sdlc/Sdlc";
import Service from "./service/Service";
import OurSolution from "./OurSolution/OurSolution";
import TestingSlider from "./Testing/TestingSlider";
import Faq from "./Faq/Faq";
import Choose from "./Choose/Choose";
import WorkingWay from "./WorkingWay/WorkingWay";
import Number from "./Number/Number";
// import MessengerCustomerChat from "react-messenger-customer-chat";

const Home = () => {
  return (
    <div className="">  
        <Slider />
        <Service />
        <OurSolution />
        <Team />
        <OurClient />
        <WorkingWay />
        <Faq />
        <Choose />
        <Number />
        <TestingSlider />
      {/* <MessengerCustomerChat pageId="106055157950858" appId="199380903116422" /> */}
    </div>
  );
};

export default Home;
