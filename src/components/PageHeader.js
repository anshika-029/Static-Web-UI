import React from 'react'
import '../Styles/PageHeader.css'

// Reusable header component for all pages
function PageHeader({ title, subtitle, description }) {
  return (
    <div className='page-header-bg'>
      <div className='page-header-content'>
        <h1 className='page-title'>{title}</h1>
        {subtitle && <h2 className='page-subtitle'>{subtitle}</h2>}
        {description && <p className='page-description'>{description}</p>}
      </div>
    </div>
  )
}

export default PageHeader
