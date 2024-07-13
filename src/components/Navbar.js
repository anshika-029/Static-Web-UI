import React from 'react'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <div>
       <header>
        <div className="logo"><img width="180" height="50"
                src="https://biznivate.com/biznivate/assets/biznivate/biznivate.svg" alt="logo"/></div>

        <nav>
            <ul>
                <li> Home </li>
                <li> <a href='/service'>Services</a> </li>
                <li> Carrers </li>
                <li> About Us </li>
                <li> Blogs </li>
                <a href='/contact'> <button className='but'> Contact </button></a>
            </ul>
        </nav>
    </header>
    
    </div>
  )
}

export default Navbar
