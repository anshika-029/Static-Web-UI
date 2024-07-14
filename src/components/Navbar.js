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
                <li> <a href='/'>Home</a> </li>
                <li> <a href='/service'>Services</a> </li>
                <li> <a href='/carrers'>Carrers</a> </li>
                <li> <a href='/about'>About Us</a> </li>
                <li> <a href='/blog'>Blogs</a> </li>
                <a href='/contact'><button className='but'>Contact </button></a>
            </ul>
        </nav>
    </header>
    
    </div>
  )
}

export default Navbar
