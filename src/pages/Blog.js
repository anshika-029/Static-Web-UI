import React from 'react'
import '../Styles/Blog.css'

function Blog() {
  return (
    <div>
      <div className='headbg terms'>
        <div className='head1'>Blogs</div>
        <div className='head2'>Lorem ipsum dolor Lorem, ipsum.</div>
        <div className='head2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tempore aspernatur?</div>
      </div>

      {/* <div className='flexwrap'>
        <div className='gridimg blog'></div>
        <div className='ccontainer'>
          <div className='contacth3'> Heading </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum alias fugit repellendus repudiandae, maiores in ?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, inventore praesentium odit aperiam, culpa atque veniam quod id tenetur voluptates rem deleniti labore sapiente, magni laudantium provident autem unde cumque facere pariatur quos facilis distinctio nostrum corrupti!.</p>
          <button className='but'> Join Us </button>
        </div>
      </div> */}


      <div className='blogcontainer'>
        <a><div className='blogcards b1'><div className='b1h'><div className='pbdate'>Admin | August 15, 2023</div>Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.</div> <button className='but'>Read More</button></div></a>
        <a><div className='blogcards b2'><div className='b2h'><div className='pbdate'>Admin | August 15, 2023</div>Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.</div> <button className='but'>Read More</button></div></a>
        <a><div className='blogcards b3'><div className='b3h'><div className='pbdate'>Admin | August 15, 2023</div>Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.</div> <button className='but'>Read More</button></div></a>
        <a><div className='blogcards b4'><div className='b4h'><div className='pbdate'>Admin | August 15, 2023</div>Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.</div> <button className='but'>Read More</button></div></a>
        <a><div className='blogcards b5'><div className='b5h'><div className='pbdate'>Admin | August 15, 2023</div>Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.</div> <button className='but'>Read More</button></div></a>
        <a><div className='blogcards b6'><div className='b6h'><div className='pbdate'>Admin | August 15, 2023</div>Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing.</div> <button className='but'>Read More</button></div></a>
      </div>
    </div>
  )
}

export default Blog
