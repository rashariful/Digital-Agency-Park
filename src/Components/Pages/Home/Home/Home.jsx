import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import OurClient from '../OurClient/OurClient';
import Portfolio from '../Portfolio/Portfolio';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';
import Banner from './Banner/Banner';
import Slider from './Slider/Slider';
import Sdlc from './Sdlc/Sdlc';
import Service from "./service/Service"
import OurSolution from './OurSolution/OurSolution';
import TestingSlider from './Testing/TestingSlider';

const Home = () => {
    return (
        <div>
           {/* <section> <Banner/> </section> */}
           <section> <Slider/> </section>
           <section> <Service/> </section>
           {/* <section> <Sdlc/> </section> */}
           <section> <OurSolution/> </section>
           {/* <section> <Portfolio/> </section> */}
           <section> <Team/> </section>
           <section> <TestingSlider/> </section>
           {/* <section> <Testimonials/> </section> */}
           {/* <section> <Newsletter/> </section> */}
           <section> <OurClient/> </section>
        </div>
    );
};

export default Home;