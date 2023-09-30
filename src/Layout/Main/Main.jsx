import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Pages/Footer/Footer';
import Header from '../../Components/Pages/Header/Header';
import Navbar from '../../Components/Pages/Header/Navbar';
import GoToTopButton from '../../Components/Pages/GoToTopButton/GoToTopButton';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <GoToTopButton/>
        </div>
    );
};

export default Main;