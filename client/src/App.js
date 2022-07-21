import React from 'react';
import './App.css';
// import Header from './components/Header';
import Homepage from './components/pages/Homepage';
import Products from './components/pages/Products';
import ContactPage from './components/pages/ContactPage';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
    var script = document.createElement('script');
      script.src = 'main.js';
      script.type = 'text/js';
      document.getElementsByTagName('head')[0].appendChild(script);
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='contact' element={<ContactPage/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
      
     
    </>
  );
}

export default App;
