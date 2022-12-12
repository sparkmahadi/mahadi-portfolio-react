import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Common/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;