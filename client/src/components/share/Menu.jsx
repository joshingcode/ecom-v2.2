import React from 'react'
import '../../style.css'
import {Link} from 'react-router-dom';
function Menu() {
  return (
    <>
    
    <section className="top-nav">
    <div>
        <Link to='/'>
      HOME.lw
      </Link>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div hidden className='menu-button'></div>
  </label>
    <ul className="menu">
    <li><Link to="/">Home</Link></li>
    <li><Link to="products">Products</Link></li>
    <li><Link to="contact">Contact Us</Link></li>
    <li>
        <Link to="#">
            Log In
        </Link>
        </li>
    <li>
        <Link to="#">
            Sign Up
        </Link>
        </li>
    </ul>
    
    </section>
    
    </>
  )
}

export default Menu