import React from 'react';
import NavBar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layouts;