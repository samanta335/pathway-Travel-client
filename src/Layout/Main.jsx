import React from 'react';
import Navbar from '../Page/Shared/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Page/Shared/Footer';

const Main = () => {
    const location = useLocation()
    const isLoginSignup = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            {isLoginSignup ||<Navbar></Navbar>}
            <Outlet></Outlet>
            {isLoginSignup ||<Footer></Footer>}
        </div>
    );
};

export default Main;