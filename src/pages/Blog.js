import React from 'react'
import '../Styles/Blog.css'

function Blog() {
  return (
    <div>
      <div className='headbg'>
        <div className='head1'>Heading</div>
        <div className='head2'>Lorem ipsum dolor Lorem, ipsum.</div>
        <div className='head2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tempore aspernatur?</div>
      </div>
      <div className='flexwrap'>
        <div className='gridimg blog'>
        {/* <img src='https://media.istockphoto.com/id/1351993340/photo/asian-business-person-responding-at-the-customer-center.jpg?s=612x612&w=0&k=20&c=zrgcIgJo129KqYSZ3IhwGP3ExwGgYHbXu0t1ZID5B_I='></img> */}
        </div>

        <div className='ccontainer'>
          <div className='contacth3'> Heading </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum alias fugit repellendus repudiandae, maiores in ?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, inventore praesentium odit aperiam, culpa atque veniam quod id tenetur voluptates rem deleniti labore sapiente, magni laudantium provident autem unde cumque facere pariatur quos facilis distinctio nostrum corrupti!.</p>
          <button className='but'> Join Us </button>
        </div>
      </div>


      <div className='blogcontainer'> 
          <a><div className='blogcards c1'><div className='c1h'>Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.</div> <button className='but'>Read More</button></div></a>
          <a><div className='blogcards c2'><div className='c2h'>Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.</div> <button className='but'>Read More</button></div></a>
          <a><div className='blogcards c3'><div className='c3h'>Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.</div> <button className='but'>Read More</button></div></a>
          <a><div className='blogcards c4'><div className='c4h'>Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.</div> <button className='but'>Read More</button></div></a>
          <a><div className='blogcards c5'><div className='c5h'>Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.</div> <button className='but'>Read More</button></div></a>
          <a><div className='blogcards c6'><div className='c6h'>Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.</div> <button className='but'>Read More</button></div></a>
        </div>
    </div>
  )
}

export default Blog
