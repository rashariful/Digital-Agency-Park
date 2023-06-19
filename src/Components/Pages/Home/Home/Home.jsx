import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import OurClient from '../OurClient/OurClient';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';
import Banner from './Banner/Banner';
import Slider from './Slider/Slider';
import Sdlc from './Sdlc/Sdlc';

const Home = () => {
    return (
        <div>
           {/* <section> <Banner/> </section> */}
           <section> <Slider/> </section>
           <section> <Sdlc/> </section>
           <section> <Services/> </section>
           <section> <Team/> </section>
           <section> <OurClient/> </section>
           <section> <Newsletter/> </section>
           <section> <Testimonials/> </section>
        </div>
    );
};

export default Home;