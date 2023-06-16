import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import OurClient from '../OurClient/OurClient';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
           <section> <Banner/> </section>
           <section> <Services/> </section>
           <section> <Team/> </section>
           <section> <OurClient/> </section>
           <section> <Newsletter/> </section>
           <section> <Testimonials/> </section>
        </div>
    );
};

export default Home;