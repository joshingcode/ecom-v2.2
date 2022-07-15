import React from 'react'
import {Link} from 'react-router-dom';

function Homepage() {
    const artBoard1= 'https://i.postimg.cc/0jqmV2Gc/default-monochrome-white.png'
    const artBoard2='https://i.postimg.cc/hG6V70XF/default-monochrome-black.png'
  return (
    <>
    <div id="banner">
				<section className="inner">
                <div className="fade-in-image">
                <img src={artBoard1} alt='home-logo' width="75%"/>
                </div>
					
				</section>
			</div>

    <div id="wrapper">
    {/* <!-- One --> */}
             <div id="one" className="wrapper alt spotlight style2">    
                <figure className="inner" > 
                    <Link to="#" className="image"><img src={artBoard2} alt="about-logo" className="aboutLogo" /></Link>
                        <section className="content">
                            <h2 className="major">About the HOME brand.</h2>
                            <p>Based in Colorado, HOME Loungewear believes in keeping things simple. Selling wardrobe staples at a fair price while providing progressive designs. With a business model that allows premium quality products to you at a fraction of the cost. Style is always evolving, and so are we. </p>
                        <Link to="contact" className="special">Learn more</Link>
                    {/* <!-- to contact page --> */}
                        </section>
                </figure>
            </div>  
        
         {/* <!-- Two --> */}
			<div id="two" className="wrapper alt spotlight style2 inner">
            <figure className="inner">
					<Link to="#" className="image"><img src="https://cdn.shopify.com/s/files/1/1300/6871/products/Raw-Edge-Flannel-Black-2_1296x.jpg?v=1645002228" alt="homepage-top" /></Link>
				        <section className="content">
							<h2 className="major">Tops</h2>
								<p>New Arrival tops are made with the highest quality of SUPIMA cotton. Same quality with a lower cost than traditional retailers.</p>
								<Link to="products" className="special">Products</Link>
						    </section>
            </figure>
            </div>
            {/* <!-- Three --> */}
            <div id="three" className="wrapper spotlight style3">
            
            <figure className="inner">
            <Link to="#" className="image"><img src="https://cdn.shopify.com/s/files/1/1300/6871/products/Every-Day-Sweatpants-Black-6_f1d2c8a2-a0f5-462a-ac09-0cdcf291ed7b_1296x.jpg?v=1628763197" alt="homepage--bottoms" /></Link>
                <section className="content">
            <h2 className="major">Bottoms</h2>
            <p>Made with comfort in mind. our team of industry vets constantly designing new silhouettes and experimenting with fabrics to stay at the forefront of fashion.</p>
            <Link to="products" className="special">Products</Link>
                </section>
            </figure>
            </div>
    </div>
    </>
  )
}

export default Homepage