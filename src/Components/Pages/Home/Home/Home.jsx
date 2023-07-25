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

const Home = () => {
    return (
        <div>
           <section className=''> <Banner/> </section>
           {/* <section className=''> <Slider/> </section> */}
           <section> <Service/> </section>
           <section> <Sdlc/> </section>
           <section> <OurSolution/> </section>
           <section> <Portfolio/> </section>
           <section> <Team/> </section>
           <section> <OurClient/> </section>
           <section> <Testimonials/> </section>
           {/* <section> <Newsletter/> </section> */}
        </div>
    );
};

export default Home;