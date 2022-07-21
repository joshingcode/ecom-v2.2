import React from 'react';
import {Outlet} from 'react-router-dom';
import '../App.css';
import Footer from './Footer';

import Menu from './share/Menu';

function Layout() {
  return (
    <>
   
    {/* <Header/> */}
    <Menu/>
    <Outlet/>
    <Footer/>
   
    </>
  )
}

export default Layout