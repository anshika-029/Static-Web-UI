import React from 'react'
import '../Styles/BlogCard.css'

// Reusable blog card component
function BlogCard({ title, description, date, author, image, link, onReadMore }) {
  return (
    <div className='blog-card' style={{ backgroundImage: `url(${image})` }}>
      <div className='blog-overlay'>
        <div className='blog-date-tag'>
          {author} | {date}
        </div>
        <h3 className='blog-title'>{title}</h3>
        <p className='blog-description'>{description}</p>
        <button className='blog-read-more' onClick={() => onReadMore ? onReadMore(link) : window.open(link)}>
          Read More
        </button>
      </div>
    </div>
  )
}

export default BlogCard
