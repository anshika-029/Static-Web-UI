import React from 'react'
import '../Styles/Carrers.css'

function Carrers() {
  return (
    <div>
      <div className='headbg'>
        <div className='head1'>Carrers</div>
        <div className='head2'>Want to work with us.</div>
        <div className='head2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, repudiandae.</div>
      </div>
      <div className='flexwrap'>
        <div className='gridimg carrer'></div>

        <div className='ccontainer'>
          <div className='contacth3'> Heading </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nihil, corrupti numquam maxime nesciunt a amet!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusantium, doloribus laboriosam,  temporibus, necessitatibus itaque? Dolore optio, ullam quibusdam sapiente  eos earum dignissimos sint non.</p>
          <button className='but'> Join Us </button>
        </div>
      </div>


      <div className='carrercontainer'>
        <div className='carrercards'>
          <div className='carrer-h-row'>
            <div className='c1'>Digital Marketing Manager</div><div><a href='/digitalmarketingmanager'><button className='but'>Read More</button></a></div>
          </div>
          <div className='c1h'>Remote - UK - Full Time</div>
        </div>
        
        <div className='carrercards'>
          <div className='carrer-h-row'>
            <div className='c1'>Social Media Manager</div><div><a href='/socialmediamanager'><button className='but'>Read More</button></a></div>
          </div>
          <div className='c1h'>Remote - UK - Full Time</div>
        </div>

        <div className='carrercards'>
          <div className='carrer-h-row'>
            <div className='c1'>Email Marketing Manager</div><div><a href='/emailmarketingmanager'><button className='but'>Read More</button></a></div>
          </div>
          <div className='c1h'>Remote - UK - Full Time</div>
        </div>

        <div className='carrercards'>
          <div className='carrer-h-row'>
            <div className='c1'>SEO Specialist</div><div><a href='/seo'><button className='but'>Read More</button></a></div>
          </div>
          <div className='c1h'>Remote - UK - Full Time</div>
        </div>

        <div className='carrercards'>
          <div className='carrer-h-row'>
            <div className='c1'>Digital Analytics Specialist</div><div><a href='/digitalanalytics'><button className='but'>Read More</button></a></div>
          </div>
          <div className='c1h'>Remote - UK - Full Time</div>
        </div>

        <div className='carrercards'>
          <div className='carrer-h-row'>
            <div className='c1'>Content Marketer</div><div><a href='/contentmaker'><button className='but'>Read More</button></a></div>
          </div>
          <div className='c1h'>Remote - UK - Full Time</div>
        </div>

        <div className='carrercards'>
          <div className='carrer-h-row'>
            <div className='c1'>Logo Designer</div><div><a href='/logodesigner'><button className='but'>Read More</button></a></div>
          </div>
          <div className='c1h'>Remote - UK - Full Time</div>
        </div>

        <div className='carrercards'>
          <div className='carrer-h-row'>
            <div className='c1'>CRM Manager</div><div><a href='/crm'><button className='but'>Read More</button></a></div>
          </div>
          <div className='c1h'>Remote - UK - Full Time</div>
        </div>

      </div>
    </div>
  )
}

export default Carrers
