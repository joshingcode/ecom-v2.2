import React from 'react'
import {BrowserRouter as  Link} from 'react-router-dom'

function Header() {
  return (
    <div>
        <header id="header" className="alt">
        <h1><Link to="/">HOME.lw</Link></h1>
            <nav>
             <Link to='#menu'>Menu</Link>
                <nav id="menu">
                    <section className="inner">
                        <h3>Menu</h3>
						<ul className="links">
							<li><Link to="index.html">Home</Link></li>
							<li><Link to="products.html">Products</Link></li>
							<li><Link to="contact.html">Contact Us</Link></li>
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
					<Link to="#" className="close">Close</Link>
                    </section>
                    </nav>
                </nav>
            </header>
        
    </div>
  )
}

export default Header