import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';

const Layout = () => {


    const location  = useLocation();
    const showSearchBar = location.pathname === '/' || location.pathname === '/Products';
    return (
       <>
       <Header showSearch={showSearchBar}/>
       </>
    );
};

export default Layout;