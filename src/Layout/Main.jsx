import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navar/Navbar';
import Home from '../Components/Home/Home';

const Main = () => {
    return (
        <div> <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;