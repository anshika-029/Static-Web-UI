import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Main from '../components/Main'
// import Contact from './Contact'

function home() {
  return (
    <div>
      <Navbar/>
      <Main/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default home
