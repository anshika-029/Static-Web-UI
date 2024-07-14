import React from 'react'
import '../Styles/About.css'

function About() {
  return (
    <div>
      <div className='headbg'>
        <div className='head1'>Get in Touch</div>
        <div className='head2'>Have any questions?</div>
        <div className='head2'>Reach out to us from our contact form and we will get back to you shortly.</div>
      </div>
      <div className='flexwrap'>
        <div className='gridimg'>
        {/* <img src='https://media.istockphoto.com/id/1351993340/photo/asian-business-person-responding-at-the-customer-center.jpg?s=612x612&w=0&k=20&c=zrgcIgJo129KqYSZ3IhwGP3ExwGgYHbXu0t1ZID5B_I='></img> */}
        </div>

        <div className='ccontainer'>
          <div className='contacth3'> Let's Talk </div>
          <p>Let's make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business.</p>
          <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <button className='but'> Join Us </button>
        </div>
      </div>
    </div>
  )
}

export default About
