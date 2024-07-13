import React from 'react'
import '../Styles/Footer.css'


function Footer() {
  return (
    <div>

<div className="seperation"></div>

      <footer>
        <div className='foot'>
<div>
    <ul>
        <li>
            <div className="logo"><img width="180" height="50"
                    src="https://biznivate.com/biznivate/assets/biznivate/biznivate.svg" alt="logo"/></div>
        </li>
        <br/>
        <li className="fh">Biznivate Solutions (OPC) Pvt. Ltd.</li>
        <li>HD-224, 10th floor, RMZ Latitude Commercial,</li>
        <li>Bellary Road, Hebbal, BLR, KA 560024, IN</li>
        <br/>
        {/* <li>© 2023 Biznivate Solutions.</li> */}
        <li> <a href='#' className='icon'><i class="fa-brands fa-facebook"></i></a>
            <a href='#' className='icon'><i class="fa-brands fa-instagram"></i></a>
            <a href='#'className='icon'><i class="fa-brands fa-youtube"></i></a>
            <a href='#' className='icon'><i class="fa-brands fa-twitter"></i></a>
        </li>
    </ul>
</div>

<div>
    <ul>
        <li className="fh">SERVICES</li>
        <br/>
        <li>Consulting</li>
        <li>Human Resources</li>
        <li>Accounting</li>
        <li>Marketing & SEO</li>
    </ul>
</div>

<div>
    <ul>
        <li className="fh">ABOUT</li>
        <br/>
        <li>About us</li>
        <li>Privacy Policy</li>
        <li>Our Blog</li>
        <li><a href='/termsConditions'>Terms & Conditions</a></li>
    </ul>
</div>

<div>
    <ul>
        <li className="fh">CONTACT</li>
        <br/>
        <li> <a href='#' className='icon'><i class="fa-solid fa-phone"></i></a> +1234 567 8900 </li>
        <li> <a href='#' className='icon'><i class="fa-solid fa-envelope"></i></a> consulting@biznivate.com </li>
        
    </ul>
</div>
</div>

<hr className='fhr'></hr>
<div className='copyright'>
    Copyright © 2023 Biznivate Solutions. All rights Reserved.
</div>

</footer>
    </div>
  )
}

export default Footer
