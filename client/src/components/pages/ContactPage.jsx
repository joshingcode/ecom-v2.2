import React from 'react'
import Form from '../share/Form'

function ContactPage() {
  return (
    <>
       <main id="wrapper">
                    <header className="contact-header">
                    <h2 className="major">Get in touch</h2>
                        </header>

                    {/* <!-- Content --> */}
                        <div className="wrapper">
                            <article className="inner">
                                {/* <h2 className="major">Get in touch</h2> */}
                                <p>Any questions about products or custom orders please submit a form below. Our team will contact you within 24-48 business hours. <br/>Thank You for Shopping HOME loungewear.</p>
                                <Form/>
                                {/* <form method="post" action="#">
                                    <div className="fields">
                                        <figure className="field">
                                            <label htmlFor="name" >Name</label>
                                            <input type="text" name="name" id="name" />
                                        </figure>
                                        <figure className="field">
                                            <label htmlFor="tel">Phone Number</label>
                                            <input type="tel" name="tel" id="tel" />
                                        </figure>
                                        <figure className="field">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" />
                                        </figure>
                                        <figure className="field">
                                            <label htmlFor="message">Message</label>
                                            <textarea name="message" id="message" rows="4"></textarea>
                                        </figure>
                                    </div>
                                    <ul className="actions">
                                        <li><input type="submit" value="Send Message" /></li>
                                    </ul>
                                </form> */}
                        
                            </article>
                        </div>

                </main>
    </>
  )
}

export default ContactPage