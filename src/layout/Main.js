import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared-components/footer/Footer';
import Header from '../components/shared-components/header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;