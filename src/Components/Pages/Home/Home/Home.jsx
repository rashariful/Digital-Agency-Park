import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import OurClient from '../OurClient/OurClient';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';
import Banner from './Banner/Banner';
import Slider from './Slider/Slider';
import Sdlc from './Sdlc/Sdlc';
import Service from "./service/Service"

const Home = () => {
    return (
        <div>
           <section className=''> <Banner/> </section>
           <section className=''> <Slider/> </section>
           <section> <Sdlc/> </section>
           <section> <Service/> </section>
           <section> <Services/> </section>
           <section> <Team/> </section>
           <section> <OurClient/> </section>
           <section> <Newsletter/> </section>
           <section> <Testimonials/> </section>
        </div>
    );
};

export default Home;