import React from 'react'
import '../Styles/Contact.css'

function Contact() {
  return (
    <div>
      <div className='headbg'>
        <div className='head1'>Get in Touch</div>
        <div className='head2'>Have any questions?</div>
        <div className='head2'>Reach out to us from our contact form and we will get back to you shortly.</div>
      </div>
      <div className='flexwrap'>
        <div className='gridimg'></div>

        <div className='ccontainer'>
          <div className='contacth3'> Let's Talk </div>
          <p>Let's make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business.</p>
          <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <button className='but'> Join Us </button>
        </div>
      </div>


      <div className='flex-form'>
        <form className='cform'>
          <input type='text' placeholder=' First name* ' required />
          <input type='text' placeholder=' Last name ' />
          <div>
            <input type='text' placeholder=' Email* ' required />
            <select name='department' id='department' required>
              <option selected disabled > Select a department* </option>
              <option > Sales </option>
              <option > Marketing </option>
              <option > Customer support </option>
              <option > Financial Management </option>
            </select>
            <div>
              <textarea name='comment' rows={5} cols={60}> Message </textarea>
            </div>
          </div>
          <input type='checkbox'/>
          <label> I agee with <a href='/termsconditions'>Terms & Conditions</a>. </label> <br></br>
          <button className='but'> Send Message</button>
          <div className='required'> * These fields are required. </div>
        </form>

        <section className='ccontactdetails'>

          <div> <i class="fa-solid fa-location-dot"></i>
            Address
          </div>
          <span>
            Moonshine St. 14/05 Light City, London, United Kingdom
          </span>

          <div> <i class="fa-solid fa-phone"></i>
            Phone
          </div>
          <span>
          00 (123) 456 78 90
          00 (987) 654 32 10
          </span>

          <div> <i class="fa-solid fa-envelope"></i>
          E-mail
          </div>
          <span>
          sandbox@email.com
          help@sandbox.com
          </span>
          
        </section>


      </div>


    </div>
  )
}

export default Contact
