import React from 'react';
import {Outlet} from 'react-router-dom';
import '../App.css';
import Footer from './Footer';
import{HelmetProvider,Helmet} from 'react-helmet-async'
import Menu from './share/Menu';

function Layout() {
  return (
    <>
    <HelmetProvider>
    {/* <Header/> */}
    <Menu/>
    <Outlet/>
    <Footer/>
    <Helmet>
        <script type='text/js' src='./main.js'></script>
        <script type='text/js' src='./jquery.min.js'></script>
        <script type='text/js' src='./breakpoints.min.js'></script>
        <script type='text/js' src='./browser.min.js'></script>
        <script type='text/js' src='./jquery.min.js'></script>
        <script type='text/js' src='./util.js'></script>
    </Helmet>
    </HelmetProvider>
    </>
  )
}

export default Layout