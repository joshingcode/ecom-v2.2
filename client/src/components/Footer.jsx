import React from 'react'

function Footer() {
  return (
  <>
    <footer id="footer">
    <figure className="inner">
         <ul className="contact">
            <li className="icon solid fa-home">
                HOME lougewear<br />
                427 Cohort Ln Suite #10<br />
                Denver, CO 80201
                (303) 298-1234
            </li>
            <li className="icon solid fa-phone">(303) 298-1234</li>
            <li className="icon solid fa-envelope"><a href="#">HOME@loungewear.com</a></li>
                <li className="icon brands fa-twitter"><a href="#">twitter.com/HOMEloungewear
                </a></li>
                <li className="icon brands fa-facebook-f"><a    href="#">facebook.com/HOMEloungewear
                </a></li>
                <li className="icon brands fa-instagram"><a href="#">instagram.com/HOMEloungewear
                </a></li>
            </ul>
            <ul className="copyright">
            <li>&copy; SEASE Holdings,LLC. All rights reserved.</li>
            </ul>
    </figure>
    </footer>
    </>
  )
}

export default Footer